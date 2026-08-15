# Eugene, OR — Candidate Assembly Issues

**Researched:** 2026-08-15
**Deciding bodies in scope:** Eugene City Council (8 ward councilors + mayor; home-rule charter city) and the Eugene City Manager's Office; Eugene Water & Electric Board (EWEB — separately elected 5-member board of commissioners); Eugene School District 4J Board of Directors; Lane County Board of Commissioners; Lane Transit District (LTD) Board of Directors (governor-appointed, not elected — note this weakens its "assembly fit" for a democratic-legitimacy pilot); Eugene Planning Commission (advisory to Council on land use); Springfield City Council (only where a joint Eugene–Springfield instrument is involved, e.g. fire).

**Meeting/agenda platform:** **CivicPlus (CivicEngage)** — not Legistar, not Granicus, not PrimeGov.
- Agenda portal: `https://www.eugene-or.gov/AgendaCenter` (verified 200)
- Verified working RSS feed: `https://www.eugene-or.gov/RSSFeed.aspx?ModID=65&CID=All-calendar.xml` → returns `Eugene, OR - Agenda Creator` RSS 2.0 with `AgendaCenter/PreviousVersions/<id>` links. Verified 2026-08-15.
- Calendar module: `https://www.eugene-or.gov/Calendar.aspx?CID=52`, event detail `?EID=<n>`; Archive module: `https://www.eugene-or.gov/Archive.aspx`
- **Highest-value single artifact: the Council Tentative Agenda PDF** at `https://www.eugene-or.gov/DocumentCenter/View/5448` (verified; version fetched was "Updated July 9, 2026", 5 pages). It lists every scheduled work session, public hearing and ordinance 3+ months forward with department contacts. Most of the "pending decision" dates in this file come from it.
- Webcasts/materials landing page: `https://www.eugene-or.gov/3360/Webcasts-and-Meeting-Materials`. Video is on YouTube (`https://www.youtube.com/@cityofeugenepublicmeetings5574`), not a Granicus player.
- **Trap:** `https://eugene.legistar.com/` resolves and returns HTTP 200, but it is a dead/unprovisioned tenant — `Calendar.aspx` returns "Invalid parameters!", the RSS feed returns "This feed is no longer valid," and `https://webapi.legistar.com/v1/eugene/events` returns `LegistarConnectionString setting is not set up in InSite for client: eugene`. Do not build a scraper against it.

**Local news sources used:**
- KLCC (NPR, Eugene) — https://www.klcc.org — free, no paywall, tag pages work well (e.g. `/tags/eweb`, `/tags/cahoots`, `/tags/eugene-springfield-fire`)
- Lookout Eugene-Springfield — https://lookouteugene-springfield.com — free at time of research; URL pattern `/story/<section>/<yyyy>/<mm>/<dd>/<slug>/`
- OPB — https://www.opb.org — republishes KLCC ("NPR for Oregonians" in aggregators)
- Eugene Weekly — https://eugeneweekly.com
- Daily Emerald (UO student paper) — https://dailyemerald.com — **403s automated fetches**
- The Register-Guard — https://www.registerguard.com — paywalled; used only for headline/date confirmation
- Oregon Capital Chronicle — https://oregoncapitalchronicle.com
- League of Oregon Cities election reports — https://www.orcities.org (source of certified-ish vote margins)

**Ballot access (verified):**
- Source: **Eugene Code Chapter 2 (Elections), § 2.972**, text extracted from the city's own posted excerpt PDF `https://www.eugene-or.gov/DocumentCenter/View/19956`. Exact language: *"The number of signatures required for an initiative petition is 15 percent, and for a referendum petition 10 percent, of the number of votes cast for the office of mayor at the mayoral election last preceding the date when circulation of the petition begins."* (§ 2.972 added by Ord. 18106, 1978; amended by Ord. 20393, 2007.)
- **Who certifies:** the **City Recorder** certifies the petition; **Lane County Elections** performs signature validation by statistical sampling. Verified on `https://www.eugene-or.gov/518/Elections` and the KLCC 2026-08-05 story.
- **Real-world numbers, 2026 cycle:** the Eugene Clean Energy Fund initiative needed **8,700+ valid signatures**, submitted **14,000+**, and was certified. Timeline published by the City Recorder: prospective petition filed **2026-02-20**; ballot title certified final **2026-03-16**; circulation approved **2026-04-03**; first signature **2026-04-16**; sheets submitted **2026-07-21**; **certified 2026-08-05**; next available election **2026-11-03**. That is a ~5.5-month petition-to-ballot clock — a usable planning number.
- **Referendum is also demonstrably live:** in March 2025 opponents of the new Fire Service Fee submitted **8,413 signatures** to refer the ordinance; rather than face the vote, Council repealed the fee in July 2025. Eugene's referendum power is not theoretical.
- Voters' pamphlet: city produces one for city measures; arguments cost **$300 or 300 verified voter signatures** (EC 2.993–2.994). For Nov 3, 2026 the argument deadline is **2026-09-08**, rebuttals **2026-09-18**. A lottery-selected panel statement could in principle be filed this way — that is a concrete, cheap channel for an assembly's output.

**Existing deliberative infrastructure:** **Strong — the strongest of any of the five pilot cities checked so far.**
- **Eugene has already run a lottery-selected deliberative panel with the City as co-convener.** The **2020 Eugene Review Panel on Housing** (a.k.a. the 2020 Eugene Civic Assembly on Housing Code) was a City of Eugene / Healthy Democracy partnership advising the Middle Housing Code Changes Project (HB 2001 implementation). **29 Eugene residents**, democratic lottery from replies to letters mailed to **7,500 randomly selected addresses** inside the city and UGB, **35 hours across 15 sessions**, Nov 10–Dec 5 2020, Feb 16–23 2021, Apr 20–27 2021, producing four reports. → https://healthydemocracy.org/home/projects/2020-eugene-review-panel-on-housing/ . This means the city has institutional memory, a precedent for the procurement, and staff who have done it once.
- **Healthy Democracy** (Portland) is the operator of record in Oregon: it built the statutory **Oregon Citizens' Initiative Review** (HB 2634, 2011) and ran the **Deschutes Civic Assembly** on youth homelessness. Oregon is the only US state with CIR in statute — a legitimacy asset when pitching.
- **City Club of Eugene** — 501(c)(3), weekly public forums 11 months a year (program year resumes 2026-09-11), podcast + YouTube distribution, KLCC listed as sponsor. Ready-made recruitment and dissemination partner. https://www.cityclubofeugene.org/
- **Caution / anti-asset:** `https://cir.electionbyjury.org/lane-watershed-2026/` publishes what looks like a "Citizens' Initiative Review: Lane County Measure 20-373." **It is an AI-generated simulation**, self-described: "This is an AI-generated simulation of a Citizens' Initiative Review… No actual citizens participated." 23 *simulated* jurors, filed by Clay Shentrup / Election by Jury, February 2026. It ranks in search results for "Lane County citizens initiative review." Anyone pitching a real assembly in Lane County should expect to have to distinguish themselves from it, and should not cite it as precedent.
- Not found: any standing City of Eugene sortition body, any Lane County deliberative-democracy office, any UO center specifically running assemblies (UO has planning/engagement capacity but nothing verified as deliberative-minipublic work — treat as unverified).

## Issue Shortlist

