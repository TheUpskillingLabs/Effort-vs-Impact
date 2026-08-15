# Boulder, CO — Candidate Assembly Issues

**Researched:** 2026-08-15

**Deciding bodies in scope:**
- Boulder City Council (9 seats; currently **8 seated** — Mark Wallach resigned 2026-07-23 and the charter leaves the seat vacant until the Nov. 3, 2026 election. This is why the DDA referral died on a 4–4 tie.)
- Boulder Planning Board (co-adopter of the Boulder Valley Comprehensive Plan; must concur on Area III service-area expansion)
- Boulder Valley School District Board of Education (BVSD)
- Boulder County Board of County Commissioners + Boulder County Planning Commission (co-adopters of BVCP; approval path for any Area III expansion)
- Boulder City Manager's office (Nuria Rivera-Vandermyde) — note: **procurement/contracting is administrative, not a council vote**, which is the crux of the ALPR issue below

**Meeting/agenda platform:** **PrimeGov** (now a Granicus product — the portal footer is branded Granicus).
- Public portal: `https://bouldercolorado.primegov.com/public/portal`
- City's landing page: `https://bouldercolorado.gov/city-council-agendas-and-materials`
- Migrated July 17, 2025 from the prior system, branded internally as "OneMeeting."
- **Verified public JSON endpoints (no auth, no key, HTTP 200 with an ordinary browser User-Agent):**
  - `https://bouldercolorado.primegov.com/api/v2/PublicPortal/ListUpcomingMeetings`
  - `https://bouldercolorado.primegov.com/api/v2/PublicPortal/ListArchivedMeetings?year=2026`
  - `https://bouldercolorado.primegov.com/api/meeting/search?from=1/1/2026&to=12/31/2026`
- No RSS feed found on the portal. Agendas post Thursdays, one week before each meeting.

**Local news sources used:**
- The Boulder Reporting Lab — https://boulderreportinglab.org (nonprofit; the dominant local government beat. RSS verified working: `https://boulderreportinglab.org/feed/`)
- KUNC (NPR, Greeley/Northern CO) — https://www.kunc.org
- Colorado Sun — https://coloradosun.com (RSS verified: `https://coloradosun.com/feed/`)
- Axios Boulder — https://www.axios.com/local/boulder
- Colorado Public Radio — https://www.cpr.org
- Yellow Scene Magazine — https://yellowscene.com
- Daily Camera — https://www.dailycamera.com (**paywalled; `/feed/` returns HTTP 403 to scripted requests**)
- Boulder Beat — https://boulderbeat.news (**appears defunct — RSS last item Jan 5, 2024. Useful archive only; do not list as a live source.**)

**Ballot access** (City of Boulder home-rule charter, as published by the City Clerk for the 2026 cycle):
- **Signature threshold, 2026: 3,418 valid signatures** for a municipal initiative — formula is "at least 10% of the average of the number of registered electors of the city who voted in the previous two municipal candidate elections" (Charter §38A). (For comparison, the 2025 number was 3,401 — the threshold is recomputed each cycle.)
- **Circulation window:** signatures must be dated no more than **180 days** before the petition is filed (Charter §39).
- **2026 deadlines:** file with the City Clerk by **May 27, 2026, 5:00 p.m.** (160th day before the election); Clerk issues a sufficiency determination by **June 11, 2026** (15th day after filing); Clerk certifies to Council by **July 6, 2026** (120th day before the election). A 15-calendar-day cure window for supplemental signatures follows any insufficiency notice.
- **Who certifies:** the **City Clerk** examines the petition and issues a written sufficiency determination, then certifies to City Council. Council sets the ballot title, holds a public hearing, and either adopts the initiative outright or refers it to the ballot (Charter §48).
- Petition packets max 50 signatures; a 5-person registered-elector petition committee must appear on every page (Charter §38); pre-circulation Clerk review under §38B; circulators 18+.
- Source: https://bouldercolorado.gov/municipal-initiative-petition-guidelines
- **Practical note for 2026:** the May 27 filing deadline has already passed. Any citizen initiative arising from an assembly convened now targets **November 2027** or a Council referral, not November 2026.
- County-level comparison (useful scale check): the **Boulder County** commission-expansion petition needed **13,064** valid signatures and submitted **18,422** on July 14, 2026.

---

## Issue Shortlist

| # | Issue | Deciding body | Salience | Media profile | Litigation/lobby risk | Assembly fit |
|---|-------|---------------|----------|---------------|----------------------|--------------|
| 1 | BVSD elementary school closures / consolidation | BVSD Board of Education | **High** — ~1,000 people attended six community meetings; parent groups already organized per-school | **High** — BRL running series since March 2026; 9News; Boulder Today | **Low** — no litigation found; no funded lobby, but intense per-school constituency politics | **High** — a distributive, zero-sum siting decision with a hard October 2026 vote date |
| 2 | Area III–Planning Reserve service-area expansion | City Council + Planning Board + County Planning Commission + BOCC | **High** — 493 acres, up to 8,700 units; Planning Board flipped 4–3 against, then 4–3 for | **High** — BRL, Longmont Leader; Boulder Chamber published a position | **Low–Med** — no litigation; Boulder Chamber advocating publicly but no campaign spending found | **High** — genuinely undecided, multi-year, four bodies must concur, classic growth-boundary tradeoff |
| 3 | Wildfire hardening mandate for **existing** homes in the WUI | City Council (Title 10 building/WUI code amendment) | **High** — ~16,000 existing homes affected; post-Marshall Fire; multiple 2025 candidates ran on it | **Med–High** — BRL covered Dec 2024, Aug 2025, May 2025, Jan 2026 | **Low** — no litigation, no organized opposition found | **High** — Council explicitly *declined* to put an ordinance on the 2026 agenda and asked only for a cost-benefit study. Textbook stall. |
| 4 | Grid resilience & the Xcel franchise: whether to use a franchise opt-out window | City Council (franchise agreement opt-out; requires 2/3 council vote **or** voter approval) | **High** — days-long Dec 2025 shutoff, again March 2026; businesses seeking compensation | **High** — BRL, CPR, KUNC, Colorado Politics | **Med** — Xcel is a well-resourced regulated utility and an active PUC litigant; the *local* franchise question is not itself litigated | **Med–High** — Boulder already tried municipalization and lost; a fresh mandate would be genuinely informative |
| 5 | Automated license plate readers: whether Council should adopt a surveillance-oversight ordinance | City Council (surveillance/privacy ordinance) — **contract itself is the City Manager's call** | **High** — already a November 2026 mayoral campaign issue | **High** — BRL (Mar/Apr/Aug 2026), Colorado Sun, Axios | **⚠️ PARTIALLY FAILS** — active class action filed 2026-05-27 against the police chief. See §5. | **Med** — the ordinance question is broader than the suit, but the suit will shadow any deliberation |
| 6 | Downtown Development Authority, second attempt | City Council (referral ordinance; then a DDA-electors vote) | **High** — died 4–4 on 2026-08-06; staff directed to keep working | **High** — BRL explainer + coverage, KUNC, Yellow Scene | **⚠️ PARTIALLY FAILS** — Boulder Chamber & Downtown Boulder Partnership are organized proponents. See §6. | **High on deadlock, Med on cleanliness** — perfectly tied, and the objection is *procedural legitimacy*, which is exactly what an assembly supplies |
| 7 | Vacant-home tax: implementation design | Voters Nov 3, 2026, then City Council implementing ordinance before Jan 1, 2028 | **Med–High** — 7–1 referral; skeptics cite Berkeley's shortfall | **Med** — BRL, Yellow Scene, city release | **Low** — none found | **Med–High** — the *rate/exemption/enforcement* design is unresolved and lands in 2027, a clean assembly window |

