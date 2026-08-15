"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export interface FeedbackFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

export async function submitFeedback(
  agendaItemId: string,
  _prevState: FeedbackFormState,
  formData: FormData,
): Promise<FeedbackFormState> {
  const comment = String(formData.get("comment") ?? "").trim();
  const consent = formData.get("consent") === "on";
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const neighborhood = String(formData.get("neighborhood") ?? "").trim();

  if (!comment) {
    return { status: "error", message: "Please share a comment before submitting." };
  }
  if (comment.length > 4000) {
    return { status: "error", message: "Comments must be under 4,000 characters." };
  }
  if (!consent) {
    return {
      status: "error",
      message: "Please check the consent box to submit feedback.",
    };
  }

  await prisma.submission.create({
    data: {
      agendaItemId,
      comment,
      consent,
      name: name || null,
      email: email || null,
      neighborhood: neighborhood || null,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");

  return {
    status: "success",
    message: "Thanks — your comment has been recorded and will be included in what the board reviews.",
  };
}