| # | Issue | Deciding body | Salience | Media profile | Litigation/lobby risk | Assembly fit |
|---|-------|---------------|----------|---------------|----------------------|--------------|
| 1 | The 2028 revenue cliff: payroll tax, parks levy and pavement bond all expire, against a $5.1M/yr structural gap | Eugene City Council (ordinance + referral to voters) | **High** — fire-fee referendum in 2025 forced a repeal; three revenue sources expire within 18 months of each other | **High** — Lookout, KLCC, OPB, Register-Guard, Eugene Weekly all covering budget continuously | **Med** — Eugene Chamber bankrolled the 2025 fire-fee referendum and will engage again; no litigation | **High** — genuine trade-off problem, council is demonstrably unable to impose a fee unilaterally, ballot referral is the likely endpoint |
| 2 | Eugene–Springfield Fire separation: what service level, and who pays for it | Eugene City Council + Springfield City Council (IGA termination, then each city's fire budget/funding instrument) | **High** — 16-year merger dissolved by city-manager notice; union warning of harm | **High** — every outlet covered 2026-07-02; Lookout ran an editorial condemning the secrecy | **Low** — no litigation found; union is a stakeholder, not a moneyed lobby | **High** — the decision was made administratively with no public deliberation; a two-year transition window is exactly the space an assembly fills |
| 3 | Urban Growth Strategies Package #1: ~26,000 homes over 20 years — infill and new housing types, or expand the UGB | Eugene City Council (land use code amendments + comp plan; Planning Commission recommends) | **High** — R-1 height, micro villages, SROs, middle-housing standards; neighborhood associations historically mobilize on this | **Med-High** — steady coverage; less spike-driven than budget | **Low-Med** — state HNA mandate constrains options (a preemption caveat, not litigation); no active suit found | **High** — Eugene already ran a lottery panel on exactly this policy area in 2020-21; direct precedent, direct comparability |
| 4 | Tenant Opportunity to Purchase Act (TOPA) | Eugene City Council (new EC chapter/ordinance) | **Med-High** — council voted 2026-03-02 to research it; Register-Guard reported record evictions Feb 2026 | **Med** — Shelterforce national feature, Daily Emerald, council coverage; not yet a front-page fight | **Med** — landlord/realtor groups oppose TOPA everywhere it appears; no Eugene litigation, and no Eugene campaign committee found yet | **High** — the council explicitly parked it in "research," which is the classic slot an assembly fills |
| 5 | Citywide surveillance technology policy (ALPR/Flock, drones, cameras) | Eugene City Council (ordinance/administrative policy framework) | **Med-High** — Flock contract already killed after public backlash; council unanimous 2026-06-17 to write a policy | **Med** — KLCC and Lookout both covered; Oregon-wide ALPR law gave it a statewide frame | **Low** — no litigation; Flock lobbies statewide but there is no Eugene procurement on the table to lobby for | **High** — values trade-off with no technical right answer, and staff themselves scoped a 6-to-12-month public process |
| 6 | EWEB's second drinking-water plant on the Willamette ($392M → $431M, now being scaled back) and the rate path to pay for it | EWEB Board of Commissioners (elected) — capital plan + rate ordinances | **High** — largest capital decision in EWEB's recent history; rates already rising; fixed charge went $30 → $38.50 | **Med-High** — KLCC, Lookout, Register-Guard, OPB all covering Jul–Aug 2026 | **Low-Med** — Glenwood siting could attract land-use appeals later (unverified); no current suit | **Med-High** — elected board, direct ratepayer incidence, clear options ladder; risk is that it's technical enough to look like an engineering question |
| 7 | What replaces CAHOOTS: the design of Eugene's alternative/mobile crisis response | Eugene City Council (budget appropriation + contract award via city RFP) | **High** — CAHOOTS was Eugene's national identity; it collapsed in April 2025 and the replacement is contested | **High** — sustained national and local coverage since 2025 | **Med** — White Bird Clinic v. Willamette Valley Crisis Care (copyright/trade secrets) **settled 2026-05-18**, so the litigation bar is now clear, but it *was* litigated | **Med-High** — high legitimacy payoff; risk is that procurement is already partly locked (peer-navigation award to Ideal Option, April 2026) |

---

## 1. The 2028 revenue cliff — Eugene's structural General Fund gap and three expiring revenue sources

**One-line frame:** *If Eugene's payroll tax, parks levy and pavement bond all expire by 2029 and the General Fund is short about $5 million a year, which services should the city guarantee, and which combination of taxes, fees and levies should it ask voters to approve?*

**Why it's live now:** On 2026-06-08 council was told the projected 2027–29 General Fund gap had grown to **$5.1 million a year, up 131%** from the $2.2M projected in December 2025; the city imposed **$3 million of mandatory underspending and a hiring pause** mid-cycle. The same briefing flagged that the **Community Safety Payroll Tax expires December 2028** and the **parks levy and road/pavement bond expire at the end of FY2028-29**. The Council Tentative Agenda (updated 2026-07-09) schedules a **Long Range Financial Planning work session on 2026-09-16 (90 min)**, a **Community Safety Payroll Tax work session on 2026-09-28**, a **Pavement Bond Measure Annual Update on 2026-09-23**, a **Library Levy Update on 2026-10-21**, and a tentative **Budget Committee meeting 2026-10-28**. This is not a hypothetical — the referral decisions start being teed up in the next six weeks.

**Deciding body & instrument:** Eugene City Council. Two instruments: (a) ordinances imposing/amending fees and taxes under the home-rule charter (as with the Fire Service Fee, Ord. adopted 2025-02-10 on a 5-3 vote); (b) **referral of a measure to Eugene voters** — legally required for the payroll tax, which under Ordinance No. 20616 must be referred to voters to continue past its seven-year term, and practically required for levies and bonds.

**Political salience:** **High.** Evidence: (i) In February 2025 council adopted a **$10M/yr Fire Service Fee** 5-3 to avoid ~40 layoffs and closing a pool and a community center; opponents organized as *Voters Against Forever Fees* (eugeneforeverfee.com — domain no longer resolves as of 2026-08-15), backed by the Eugene Chamber of Commerce, and filed **8,413 referendum signatures on 2025-03-13**. Council **repealed the fee in July 2025** rather than defend it at the ballot. That is a demonstrated, recent, successful revolt against a council-imposed revenue instrument. (ii) Voters are *not* uniformly anti-tax: on 2026-05-19 Eugene's **five-year library local option levy (Measure 20-381) passed** — 18,340 yes / 11,132 no, **62.23%** (League of Oregon Cities, unofficial as of 2026-05-22). (iii) The same ballot shows the ceiling: **Measure 20-377**, a housekeeping charter amendment removing the department-head residency requirement, **failed 44.91%**, while **Measure 20-376** (gender-neutral pronouns) **passed 62.25%**. Eugene voters read every measure. (iv) Springfield adopted its own payroll tax on 2026-06-02 and Corvallis is hearing income/payroll tax options — a regional pattern that will be used rhetorically on both sides.

**Constituencies:**
- *For change (new/renewed revenue):* library, parks and pool users (demonstrated 62% coalition), the firefighters' union, city employees, human-services providers, the Friends of Eugene Public Library-type volunteer base, neighborhood associations in wards facing facility closures.
- *Against / at risk:* Eugene Chamber of Commerce and the employer base that pays the 0.21% payroll tax; small employers (1–2 employees pay 0.15% on first $100k); homeowners already absorbing EWEB and county fee increases; the *Voters Against Forever Fees* network, whose central objection was a **permanent** fee escalatable by council without a vote — i.e., a process objection an assembly can actually address.
- *Cross-pressured / persuadable:* renters (pay payroll tax indirectly via wages, benefit from library/parks, don't pay property tax directly); public-safety-first voters who want police/fire funded but distrust the city's spending discipline; the ~48–52% of Lane County voters who split almost evenly on the 4-H/OSU Extension levy (20-380: 36,287 yes / 39,085 no, 48.14% unofficial — later reported by KEZI on 2026-05-25 to have flipped to passing on final count).

**Policy changes on the table (least → most ambitious):**
1. Do nothing new; let the payroll tax sunset in 2028 and absorb ~$23.6M/yr of community-safety cuts.
2. Refer the **existing payroll tax** to voters largely unchanged, with a fixed sunset and an audit/reporting requirement (directly answers the "forever fee" objection).
3. Refer a **combined renewal package** — payroll tax + parks levy + pavement bond as one coherent ask with a published service-guarantee schedule.
4. Restructure the payroll tax base/rate (e.g. exempt the smallest employers entirely, tier upward for large employers) and refer that.
5. Adopt a **charter amendment requiring voter approval for any new general city fee above a threshold**, trading council flexibility for durable consent — the structural fix to the exact conflict that produced the 2025 fire-fee repeal.

**Why an assembly rather than the normal process:** The normal process has already failed once in public: council imposed a fee, a referendum petition beat it, and council repealed it before a vote — so nobody's preferences were actually measured, and the city now has a $5.1M hole and no legitimate mandate for any instrument. The Chamber-funded referendum and the 62% library-levy vote point in opposite directions, which means the missing information is not "do Eugene voters like taxes" but "which package, with what guarantees, would they ratify." A lottery-selected panel that produces a ranked revenue package with service guarantees is exactly the artifact council lacks.

**Disqualifiers / risks:** No litigation. The Eugene Chamber is an organized, funded opponent with a proven referendum capability — this is the main criterion-4 concern, and it is real but it is *counterparty* lobbying, not a captured process. Oregon's constitutional property-tax caps (Measures 5/50) genuinely constrain the option space; the assembly briefing must be honest that property tax is close to maxed. Timing risk: if council refers a measure in early 2027 for the May 2027 ballot, an assembly needs to be running by roughly November 2026.

**Sources:**
- Eugene's projected budget gap swells to $5.1 million — Lookout Eugene-Springfield — https://lookouteugene-springfield.com/story/government-politics/2026/06/08/eugenes-projected-budget-gap-swells-to-5-1-million/ — 2026-06-08
- Ahead of June workshop, Eugene officials learn of budgetary challenges — KLCC — https://www.klcc.org/politics-government/2026-06-09/ahead-of-june-workshop-eugene-officials-learn-of-budgetary-challenges — 2026-06-09
- City Council Tentative Agenda (updated 2026-07-09) — City of Eugene — https://www.eugene-or.gov/DocumentCenter/View/5448 — fetched 2026-08-15
- Eugene approves new fire fee in hopes of avoiding layoffs — KLCC — https://www.klcc.org/politics-government/2025-02-10/eugene-approves-new-fire-fee-in-hopes-of-avoiding-layoffs — 2025-02-10
- Eugene fire service fee: what you need to know — Lookout Eugene-Springfield — https://lookouteugene-springfield.com/story/government-politics/2025/04/10/eugene-fire-fee-what-you-need-to-know/ — 2025-04-10
- Community Safety Payroll Tax Background (Ord. No. 20616; ~$23.6M/yr) — City of Eugene — https://www.eugene-or.gov/4169/Community-Safety-Payroll-Tax-Background — fetched 2026-08-15
- Eugene City Council must refer new payroll tax to voters after 7 years — KVAL — https://kval.com/news/local/eugene-must-refer-new-payroll-tax-to-voters-after-7-years — date unverified (pre-2021)
- May 2026 Election Report (unofficial results as of 5/22/2026) — League of Oregon Cities — https://www.orcities.org/application/files/2417/7947/2066/May_2026_Election_Report.pdf — 2026-05-22

---

## 2. Eugene–Springfield Fire separation: what fire/EMS service level, and how to pay for it

**One-line frame:** *As Eugene rebuilds a standalone fire department over the next two years, what level of fire and emergency medical service should Eugene commit to, and how should it be funded?*

**Why it's live now:** On or about **2026-07-02**, Eugene City Manager **Jenny Haruyama** sent Springfield formal notice ending the 16-year Eugene Springfield Fire consolidation, and both cities abandoned the plan to create a new combined fire government. Springfield City Manager **Nancy Newton** and Haruyama jointly framed it as no longer financially viable. The notice starts a **two-year transition**. Fire Chief **Mike Caven** said residents "probably won't notice until you see a different logo." The firefighters' union publicly warned Springfield about the consequences. Lookout ran an editorial on **2026-07-13** titled "The intolerable secrecy of the Eugene Springfield Fire breakup." Nothing about the *service level* or the *funding model* for the standalone Eugene department has been publicly deliberated.

**Deciding body & instrument:** Eugene City Council and Springfield City Council. The separation itself was executed by administrative notice under the intergovernmental agreement (an unusual, and criticized, allocation of authority). What remains before Council: the Eugene fire department's staffing/deployment standards, the FY2028+ fire budget, and — because Eugene just repealed its Fire Service Fee — some funding instrument (fee ordinance, levy referral, or absorption into the General Fund package in Issue 1). Note Eugene Springfield Fire's ambulance/EMS transport fund is one of the "struggling non-general funds" city staff flagged for review in 2026.

**Political salience:** **High.** Every local outlet covered the split within 24 hours (KLCC, Lookout, OPB, KEZI, KVAL, Register-Guard, Daily Emerald). The 2025 fire-fee fight already proved fire funding mobilizes both a yes coalition (avoid layoffs) and a no coalition (8,413 referendum signatures). Lookout's editorial board explicitly attacked the *process*, not just the outcome — a rare, direct press endorsement of the premise that this decision needed public deliberation. Separately, Lookout reported on 2026-03-01 that ambulance offload delays at RiverBend were tying up ambulances for thousands of hours, which puts EMS capacity in play as a concrete, measurable service question.

**Constituencies:**
- *For change (higher/guaranteed service level):* IAFF firefighters' union, neighborhood associations in south/southwest Eugene hills facing wildfire risk (EWEB is running power lines in wildfire-safety settings there as of 2026-08-15), older residents dependent on EMS transport, west Eugene neighborhoods with longer response times.
- *Against / at risk:* employers and property owners who would carry a fire fee or levy; the Chamber-aligned network that killed the 2025 fee; Springfield residents and officials, who bear separation costs and were reportedly informed late.
- *Cross-pressured / persuadable:* voters who supported the library levy but rejected the fire fee — i.e. people who will pay for a service they can see and vote on, but not for an open-ended council-set charge. That is the exact group an assembly can reach.

**Policy changes on the table (least → most ambitious):**
1. Stand up a separate Eugene department at current staffing, absorb costs in the General Fund, and accept the resulting cuts elsewhere.
2. Publish binding response-time and staffing standards for the standalone department first, then size the budget to them.
3. Re-introduce a fire service fee with a **hard sunset and a voter-approval requirement for any increase** — the design the 2025 referendum campaign said it would accept.
4. Refer a dedicated **five-year fire/EMS local option levy** to voters (the instrument Eugene voters approved for libraries at 62%).
5. Pursue a **fire district** with its own permanent tax rate — the option just abandoned for cost reasons, which an assembly could revisit with the actual numbers.

**Why an assembly rather than the normal process:** The consolidation was ended by a letter between two city managers, and the region's most prominent news outlet called the process intolerably secret. There is a two-year transition — an unusually long, well-defined window — during which the substantive questions (what service level, paid how) are genuinely open and nobody has yet been asked. The 2025 fee/referendum cycle showed council cannot legitimate a fire funding instrument on its own.

**Disqualifiers / risks:** No litigation found. Collective bargaining with the firefighters' union limits how far an assembly's staffing recommendations can bind. The two-city dimension complicates convening — an assembly should be scoped to *Eugene's* department, not to the bi-city relationship, or it will produce recommendations Springfield can ignore. Risk that "how many firefighters" reads as a technical rather than deliberative question; frame it as service-level trade-offs against the Issue 1 revenue package.

**Sources:**
- Eugene Springfield Fire to split into separate departments, ending plans for new combined fire government — KLCC — https://www.klcc.org/politics-government/2026-07-02/eugene-springfield-fire-split-separate-departments-ending-plans-new-combined-fire-government — 2026-07-02
- Eugene Springfield firefighters union hopes for resolution of merger/funding issue in 2026 — KLCC — https://www.klcc.org/politics-government/2025-12-28/eugene-springfield-firefighters-union-hopes-for-resolution-of-merger-funding-issue-in-2026 — 2025-12-28
- "Our View: The intolerable secrecy of the Eugene Springfield Fire breakup" — Lookout Eugene-Springfield — 2026-07-13 — headline and date confirmed via Google News; **direct URL unverified**
- "Fire union issues dire warning to Springfield about ESF split" — The Register-Guard — 2026-07-03 — headline and date confirmed via Google News; paywalled, **URL unverified**
- "RiverBend bottleneck is tying up ambulances for thousands of hours" — Lookout Eugene-Springfield — 2026-03-01 — headline/date confirmed via Google News; **URL unverified**

---

## 3. Urban Growth Strategies Package #1: ~26,000 homes — infill and new housing types, or expand the urban growth boundary

**One-line frame:** *Where should the roughly 26,000 homes Eugene is required to plan for over the next 20 years actually go — absorbed inside the existing city through taller, denser and new housing types, or by expanding the urban growth boundary?*

**Why it's live now:** Eugene's Urban Growth Strategies project is at adoption. The **Planning Commission held a public hearing 2026-06-23 and deliberated 2026-07-14 and 2026-07-28**. The Council Tentative Agenda schedules a **work session on Adoption Package #1 for 2026-09-14 (90 min)** and a **public hearing on 2026-10-19**, with council action expected **by the end of 2026** and a second adoption package's hearing anticipated in fall 2026. Package #1 contents (per the city's own project page): allow **micro villages and single-room occupancy (SRO)** housing in residential and commercial zones, update middle-housing development and land-division standards, **raise the R-1 height limit from 30 to 35 feet**, allow residential treatment facilities and day cares in more zones, streamline residential land use applications, and extend approval expirations by three years. The city says the **2026 Oregon Housing Needs Analysis requires planning for nearly 26,000 homes over 20 years**, and it will run a buildable lands inventory to determine whether the **UGB must be expanded**. Separately, council on 2026-07-16 unanimously approved 10-year property tax exemptions for housing developers to chase the same state targets.

**Deciding body & instrument:** Eugene City Council, by **land use code amendment ordinance** (and, for the UGB question, a comprehensive plan amendment under the Envision Eugene framework), on recommendation from the Eugene Planning Commission.

**Political salience:** **High**, though slower-burning than budget fights. R-1 height and SRO/micro-village siting are the two provisions that historically generate neighborhood-association turnout in Eugene. Eugene's UGB and annexation politics are already in the news: a bill in the 2026 legislature would ease Eugene annexation in some cases (KLCC, 2026-02-28), and Lookout ran a 2026-06-29 explainer on Eugene's unincorporated "islands." Housing dominated the 2026 council candidate forums in Wards 3, 4, 5 and 6.

**Constituencies:**
- *For change (more capacity):* housing developers and the building trades; renters and first-time buyers; Housing Land Advocates-type YIMBY groups; the UO student population; social-service providers who need SRO and micro-village siting; the city itself, which is under a state mandate.
- *Against / at risk:* single-family neighborhood associations (particularly in south and east Eugene) opposing the R-1 height increase and SRO siting; existing homeowners concerned about parking, shading, and neighborhood character; farm/forest-land interests and 1000 Friends of Oregon-style land-use groups on the UGB expansion side (they oppose expansion and *favor* infill — note they cut against each other on the two halves of this issue).
- *Cross-pressured / persuadable:* residents who accept the 26,000-home number but not the specific standards; environmentally motivated voters torn between compact-city climate logic and neighborhood tree canopy/greenspace; the west Eugene and Bethel neighborhoods that carry industrial burdens and are skeptical of any city land-use promise (see the J.H. Baxter history in issue-adjacent context below).

**Policy changes on the table (least → most ambitious):**
1. Adopt Package #1 as recommended by the Planning Commission and defer the UGB question.
2. Adopt Package #1 with siting conditions on micro villages/SROs (design standards, dispersion requirements) rather than blanket allowance.
3. Adopt Package #1 plus an affordability linkage — e.g. condition the R-1 height bonus or approval-extension on an affordability or anti-displacement commitment.
4. Commit to an **infill-first policy**: no UGB expansion until the buildable lands inventory demonstrates the capacity gap cannot be closed inside the boundary, with published metrics.
5. Initiate a **UGB expansion** for a defined increment of housing land, with the accompanying annexation and infrastructure package.

**Why an assembly rather than the normal process:** This is the single strongest precedent match in Eugene. The City and Healthy Democracy already ran a 29-person lottery panel on the *previous* generation of this exact policy (middle housing code, 2020-21), so the design is proven and the city has done the procurement before. The normal process here is a Planning Commission hearing dominated by whoever can attend a June evening hearing and file written testimony — a channel that systematically over-represents incumbent homeowners and organized developers and under-represents renters, who are the intended beneficiaries.

**Disqualifiers / risks:** **State preemption is real and must be disclosed in the briefing** — Oregon's Housing Needs Analysis and HB 2001/HB 2003 lineage remove some options from the table entirely, and an assembly that recommends something the state forbids is worse than useless. Land use decisions in Oregon are appealable to LUBA, so any adopted package carries downstream appeal risk (this is normal, not disqualifying — no active suit was found on Package #1). Timing: council action is expected by end of 2026, so this issue is best targeted at **Adoption Package #2 and the UGB/buildable-lands decision in 2027**, not Package #1.

**Sources:**
- Urban Growth Strategies (project page, adoption schedule, package contents, 26,000-home figure) — City of Eugene — https://www.eugene-or.gov/5202/Urban-Growth-Strategies — fetched 2026-08-15
- City Council Tentative Agenda (2026-09-14 work session; 2026-10-19 public hearing) — City of Eugene — https://www.eugene-or.gov/DocumentCenter/View/5448 — fetched 2026-08-15
- Eugene passes new tax exemptions for housing developers — KLCC — https://www.klcc.org/economy-business/2026-07-16/eugene-city-council-housing-developer-tax-exemptions — 2026-07-16
- Land Use Code Amendments — City of Eugene — https://www.eugene-or.gov/764/Land-Use-Code-Amendments — fetched 2026-08-15
- Middle Housing (HB 2001, Ord. 20667 adopted 2022-05-24) — City of Eugene — https://www.eugene-or.gov/5435/Middle-Housing — fetched 2026-08-15
- 2020 Eugene Review Panel on Housing — Healthy Democracy — https://healthydemocracy.org/home/projects/2020-eugene-review-panel-on-housing/ — fetched 2026-08-15
- "Bill moving through the legislature would ease Eugene annexation in some instances" — KLCC — 2026-02-28 — headline/date via Google News; **URL unverified**

---

## 4. Tenant Opportunity to Purchase Act (TOPA)

**One-line frame:** *Should Eugene give tenants a legal right of first offer or first refusal when the building they rent is put up for sale, and if so, on what terms?*

**Why it's live now:** On **2026-03-02** the Eugene City Council passed a motion directing further research on a Tenant Opportunity to Purchase Act as a renter protection. Shelterforce ran a national feature, "In Eugene, Housing Advocates Call for a Tenant Right to Purchase Act," on **2026-05-29**. The Council Tentative Agenda schedules a **TOPA work session on 2026-10-28**. The Register-Guard reported on **2026-02-26** that Eugene evictions had hit a new high even with existing renter protections. TOPA has no Oregon precedent at city scale, so Eugene would be first-mover in the state.

**Deciding body & instrument:** Eugene City Council, by ordinance adding a new chapter to the Eugene Code (the city has just used this pattern for housing production incentives at EC 2.950–2.952 and is doing so again for residential energy disclosure at EC 6.760–6.780). Under the home-rule charter this is squarely within council authority — but see preemption risk below.

**Political salience:** **Med-High.** Renters are a majority or near-majority of Eugene households (UO drives an unusually large renter share); evictions are at a record; and housing dominated all four 2026 council candidate forums. Salience is currently *latent* rather than mobilized: the council parked it in research and there is no visible Eugene campaign committee on either side yet. That is a feature for assembly purposes — the fight has not yet hardened into two funded camps.

**Constituencies:**
- *For change:* tenant organizing groups and legal aid; community land trusts and affordable-housing nonprofits (the natural TOPA purchasers of last resort); manufactured-home park residents, who are the highest-value TOPA beneficiaries nationally and a real Lane County population; UO student renters.
- *Against / at risk:* small "mom and pop" landlords (the most sympathetic and most vocal opponents wherever TOPA appears), realtors and the Oregon Association of Realtors, apartment owners' associations, and sellers who would face a delayed or complicated closing.
- *Cross-pressured / persuadable:* homeowners who are also small landlords; affordable-housing advocates who worry TOPA rights are unexercisable without acquisition capital (the DC experience) and would rather fund a preservation fund; buyers and agents who want certainty in the transaction timeline.

**Policy changes on the table (least → most ambitious):**
1. Take no action; expand tenant relocation assistance and eviction-defense funding instead.
2. **Notice only** — require landlords to give tenants advance notice of intent to sell, with no purchase right.
3. **Right of first offer** for tenant associations, with a short, defined response window and an exemption for owner-occupied and small (e.g. ≤4-unit) properties.
4. **Right of first refusal** with assignment — tenants may assign their right to a nonprofit, community land trust or the city, which is what makes TOPA actually operative.
5. TOPA plus a **dedicated acquisition fund** so the right is exercisable, tied to the Moderate Income Revolving Loan program council is already hearing (public hearing 2026-09-21, possible action 2026-09-28).

**Why an assembly rather than the normal process:** Council itself declined to decide and asked for research — an explicit admission it has no mandate. The policy's whole design space is procedural detail (window lengths, unit-size exemptions, assignment rights, financing) where public deliberation genuinely improves the output rather than just ratifying a position. And because no funded campaign exists yet on either side, an assembly could shape the frame *before* the fight rather than after.

**Disqualifiers / risks:** **Preemption is the main unknown and must be checked before committing.** Oregon has statutory limits on local rent regulation (ORS 91.225) and a statewide rent-stabilization framework; whether TOPA falls inside or outside those limits in Oregon is **unverified** and should be confirmed with counsel before scoping an assembly. Realtor and landlord associations are well-funded statewide, so criterion 4 risk is moderate and rising. No litigation found. The 2026-10-28 work session is soon — an assembly here should target 2027 ordinance drafting, not the October session.

**Sources:**
- "City Council passes motion moving to further research TOPA for renter protection" — Daily Emerald — 2026-03-02 — headline/date via Google News; **URL unverified (dailyemerald.com blocks automated fetches with HTTP 403)**
- "In Eugene, Housing Advocates Call for a Tenant Right to Purchase Act" — Shelterforce — 2026-05-29 — headline/date via Google News; **direct URL returned HTTP 403, unverified**
- City Council Tentative Agenda — TOPA work session 2026-10-28; Moderate Income Revolving Loan hearing 2026-09-21 — City of Eugene — https://www.eugene-or.gov/DocumentCenter/View/5448 — fetched 2026-08-15
- "Eugene evictions hit new high even with renter protections" — The Register-Guard — 2026-02-26 — headline/date via Google News; paywalled, **URL unverified**

---

## 5. Citywide surveillance technology policy (ALPR / Flock, drones, cameras)

**One-line frame:** *What surveillance technologies should the City of Eugene be allowed to buy and operate, under what public-approval process, and with what limits on who else can see the data?*

**Why it's live now:** Eugene ended its contract with **Flock Safety** for automated license plate readers in late 2025 after public backlash over the police department's use of the technology and its national database. On **2026-06-17** the City Council held a work session and **unanimously agreed** Eugene should develop a citywide surveillance technology policy with council input. Assistant City Manager **Matt Rodrigues** told council staff aim to deliver a **policy framework by the end of 2026**, with fuller policy development potentially taking over a year because of the required public input. In scope: ALPRs, police and engineering drones, dash and body cameras, facility cameras at the Hult Center and the airport; facial recognition is not currently in use. Councilor **Alan Zelenka** said Oregon's new ALPR law "didn't go far enough… there were too many loopholes"; Councilor **Lyndsie Leech** said "the last thing we want is for the public and council to find out about new technology as it's being installed"; Councilor **Mike Clark** pushed for proactive public engagement. Staff pointed to San Jose's privacy risk assessment model and Portland's privacy impact assessments, surveillance inventory and facial-recognition ban.

**Deciding body & instrument:** Eugene City Council — an ordinance and/or administrative policy framework governing acquisition and use of surveillance technology citywide (not just EPD). A Portland-style ordinance requiring council approval and a privacy impact assessment before acquisition is the template on the table.

**Political salience:** **Med-High.** The Flock episode already produced a policy reversal, which is the strongest possible evidence that Eugene residents care. The frame is regionally live: Junction City delayed its ALPR decision to next year's budget (2026-08-13), Albany council voted on reactivating its Flock camera (2026-05-26), Oregon passed new ALPR guardrails in March 2026, and Oregon Capital Chronicle explained the new law on 2026-04-23. Council also has a Police Commission annual report scheduled 2026-10-26, which will surface adjacent oversight questions.

**Constituencies:**
- *For change (tighter limits):* immigrant-rights organizations (the driver behind Oregon's rule keeping plate data from federal immigration officials), civil liberties advocates, the Eugene Human Rights Commission (annual report to council 2026-10-12), abortion- and gender-care-privacy advocates, and the general Eugene left that already killed the Flock contract.
- *Against / at risk:* Eugene Police Department and the police union; residents in neighborhoods with high property-crime rates who wanted the cameras; downtown and commercial-corridor businesses; Flock Safety itself, which lobbies aggressively at the state level.
- *Cross-pressured / persuadable:* residents who support cameras for car theft and hit-and-run but oppose federal data sharing; council members who want oversight without disarming police; city departments (engineering, airport, Hult) that already operate cameras and drones and would be newly regulated.

**Policy changes on the table (least → most ambitious):**
1. Publish an inventory of every surveillance technology the city currently operates (Portland did this first; Eugene has not).
2. Require a **privacy impact assessment** before any new acquisition, decided administratively.
3. Require **council approval plus published use policy** before acquiring or reactivating any surveillance technology, with annual use reporting.
4. Impose Eugene-specific **substantive limits beyond state law** — retention caps, a prohibition on out-of-state and federal data sharing, a ban on third-party database integration.
5. Categorical bans on specified technologies (facial recognition, predictive policing) plus a standing citizen privacy board with review authority.

**Why an assembly rather than the normal process:** This is a values trade-off between safety and privacy with no technically correct answer, which is the canonical assembly use-case. It is also the rare issue where staff have *already scoped* a 6-to-12-month public engagement process and said the policy needs public input — meaning an assembly slots into an existing, funded workstream rather than competing with one. The normal process (a police-department procurement that surfaces only after installation) is precisely the failure mode councilors named.

**Disqualifiers / risks:** No litigation. Flock lobbies statewide but there is currently **no Eugene procurement on the table for it to lobby for**, which is why this scores low on criterion 4 right now — that changes if the city reopens an ALPR contract. State law (2026 ALPR statute) sets a floor Eugene can exceed but not undercut; the briefing must be clear about that. Risk that the topic is too abstract for a lay panel without a concrete decision attached — mitigate by scoping to "should Eugene adopt a Portland-style acquisition ordinance, and what should it cover."

**Sources:**
- Eugene exploring surveillance, privacy policies on new, existing technology — KLCC — https://www.klcc.org/politics-government/2026-06-17/eugene-exploring-surveillance-privacy-policies-new-existing-technology — 2026-06-17
- Following up on Flock controversy, Eugene council starts work on city surveillance policy — Lookout Eugene-Springfield — https://lookouteugene-springfield.com/story/government-politics/2026/06/18/following-up-on-flock-controversy-eugene-council-starts-work-on-city-surveillance-policy/ — 2026-06-18
- "A new Oregon law regulates police use of license plate readers. Here's how it works" — Oregon Capital Chronicle — 2026-04-23 — headline/date via Google News; **URL unverified**
- "Junction City council postpones decision on license-plate readers until spring" — Lookout Eugene-Springfield — 2026-08-13 — headline/date via Google News; **URL unverified**
- City Council Tentative Agenda — Police Commission annual report 2026-10-26; Human Rights Commission annual report 2026-10-12 — https://www.eugene-or.gov/DocumentCenter/View/5448 — fetched 2026-08-15

---

## 6. EWEB's second drinking-water plant on the Willamette, and the rate path to pay for it

**One-line frame:** *How large a second drinking-water treatment plant should EWEB build on the Willamette River, and how much of the cost should current ratepayers carry versus future ones?*

**Why it's live now:** EWEB has one 76-year-old treatment plant on the McKenzie and no redundancy. In **March 2026** EWEB announced plans for a second plant on the Willamette at Glenwood. On **2026-07-09** commissioners green-lit a roughly **$392 million** Willamette intake; on **2026-07-20** they voted to start the design process. Then on **2026-08-06** and **2026-08-10**, updated financials at **$431 million** pushed commissioners to consider a **smaller plant**. Rates are already climbing for other reasons: for 2026 the electric portion of a residential bill rose about **$3–$6/month**, water about **$2/month**, and the **fixed monthly charge went from $30 to $38.50**; EWEB has separately planned a **1% increase in 2026 and 3% in 2027** tied to Leaburg Dam decommissioning (commissioners voted for removal in early 2023 and contracted a firm in December 2024). A Columbia dam ruling could add further pressure on power bills (KEZI, 2026-03-21).

**Deciding body & instrument:** **EWEB Board of Commissioners** — five commissioners **elected by Eugene voters** (ward seats plus at-large; the 2026 general ballot includes John H. Brown for Wards 4 & 5 and Alexi Miller at-large). Instruments: the capital improvement plan / project authorization votes, and the annual rate ordinances. This is the only issue on this list decided by a body other than the City Council, and its commissioners face voters directly — an unusually clean accountability loop for an assembly's recommendations.

**Political salience:** **High and rising.** Utility rates are the most broadly felt cost in the city, they hit renters through pass-throughs, and the 2026 at-large EWEB race drew **more than $20,000 in campaign spending** (Lookout, 2026-05-13) — real money for a utility board seat. The Lane County Watersheds Bill of Rights fight put EWEB itself in the news: EWEB commissioners publicly argued the measure would expose the utility to liability, and voters rejected it **27,011 to 47,314 (36.34% yes)** on 2026-05-19. Drinking water is now a proven mobilizing frame in Lane County.

**Constituencies:**
- *For a full-size plant:* public-health and emergency-management advocates (a single-source system with a 76-year-old plant is a real resilience risk, underscored by the Holiday Farm Fire and the McKenzie's exposure); EWEB staff and engineers; developers and employers needing water capacity for the 26,000-home growth target.
- *Against / at risk:* fixed-income and low-income ratepayers hit by the fixed-charge increase; renters; small businesses; Glenwood/Springfield-side neighbors of the intake and plant site.
- *Cross-pressured / persuadable:* environmental groups torn between Willamette withdrawal impacts and reducing single-source risk on the McKenzie; ratepayers who accept the need but not the size; customers already absorbing the Leaburg decommissioning surcharge and wildfire-mitigation costs.

**Policy changes on the table (least → most ambitious):**
1. Defer the second plant; invest in McKenzie plant rehabilitation and interties only.
2. Build the **scaled-back plant** now (the direction commissioners were moving in August 2026) with capacity to expand later.
3. Build the full-scale plant on the original schedule and accept the steeper rate path.
4. Build with an explicit **rate-equity package** — expanded low-income assistance, a lower fixed charge with steeper volumetric tiers, so the fixed-cost burden does not fall hardest on small households.
5. Sequence the plant against the Leaburg decommissioning and wildfire-hardening programs into a single published 20-year rate plan that ratepayers can see and vote commissioners on.

**Why an assembly rather than the normal process:** EWEB's board meetings are technical, sparsely attended, and the decision has moved $392M → $431M → "consider smaller" in four weeks with no structured public input on the size/rate trade-off. The trade-off itself — resilience against affordability, current ratepayers against future ones — is a value judgment being made inside an engineering-and-finance frame. And because commissioners are elected, an assembly's output has a direct accountability channel that most utility decisions lack.

**Disqualifiers / risks:** No active litigation found. Siting at Glenwood could draw land-use appeals later (**unverified**). The largest risk is framing: this can read as a purely technical question, and a badly scoped assembly would just be re-briefed by EWEB staff. Scope it to the *rate and equity* question ("who pays, how fast, and what do we get") rather than to plant sizing. Also note the decision may be substantively settled before an assembly could convene — the design vote already happened on 2026-07-20.

**Sources:**
- EWEB commissioners vote to start the process for a second water treatment plant — KLCC — https://www.klcc.org/politics-government/2026-07-20/eweb-willamette-river-water-treatment-plant — 2026-07-20
- Financial details make EWEB commissioners consider smaller Willamette River treatment plant — KLCC — https://www.klcc.org/politics-government/2026-08-10/eweb-eugene-water-treatment-plant-size-costs — 2026-08-10
- Power outages could be more common in parts of Eugene as EWEB tries to avoid sparking wildfires — KLCC — https://www.klcc.org/disasters-accidents/2026-08-15/power-outages-could-be-more-common-in-parts-of-eugene-as-eweb-tries-to-avoid-sparking-wildfires — 2026-08-15
- EWEB, SUB utility rates set to rise in 2026 — Lookout Eugene-Springfield — https://lookouteugene-springfield.com/story/latest-news/2025/12/12/utility-rates-set-to-rise-in-2026/ — 2025-12-12
- EWEB contracts firm to help with Leaburg Dam removal — KLCC — https://www.klcc.org/environment/2024-12-10/eweb-contracts-firm-to-help-with-leaburg-dam-removal — 2024-12-10
- Voters reject Lane County Watersheds Bill of Rights initiative — KLCC — https://www.klcc.org/politics-government/2026-05-19/lane-county-watersheds-bills-of-rights-ballot-measure-behind-on-election-night — 2026-05-19
- May 2026 Election Report (Measure 20-373: 27,011 yes / 47,314 no) — League of Oregon Cities — https://www.orcities.org/application/files/2417/7947/2066/May_2026_Election_Report.pdf — 2026-05-22
- November 3, 2026 candidate list including EWEB seats — City of Eugene Elections — https://www.eugene-or.gov/518/Elections — fetched 2026-08-15
- "Race for EWEB at-large seat sees more than $20K in campaign spending" — Lookout Eugene-Springfield — 2026-05-13 — headline/date via Google News; **URL unverified**

---

## 7. What replaces CAHOOTS — the design of Eugene's alternative and mobile crisis response

**One-line frame:** *What should Eugene's non-police crisis response look like — who operates it, what calls does it take, how many hours a day does it run, and what should the city pay for it?*

**Why it's live now:** CAHOOTS, the mobile crisis program Eugene was internationally known for, **stopped operating in Eugene in April 2025** after White Bird Clinic lost funding and laid off ~80% of its CAHOOTS staff (the city had covered 40% of its budget). Since then: the city published a service-gap report (Nov 2025); council directed the city manager to investigate relaunching a CAHOOTS-like program at roughly **$2.2 million a year**; Eugene issued an RFP for **7-day-a-week alternative response** (2026-02-02) and a separate peer-navigation RFP (Jan–Feb 2026); on **2026-04-07** the city announced **Ideal Option** would run peer navigation, over public pushback from **Willamette Valley Crisis Care (WVCC)**, the nonprofit founded by former CAHOOTS workers. On **2026-05-18** White Bird Clinic and WVCC settled their lawsuit over copyright and trade secrets — including the question of who may use the CAHOOTS name. Lookout ran "After CAHOOTS: Two visions emerge for 'alternative response' services in Eugene" (2026-03-15) and an opinion piece that not enough had been done (2026-02-28). As of 2026-07-10 a nonprofit was still soliciting donations to restore the service.

**Deciding body & instrument:** Eugene City Council — the **$2.2M/yr appropriation in the General Fund** (which collides directly with Issue 1) and the **contract award** through the city's RFP process. Note the Community Safety Payroll Tax already funds homeless services and community safety, so the payroll tax renewal in Issue 1 is the natural funding vehicle — the two issues are coupled.

**Political salience:** **High.** CAHOOTS was Eugene's civic identity export and its collapse is a live grievance. Alternative response was a named topic at the Ward 4 council candidate forum (2026-04-29). Coverage has been continuous across KLCC, OPB, Lookout, Register-Guard, KEZI and KVAL since March 2025, plus national attention. The contested award to Ideal Option over the ex-CAHOOTS workers' nonprofit gave the issue a clear conflict line.

**Constituencies:**
- *For a full restoration:* former CAHOOTS staff and WVCC; unhoused residents and their advocates (Community Supported Shelters, Nightingale-type volunteer groups); progressive council base; mental-health providers; downtown residents and businesses who used CAHOOTS as their first call.
- *Against / at risk:* fiscal conservatives who see $2.2M/yr as unaffordable against a $5.1M gap; EPD, if alternative response is funded by shifting police dollars; White Bird Clinic, whose institutional position and brand are entangled; incumbent contractors.
- *Cross-pressured / persuadable:* residents who want fewer police responses to mental-health calls *and* faster response times; council members who support the model but must fund it out of the same hole as fire and parks; the substantial group who assume CAHOOTS still exists.

**Policy changes on the table (least → most ambitious):**
1. Continue the current patchwork — peer navigation plus existing county mobile crisis — and fund nothing new.
2. Fund a limited-hours mobile response pilot (evenings/weekends only) inside the existing budget.
3. Fund the **7-day-a-week alternative response** at roughly $2.2M/yr from the General Fund, contracted competitively.
4. Fund it via a **dedicated line in the renewed Community Safety Payroll Tax**, so it survives future budget cycles — and put that line in front of voters as part of the referral.
5. Bring the service **in-house** as a city department (removing the contractor/brand fight entirely) with a civilian oversight structure.

**Why an assembly rather than the normal process:** The program died of a funding decision nobody deliberated, and its replacement is being made through procurement — an RFP scoring process the public cannot see or influence. The real question ("what should this service be, and is it worth $2.2M against fire, parks and library") is a values-and-priorities question being resolved as a contracting question. An assembly can produce the service specification the RFP should have been written against, and — coupled to Issue 1 — a defensible answer on whether it belongs in the payroll tax referral.

**Disqualifiers / risks:** **Partial criterion-4 failure, disclosed:** this issue *was* litigated — White Bird Clinic v. Willamette Valley Crisis Care over copyright and trade secrets — though the parties **settled on 2026-05-18**, which clears the bar going forward. Do not let an assembly relitigate the CAHOOTS name; scope to service design and funding, not to which organization gets the contract. Second risk: procurement is already partly locked (peer navigation awarded April 2026), so the assembly must target the still-open 7-day mobile response and the FY2028 funding decision. Third: this is emotionally charged in Eugene in a way that can overwhelm deliberation — strong facilitation required.

**Sources:**
- Eugene seeks provider for 7-day a week alternative response — KLCC — https://www.klcc.org/health-medicine/2026-02-02/eugene-seeks-provider-for-7-day-a-week-alternative-response — 2026-02-02
- Eugene announces new peer navigation program following loss of CAHOOTS — KLCC — https://www.klcc.org/housing-homelessness/2026-04-07/eugene-announces-new-peer-navigation-program-following-loss-of-cahoots — 2026-04-07
- White Bird Clinic and Willamette Valley Crisis Care agree to settle lawsuit — KLCC — https://www.klcc.org/health-medicine/2026-05-18/white-bird-clinic-and-willamette-valley-crisis-care-agree-to-settle-lawsuit — 2026-05-18
- Eugene after CAHOOTS: The end of the crisis response program, and the efforts to bring it back — KLCC — https://www.klcc.org/health-medicine/2025-06-03/eugene-after-cahoots-the-end-of-the-crisis-response-program-and-the-efforts-to-bring-it-back — 2025-06-03
- Eugene's CAHOOTS crisis intervention service suffers major funding blow — OPB — https://www.opb.org/article/2025/03/27/cahoots-budget-cuts-eugene/ — 2025-03-27
- CAHOOTS program in Eugene faces severe funding crisis — OPB — https://www.opb.org/article/2025/03/31/cahoots-program-in-eugene-faces-severe-funding-crisis/ — 2025-03-31
- Eugene City Council explores $2.2M plan to relaunch CAHOOTS-like crisis response program — KVAL — https://kval.com/news/local/eugene-city-council-explores-22m-plan-to-relaunch-cahoots-like-crisis-response-program — date unverified (2025–2026)
- "After CAHOOTS: Two visions emerge for 'alternative response' services in Eugene" — Lookout Eugene-Springfield — 2026-03-15 — headline/date via Google News; **URL unverified**

---

## Rejected candidates

- **Eugene Clean Energy Fund (Petition 2026-1) — 2% Large Retailer License Fee, on the 2026-11-03 ballot.** *Not dropped silently — this is the single highest-salience local decision in Eugene right now and it fails criterion 4 on timing and money.* Certified by the City Recorder on 2026-08-05 (8,700+ valid signatures required, 14,000+ submitted); modeled on Portland's PCEF; projected to raise ~$15M/yr from retailers with >$1B national and >$500k Eugene profits; backed by Breach Collective, Sierra Club and labor. KLCC reported on 2026-08-05 that **no organized opposition had materialized yet**, but a PCEF-style measure reliably draws heavily funded retail and grocer opposition, and voters' pamphlet arguments are due **2026-09-08** with the election eleven weeks out — far too short to stand up an assembly. **Recommendation:** treat this as a *Citizens' Initiative Review* opportunity in a future cycle, not an assembly, and watch the C&E filings after Labor Day to see whether the "heavily lobbied" flag actually trips. Sources: https://www.klcc.org/environment/2026-08-05/eugene-clean-energy-fund-qualifies-for-november-ballot (2026-08-05); https://www.eugene-or.gov/518/Elections (petition timeline, fetched 2026-08-15); https://www.eugenecleanenergyfund.org/ (campaign, fetched 2026-08-15).
- **CleanLane (Lane County waste/food-diversion facility siting).** Genuinely contested and well covered, but **actively litigated** — the Goshen site was denied, the county's zoning appeal was rejected in April 2026, the Court of Appeals affirmed the denial, and a hearings official was weighing another appeal as of 2026-08-07. Textbook criterion-4 exclusion.
- **J.H. Baxter & Co. west Eugene contamination.** High salience and deep environmental-justice history, but the operative land-use response is already adopted (council 7-1 on 2026-06-08 requiring pollution-permit attestation in industrial zones) and the underlying matter involves DEQ/EPA enforcement. Decided and enforcement-entangled.
- **Eugene 4J School District budget crisis.** Strong on salience — a deficit that grew from ~$30M to as much as $50M, up to 269 FTE eliminated, a $531.9M budget adopted 2026-05-28 — but there is **no specific pending instrument** for an assembly to aim at: the superintendent said no school closures are planned for 2026-27, and the district's revenue levers are largely set in Salem, not by the board. Revisit if 4J refers a local option levy (**unverified whether one is planned**).
- **The "panhandling"/roadside-donation ordinance.** Council rejected it 5-2 on 2026-02-18 with councilors citing an absence of safety data. Well covered, clearly local — but it is **decided**, and the underlying homelessness questions are too diffuse to state as a pending decision.
- **Eugene Emeralds stadium.** Eugene voters rejected the $15M bond in November 2024; as of 2026-04-02 the team is pitching **Medford** and has a PK Park lease through 2029. No longer a Eugene decision.
- **Residential Energy Performance Disclosure ordinance (EC 6.760–6.780), public hearing 2026-09-21.** Honestly a decent candidate — local, contested (realtor opposition is the pattern elsewhere), no litigation — but narrow and probably decided within weeks of the hearing. Listed here as a fallback, not a reject on the merits.
- **LTD service planning / 20-year plan** (public input opened 2026-08-07). Real and salient, but the LTD board is **appointed by the governor, not elected**, which weakens the democratic-legitimacy story a pilot assembly is meant to demonstrate.

---

## Data-source notes for tooling

**Agenda/meeting scraping (City of Eugene)**
- Platform is **CivicPlus (CivicEngage)**. No public JSON API found.
- **Verified working RSS:** `https://www.eugene-or.gov/RSSFeed.aspx?ModID=65&CID=All-calendar.xml` → `text/xml`, RSS 2.0, channel title `Eugene, OR - Agenda Creator`, items link to `https://www.eugene-or.gov/AgendaCenter/PreviousVersions/<id>`. Confirmed 2026-08-15. Low volume — it surfaces newly posted agendas only, so poll daily and diff.
- Agenda portal `https://www.eugene-or.gov/AgendaCenter` (200). Calendar module `https://www.eugene-or.gov/Calendar.aspx?CID=52`; individual events at `?EID=<n>` (e.g. `EID=35363`, `37059`, `37100` were live). Archive module `https://www.eugene-or.gov/Archive.aspx` (200).
- **The single best structured input is the Council Tentative Agenda PDF: `https://www.eugene-or.gov/DocumentCenter/View/5448`.** Stable URL, replaced in place each time it's updated (the copy fetched 2026-08-15 was stamped "Updated July 9, 2026"). Five pages, text-extractable with `pypdf` (no OCR needed), listing date / day / time / title / length / department contact plus a trailing "Additional Information Regarding Upcoming Public Hearings" table. **Diff this file on a schedule — it is the earliest public signal that a decision is coming.**
- Other stable DocumentCenter IDs worth pinning: `19956` = Eugene Code Chapter 2 (Elections) excerpts, text-extractable, contains §2.972 signature thresholds; `472` = Initiative Process; `473` = Referendum Process; `80463` = 2026 Council Meeting Calendar.
- Proposed ordinance texts are posted at `https://www.eugene-or.gov/1781/Proposed-Ordinances`, but the listing is **rendered client-side** — a naive HTML fetch returns the page chrome and the notice text with no ordinance rows. Needs a headless browser.
- The site's own search (`/Search?searchPhrase=…`) is useless to scrapers — it returns only global nav links. Use site-scoped external search instead.
- Meeting video is on YouTube: `https://www.youtube.com/@cityofeugenepublicmeetings5574`. YouTube's RSS by channel ID is the cheap route to "a meeting happened" signals.
- **Do not target `eugene.legistar.com`.** It resolves (HTTP 200) but is unprovisioned: `Calendar.aspx` → "Invalid parameters!", `Feed.ashx?M=Calendar` → an RSS item literally titled "Invalid feed", and `https://webapi.legistar.com/v1/eugene/events` → `{"Message":"An error has occurred.","ExceptionMessage":"LegistarConnectionString setting is not set up in InSite for client: eugene"}`. A scraper that assumes Legistar because the subdomain answers will silently collect nothing.

**Elections / ballot access**
- `https://www.eugene-or.gov/518/Elections` is the authoritative page for city measures and carries a **dated event-by-event petition timeline** (filed → ballot title certified → circulation approved → first signature → sheets submitted → certified). Scrape-friendly server-rendered HTML. This is where a new initiative shows up first.
- Lane County's results app (`https://apps.lanecountyor.gov/Elections/…`) is **JavaScript-required** and returns an empty shell to curl — needs a headless browser or the SoS feed.
- Usable no-JS substitute for margins: the **League of Oregon Cities** post-election report PDF, e.g. `https://www.orcities.org/application/files/2417/7947/2066/May_2026_Election_Report.pdf` — a single table of every Oregon local measure with pass/fail and raw counts, text-extractable with `pypdf`. **Caveat: it is labeled unofficial as of 5/22/2026 and it is wrong for at least two Lane County measures** — KEZI reported on 2026-05-25 that Measures 20-380 (4-H/OSU Extension) and 20-384 (Willamalane) flipped from failing to passing on later counts. Always reconcile against certified county results before quoting a margin.
- Oregon SoS county results: `https://results.oregonvotes.gov/ResultsSW.aspx?type=CTYALL&cty=09` (Lane = county 09).

**News**
- **Google News RSS is the reliable free search backend** once a WebSearch budget is exhausted: `https://news.google.com/rss/search?q=<urlencoded>&hl=en-US&gl=US&ceid=US:en`. Returns title, pubDate and source per item; no key, no rate limit hit during this research. Caveat: the `<link>` is a `news.google.com` redirect, so you get **headline + date + outlet but not a resolvable direct URL** — good for discovery and dating, not for citation. Example query that worked: `Eugene Springfield Fire split departments 2026`.
- **KLCC (`klcc.org`) is the best scrape target in this market** — no paywall, no bot blocking, clean date-stamped URLs (`/<section>/<yyyy-mm-dd>/<slug>`), and working tag pages: `/tags/eweb`, `/tags/cahoots`, `/tags/eugene-springfield-fire`, `/tags/eugene-city-council`, `/tags/housing`. Fetching a tag page yields headline + date + full URL for recent stories.
- **Lookout Eugene-Springfield** is fetchable, no paywall encountered; URL pattern `/story/<section>/<yyyy>/<mm>/<dd>/<slug>/`. Section index `https://lookouteugene-springfield.com/story/government-politics/` works. `/sitemap.xml` returns 301 (follow it).
- **Blocked / unusable:** `dailyemerald.com` → HTTP 403 on automated fetch (including `?s=` search). `shelterforce.org` → HTTP 403. `registerguard.com` → paywalled. `eugene.municipal.codes` → Cloudflare interstitial ("Just a moment… Enable JavaScript"), HTTP 403 to curl — **use the city's own posted Code excerpt PDFs instead** (`DocumentCenter/View/19956` for Chapter 2).
- **Reddit is fully blocked in this environment.** `https://www.reddit.com/r/eugene/search.json?...` returned **HTTP 403** with both a browser-style User-Agent and a contact-identifying UA; WebFetch refused the host outright ("unable to fetch from www.reddit.com"). No r/eugene sentiment data was collected for this report. If Reddit signal matters, it needs an authenticated Reddit API app (script-type OAuth) — the anonymous `.json` endpoint is not viable here.
- DuckDuckGo HTML (`/html/?q=`) and lite (`/lite/?q=`) endpoints returned pages with no parseable results — do not build on them.

**Other endpoints checked**
- `https://eweb.org` and EWEB board materials were not scraped directly; EWEB coverage here came from KLCC/Lookout. EWEB board agendas are a gap worth filling if Issue 6 advances.
- `https://cir.electionbyjury.org/lane-watershed-2026/` — fetchable, but see the warning above: AI-generated simulation, not a real CIR. Any tooling that indexes "citizens initiative review" + Lane County will pick this up; flag or exclude it.
