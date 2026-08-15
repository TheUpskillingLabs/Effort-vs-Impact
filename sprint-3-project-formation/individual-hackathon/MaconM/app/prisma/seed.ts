import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Wipe existing data so this script is safe to re-run.
  await prisma.submission.deleteMany();
  await prisma.theme.deleteMany();
  await prisma.agendaItem.deleteMany();

  const agendaItem = await prisma.agendaItem.create({
    data: {
      title: "Pedestrian Safety Improvements Near Maple Street Elementary",
      context:
        "Families walking to Maple Street Elementary cross at an unmarked intersection with no signal, no painted crosswalk, and a sidewalk that disappears for half a block near the school entrance. Drivers regularly travel well above the posted 20 mph limit during morning drop-off and afternoon pickup. The Commission is considering a package of low-cost, near-term safety improvements for the block.",
      decisionQuestion:
        "Should the Commission approve funding this fall for a marked crosswalk, curb extensions, and a flashing pedestrian beacon at the Maple Street school entrance?",
      commentOpenAt: new Date("2026-07-15T00:00:00Z"),
      responseByDate: new Date("2026-08-22T00:00:00Z"),
      responseOwnerName: "Commissioner Dana Reyes",
      responseOwnerRole: "ANC 4B, Transportation & Public Works Lead",
      synthesisPublishedAt: new Date("2026-08-05T00:00:00Z"),
      // responsePublishedAt intentionally left unset: the pilot demonstrates
      // the "Board reviewing" stage, with the official response still due.
    },
  });

  const themes = await Promise.all(
    [
      {
        title: "Drivers speed through drop-off and pickup",
        description:
          "The most common concern: cars moving well above 20 mph on Maple Street exactly when the most kids are crossing, morning and afternoon.",
        position: 0,
      },
      {
        title: "No marked crosswalk at the school entrance",
        description:
          "Residents describe kids and parents crossing wherever there's a gap in traffic, because there's no painted crosswalk or signal telling drivers to expect pedestrians.",
        position: 1,
      },
      {
        title: "The sidewalk gap forces kids into the street",
        description:
          "A roughly half-block stretch near the entrance has no sidewalk at all, so walkers are pushed into the traffic lane during the highest-traffic minutes of the day.",
        position: 2,
      },
      {
        title: "Support for a flashing beacon, questions about cost and timeline",
        description:
          "Broad support for a rapid-flash beacon, paired with questions about what it costs, how long installation takes, and whether it will actually be funded this budget cycle.",
        position: 3,
      },
      {
        title: "Requests for a crossing guard during school hours",
        description:
          "Several residents see a person on the corner during drop-off and pickup as a faster, cheaper first step than construction.",
        position: 4,
      },
    ].map((t) => prisma.theme.create({ data: { ...t, agendaItemId: agendaItem.id } })),
  );

  const [speeding, crosswalk, sidewalkGap, beacon, crossingGuard] = themes;

  const submissions: {
    name?: string;
    neighborhood?: string;
    email?: string;
    comment: string;
    consent: boolean;
    featured: boolean;
    themeId: string;
  }[] = [
    {
      name: "Priya N.",
      neighborhood: "Maple Street",
      email: "priya.n@example.com",
      comment:
        "I stand on that corner every morning with my two kids and watch cars fly through well past 20 mph. It only takes one distracted driver.",
      consent: true,
      featured: true,
      themeId: speeding.id,
    },
    {
      neighborhood: "Maple Street",
      comment:
        "Pickup line traffic backs up and people cut through the side street way too fast trying to beat the line. Scares me every time.",
      consent: true,
      featured: false,
      themeId: speeding.id,
    },
    {
      name: "Marcus T.",
      comment:
        "A speed table or even just more visible signage before the school zone would slow people down before they get to the crossing.",
      consent: true,
      featured: false,
      themeId: speeding.id,
    },
    {
      comment:
        "My daughter is 7 and has to judge gaps in traffic herself because there's no crosswalk telling drivers to stop. That shouldn't be a 7-year-old's job.",
      consent: true,
      featured: true,
      themeId: crosswalk.id,
    },
    {
      name: "Owen R.",
      neighborhood: "Fairview",
      email: "owen.r@example.com",
      comment:
        "A painted crosswalk alone won't fix speeding, but it at least sets a clear expectation for drivers that people cross here.",
      consent: true,
      featured: false,
      themeId: crosswalk.id,
    },
    {
      comment:
        "We moved here last year and I was shocked there's no crosswalk at all right by the school. Every other school I know of has one.",
      consent: false,
      featured: false,
      themeId: crosswalk.id,
    },
    {
      name: "Grace L.",
      comment:
        "The missing sidewalk stretch is the scariest part honestly. Kids end up walking single file in the road when it's wet or there's a car parked too close to the edge.",
      consent: true,
      featured: true,
      themeId: sidewalkGap.id,
    },
    {
      neighborhood: "Maple Street",
      comment:
        "I've asked the city about that sidewalk gap for two years. Glad it's finally part of a real proposal instead of a complaint that goes nowhere.",
      consent: true,
      featured: false,
      themeId: sidewalkGap.id,
    },
    {
      comment:
        "Even a temporary painted path or cones during school hours would help until the sidewalk gets built out properly.",
      consent: true,
      featured: false,
      themeId: sidewalkGap.id,
    },
    {
      name: "Ben H.",
      neighborhood: "Fairview",
      comment:
        "Strongly support the flashing beacon. Just want to know realistically if it's this budget cycle or next — we've heard 'under consideration' for a while now.",
      consent: true,
      featured: true,
      themeId: beacon.id,
    },
    {
      comment:
        "A rapid-flash beacon worked really well near my old neighborhood's school. Drivers actually stop for it, unlike a plain sign.",
      consent: true,
      featured: false,
      themeId: beacon.id,
    },
    {
      email: "concerned.parent@example.com",
      comment:
        "Is there a cost estimate for the beacon yet? Would help to know if this is competing with other safety projects for the same dollars.",
      consent: false,
      featured: false,
      themeId: beacon.id,
    },
    {
      name: "Tasha W.",
      comment:
        "Before any construction happens, can we just get a crossing guard out there? It's the fastest fix and it's what actually worked at my kids' last school.",
      consent: true,
      featured: true,
      themeId: crossingGuard.id,
    },
    {
      neighborhood: "Maple Street",
      comment:
        "A crossing guard plus the crosswalk paint would probably solve 90% of this for a fraction of the cost of the full redesign.",
      consent: true,
      featured: false,
      themeId: crossingGuard.id,
    },
    {
      comment:
        "Not sure a crossing guard is realistic long-term given staffing, but as a stopgap for this fall while construction is planned, it makes sense.",
      consent: true,
      featured: false,
      themeId: crossingGuard.id,
    },
  ];

  for (const s of submissions) {
    await prisma.submission.create({
      data: { ...s, agendaItemId: agendaItem.id },
    });
  }

  console.log(
    `Seeded 1 agenda item, ${themes.length} themes, and ${submissions.length} submissions.`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