---

## 1. BVSD elementary school closures and consolidation

**One-line frame:** If Boulder Valley School District must close or consolidate elementary schools, which schools should close, and what should the district owe the communities that lose one?

**Why it's live now:** BVSD announced a closure-planning process in January 2026 after losing roughly 3,700 students since 2017, with another ~1,700-student decline projected over five years. Six community meetings ran through April 22, 2026, drawing about 1,000 attendees total (~200 at the final Monarch High session). Staff take options to the Board of Education in **August 2026**, with a **final vote anticipated in October 2026**. Parents at individual schools have already formed defensive campaigns — the Whittier Elementary PTA under president Cheryl McBay, and "South Boulder Advocacy" led by Mesa Elementary PTO president Sasha Schwartz (BRL, 2026-06-09).

**Deciding body & instrument:** **BVSD Board of Education** (President Nicole Rajpal), by board resolution adopting a closure/consolidation plan and the attendant boundary changes. Not a city matter; not subject to the city's initiative process.

**Political salience:** **High.** ~1,000 attendees across six meetings is unusually strong turnout for a district process. Named schools under enrollment/capacity pressure include Flatirons, Heatherwood, Kohl and Eldorado K-8 (below 50% capacity), plus Whittier International, Louisville Elementary, Monarch K-8 and Columbine Elementary flagged for longer-term concern. Mesa Elementary is at roughly 230 students / 55% capacity. Boulder's last consolidation, in 2000, "once divided Boulder" and left durable mistrust (BRL, 2026-03-22) — district officials cite that history as the reason for earlier engagement this round.

**Constituencies:**
- *For change:* District finance leadership (CFO Bill Sutter), families at under-enrolled schools who see thin staffing, and taxpayers facing per-pupil cost pressure. Deputy Superintendent Laura De La Cruz and Assistant Superintendent Rob Price ran the engagement.
- *Against / at risk:* Neighborhood parent organizations at each named school — currently the Whittier PTA and South Boulder Advocacy, but every candidate school will generate one. Mesa parents raise a specific equity claim: survey data showed ~50% of respondents reported neurodivergent designations, and they argue consolidation would break a specialized support system.
- *Cross-pressured / persuadable:* Families in Louisville, Superior and Broomfield (the district extends well past the city), renters and newer families without a school-loyalty stake, and district-wide parents who want smaller class sizes district-wide even at the cost of a closure elsewhere.

**Policy changes on the table:**
1. No closures — absorb the cost, accept thinner staffing district-wide.
2. Consolidate programs/grade configurations without closing buildings (e.g., pair schools, move K-8 boundaries).
3. Close a small number of the sub-50%-capacity elementaries and repurpose the buildings (preschool, district services, affordable housing for staff).
4. Close on a defined enrollment-threshold rule set *in advance* by the community, so future rounds are formulaic rather than political.
5. Full boundary redraw across Boulder, Louisville-Superior and Broomfield with explicit equity criteria for special-education and neurodivergent program continuity.

**Why an assembly rather than the normal process:** The normal process produces exactly the dynamic BVSD says it wants to avoid: each affected school mobilizes to protect itself, the board picks among mobilized groups, and the losers conclude the process was rigged — which is precisely the 2000 legacy. A randomly selected, district-wide assembly can set the *criteria* before the *list*, which is the one thing per-school advocacy structurally cannot do. Notably, the board has **not defined numerical targets** for per-pupil costs or staff-to-student ratios — that vacuum is the deliberative question.

**Disqualifiers / risks:** **Timing is the main problem.** A vote is expected in October 2026; a serious assembly cannot be convened, informed and concluded before then. Realistic framings: (a) run it now on the *criteria and mitigation package*, not the school list; or (b) treat the October decision as the trigger and run an assembly on the *next* round, which the enrollment projections guarantee. Also note a separate, unrelated BVSD controversy in August 2026 (superintendent's apology over the district's handling of antisemitic harassment) that is consuming board attention.

**Sources:**
- "Too many schools, too few students: Boulder Valley School District weighs school closures" — https://boulderreportinglab.org/2026/03/10/too-many-schools-too-few-students-bvsd-begins-planning-possible-closures/ — 2026-03-10
- "As Boulder Valley School District weighs school closures, a bitter 2000 consolidation still looms" — https://boulderreportinglab.org/2026/03/22/a-school-consolidation-once-divided-boulder-now-the-district-is-about-to-try-again/ — 2026-03-22
- "Inside the final BVSD community meeting on possible school closures" — https://boulderreportinglab.org/2026/04/26/inside-bvsds-final-meeting-on-possible-school-closures-as-declining-enrollment-forces-tough-choices/ — 2026-04-26
- "As Boulder Valley School District weighs closures, parents organize to save their schools" — https://boulderreportinglab.org/2026/06/09/as-boulder-valley-school-district-weighs-closures-parents-organize-to-save-their-schools/ — 2026-06-09
- "Boulder Valley School District announces possible elementary school consolidation" (9News) — https://www.9news.com/article/news/education/boulder-valley-school-district-possible-elementary-school-consolidation/73-390187db-7848-4c72-b007-476f6494cca3 — 2026

---

## 2. Area III–Planning Reserve service-area expansion

**One-line frame:** Should Boulder extend city services into the 493-acre Area III Planning Reserve to build up to 8,700 homes, and if so, under what binding conditions on affordability, infrastructure cost and open-space protection?

**Why it's live now:** In **January 2026** the Planning Board voted **4–3** that there was *not* sufficient community need to keep studying expansion. In **February 2026** City Council voted **7–2** to continue the study anyway, sending it back. In **March 2026** the Planning Board reversed itself **4–3** and allowed planning to proceed. The next step is a **Service Area Expansion Plan**, roughly a two-year drafting effort requiring approval from the Planning Board, City Council, Boulder County Planning Commission *and* the Board of County Commissioners. If any body ultimately objects, the question pauses until the next Boulder Valley Comprehensive Plan update, 5–10 years out.

**Deciding body & instrument:** Sequential concurrence by **Boulder Planning Board**, **Boulder City Council**, **Boulder County Planning Commission** and **Boulder County Board of County Commissioners**, via a Service Area Expansion Plan and the corresponding BVCP land-use map amendment (Area III → Area II).

