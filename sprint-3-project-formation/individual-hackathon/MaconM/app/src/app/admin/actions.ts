"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { ResponseStatus } from "@prisma/client";

function revalidateAll() {
  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/item");
  revalidatePath("/admin/themes");
  revalidatePath("/admin/submissions");
}

function requireString(formData: FormData, key: string): string {
  const value = formData.get(key);
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${key} is required.`);
  }
  return value.trim();
}

function requireDate(formData: FormData, key: string): Date {
  const value = requireString(formData, key);
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`${key} is not a valid date.`);
  }
  return date;
}

export async function updateAgendaItem(agendaItemId: string, formData: FormData) {
  await prisma.agendaItem.update({
    where: { id: agendaItemId },
    data: {
      title: requireString(formData, "title"),
      context: requireString(formData, "context"),
      decisionQuestion: requireString(formData, "decisionQuestion"),
      commentOpenAt: requireDate(formData, "commentOpenAt"),
      responseByDate: requireDate(formData, "responseByDate"),
      responseOwnerName: requireString(formData, "responseOwnerName"),
      responseOwnerRole: requireString(formData, "responseOwnerRole"),
    },
  });
  revalidateAll();
  redirect("/admin/item?saved=1");
}

export async function createTheme(agendaItemId: string, formData: FormData) {
  const count = await prisma.theme.count({ where: { agendaItemId } });
  await prisma.theme.create({
    data: {
      agendaItemId,
      title: requireString(formData, "title"),
      description: requireString(formData, "description"),
      position: count,
    },
  });
  revalidateAll();
  redirect("/admin/themes?created=1");
}

export async function updateTheme(themeId: string, formData: FormData) {
  await prisma.theme.update({
    where: { id: themeId },
    data: {
      title: requireString(formData, "title"),
      description: requireString(formData, "description"),
    },
  });
  revalidateAll();
  redirect("/admin/themes?updated=1");
}

export async function deleteTheme(themeId: string) {
  await prisma.theme.delete({ where: { id: themeId } });
  revalidateAll();
  redirect("/admin/themes?deleted=1");
}

export async function assignSubmissionTheme(submissionId: string, formData: FormData) {
  const themeId = formData.get("themeId");
  await prisma.submission.update({
    where: { id: submissionId },
    data: { themeId: typeof themeId === "string" && themeId ? themeId : null },
  });
  revalidateAll();
}

export async function setSubmissionFeatured(submissionId: string, featured: boolean) {
  const submission = await prisma.submission.findUniqueOrThrow({
    where: { id: submissionId },
  });
  if (featured && !submission.consent) {
    throw new Error("Cannot feature a submission that did not consent to be quoted.");
  }
  await prisma.submission.update({
    where: { id: submissionId },
    data: { featured },
  });
  revalidateAll();
}

export async function publishSynthesis(agendaItemId: string) {
  await prisma.agendaItem.update({
    where: { id: agendaItemId },
    data: { synthesisPublishedAt: new Date() },
  });
  revalidateAll();
}

export async function unpublishSynthesis(agendaItemId: string) {
  const item = await prisma.agendaItem.findUniqueOrThrow({ where: { id: agendaItemId } });
  if (item.responsePublishedAt) {
    throw new Error("Cannot unpublish the synthesis after the official response is published.");
  }
  await prisma.agendaItem.update({
    where: { id: agendaItemId },
    data: { synthesisPublishedAt: null },
  });
  revalidateAll();
}

export async function publishResponse(agendaItemId: string, formData: FormData) {
  const item = await prisma.agendaItem.findUniqueOrThrow({ where: { id: agendaItemId } });
  if (!item.synthesisPublishedAt) {
    throw new Error("Publish the synthesis before publishing the official response.");
  }

  const status = requireString(formData, "responseStatus") as ResponseStatus;
  await prisma.agendaItem.update({
    where: { id: agendaItemId },
    data: {
      responseStatus: status,
      responseRationale: requireString(formData, "responseRationale"),
      responseNextStep: requireString(formData, "responseNextStep"),
      responsePublishedAt: new Date(),
    },
  });
  revalidateAll();
  redirect("/admin?published=1");
}
