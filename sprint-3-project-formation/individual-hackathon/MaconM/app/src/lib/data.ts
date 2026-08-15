import { prisma } from "@/lib/db";

/**
 * HearBack is scoped to a single pilot agenda item (see README), so the app
 * always operates on the first AgendaItem row rather than a list.
 */
export async function getAgendaItem() {
  return prisma.agendaItem.findFirst({
    orderBy: { createdAt: "asc" },
  });
}

export async function getAgendaItemOrThrow() {
  const item = await getAgendaItem();
  if (!item) {
    throw new Error(
      "No agenda item found. Run `npm run db:seed` to load the pilot item.",
    );
  }
  return item;
}

export async function getThemesWithQuotes(agendaItemId: string) {
  const themes = await prisma.theme.findMany({
    where: { agendaItemId },
    orderBy: { position: "asc" },
    include: {
      submissions: {
        where: { featured: true, consent: true },
        orderBy: { createdAt: "asc" },
        select: { id: true, comment: true, neighborhood: true },
      },
      _count: { select: { submissions: true } },
    },
  });
  return themes;
}

export async function getSubmissionCount(agendaItemId: string) {
  return prisma.submission.count({ where: { agendaItemId } });
}