**Political salience:** **High.** Two 4–3 flips in three months on the same body is about as strong a signal of genuine indeterminacy as local government produces. Council's February vote was 7–2 — Brockett, Benjamin, Kaplan, Marquis, Schuchard, Speer and Winer for; **Wallach and Adams against**. Wallach said he would switch if middle-income housing guardrails were established, which is a direct invitation to a conditions-setting deliberation. The Boulder Chamber published a formal "Adopt Motion Finding Sufficient Community Need" position (2026-02-17). Separately, the November 2025 BVCP statistically-valid survey (n=688) found ~82% support for duplexes in single-family zones and ~70% for townhomes/multiplexes — but that measures *infill* appetite, not greenfield expansion, and conflating the two would be a research error.

**Constituencies:**
- *For change:* Housing advocates, younger and renter households (74% of renters backed higher-density housing vs. 41% of homeowners in the BVCP survey), the **Boulder Chamber**, employers facing in-commuting.
- *Against / at risk:* Open-space constituency and **PLAN-Boulder County** (the historical growth-boundary bloc), fiscal conservatives citing the ~**$1 billion** off-site infrastructure estimate, residents near Boulder Valley Ranch and the shooting range, water-supply skeptics. The city already owns roughly 220 of the 493 acres, much of it bought for future parks — so "we bought this for open space" is a live claim.
- *Cross-pressured / persuadable:* Infill-first YIMBYs who want the units but think Area III delays them (earliest development is the 2030s); climate voters weighing sprawl against housing; Councilmember Adams, whose objection is about who benefits rather than whether to build.

**Policy changes on the table:**
1. Stop — reaffirm the growth boundary, direct capacity to infill under the new BVCP.
2. Proceed to a Service Area Expansion Plan with no binding conditions (status quo path).
3. Proceed with a **binding middle-income/permanently-affordable percentage** written into the expansion plan (Wallach's stated condition).
4. Proceed with a **fiscal trigger**: no expansion approval until an off-site infrastructure funding source is identified, so the ~$1B doesn't land on the general fund.
5. Proceed with a land swap — develop a defined sub-area and permanently dedicate the balance (including the 220 city-owned acres) as open space by charter or conservation easement.

**Why an assembly rather than the normal process:** Four bodies must concur and two have already split nearly evenly, twice. The dispute isn't factual — everyone agrees on the acreage and roughly on the cost — it's about how to weigh housing supply against the growth boundary, which is a values question that a two-vote-margin board cannot settle credibly. The two-year plan drafting window is unusually well suited to a deliberative body: there is time, and there is a concrete document to write conditions into.

**Disqualifiers / risks:** No active litigation found. Chamber advocacy is public and modest, not a funded campaign. Real risks: (a) the timeline is long enough that assembly recommendations may land after the composition of Council changes on Nov. 3, 2026; (b) the county bodies are outside the city's initiative process, so an assembly convened by city actors has no leverage over half the approval chain; (c) any recommendation touching open-space land the city already owns may run into charter open-space provisions — **unverified**, worth a legal check before framing.

**Sources:**
- "Boulder City Council advances Area III expansion study with potential for 8,700 homes" — https://boulderreportinglab.org/2026/02/12/boulder-city-council-advances-study-of-area-iii-expansion-that-could-eventually-add-8700-homes/ — 2026-02-12
- "Boulder Planning Board reopens study of Area III expansion" — https://boulderreportinglab.org/2026/03/26/boulder-planning-board-reverses-course-on-area-iii-expansion-allowing-planning-to-proceed/ — 2026-03-26
- "Boulder City Council votes to continue Area III expansion study" (Longmont Leader) — https://www.longmontleader.com/local-news/boulder-city-council-votes-to-continue-area-iii-expansion-study-with-up-to-8700-homes-possible-11878185 — 2026-02
- City of Boulder, "Area III-Planning Reserve Urban Services Study" — https://bouldercolorado.gov/projects/area-iii-planning-reserve-urban-services-study — accessed 2026-08-15
- Boulder Chamber, "Adopt Motion Finding Sufficient Community Need: Area III Planning Reserve" — https://www.boulderchamber.com/2026/02/17/adopt-motion-finding-sufficient-community-need-area-iii-planning-reserve/ — 2026-02-17
- "Boulder residents back higher housing density, new survey finds" — https://boulderreportinglab.org/2025/12/14/boulder-survey-finds-strong-support-for-higher-housing-density-as-city-plans-major-policy-shift/ — 2025-12-14

---

## 3. Wildfire hardening requirements for existing homes in the wildland-urban interface

**One-line frame:** Should Boulder require the roughly 16,000 existing homes in its wildland-urban interface to meet fire-hardening standards — and if so, on what trigger, on what timeline, and who pays?

**Why it's live now:** Council unanimously approved fire-resistant building and landscaping standards on **2025-05-15**, effective **2025-08-01**, but **only for new construction and certain remodels** in the WUI. Ordinance 8721 (adopted **2026-01-08**) updated landscaping and wildland code standards. At the **January 2026 retreat** Council named wildfire mitigation one of six 2026 priorities — but the actual deliverables are a consolidated homeowner webpage and a **cost-benefit analysis** of home-hardening mandates and fuel management. Reporting is explicit that **Council did not add a retrofit ordinance to its 2026 agenda**, despite several members having campaigned on it in 2025. That is a deliberate deferral, not an oversight.

**Deciding body & instrument:** **Boulder City Council**, by ordinance amending the wildland/WUI standards in the municipal code (the same vehicle as Ordinance 8721), plus companion changes to the rental-licensing code if a license-renewal trigger is chosen.

**Political salience:** **High**, and unusually well evidenced. The 2026 Boulder Resident Survey and the Fund Our Future community conversations (500+ participants ranking investment across 25 city services) both put **wildfire response and preparedness at the top of community priorities**. The Marshall Fire is the regional reference point. Xcel's public safety power shutoffs — Dec 2025, again March 13, 2026 — keep wildfire risk in the news monthly. Councilmember Mark Wallach's framing was blunt: "It will be more than 100 years before all homes meet the new standards."

**Constituencies:**
- *For change:* Wildfire-exposed neighborhoods, fire services, insurers and homeowners facing non-renewal or premium spikes, Councilmembers Matt Benjamin (who proposed compliance deadlines for homes flagged high-risk by the city's assessment program) and formerly Wallach.
- *Against / at risk:* Fixed-income and older homeowners in the WUI facing uncompensated retrofit costs; landlords, if the trigger is the rental license; sellers, if the trigger is point-of-sale; and the city's own budget — staff estimated a retrofit program needs roughly **10 additional FTE** (code inspectors, landscape reviewers) at a moment when the city imposed a hiring freeze against a $7.5M general-fund shortfall.
- *Cross-pressured / persuadable:* Renters in the WUI (exposed to the risk, don't own the retrofit decision); homeowners who support the standard but not the cost; anyone weighing this against the density push, since councilmembers have already flagged that more units near the WUI strains fire suppression.

**Policy changes on the table:**
1. Incentives only — expand the Wildfire Resilience Assistance Program (WRAP) grants and keep compliance voluntary.
2. Defensible-space only — mandate the 5-foot noncombustible buffer, juniper removal and fence materials for existing homes, without structural retrofits.
3. Trigger-based compliance at point of sale or rental-license renewal — staff estimated this would pull in roughly **1,200 properties per year**.
4. Risk-tiered deadlines — homes the city's assessment program flags as highest-risk must comply within a fixed number of years (the Benjamin proposal).
5. Full retrofit mandate on a fixed horizon, paired with a dedicated funding mechanism (a fee, a share of the vacancy-tax revenue, or a bond) and means-tested subsidy.

**Why an assembly rather than the normal process:** Council openly wants this and openly won't do it — the retrofit question has been deferred from Dec 2024 to Aug 2025 to the Jan 2026 retreat to "a cost-benefit analysis." The block is not disagreement about whether wildfire is a threat; it is that the burden falls on an identifiable group of existing homeowners who will show up at hearings, while the beneficiaries are diffuse and future. That asymmetry is the canonical case for a randomly selected body, and the fact that the affected group (~16,000 homes) is large enough to be sampled makes it tractable.

**Disqualifiers / risks:** No litigation. No organized moneyed opposition found. The genuine risks are fiscal (10 FTE against a hiring freeze) and a possible state-preemption question on building-code retroactivity — **unverified**; Colorado has been legislating actively in this space (e.g., HB24-1300 appears in wildfire-code search results) and a preemption check is required before framing. Insurance-industry interest exists but no local lobbying campaign was found.

**Sources:**
- "Boulder City Council eyes stricter wildfire hardening rules, including for existing homes" — https://boulderreportinglab.org/2024/12/15/boulder-city-council-eyes-stricter-wildfire-hardening-rules-including-for-existing-homes/ — 2024-12-15
- "Boulder set to require fire-resistant materials and plants for new homes" — https://boulderreportinglab.org/2025/05/15/boulder-set-to-mandate-fire-resistant-materials-and-plants-for-new-homes-in-wildfire-zones/ — 2025-05-15
- "Boulder eyes extending wildfire safety rules to existing homes" — https://boulderreportinglab.org/2025/08/03/boulder-city-council-considers-extending-wildfire-safety-rules-to-existing-homes-but-faces-financial-hurdles/ — 2025-08-03
- "Boulder City Council's 2026 to-do list: bike theft, wildfires, wages, power outages" — https://boulderreportinglab.org/2026/01/15/boulder-city-council-sets-six-priorities-for-2026-amid-one-year-term/ — 2026-01-15
- City of Boulder, Wildfire Resilience Assistance Program — https://bouldercolorado.gov/WRAP — accessed 2026-08-15
- "Survey finds most Boulder residents satisfied with quality of life" (BizWest) — https://bizwest.com/2026/05/22/survey-finds-most-boulder-residents-satisfied-with-quality-of-life/ — 2026-05-22

---

## 4. Grid resilience and the Xcel franchise: whether to use an opt-out window

**One-line frame:** Given repeated multi-day power shutoffs, should Boulder exercise a franchise opt-out and pursue municipal or community-owned electricity infrastructure, negotiate binding reliability terms with Xcel, or accept shutoffs as the price of wildfire safety?

**Why it's live now:** During windstorms in **December 2025**, Xcel executed a public safety power shutoff that left thousands of Boulder customers without power **for days** — seniors at an assisted-living facility were at risk of losing oxygen access, and businesses lost tens of thousands of dollars. It was the second such planned shutoff since 2024. Another PSPS ran on **2026-03-13** under Red Flag conditions. In **January 2026** Council sent Xcel a formal letter citing prolonged shutoffs, missed 2022 and 2024 emissions benchmarks, and pending PUC rate increases, and calling the shutoffs "a consequence of prioritizing litigation avoidance ahead of protecting our community." On **2026-01-29** city officials publicly backed Boulder businesses seeking compensation. Council named **electric grid resilience** one of its six 2026 priorities. Crucially: Council has said it is **not** currently seeking to exit the franchise, **but the 2020 agreement provides multiple opt-out opportunities over the next five years**, exercisable by a **two-thirds Council vote or by voter approval**.

**Deciding body & instrument:** **Boulder City Council** — a franchise opt-out resolution (2/3 vote) or a Council-referred / citizen-initiated ballot measure; plus ordinances or budget lines for municipal microgrids, and an undergrounding financing mechanism.

**Political salience:** **High.** Boulder spent roughly a decade on municipalization before voters approved the Xcel franchise in 2020, so the community has already argued this once at length and has unusually high literacy on it. The 2026 shutoffs reopened it. Wildfire preparedness ranks top-tier in both the 2026 Resident Survey and the Fund Our Future prioritization exercise. Coverage is broad — CPR ran a piece specifically on the backlash ("Xcel cut the power. Then came the backlash," 2026-01-28).

**Constituencies:**
- *For change:* Businesses that lost revenue in December 2025; medically vulnerable residents and assisted-living facilities; the residual municipalization coalition; climate advocates angry about missed emissions targets.
- *Against / at risk:* Ratepayers wary of stranded costs from a second municipalization attempt (the last one cost the city years and money and ended in a franchise); Xcel; anyone who thinks shutoffs are the correct wildfire tradeoff. The **Boulder Chamber** is engaged here too, but on a different axis — it has pushed for a financing mechanism to incentivize Xcel undergrounding, poles-and-wires hardening and microgrids rather than exit.
- *Cross-pressured / persuadable:* Foothills residents who bear both the fire risk and the outages; people who voted for the 2020 franchise and now feel it underdelivered; renters with no backup power and no say in building resilience investments.

**Policy changes on the table:**
1. Accept the status quo; pursue reliability commitments and outage compensation through the letter/PUC process.
2. Fund distributed resilience directly — municipal microgrids and backup power at critical facilities (senior housing, shelters, rec centers) via the capital budget.
3. Create a local financing mechanism for undergrounding and grid hardening (the Chamber's framing), tied to enforceable milestones.
4. Condition the *next* franchise opt-out window on measurable outage and emissions targets — publish the thresholds in advance so the trigger is automatic.
5. Exercise an opt-out and refer municipalization or a community-choice-energy arrangement to the voters.

**Why an assembly rather than the normal process:** Boulder's last decision on this was a decade-long, adversarial, expensive campaign that ended in a compromise a large share of residents now find unsatisfying. Rerunning it as a campaign will reproduce the same trench lines. An assembly can surface what residents will actually pay for reliability — the tradeoff nobody puts on a ballot — and can set the opt-out trigger conditions *before* the next window opens rather than in the heat of it. The 2/3 Council threshold also means a Council-only path is unlikely; some form of public mandate is needed regardless.

**Disqualifiers / risks:** **Flag: Xcel is a regulated monopoly with substantial regulatory and legal capacity, an active litigant at the Colorado PUC, and pending rate cases.** It is not "heavily lobbying Boulder City Council" in the campaign-finance sense today, and the local franchise question is not itself in court — but any assembly on this will be operating opposite a well-resourced counterparty, and much of the real decision-making sits at the **state PUC**, outside local control. That partial-preemption problem is the single biggest weakness of this issue. Verify the **exact opt-out years** in the 2020 franchise agreement before scoping — reporting says "multiple opportunities over the next five years" but does not name the years, and I could not verify specific dates. **Unverified.**

**Sources:**
- "'Simply not acceptable': Boulder City Council warns Xcel over prolonged power shutoffs, missed climate targets" — https://boulderreportinglab.org/2026/01/20/simply-not-acceptable-boulder-city-council-warns-xcel-over-prolonged-power-shutoffs-missed-climate-targets/ — 2026-01-20
- "Xcel cut the power. Then came the backlash" (CPR) — https://www.cpr.org/2026/01/28/xcel-power-cuts-community-impact-costs/ — 2026-01-28
- "Boulder businesses lost thousands after Xcel's December power shutoff. City leaders want Xcel to pay them back." — https://boulderreportinglab.org/2026/01/29/boulder-businesses-seek-compensation-after-xcels-december-power-shutoff-with-city-officials-backing-them/ — 2026-01-29
- "Xcel confirms power shutoffs in Boulder Saturday amid extreme wildfire danger" — https://boulderreportinglab.org/2026/03/13/xcel-warns-boulder-power-shutoff-likely-saturday-amid-extreme-wildfire-danger/ — 2026-03-13
- "Xcel Energy: Power shutoff 'likely' Saturday in Boulder, Jefferson counties" (Colorado Politics) — https://www.coloradopolitics.com/2026/03/13/xcel-energy-power-shutoff-likely-saturday-in-boulder-jefferson-counties/ — 2026-03-13
- City of Boulder, "Public Safety Power Shutoffs and Related Outages FAQ" — https://bouldercolorado.gov/public-safety-power-shutoffs-and-related-outages-frequently-asked-questions — accessed 2026-08-15

---

## 5. Automated license plate readers and a surveillance-oversight ordinance

> **⚠️ Partially fails criterion 4 (not actively litigated). Stated explicitly rather than dropped — see Disqualifiers.**

**One-line frame:** Should Boulder City Council adopt a surveillance-technology ordinance governing what data the city may collect about residents' movements, how long it is kept, and who outside Boulder may access it — and should the city continue operating automated license plate readers at all?

**Why it's live now:** After backlash over Flock Safety's data-sharing — including reporting that **ICE gained access to Flock's national network without warrants** — Boulder opened a competitive bid process in **March–April 2026** to replace or re-award its ALPR contract (**49 cameras** solicited; **40+ Flock cameras** currently deployed). City Manager Nuria Rivera-Vandermyde renewed Flock in March 2026 under a temporary extension with new privacy provisions and a **30-day exit clause**. The planned June–August 2026 vendor pilot **never happened**, and as of **2026-08-13** the city has blown past its September 15 vendor-selection deadline. Rivera-Vandermyde: "We are still working through both our process and our path forward."

**Deciding body & instrument:** This is the crux. Deputy City Manager Chris Meschuk told Council in March 2026 that the Flock contract is **an administrative matter overseen by the City Manager — Council has no direct say over the contract.** The City Attorney added that **Council *can* establish broader surveillance and privacy policies to guide future contracts.** So the instrument available to an assembly is a **Council-adopted surveillance-technology ordinance** (use policy, retention limits, external-sharing prohibitions, annual reporting, and possibly a council-approval requirement for new surveillance tech) — not the procurement itself. That gap between "what residents are angry about" and "what the elected body controls" is itself a first-rate deliberative question.

**Political salience:** **High and rising.** Surveillance is already a **November 3, 2026 mayoral campaign issue** — mayoral candidate Aquiles La Grave and Councilmember Taishya Adams (also running) have both called for Council to exercise more authority over the contract. Reported operational facts feeding the argument: data searchable for 30 days locally (Flock recently cut this to 7 days nationally), and a documented false-positive rate around 7%. Dozens of firms responded to the bid solicitation.

**Constituencies:**
- *For change:* Immigrant-rights and civil-liberties constituencies (ICE access is the sharpest edge), **ACLU**, the national **deflock.org** campaign, privacy-focused residents, the two named mayoral/council candidates.
- *Against / at risk:* Boulder Police Department (Chief Stephen Redfearn) and residents who credit ALPRs for auto-theft and stolen-vehicle recovery — note that Council's own 2026 priority list includes **bike theft**, so property crime is a live civic concern; victims' advocates.
- *Cross-pressured / persuadable:* Residents who want the crime-solving benefit but not the federal data sharing — i.e., people who would accept ALPRs with a hard no-external-sharing rule and 7-day retention. This is likely the median Boulder resident and it is exactly the position no one is currently organizing.

**Policy changes on the table:**
1. Codify the current temporary privacy provisions (30-day exit, retention limits) into a binding ordinance instead of contract terms.
2. Adopt a full surveillance-technology ordinance: public use policy, mandatory annual audit and public report, hard retention cap, and an explicit ban on sharing with federal immigration enforcement.
3. Require **Council approval** for acquisition of any new surveillance technology — closing the administrative/legislative gap the City Attorney identified.
4. Award to a vendor selected against community-set privacy criteria rather than lowest-cost/most-features.
5. End the ALPR program entirely (the ACLU/deflock position) and remove the cameras.

**Why an assembly rather than the normal process:** The decision is currently being made by procurement staff behind an administrative wall while the elected body says it has no authority, and the public debate has collapsed into "all ALPRs" versus "no ALPRs" — with an unelected campaign season about to flatten it further. An assembly can do the one thing neither the RFP process nor the campaign can: specify the *terms* under which the technology would be acceptable, and hand Council a legislative product it actually has the power to pass.

**Disqualifiers / risks:**
- **ACTIVE LITIGATION.** On **2026-05-27**, two Boulder residents filed what is described as a first-of-its-kind Colorado class action against **Police Chief Stephen Redfearn** and records specialist **Dawn VanAckeren**, alleging the ALPR network (the complaint references 31 cameras) constitutes illegal warrantless mass surveillance under the **Colorado Constitution** (deliberately pleaded on state, not federal, grounds). Counsel: civil rights attorney **Andy McNulty**. The suit seeks to block the program, declare it unconstitutional, and compel records release.
- **Assessment:** the lawsuit targets the *existing program's constitutionality*; the assembly question proposed here is the *prospective governance ordinance*. These are separable, and a court ruling either way still leaves the ordinance question open. But the city attorney's office will be cautious, staff may decline to engage substantively while the case is pending, and any assembly output will be read as litigation positioning. **If the pilot's priority is a clean first case, pick another issue.** If the pilot can tolerate a legally shadowed topic, this is the most energized issue on the list.
- Separately: Flock faces a national class action (Gibbs Mura, filed Feb 2026) and adverse rulings elsewhere (a Virginia judge allowed a Flock suit to proceed), so vendor-level legal risk is elevated regardless of vendor choice.

**Sources:**
- "Boulder opens bidding process that could replace Flock license plate reader cameras" — https://boulderreportinglab.org/2026/03/13/boulder-opens-bidding-process-for-license-plate-reader-cameras-amid-flock-backlash/ — 2026-03-13
- "Boulder opens license plate reader contract after Flock concerns, drawing interest from dozens of firms" — https://boulderreportinglab.org/2026/04/23/boulder-opens-bidding-for-license-plate-reader-contract-inviting-competitors-to-flock/ — 2026-04-23
- "Boulder seeks license plate reader vendor amid Flock privacy concerns" (Axios Boulder) — https://www.axios.com/local/boulder/2026/04/27/boulder-flock-license-plate-reader-bids-privacy-concerns — 2026-04-27
- "Boulder residents sue police chief over alleged Flock camera 'mass surveillance'" — https://boulderreportinglab.org/2026/05/28/boulder-residents-sue-police-chief-over-alleged-mass-surveillance-by-flock-cameras/ — 2026-05-28
- "2 Boulder residents sue over city's use of Flock cameras" (Colorado Sun) — https://coloradosun.com/2026/05/28/lawsuit-boulder-police-flock-cameras/ — 2026-05-28
- "Boulder delays automatic license plate reader contract decision that could replace Flock" — https://boulderreportinglab.org/2026/08/13/boulder-delays-license-plate-reader-decision-as-scrutiny-of-flock-intensifies/ — 2026-08-13
- Olivia Mendoza (opinion), "Boulder is putting mass surveillance technology before civil liberties" — https://boulderreportinglab.org/2026/08/11/olivia-mendoza-boulder-is-putting-mass-surveillance-technology-before-civil-liberties/ — 2026-08-11
- City of Boulder, "City of Boulder to Launch Competitive Bid Process to Continue License Plate Reader Technology" — https://bouldercolorado.gov/news/city-boulder-launch-competitive-bid-process-continue-license-plate-reader-technology — 2026

---

## 6. Downtown Development Authority, second attempt

> **⚠️ Partially fails criterion 4 (not heavily lobbied). Stated explicitly rather than dropped — see Disqualifiers.**

**One-line frame:** If Boulder creates a Downtown Development Authority that diverts future tax growth from citywide services to downtown and University Hill, who should be entitled to vote on it and who should govern it?

**Why it's live now:** On **2026-08-06** the referral ordinance **failed on a 4–4 tie** — for: Mayor Aaron Brockett, Mayor Pro Tem Tara Winer, Matt Benjamin, Rob Kaplan; against: Taishya Adams, Tina Marquis, Ryan Schuchard, Nicole Speer. The tie was possible only because Wallach's July 23 resignation left Council at eight. Later the same night **Brockett moved successfully to direct staff to continue exploring ways to create a DDA** — so the proposal is not dead, it is parked, with the deciding body about to be substantially reconstituted by the November 3 election.

**Deciding body & instrument:** **Boulder City Council**, by ordinance referring DDA formation to a vote of the district's "qualified electors"; if approved, a board of **5–11 directors appointed by the mayor and confirmed by Council** governs for a **30-year** term, funded by tax increment financing off a base year set in late 2026 / early 2027.

**Political salience:** **High**, and the objection is unusually interesting. Projected capture was **$3.5–$11.5M in sales tax and $3.2M in property tax over six years**, diverted from the city, **Boulder County**, **Boulder Valley School District** and the **Boulder Library District**. Library Board President **Sylvia Wirba** requested a guaranteed revenue share and board representation. The core critique is franchise, not fiscal: only about **2,500 qualified electors** (property owners, residents and business lessees inside the district) would vote, while roughly **98% of Boulder residents** whose citywide taxes are being redirected get no say — and, as **Boulder Progressives** wrote, "A property owner who holds downtown real estate through multiple LLCs can get a ballot for each one." That produced a rare alignment of **Boulder Progressives and PLAN-Boulder County** in opposition, which Speer cited from the dais.

**Constituencies:**
- *For change:* **Boulder Chamber** (CEO John Tayer: DDAs "are a proven tool for revitalizing distressed urban zones," citing Fort Collins, Longmont and Loveland), **Downtown Boulder Partnership**, downtown restaurant and retail owners, University Hill businesses.
- *Against / at risk:* **Boulder Progressives**, **PLAN-Boulder County**, the **Boulder Library District** and BVSD (revenue growth loss), residents outside the district, and — per public comment — anyone who thinks **high commercial rents, not aesthetics**, drive downtown vacancy and that a **vacancy tax** is the better instrument.
- *Cross-pressured / persuadable:* People who want Pearl Street revitalization (public restrooms, event infrastructure, ambassador program) but object to the franchise structure; the four councilmembers who voted no, several of whom objected to *this* DDA rather than the concept; Winer, described as "torn"; Speer, who wanted to wait a year.

**Policy changes on the table:**
1. Drop it; fund downtown improvements from the general fund or an expanded BID.
2. Re-refer the same DDA after the November election with a reconstituted Council (the path of least effort).
3. Re-refer with **guaranteed revenue share and board seats** for the Library District, BVSD and the County (Wirba's ask).
4. Re-refer with a **citywide advisory vote** alongside the district electors' vote, or with a shorter term (e.g., 10 years, not 30) and a smaller capture percentage.
5. Substitute a different instrument entirely — a **commercial vacancy tax** on downtown storefronts, addressing the rent critique rather than the streetscape.

**Why an assembly rather than the normal process:** This is the cleanest deadlock in Boulder — a literal 4–4 tie — and the substantive objection is *about democratic legitimacy*. Speer's own stated reason for voting no was that "pushing this forward over some much united opposition is going to work in opposition to the success of the DDA." An assembly is the one mechanism that can confer the legitimacy the proposal is missing, and it can answer the specific question (who should be enfranchised over a tax-increment district) that neither Council nor the 2,500 district electors can answer for themselves without self-interest. Staff are already under direction to keep working on it, so there is a live process to feed.

**Disqualifiers / risks:**
- **Organized business advocacy on one side.** The **Boulder Chamber** and **Downtown Boulder Partnership** are established, staffed organizations actively campaigning for this. This is not a national-money lobbying fight and there is no ballot campaign committee (the measure never reached the ballot), so it does not fail criterion 4 outright — but an assembly here would be deliberating with a professional advocacy operation in the room. **Mitigation: the opposition is also organized (Boulder Progressives, PLAN-Boulder County, the Library District), which is unusual and makes the field more balanced than a typical business-vs-diffuse-public fight.**
- No litigation found.
- **Timing risk is severe.** Five of nine seats, including the mayor's, are on the November 3, 2026 ballot; Boulder could seat anywhere from one to six new councilmembers in 2027. Any assembly should either conclude before the election or be explicitly framed as advice to the *incoming* Council.

**Sources:**
- "Boulder City Council divided over whether to put downtown tax measure on November ballot" — https://boulderreportinglab.org/2026/08/02/boulder-city-council-divided-over-whether-to-put-downtown-tax-measure-on-november-ballot/ — 2026-08-02
- "Boulder City Council sends vacancy tax and $400 million bond to November ballot, rejects downtown development authority" — https://boulderreportinglab.org/2026/08/06/boulder-city-council-sends-vacancy-tax-and-400-million-bond-to-november-ballot-rejects-downtown-development-authority/ — 2026-08-06
- "Split Boulder council fails to forward DDA plan to voters" (KUNC) — https://www.kunc.org/news/2026-08-10/split-boulder-council-fails-to-forward-dda-plan-to-voters — 2026-08-10
- "Boulder DDA plans proceed apace, but some leaders remain skeptical" (KUNC) — https://www.kunc.org/news/2026-06-15/boulder-dda-plans-proceed-apace-but-some-leaders-remain-skeptical — 2026-06-15
- Mike Mills (opinion), "Boulder's proposed DDA would divert open space funds to downtown — without your vote" — https://boulderreportinglab.org/2026/07/07/mike-mills-boulders-proposed-dda-would-divert-open-space-funds-to-downtown-without-your-vote/ — 2026-07-07

---

## 7. Vacant-home tax: implementation design

**One-line frame:** If Boulder voters approve the vacant-home tax in November, what should count as "vacant," which exemptions are legitimate, and what should the roughly $4 million a year be spent on?

**Why it's live now:** On **2026-08-06** Council voted **7–1** (Speer opposed) to refer a residential vacancy tax to the **November 3, 2026** ballot. As referred: applies to homes occupied **183 days or fewer** per year, initial rate **$4,000 per unit annually**, effective **January 1, 2028**, projected **~$4 million/year** based on an estimated 500–1,000 vacant homes, revenue directed to **general city purposes**. The 14-month gap between approval and effect is the implementation window, and almost every operative detail — self-reporting versus audit, exemptions for snowbirds/estates/renovations/medical absence, escalation, and whether revenue is earmarked — is unwritten.

**Deciding body & instrument:** **Voters** on the referred measure Nov 3, 2026; then **Boulder City Council** by implementing ordinance and administrative rules during 2027, before the Jan 1, 2028 effective date.

**Political salience:** **Med–High.** It rides on Boulder's dominant issue (housing) and is unusually concrete for a tax measure. Public comment already surfaced the strongest counterargument: **Berkeley's vacancy tax yielded less revenue than projected and generated real administrative cost**, which is a falsifiable claim an assembly could actually examine. It also connects to the DDA fight, where commenters argued a **vacancy tax** — not a TIF district — is the right tool for downtown's empty storefronts, raising an obvious extension question: should this be extended to **commercial** vacancy?

**Constituencies:**
- *For change:* Housing advocates, renters, the council majority (7 of 8), people who see dark houses in their neighborhood.
- *Against / at risk:* Second-home and part-time owners; families holding a home through an estate settlement or a long renovation; people with extended medical or military absences; and — if enforcement is intrusive — anyone uneasy about the city verifying occupancy. Note that occupancy verification is a **surveillance question**, which links this to Issue 5.
- *Cross-pressured / persuadable:* Councilmember Nicole Speer, the lone no vote, plus residents who support the goal but expect the Berkeley outcome; owners of genuinely hard-to-rent units; landlords worried the definition sweeps in normal vacancy between tenants.

**Policy changes on the table:**
1. Minimal implementation — self-attestation, broad exemptions, complaint-driven enforcement.
2. Tiered exemptions with defined categories (estate, renovation permit on file, documented medical/military absence, active listing) and an appeals process.
3. **Escalating rate** for repeat years, so the tax pushes units onto the market rather than functioning as a fee for leaving them empty.
4. **Earmark the revenue** — dedicate it to affordable housing or wildfire retrofit subsidies rather than the general fund (the referred measure sends it to general purposes; changing that is a real choice).
5. Extend the concept to **commercial** vacancy downtown, addressing the storefront-rent critique raised in the DDA debate.

**Why an assembly rather than the normal process:** A referred tax measure gets a yes/no; every question that determines whether it works gets settled a year later in an implementing ordinance almost nobody attends. Exemption design in particular is where organized owners will show up and unorganized renters will not. Boulder has a clean 14-month window and a fixed deadline — an unusually good fit for a deliberative body producing a concrete drafting brief. If voters reject it in November, the assembly question converts to "why did it fail and what would have passed," which is also useful.

**Disqualifiers / risks:** **Contingent on the November 3, 2026 result** — do not scope this until the vote is known. No litigation found. No organized opposition campaign found as of 2026-08-15, though one may form before November; recheck. Possible Colorado TABOR interactions with rate escalation — **unverified**, requires a legal check. Note the companion measures on the same ballot (a **$400M recreation and safety bond**, approved 7–0 for referral, which *recent polling reportedly showed lacked majority support*; a debt-limit change; and a firefighter collective-bargaining charter amendment, 7–0) — a crowded tax ballot could drag all of them.

**Sources:**
- "Boulder City Council sends vacancy tax and $400 million bond to November ballot, rejects downtown development authority" — https://boulderreportinglab.org/2026/08/06/boulder-city-council-sends-vacancy-tax-and-400-million-bond-to-november-ballot-rejects-downtown-development-authority/ — 2026-08-06
- City of Boulder, "City Council Voices Support for Four November Ballot Measures" — https://bouldercolorado.gov/news/city-council-voices-support-four-november-ballot-measures — 2026-08
- "City of Boulder City Council Voices Support For Four November Ballot Measures" (Yellow Scene) — https://yellowscene.com/2026/08/07/city-of-boulder-city-council-voices-support-for-four-november-ballot-measures/ — 2026-08-07
- City of Boulder, 2026 Municipal Election Guidelines — https://bouldercolorado.gov/election-guidelines — accessed 2026-08-15

---

## Rejected candidates

- **Camping ban / enforcement against unhoused residents** — **Actively litigated.** ACLU of Colorado sued in 2022; the Colorado Court of Appeals upheld the ordinance in **May 2026** after April 2026 oral argument, and further appeal is plausible. Highest-salience social issue in Boulder and the worst possible criterion-4 profile. (https://boulderreportinglab.org/2026/05/19/colorado-appeals-court-sides-with-boulder-in-camping-ban-challenge/)
- **Boulder Municipal Airport future (close vs. keep)** — **Effectively foreclosed, and federally preempted.** Council voted **8–1 on 2026-07-23** to pursue FAA grants, which makes closure far harder for ~20 years; Wallach resigned over it. The city already dropped its FAA lawsuit in November 2025 after dismissal. The residual live piece — whether BVCP language should acknowledge airport lead pollution — is too narrow to sustain an assembly. (https://boulderreportinglab.org/2026/07/23/boulder-city-councilmember-mark-wallach-resigns-after-vote-to-keep-municipal-airport-open-indefinitely/)
- **Tipped minimum wage / tip offset** — **Heavily lobbied and just decided.** Council **declined on 2026-07-30** to slow tipped-wage increases, ending a yearlong fight; base pay rises $1.35 next year and tracks inflation after. The restaurant-industry side is amplified by national advocacy infrastructure (minimumwage.com, an Employment Policies Institute property, ran a Boulder-specific campaign piece in April 2026). Enabled by state **HB25-1208**, so it can return — but as of today it is both settled and the most lobbied item on the docket. (https://boulderreportinglab.org/2026/07/30/boulder-city-council-backs-off-tipped-wage-change-after-yearlong-fight/)
- **Boulder County commission expansion, 3 → 5 members** — **Already on the November 3, 2026 ballot** via citizen initiative (Big Tent Boulder County submitted 18,422 signatures against a 13,064 requirement on 2026-07-14). Voters also choose between a five-district model and a 3+2 hybrid. Genuinely salient and cleanly non-litigated, but the decision arrives before any assembly could convene. **Worth revisiting post-election** if it passes, since the districting map then has to be drawn — that *is* an assembly-shaped task. (https://boulderreportinglab.org/2026/07/14/measure-to-expand-boulder-county-commission-from-three-to-five-members-likely-headed-to-november-ballot/)
- **Boulder Valley Comprehensive Plan update itself** — **Decided.** Adopted through June 2026 by the four co-adopting bodies; creates capacity for roughly 35% more housing and largely dismantles the two "low density" restrictions. The live successor is the **Title IX land-use code rewrite** implementing it — a named 2026 Council priority that staff estimate could take two years. I did not promote this to a full entry because as of 2026-08-15 there is no specific pending code amendment to deliberate; it is the strongest **watch item** on this list and should be re-scoped once the rewrite scope is published. Relevant survey evidence is already strong: **89%** support small businesses (corner cafés, daycares, salons) in residential areas.
- **Boulder Public Library District funding** — **Not currently live.** District formed by 2022 ballot measure with a 3.5-mill levy (~$17.5M/yr). Its only 2026 flashpoint was as a *bystander* to the DDA tax-increment diversion, which is covered under Issue 6.
- **San Lazaro Mobile Home Park sale ($42.5M offer, unknown buyer)** — Genuine and urgent for residents (BRL, 2026-08-11), but it is a **private transaction** with a resident counter-offer, not a decision by a named public body via a named instrument. Fails criterion 1.

---

## Data-source notes for tooling

**Agenda platform — PrimeGov (Granicus), verified 2026-08-15**

Base: `https://bouldercolorado.primegov.com`

Working, unauthenticated JSON endpoints (all returned HTTP 200 with `User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ...`):

| Endpoint | Notes |
|---|---|
| `/api/v2/PublicPortal/ListUpcomingMeetings` | ~1.2KB; returns array with `id`, `meetingTypeId`, `committeeId`, `dateTime`, `documentList[]` (each with `templateName` e.g. "HTML Agenda", "Agenda", "Packet") |
| `/api/v2/PublicPortal/ListArchivedMeetings?year=2026` | ~32KB; same shape, full year |
| `/api/meeting/search?from=1/1/2026&to=12/31/2026` | ~19KB; friendlier shape — includes `title` (e.g. "City Council Regular Meeting"), `date`, `time`, `videoUrl`, `templates[]`, `allowPublicComment`, `allowPublicSpeaker` |

Example that worked verbatim:
```
curl -s -A "Mozilla/5.0" "https://bouldercolorado.primegov.com/api/meeting/search?from=1/1/2026&to=12/31/2026"
```
Sample of what it returns for 2026 (26 meetings YTD): Regular Meetings, Study Sessions, and Special Meetings, e.g. `08/20/2026 | City Council Regular Meeting`, `08/13/2026 | City Council Study Session`, `08/06/2026 | City Council Regular Meeting`. Note `meetingTypeId` distinguishes them (2 = Regular, 4 = Special, in the observed data).

Caveats:
- **No RSS on the portal.** The HTML portal at `/public/portal` renders meeting lists client-side, so `WebFetch`/naive scraping of that URL returns empty section headers — **use the JSON API, not the HTML.**
- The portal footer is Granicus-branded (PrimeGov is a Granicus product); expect Granicus-family API conventions.
- Agendas publish **Thursdays, one week before** each meeting — a weekly Thursday poll of `ListUpcomingMeetings` is sufficient.
- Document links come back as `link: null` in the list responses; resolving actual PDF/HTML agenda URLs requires a second call per `documentList[].id` — **not yet worked out, needs investigation.**
- City landing page (human-readable): `https://bouldercolorado.gov/city-council-agendas-and-materials`

**News RSS — verified 2026-08-15**

| Feed | Status |
|---|---|
| `https://boulderreportinglab.org/feed/` | ✅ 200, ~172KB, current (top item dated 2026-08-14). **Primary source. Full-text items, good `pubDate`.** |
| `https://coloradosun.com/feed/` | ✅ 200, ~41KB, current. Statewide — needs Boulder filtering. |
| `https://www.dailycamera.com/feed/` | ❌ **HTTP 403** to scripted requests. MediaNews Group paywall + bot blocking. Reachable via search-engine results only. |
| `https://boulderbeat.news/feed/` | ⚠️ 200 but **stale — newest item 2024-01-05.** Publication appears defunct. Archive value only; do not poll. |

Not RSS-tested but useful and fetchable: KUNC (`kunc.org`), CPR (`cpr.org`), Axios Boulder (`axios.com/local/boulder`), Yellow Scene (`yellowscene.com`), Longmont Leader (`longmontleader.com`).

**Reddit — BLOCKED**

`https://www.reddit.com/r/boulder/search.json?q=...&restrict_sr=1&sort=top&t=year` returned **HTTP 403** with an HTML anti-bot page (~190KB) on every attempt, using a normal desktop Chrome User-Agent. `old.reddit.com` returned **403** as well. Reddit now gates the JSON endpoints regardless of UA. **Options not yet tried: OAuth app credentials via `oauth.reddit.com` (Reddit's supported path), or Pushshift-style third-party mirrors.** No Reddit sentiment data is reflected anywhere in this document — all salience claims above rest on named survey results, meeting turnout counts, recorded vote margins, or petition signature counts.

**Other structured sources**

- City community engagement portal (OpenGov): `https://communityfeedback.opengov.com/portals/cityofboulderco/` — hosts the "Fund Our Future 2026" questionnaire. Not API-probed.
- `https://www.beheardboulder.org/boulder-valley-comprehensive-plan-update` — BVCP engagement hub, hosts survey instruments and drafts.
- `https://bouldercolorado.gov/projects/community-survey` — statistically valid resident survey landing page (2026 edition: 83% rate quality of life good/excellent).
- Boulder County uses **eScribe**, a *different* platform from the city: `https://pub-bouldercounty.escribemeetings.com/` (a `filestream.ashx?DocumentId=` pattern was observed). **A county scraper needs separate work from the city scraper.**
- Municipal code: `https://library.municode.com/co/boulder/codes/municipal_code`
- Boulder Reporting Lab maintains a **City Council Vote Tracker** as a public spreadsheet compiled from published minutes — https://boulderreportinglab.org/boulder-city-council-vote-tracker/ — covering the term seated 2023-12-07, with the term seated 2025-12-04 being added as minutes are released. **Likely the single highest-value pre-built dataset for this project; worth contacting them.**
- Ballotpedia county measures index: `https://ballotpedia.org/Boulder_County,_Colorado_ballot_measures`
