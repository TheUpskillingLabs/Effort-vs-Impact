# Tucson, AZ — Candidate Assembly Issues

**Researched:** 2026-08-15

**Deciding bodies in scope:**
- City of Tucson Mayor & Council (Mayor Regina Romero + 6 ward council members: Lane Santa Cruz, Paul Cunningham, Kevin Dahl, Nikki Lee (Ward 4), Selina Barajas, Miranda Schubert). Instruments: ordinances, Unified Development Code (UDC) text amendments, the annual budget ordinance, Tucson Water rate ordinances, and council-referred ballot measures.
- Pima County Board of Supervisors (5 members: Chair Jennifer "Jen" Allen, Rex Scott, Matt Heinz, Andrés Cano, Steve Christy). Instruments: county zoning code text amendments, moratorium resolutions, county budget, land sales/IGAs.
- Tucson Unified School District Governing Board (5 members; Superintendent Gabriel Trujillo; board members named in coverage include Jennifer Eckstrom and Val Romero). Instrument: school closure/consolidation resolutions under A.R.S. notice-and-hearing requirements, and the district budget.
- Tucson Water — a city-owned utility governed directly by Mayor & Council (no separate elected board). Instrument: rate ordinance / Notice of Intention to Adjust Rates; Large Quantity Water Users ordinance.
- Regional Transportation Authority (RTA) of Pima County — regional board, one vote per jurisdiction. Relevant as a constraint on city transit, not as a primary assembly target (see Rejected).

**Meeting/agenda platform:**
- **City of Tucson: Hyland OnBase Agenda Online** (NOT Legistar, NOT Granicus, NOT PrimeGov). Base URL: `https://tucsonaz.hylandcloud.com/221agendaonline/` — verified 200. Search page `https://tucsonaz.hylandcloud.com/221agendaonline/Meetings` returns 200 with a server-rendered search form (Meeting Type: REGULAR MEETING / REGULAR MEETING ADDENDUM / REGULAR SPECIAL MEETING / STUDY SESSION / STUDY SESSION ADDENDUM; date-range presets). Item/document URLs follow `.../Documents/ViewDocument/<name>.pdf?meetingId=<id>&documentType=Agenda&itemId=<id>&publishId=<id>&isSection=false` and meeting views follow `/Meetings/ViewMeeting?id=<id>&doctype=1|2`. **No public JSON API or RSS found.** Pre-2010-08-04 records are in a separate archive.
- **Pima County: Legistar (Granicus)** — `https://pima.legistar.com/`. **Public Legistar Web API verified working, no key required:** `https://webapi.legistar.com/v1/pima/events`, `/bodies`, `/matters` (OData `$filter`/`$orderby`/`$top` supported). See Data-source notes for working queries.
- The main city website `www.tucsonaz.gov` sits behind Akamai and **returns HTTP 403 to scripted requests and to WebFetch**, including PDFs. Content is reachable via the Wayback Machine with `if_` replay URLs.

**Local news sources used:**
- Arizona Daily Star / tucson.com — https://tucson.com (paywalled; RSS works: `https://tucson.com/search/?f=rss&t=article&c=news/local&l=25`, verified 200 `application/rss+xml`)
- Tucson Sentinel — https://www.tucsonsentinel.com (Cloudflare JS challenge on scripted fetch; `/rss/` and `/feed/` both 403)
- Arizona Public Media (AZPM) — https://news.azpm.org (no RSS found at `/feed/`, `/rss/`, `/rss.xml` — all returned HTML or 404)
- Arizona Luminaria — https://azluminaria.org (RSS verified 200: `https://azluminaria.org/feed/`)
- Tucson Agenda — https://www.tucsonagenda.com and https://tucsonagenda.substack.com (Substack RSS verified 200: `https://tucsonagenda.substack.com/feed`). Journalist-owned newsletter by Curt Prendergast and Joe Ferguson covering Tucson/Pima County agendas daily; also syndicated into Tucson Sentinel's opinion section.
- Tucson Spotlight — https://www.tucsonspotlight.org (RSS verified 200: `https://www.tucsonspotlight.org/rss/`)
- KOLD (kold.com), KGUN9 (kgun9.com), KVOA (kvoa.com), KJZZ (kjzz.org), Cronkite News (cronkitenews.azpbs.org)

**Ballot access:**
Tucson is an Arizona charter city. Local initiative/referendum runs through the **City Clerk's Office**, which issues an official petition serial number and certifies signatures; the process is governed by **A.R.S. Title 19**.

Verified thresholds (City Clerk "I-R Petition Signature Requirements" handout, S:\Elections\Initiative and Referendum\Packet\2024 Packet):
- **Initiative: 14,380 valid signatures**, stated as applicable "Through the November 2025 General Election."
- **Referendum: 9,587 valid signatures**, same period.
- Circulation window example given: to reach the November 4, 2025 ballot, an initiative petition had to be issued for circulation no earlier than **November 4, 2023** and filed with the City Clerk no later than **5:00 p.m., July 3, 2025** — i.e., a 24-month circulation window closing ~4 months before the election.
- Filers must contact the City Clerk **at least 48 hours in advance** of filing.

Inference, flagged: 14,380 / 9,587 = exactly 1.500, consistent with A.R.S. Title 19's **15% (initiative) / 10% (referendum)** of the vote cast at the last mayoral election, over a common base of ~95,870 votes. I did not fetch the statute text itself, so treat the 15%/10% characterization as **inferred, not directly verified**.
**Unverified:** the updated figures for the 2026–2027 cycle. `www.tucsonaz.gov` blocks scripted access and the only retrievable copy of the handout is an August 2025 Wayback snapshot. A researcher should call the City Clerk (520-791-4213 / cityclerk@tucsonaz.gov) to confirm current numbers.
Recent referred measures on the November 3, 2026 ballot: **Prop 421** (Tucson Electric Power franchise) and **Prop 422** (extend one-tenth-cent sales/use tax 20 years, Jan 1 2028 – Dec 31 2047, for Reid Park Zoo capital). Ballot-argument deadline was 5 p.m. Aug 5, 2026, $240 fee per proposition.

**State preemption landscape:**
This is the dominant screen in Tucson and it kills or reshapes most of the obvious issues.

- **SB 1487 (2016) fiscal sanction.** Any single state legislator can file a complaint with the Attorney General alleging a city ordinance conflicts with state law; if the AG agrees and the city does not repeal, state **shared revenue is withheld**. State shared revenue is roughly a quarter of local revenue in Arizona. This was used against Tucson in *State ex rel. Brnovich v. City of Tucson* over the city's gun-destruction ordinance. **Every Tucson ordinance that touches a state-preempted field carries a live budget threat, not just a legal one.**
- **Immigration.** State law bars cities from adopting policies that "limit or restrict the enforcement of federal immigration laws to less than the full extent permitted by federal law." Tucson's ICE ordinance (adopted 2026) is already the subject of a legislator-triggered AG probe of Phoenix and Tucson (Arizona Capitol Times, 2026-04-01).
- **Short-term / vacation rentals: A.R.S. § 9-500.39** — cities may not prohibit or effectively prohibit STRs; enforcement includes civil penalties and TPT license suspension. **Off the table.**
- **Rent control: A.R.S. § 33-1329** — "no city, town or county shall enact any ordinance or resolution that would control rents on private residential property." Arizona also statutorily restricts **mandatory inclusionary zoning** and tax-increment financing. **Off the table.**
- **Housing/zoning: HB 2720 (ADUs, 2024)** requires cities over 75,000 to allow attached and detached ADUs by right on single-family lots, and **bars cities from banning ADU use as short-term rentals**; **HB 2721 (middle housing)** requires 2–4 unit housing on single-family lots near the central business district, with a self-executing penalty: a city that fails to adopt conforming rules by **January 1, 2026** must allow middle housing on *all* single-family lots with no limitations. Tucson adopted its own version 6-1 on **December 16, 2025** and went further than required. **HB 2928 (2025/26)** further expanded ADU rights. Local land-use discretion here is largely gone.
- **Proposition 207 (Private Property Rights Protection Act, state constitutional/statutory).** Not "preemption" in the ARS 9-500.xx sense, but functionally the same constraint: property owners can sue for diminution in value when a previously permitted land use is banned. City Attorney **Roi Lusk** cited Prop 207 on the record as the reason Tucson could not simply ban data centers outright (Aug 2026). This is the binding constraint on any Tucson land-use prohibition.
- **Guns.** Arizona broadly preempts municipal firearm regulation; this was the subject of the SB 1487 case Tucson lost.
- **Workplace heat.** As of **July 31, 2026** Arizona has first-ever statewide outdoor heat safety rules (water/shade/rest). Tucson's own heat protection ordinance applies to **city contractors** via procurement — a live example of the one lever cities reliably keep (spending/procurement) when regulation is preempted.
- **Elections timing.** Senate Republicans have repeatedly tried to force charter cities including Tucson onto even-year November elections; a party-line committee vote advanced such a measure in **February 2026**. Tucson voters have previously rejected moving to even-year elections. Charter authority over election timing is contested but **not yet stripped**.
- **What Tucson clearly still controls:** its own budget and revenue mix; its municipal water utility (rates, service-area policy, large-user rules); its transit system and fares; zoning *process* (rezoning/PAD requirements, setbacks, noise, review tiers) as long as it stops short of an outright ban; procurement and contracting standards; use of city-owned property (contested — see ICE); and its **local minimum wage**, which voters set by initiative in Prop 206 (Nov 2021) with a city Department of Labor Standards, and which has operated since April 1, 2022 without being preempted.

---

## Issue Shortlist

| # | Issue | Deciding body | Salience | Media profile | Preemption risk | Litigation/lobby risk | Assembly fit |
|---|-------|---------------|----------|---------------|-----------------|----------------------|--------------|
| 1 | Paying for fare-free transit ($68M/yr, 9% of general fund) | Tucson Mayor & Council | **High** — 4-3 council split Apr 2026; six years of recurring fights | **High** — Sentinel, AZPM, KOLD, Luminaria, Spotlight, KGUN all covered it repeatedly | **Low** — transit fares are squarely municipal | **Low** — no litigation; no organized moneyed lobby, advocacy is grassroots | **High** — a real values tradeoff with no technically "correct" answer |
| 2 | Which TUSD schools to close or consolidate | TUSD Governing Board | **High** — up to 17 schools, ~35,000 students, board member already named schools aloud | **High** — Luminaria, Sentinel, Tucson Local Media, KVOA, Tucson Agenda | **Low/None** — closure authority is the district's, subject to state notice rules | **Low** — federal desegregation oversight **ended Jan 15, 2025** (9th Cir.), removing the historic litigation overhang | **High** — distributional, painful, and the district's own 2012 process is widely seen as having failed |
| 3 | Data centers in unincorporated Pima County: moratorium + zoning rules | Pima County Board of Supervisors | **High** — 3-2 vote Aug 11, 2026 to draft a 120-day moratorium; return date on/before Sept 8 | **High** — Sentinel, Luminaria, AZPM, KGUN, Spotlight | **Med** — Prop 207 constrains outright bans; state tax-incentive moratorium already in play | **Med — partial fail, flagged** — Project Blue/Beale Infrastructure is a well-funded developer interest; NDAs are themselves an issue | **Med-High** — but the well-resourced developer side is a real caveat |
| 4 | Public drug use and unsheltered homelessness: enforcement vs. services | Tucson Mayor & Council | **High** — misdemeanor ordinance drafted then shelved Jan 2026; emergency declared Feb 2026 | **High** — AZPM (multiple), Sentinel, Luminaria, KOLD | **Low** — municipal criminal ordinances and shelter siting are city powers | **Low** — no active suit found; *Grants Pass* removed the federal constraint | **High** — a genuine deadlock the council itself could not resolve |
| 5 | How to close Tucson's structural budget gap | Tucson Mayor & Council (+ voters for any tax referral) | **High** — Prop 414 rejected **69.8%–30.2%** in Mar 2025; $17M FY27 gap, ~$66M projected | **High** — Luminaria, Sentinel, AZPM, KOLD, Spotlight, Real Estate Daily News | **Low** — city sales/utility tax and budget are municipal, but tax hikes need voter approval | **Low** — no litigation; the Prop 414 opposition was broad, not moneyed | **High** — voters rejected the staff answer 7-to-3; that is exactly the deliberative gap |
| 6 | Tucson Water: rates, the unincorporated differential, and who gets large allocations | Tucson Mayor & Council as Tucson Water's governing body | **Med-High** — differential rates split city and county; large-user rules adopted 2025 | **High** — Star, Sentinel, Luminaria, AZPM | **Low** — municipal utility rate-setting is squarely local | **Med — partial fail, flagged** — Pima County sued in Dec 2021 and won in Sept 2023; county declined to re-sue in May 2025 but the option is explicitly on its table | **Med-High** — but disclose the litigation history to participants |
| 7 | What's left of local control over neighborhood-scale housing after HB 2721 | Tucson Mayor & Council (UDC amendments) | **Med** — 6-1 vote Dec 16, 2025; barrio gentrification fears persist | **Med** — Sentinel opinion, AARP AZ, Three Sonorans, city PDSD | **High — the defining case** — the state already dictated the floor; only the margins are local | **Low** — no litigation found; no organized moneyed fight at the city level | **Med** — best value may be teaching residents what is and isn't still theirs to decide |

---

## 1. Paying for fare-free transit

**One-line frame:** Should Tucson keep its transit system fare-free, and if so, which residents and businesses should pay the roughly $68 million a year it costs?

**Why it's live now:** Tucson has run Sun Tran, Sun Link streetcar, Sun Van, Sun Express and Sun On Demand fare-free since March 2020, initially on pandemic relief money and since then on the general fund. On **April 21, 2026**, alongside the FY2027 budget presentation, a motion to explore alternative funding and solicit community input on reinstating fares **failed 4-3** — Mayor Romero, Santa Cruz, Dahl and Schubert against; Cunningham, Lee and Barajas for. Fare-free stayed in the recommended FY2027 budget, but the vote tabled rather than settled the question, and the city has an ~$17 million FY27 deficit with a much larger gap projected. This is at least the third consecutive year the council has reopened and then deferred the same decision (a similar 5-2 vote kept fares free in August 2025).

**Deciding body & instrument:** Tucson Mayor & Council. Instruments: (a) the annual budget ordinance line for the transit subsidy; (b) a fare ordinance / fare schedule reinstating charges; (c) new dedicated revenue — a utility tax increase, hotel/bed tax increase, or a voter-referred dedicated transit tax; (d) renegotiation of the RTA intergovernmental agreements to shift regional contributions.

**State preemption check:** **City retains full authority.** Transit operation and fare-setting are municipal functions; I found no A.R.S. provision preempting municipal transit fares. The real external constraint is not preemption but the **RTA's one-jurisdiction-one-vote governance** — the RTA board rejected Tucson's request for weighted voting, so Tucson cannot unilaterally change regional cost-sharing. Any *new tax* to fund transit would require voter approval, which is a procedural, not preemptive, constraint.

**Political salience:** **High.** Six years of recurring council fights; a 4-3 split on the most recent vote and a 5-2 split the year before, with different coalitions each time. The subsidy is ~9% of the general fund versus 0% in Phoenix, 0% in Tempe and 2.7% in Mesa — a comparison opponents use constantly. The city's own equity analysis found **~71% of riders earn little enough to qualify for a proposed low-income free fare**, which is the single most cited fact on the pro side. Reinstating fares would cost ~$1 million up front plus ~$6 million for farebox replacement after 2028, against ~$8.5 million gross / ~$4 million net annual fare revenue — i.e. the financial case is genuinely close, which is why it keeps reopening.

**Constituencies:**
- *For change (reinstating fares / restructuring):* Fiscal-pressure council members (Cunningham, Lee, Barajas), residents who don't ride and see 9% of the general fund going to a service they don't use, and business owners near transit centers concerned about loitering and safety. No single named organization drives this; it is diffuse.
- *Against / at risk:* Low-income riders (the ~71%), disability riders on Sun Van, transit unions and operators, Mayor Romero and the Santa Cruz/Dahl/Schubert bloc. What they lose is direct: a $1.75+ fare on people who currently pay nothing.
- *Cross-pressured / persuadable:* Riders who want fares back **specifically to fund security** at stops (safety at bus stops surfaced as an unresolved issue in the Aug 2025 debate); neighborhood associations that support transit but want the general fund spent on roads, parks or police; the low-income-fare-program constituency, who would be exempt under most designs and so are not obviously worse off.

**Policy changes on the table (least to most ambitious):**
1. Keep fare-free, close the gap with existing levers already identified: Visit Tucson contribution (~$2M/yr), the utility tax increase (~$5M), hotel tax increases.
2. Two-tier system: free for verified low-income, seniors, students and disability riders; a modest fare for everyone else — targets the ~29% of riders who wouldn't qualify for a free low-income fare.
3. Free on core high-ridership routes, fares on Sun Express commuter and premium services.
4. Refer a dedicated transit funding source to the ballot (Lee floated a ballot initiative in 2025) — but note Prop 414's 70-30 defeat as the base rate for tax referrals.
5. Restructure the RTA IGA so suburban jurisdictions contribute proportionally to a regional fare-free system — the option the council unanimously directed staff to pursue, and the one Tucson cannot deliver alone.

**Why an assembly rather than the normal process:** The council has now voted on this at least three times and each time produced a narrow, differently-composed majority to defer rather than decide — that is a definitional deadlock. The missing voice is riders themselves: the debate is conducted through a staff equity analysis *about* low-income riders rather than *with* them, and the loudest public input comes from non-riders. An assembly can also do the thing the council structurally can't: work through a package where the answer is "keep it free **and** here is who pays," rather than treating free-vs-fares as binary.

**Disqualifiers / risks:** Timing — this reopens each budget cycle (roughly February–May), so an assembly must report before the FY2028 recommended budget. Part of the answer sits with the RTA board where Tucson has one vote of many, so an assembly recommendation could land on a decision the city cannot execute; the frame must be explicit about what is and isn't in Tucson's gift. No litigation. No identifiable moneyed lobby on either side, which is unusual and makes this the cleanest candidate on the list.

**Sources:**
- "Public transit fares likely to remain free in Tucson despite deficit, pushback" — https://www.kold.com/2026/04/22/public-transit-fares-likely-remain-free-tucson-despite-deficit-pushback/ — 2026-04-22
- "Tucson City Council at odds on how to move forward with fare-free transit" — https://azluminaria.org/2026/04/21/tucson-city-council-at-odds-on-how-to-move-forward-with-fare-free-transit/ — 2026-04-21
- "Fare-free transit to continue in Tucson" — https://www.tucsonspotlight.org/tucson-city-council-votes-to-keep-public-transit-fare-free/ — 2025-08-07
- "Tucson City Council votes to rethink free Sun Tran bus fares" — https://www.tucsonsentinel.com/local/report/040825_free_bus_fares/ — 2025-04-08
- "Public transit stays free, Tucson City Council decides" — https://www.tucsonsentinel.com/local/report/081424_sun_tran_fares/public-transit-stays-free-tucson-city-council-decides/ — 2024-08-14
- "RTA board gives Tucson more oversight on regional roadwork, still nixes weighted voting" — https://www.tucsonsentinel.com/local/report/012722_rta_tucson/rta-board-gives-tucson-more-oversight-regional-roadwork-still-nixes-weighted-voting/ — 2022-01-27

---

## 2. Which TUSD schools to close or consolidate

**One-line frame:** If Tucson Unified must operate fewer school buildings, which schools should close or merge, and what should the district owe the neighborhoods that lose one?

**Why it's live now:** TUSD enrollment has fallen from about 60,000 students in 2000 to a projected **~35,000 for FY2026** across **88 schools** — a 3.3% single-year decline worth roughly **$8 million a year** in lost per-pupil state funding. At an **April 14, 2026** board meeting the district laid out a seven-month closure/consolidation process: data gathering and committee formation through spring, **public identification of candidate schools in August 2026**, and a **strategic consolidation plan to the board in December 2026**. Up to **17 schools** are in scope. The district must give parents at least 10 days' notice before a public hearing and wait another 10 days before the board can vote. As of this writing (2026-08-15) the public naming of schools is imminent or just occurring.

**Deciding body & instrument:** TUSD Governing Board (5 elected members). Instrument: a board resolution closing and/or consolidating named schools, plus attendance-boundary changes, adopted after the statutorily required notice and public hearing; and the associated district budget. Superintendent Gabriel Trujillo has said explicitly, "I would not make a move without this board."

**State preemption check:** **District retains authority.** Arizona sets procedural floors — notice to parents/guardians at least 10 days before a public hearing, and a further 10-day wait before a board vote — but does not dictate which schools close. Arizona's per-pupil funding formula and open-enrollment/ESA environment are the *cause* of the squeeze and are state-controlled, but the closure decision itself is the board's. The former hard constraint, the federal desegregation Unitary Status Plan, is **gone**: the district court closed the case in July 2022 and the **Ninth Circuit affirmed on January 15, 2025** in *Mendoza v. Tucson Unified School District*, finding the district had eliminated the vestiges of past discrimination to the extent practicable.

**Political salience:** **High.** School closures are the highest-turnout local issue there is. The district's own board is already leaking the process: board member **Val Romero named 17 schools aloud** before the state-mandated community engagement had formally begun, and board member **Jennifer Eckstrom** publicly pushed back on the opacity of the committees ("If we're going to be transparent, then we need to be transparent... Who are on these committees?"). TUSD's last closure round in 2012 shut 10 elementary/middle schools and one high school, and schools including Cragin, Manzo and Sewell were listed and then spared — a history that means every named community will reasonably believe the list is negotiable. Covered by Luminaria, Tucson Sentinel, Tucson Local Media, Inside Tucson Business, KVOA and Tucson Agenda.

**Constituencies:**
- *For change:* District administration and finance staff; board members who see per-building fixed costs as unsustainable; teachers and families at under-enrolled schools who experience thin course offerings and cut programs; taxpayers who see maintenance dollars going to half-empty buildings.
- *Against / at risk:* Families at each named school; neighborhoods — particularly historically Mexican-American south- and west-side barrios — for whom the campus is the last public institution on the block and whose closure history is entangled with the just-ended desegregation case; site staff facing reassignment; and nearby homeowners facing a vacant public building.
- *Cross-pressured / persuadable:* Parents who would accept closure in exchange for guaranteed program placement, transportation, or reinvestment in the receiving school; the broader TUSD electorate, who bears the cost of not consolidating but has no specific school at stake; charter/ESA families who have already exited and whose exit is the underlying driver.

**Policy changes on the table (least to most ambitious):**
1. Publish transparent, weighted closure criteria and the committee rosters before naming any school (Eckstrom's ask) — a process recommendation the board could adopt immediately.
2. Close no schools this cycle; close the gap through the "Enrollment Stabilization Campaign" alone (truancy interruption, program marketing).
3. Consolidate a small number of the most under-enrolled campuses with a binding package for displaced families: transportation guarantee, program transfer, and a named receiving-school investment.
4. Larger consolidation paired with a "re-imagined geographical footprint" — redrawn attendance boundaries district-wide rather than school-by-school closures.
5. Repurpose closed campuses under a community-benefit standard (early childhood, health, housing, neighborhood centers) rather than sale to the highest bidder.

**Why an assembly rather than the normal process:** The normal process here is structurally adversarial — the district names schools, each named community mobilizes, and the board retreats from whichever community shows up loudest, which is a rich-neighborhood-wins outcome dressed as responsiveness. That is arguably what happened in 2012. A randomly selected, district-wide assembly is the only forum where the tradeoff can be discussed as a *whole* — you cannot close zero schools *and* keep programs — before any school is named and everyone's incentive becomes defensive. It is also the only forum where families who have already left for charters and ESAs, and who are the mechanical cause of the problem, are represented at all.

**Disqualifiers / risks:** **Timing is tight and possibly already past optimal** — schools are being named in August 2026 for a December 2026 board decision; an assembly convened now would run alongside a live, adversarial process rather than ahead of it. Once names are public the deliberation gets much harder. There is no active litigation, and the desegregation-case overhang is genuinely gone, but the *history* is highly charged and any process must handle that explicitly. No moneyed lobby.

**Sources:**
- "TUSD examines school-closure plan, lays out 7-month proposal" — https://azluminaria.org/2026/04/16/tusd-examines-school-closure-plan-lays-out-7-month-proposal/ — 2026-04-16
- "TUSD Board to start talks about shuttering schools" — https://www.tucsonsentinel.com/opinion/report/040126_tusd_closure/ — 2026-04-01
- "TUSD to consider process to shutter schools; Amphi rewriting code of conduct | The Tucson Agenda" — https://www.tucsonsentinel.com/opinion/report/041326_agenda_tusd_closures_op/ — 2026-04-13
- "Last Bell: TUSD weighs school closures, consolidations" — https://www.tucsonlocalmedia.com/explorernews/features/last-bell-tusd-weighs-school-closures-consolidations/article_875b4bb9-8b85-4fa8-9088-f86cdd54dab8.html — 2026
- "9th Circuit upholds end to TUSD desegregation case that began in 1974" — https://www.tucsonsentinel.com/local/report/011525_tusd_deseg/ — 2025-01-15
- Ninth Circuit opinion, *Mendoza v. TUSD*, No. 22-16478 — https://cdn.ca9.uscourts.gov/datastore/opinions/2025/01/15/22-16478.pdf — 2025-01-15
- TUSD Governing Board meetings portal — https://govboard.tusd1.org/Meetings

---

## 3. Data centers in unincorporated Pima County: moratorium and zoning rules

**One-line frame:** Under what conditions, if any, should Pima County allow large data centers on unincorporated land — and what should the county require in exchange for water, power and land?

**Why it's live now:** On **August 11, 2026** the Pima County Board of Supervisors voted **3-2** to direct staff to draft a **120-day moratorium** on data center approvals in unincorporated Pima County pending a fall vote on a data-center zoning ordinance (Legistar File ID 20637, introduced 2026-08-05: "Establishing a 120-day Moratorium on Data Centers in Unincorporated Pima County"). Chair Jennifer Allen with Andrés Cano and Matt Heinz voted yes; Steve Christy and **Rex Scott** — a Democrat, citing "advice of legal counsel" without elaborating — voted no. A separate **4-1** vote (Christy against) directed revision of the county's due diligence and non-disclosure-agreement policies, with Allen proposing they be broadened to cover **all large water and energy users** and that existing NDA signatories be asked retroactively to meet the new transparency standard. Both items are expected back for approval **on or before September 8, 2026**. Context: the board voted 3-2 in **June 2025** to sell unincorporated county land near the fairgrounds to **Beale Infrastructure** for the **$3.6 billion Project Blue** data center; **113 tax-break applications** were filed in June 2025 ahead of Governor Hobbs signing a three-year state moratorium on data center tax incentives; the county Board of Health voted unanimously to weigh in (File ID 19580, Nov 2025); and the City of Tucson separately killed Project Blue and then adopted its own restrictive data-center zoning **6-1 on August 5, 2026**, effective September 4.

**Deciding body & instrument:** Pima County Board of Supervisors. Instruments: (a) a moratorium resolution; (b) a **county zoning code text amendment** — staff were directed to initiate one back in June 2025 (File ID 19018, "Zoning for Data Centers") — likely making data centers a conditional-use permit item, i.e. a discretionary board vote, and treating them as a non-conforming use; (c) revised due-diligence and NDA policies governing how the county negotiates with prospective developers; (d) county land sales and development agreements.

**State preemption check:** **County retains zoning authority, but with a hard ceiling.** Arizona has not preempted county zoning of data centers. The binding constraint is **Proposition 207**, Arizona's private-property-rights measure: Tucson's City Attorney **Roi Lusk** stated on the record in August 2026 that Prop 207 exposes the jurisdiction to suit if it bans a previously permitted land use and property values fall — which is precisely why Tucson used PAD/PCD rezoning triggers, setbacks and water conditions rather than a ban, and why Tucson council member **Miranda Schubert** had to introduce a separate amendment directing staff merely to *research* a legal pathway to an outright ban. The same constraint applies to the county. Separately, the **state** — not the county — controls data center **tax incentives**, and Gov. Hobbs has already imposed a three-year moratorium on them.

**Political salience:** **High.** Project Blue generated sustained public mobilization across two jurisdictions and 18 months. At Tucson's August 2026 hearing, more than a dozen speakers testified and those who spoke were "almost unanimous" in wanting a full ban or stricter terms than the ordinance provided — i.e. the adopted rules were to the *right* of the room. The **No Desert Data Centers** coalition is the named organizing vehicle; spokesperson **Vivek Bharathan** argued the Tucson ordinance concentrates eligible sites in southern and western wards with predominantly Latino populations near the Tohono O'odham San Xavier District, framing it as "environmental racism." Marana's separate data center approval drew a "You didn't listen" reaction. Covered by Tucson Sentinel, Arizona Luminaria, AZPM, KGUN9, KVOA, Tucson Spotlight, Tucson Agenda and national trade press.

**Constituencies:**
- *For change (restriction/moratorium):* Water-scarcity advocates; the No Desert Data Centers coalition; south- and west-side neighborhoods and environmental-justice organizers; residents near the fairgrounds site; the Pima County Board of Health, which voted unanimously to weigh in; Supervisors Allen, Cano and Heinz.
- *Against / at risk:* Beale Infrastructure and the Project Blue developers; regional economic-development interests and the construction trades; Supervisor Christy; landowners holding parcels whose value depends on data-center eligibility (this group has a **Prop 207 cause of action**, which is what makes them dangerous rather than merely loud); Marana and other jurisdictions that want the tax base.
- *Cross-pressured / persuadable:* Supervisor **Rex Scott**, a Democrat who voted against the moratorium on legal advice — the clearest indicator that the legal-exposure question, not the policy question, is what's actually unresolved; building-trades workers who want the jobs but live in the affected wards; ratepayers who will bear grid costs either way.

**Policy changes on the table (least to most ambitious):**
1. Adopt the transparency package only: end blanket NDAs, apply due-diligence triggers to all large water and energy users, require retroactive disclosure.
2. Adopt the 120-day moratorium and let the zoning text amendment proceed on its own schedule.
3. Conditional-use permit regime mirroring Tucson's: discretionary board approval, setbacks from homes and schools, noise studies, generator limits, no potable water for cooling.
4. Add binding decommissioning and site-reclamation bonds plus a one-year implementation review — Tucson council requested both but did not adopt them.
5. Regional compact: Tucson, Pima County, Marana, Oro Valley and Sahuarita adopt common standards so developers cannot jurisdiction-shop — the gap that Marana's approval exposed.

**Why an assembly rather than the normal process:** The county's problem is not that it lacks a view — it is that the process has been conducted under NDAs, so the public learned about a $3.6 billion land sale after the fact, and the resulting distrust now poisons every subsequent vote. A deliberative body given full disclosure of water, power and revenue figures is the one mechanism that can produce a legitimate answer to "what would make this acceptable," as opposed to the current binary of secret deal or full ban. It is also the natural venue for the environmental-justice question — that restriction rules push sites toward Latino and tribal-adjacent areas — which neither jurisdiction's process has actually adjudicated.

**Disqualifiers / risks:** **Partial fail on criterion 4, stated explicitly.** This is not litigated *yet*, but Prop 207 gives affected landowners a ready cause of action, Supervisor Scott voted no specifically on legal advice, and the developer side is well-resourced with a demonstrated willingness to work through NDAs and tax-incentive applications. It is not a well-funded *lobbying* fight in the AZ-Legislature sense, but it is the closest thing on this list to one. Timing is also aggressive: the moratorium returns on or before September 8, 2026 and the zoning ordinance is expected in fall 2026 — an assembly would need to target the ordinance, not the moratorium. Finally, the city has already legislated, so an assembly scoped to the county alone addresses only part of the region.

**Sources:**
- "Pima County moves toward data center moratorium, tighter transparency" — https://azluminaria.org/2026/08/12/pima-county-moves-toward-data-center-moratorium-tighter-transparency/ — 2026-08-12
- "Pima County moves forward on possible data center moratorium" — https://www.tucsonsentinel.com/local/report/081126_pima_data_moratorium/pima-county-moves-forward-possible-data-center-moratorium — 2026-08-11
- "Pima County will develop moratorium for data centers" — https://news.azpm.org/p/news-splash/2026/8/13/230837-pima-county-staff-will-develop-moratorium-for-data-centers/ — 2026-08-13
- "Tucson City Council approves strict data center zoning rules in 6-1 vote" — https://tucson.com/news/local/government-politics/article_3ab31706-7583-4da7-b184-aa67f15f5d51.html — 2026-08-06
- "Tucson City Council adopts data center regulations in 6-1 vote" — https://www.kold.com/2026/08/06/tucson-city-council-adopts-data-center-regulations-6-1-vote/ — 2026-08-06
- "Pima Supes OK selling county land for $3.6B Project Blue data center" — https://www.tucsonsentinel.com/local/report/061725_project_blue_data/pima-supes-ok-selling-county-land-36b-project-blue-data-center/ — 2025-06-17
- "Tucson City Council pulls plug on Amazon's Project Blue" — https://www.tucsonsentinel.com/local/report/080625_project_blue/tucson-city-council-pulls-plug-amazons-project-blue/ — 2025-08-06
- "Tucson Planning Commission has more questions about proposed data center regulations" — https://news.azpm.org/p/newsheadlines/2026/6/5/230034-tucson-planning-commission-has-more-questions-about-proposed-data-center-regulations/ — 2026-06-05
- Pima County Legistar File ID 20637 (moratorium, intro 2026-08-05) and File ID 19018 (Zoning for Data Centers, intro 2025-06-30) — via https://webapi.legistar.com/v1/pima/matters

---

## 4. Public drug use and unsheltered homelessness: enforcement, services, or both

**One-line frame:** How should Tucson respond to visible drug use and unsheltered homelessness in parks, washes, streets and on transit — and what should the city do when it cannot afford the enforcement approach it drafted?

**Why it's live now:** In **November 2025** Ward 4 council member **Nikki Lee** introduced a draft misdemeanor ordinance criminalizing "drug-related loitering" in parks, streets, washes and the transit system, with police authorized to order people to leave and arrest for non-compliance, a five-day minimum jail sentence on repeat arrests, and a pre-arrest referral option to the Pima County Transition Center. On **January 16, 2026** Lee confirmed it was "off the table for now," citing resource constraints — it would have required hiring an additional Tucson City Court judge, and TPD (732 sworn as of the start of 2026) already does not respond to many lower-priority calls. Lee explicitly left the door open: "There are a few possible options that still exist... before having to go down the path of creating our own misdemeanor ordinance." On **February 5, 2026** the council declared a year-long **housing and homelessness emergency (Resolution 24067)**, cutting permanent-shelter approval time from about eight months to two and allowing temporary use permits for safe-sleeping and safe-parking sites. In **February 2026** council members pushed back on proposed cuts to housing programs against a then-$27 million deficit. A draft **Public Safety Action Plan** was released **February 27, 2026** with measurable targets. The emergency declaration gets a **six-month review** by Planning and Development Services with council leadership — i.e. roughly August 2026 — to decide which changes become permanent.

**Deciding body & instrument:** Tucson Mayor & Council. Instruments: (a) a city misdemeanor ordinance amending the Tucson Code (currently shelved); (b) Resolution 24067 and its renewal/permanence decision; (c) the FY2028 budget lines for Housing First, street outreach, Safe City deployments and the STAR Village sanctioned camp; (d) temporary-use-permit standards for safe sleeping and safe parking; (e) IGAs with Pima County for the Transition Center and jail-based treatment.

**State preemption check:** **City retains authority.** Municipal criminal ordinances, park and right-of-way rules, and shelter siting/permitting are city powers; I found no A.R.S. provision preempting a municipal public-drug-use ordinance. Note the direction of the constraint is unusual here — the barrier to the enforcement option was **fiscal and institutional** (court capacity, TPD staffing), not legal. On the federal side, *Grants Pass v. Johnson* removed the Eighth Amendment barrier to enforcing camping bans, so the legal ceiling is high and the choice is genuinely a policy choice. One flag: the shelter-siting permitting streamlining interacts with state ADU/middle-housing preemption in ways I did not verify.

**Political salience:** **High.** AZPM alone has covered this repeatedly (Jan 16, Jan 29, Feb 27, May 19, 2026); the Tucson Sentinel ran a "Billion-dollar problem" feature on May 8, 2026; Luminaria covered the budget fight. Pima County maintains a public "Homeless encampment rights and resources" page and a Tucson council ward office maintains a standing "Position on Homeless Encampments In Washes" page — both signals of sustained constituent pressure. The council is visibly split between an enforcement wing (Lee) and a services wing, and the same council that drafted a jail-minimum ordinance also declared a housing emergency ten weeks later.

**Constituencies:**
- *For change (enforcement):* Council member Nikki Lee; neighborhood associations near washes and parks; small businesses on affected corridors; transit riders and operators concerned about safety (transit safety was adopted as a separate action plan in Dec 2025); residents who read visible drug use as a failure of basic order.
- *Against / at risk:* People experiencing homelessness and drug users, who face jail minimums; service providers including the **Primavera Foundation** (CEO **Tisha Tallman** publicly backed the emergency declaration); harm-reduction and civil-rights advocates; Pima County, which would absorb jail and court costs.
- *Cross-pressured / persuadable:* Mayor Romero and the council majority, who backed both the emergency declaration and the Safe City deployments; TPD leadership, which faces a staffing shortage and would have to enforce whatever passes; residents who want visible drug use addressed but oppose jail minimums; **Pima County**, which Lee wants to handle drug cases instead — a jurisdictional handoff nobody has agreed to.

**Policy changes on the table (least to most ambitious):**
1. Make Resolution 24067's permitting streamlining permanent at the six-month review and stop there.
2. Fund the Public Safety Action Plan targets fully: triple Transition Center post-jail shelter placement from ~10% to 30%, +10% street-outreach acceptance, +20% pre-arrest drug deflection.
3. Scale STAR Village (currently a 25-person pilot) and add safe-parking sites under the temporary-use-permit pathway.
4. Negotiate an IGA shifting drug-case handling to Pima County, as Lee proposed, rather than the city standing up its own court capacity.
5. Adopt the shelved misdemeanor ordinance with the required court judge and TPD capacity funded — the option the council drafted, priced, and then could not bring itself to buy.

**Why an assembly rather than the normal process:** This is the rare case where the council did the work, wrote the ordinance, costed it, and then stalled — not because of legal risk but because the tradeoff (a new judge and officer time versus other city priorities) is a values question staff cannot answer. The two loudest constituencies, affected neighborhoods and service providers, talk past each other at the microphone. An assembly is also the only realistic way to include people who are themselves unsheltered or using, whose stake is a five-day jail minimum and who are structurally absent from the call-to-the-audience process. And the six-month review of Resolution 24067 is a natural, scheduled decision point to aim at.

**Disqualifiers / risks:** The framing must be tightly scoped or it becomes "solve homelessness," which is unanswerable — anchor it to the specific instruments (the shelved ordinance, the 24067 renewal, the STAR Village scale-up decision, the county IGA). Emotional volatility is high and participant safety/facilitation needs real design. No active litigation found; *Grants Pass* removed the main federal hook. No moneyed lobby. Budget pressure is the wild card: a deteriorating revenue picture could moot the expensive options before an assembly reports.

**Sources:**
- "For now, Tucson will not adopt a proposed public drug use ordinance" — https://news.azpm.org/p/azpmnews/2026/1/16/228018-for-now-tucson-will-not-adopt-a-proposed-public-drug-use-ordinance/ — 2026-01-16
- "Tucson pushes to address public drug use, but obstacles remain" — https://news.azpm.org/p/newsheadlines/2026/1/29/228223-tucson-pushes-to-address-public-drug-use-but-obstacles-remain/ — 2026-01-29
- "Tucson City Council votes to declare housing, homelessness emergency" — https://www.kold.com/2026/02/06/tucson-city-council-votes-declare-housing-homelessness-emergency/ — 2026-02-06
- "City of Tucson declares a housing and homelessness emergency" — https://news.azpm.org/s/102663-city-of-tucson-declares-a-housing-and-homelessness-emergency/ — 2026-02
- "Facing $27 million deficit, Tucson leaders push back on cuts to housing and public drug ordinance" — https://azluminaria.org/2026/02/19/facing-27-million-deficit-tucson-leaders-push-back-on-cuts-to-housing-and-public-drug-ordinance/ — 2026-02-19
- "Tucson releases draft of public safety action plan" — https://news.azpm.org/p/newsheadlines/2026/2/27/228661-tucson-releases-draft-of-public-safety-action-plan/ — 2026-02-27
- "'Nobody is disposable': inside a Tucson Safe City Deployment" — https://news.azpm.org/p/azpmnews/2026/5/19/229809-nobody-is-disposable-inside-a-tucson-safe-city-deployment/ — 2026-05-19
- "Billion-dollar problem: Tucson grapples with homelessness" — https://www.tucsonsentinel.com/local/report/050826_homeless_tucson/billion-dollar-problem-tucson-grapples-with-homelessness/ — 2026-05-08
- "Tucson to pilot STAR Village sanctioned camp for homeless" — https://www.tucsonsentinel.com/local/report/082825_star_village_camp/ — 2025-08-28
- "Amid policy shift on public safety issues, Tucson City Council adopts transit safety plan" — https://news.azpm.org/s/102331-amid-policy-shift-on-public-safety-issues-tucson-city-council-adopts-transit-safety-plan/ — 2025-12

---

## 5. How to close Tucson's structural budget gap

**One-line frame:** Tucson's voters rejected the city's proposed tax by 70-30 and the city still has a structural gap — what mix of cuts, fees and new revenue should Tucson adopt, and what would have to be true for voters to approve any of it?

**Why it's live now:** On **March 11, 2025** Tucson voters rejected **Proposition 414**, a half-cent sales tax increase (8.7% → 9.2% for ten years), by **53,350 to 23,084 — 69.76% no to 30.18% yes**. That was a council-referred measure, tied to public safety and infrastructure, defeated roughly 7-to-3. In **February 2026** the city faced a projected **$27 million** FY2027 deficit and council members fought over cuts to housing programs. City Manager **Timothy Thomure**'s recommended **$2.466 billion** FY2027 budget, presented **April 21, 2026**, closed most of it — the article record settles on roughly a **$17–17.8 million** deficit for the coming year — while protecting fire stations and preserving pay increases and voter-backed programs. But a **~$66 million** deficit is projected in coming years, and the transit subsidy alone is $68 million a year. Meanwhile the city has gone to fees instead of taxes: a **$3/month Clean City Fee** and higher trash/landfill rates effective **July 1, 2026**, a utility tax increase to **5% effective March 1, 2026**, and four annual **3.5%** water rate increases FY2027–FY2030. Two more measures go to voters **November 3, 2026** (Props 421 and 422).

**Deciding body & instrument:** Tucson Mayor & Council, with voters as a partner for any tax increase. Instruments: (a) the annual budget ordinance and the spending-limit resolution; (b) fee ordinances (Environmental Services rates, the Clean City Fee, utility tax rate) which the council can set **without a vote of the people**; (c) council-referred ballot measures under the city charter; (d) citizen initiative — 14,380 valid signatures (see Ballot access) if residents want to force a different revenue design.

**State preemption check:** **City retains authority over its own budget, fees and local sales tax rate**, subject to voter approval for tax increases. Arizona does constrain the revenue menu in ways that matter: **tax increment financing is statutorily unavailable** to Arizona cities, which removes a tool most peer cities use for infrastructure; and the shared-revenue distribution that funds roughly a quarter of local budgets is set by the state and is the same lever SB 1487 threatens to cut off. Note the interaction that makes this issue distinctive: **every preemption fight the city picks is also a budget decision**, because losing an SB 1487 challenge means losing shared revenue.

**Political salience:** **High.** A 70-30 defeat on a council-referred measure is about as unambiguous a rejection of the normal process as a city can produce. The gap did not go away, and the council's response has been to raise fees the voters don't get to approve — which is legally clean and politically corrosive. Every outlet covered Prop 414 and the subsequent budget cycles: Star, KVOA, AZPM, KOLD, KGUN9, Luminaria, Spotlight. The city ran budget information sessions and community budget sessions through May 1, 2026.

**Constituencies:**
- *For change (new revenue):* City departments facing cuts; public-safety unions; housing and homelessness program advocates who lost ground in the FY27 cuts; transit riders whose subsidy is the single largest discretionary line.
- *Against / at risk:* Low-income residents, for whom a regressive sales tax at 9.2% and a $3/month flat fee both bite hardest; small businesses and retailers competing with unincorporated county sales tax rates; the broad, unorganized "no" coalition that delivered 69.76% — notably **not** a funded campaign, which is what makes the margin meaningful.
- *Cross-pressured / persuadable:* Residents who voted no on Prop 414 but who also want roads, police response and parks — Prop 411 (roads) passed with about **73%** in 2022 and RTA Next passed **60-40** in March 2026, so Tucson-area voters demonstrably *will* approve taxes when the purpose is specific and the accountability is visible. That contrast between 73% yes for roads and 70% no for Prop 414 is the central puzzle an assembly would work on.

**Policy changes on the table (least to most ambitious):**
1. Do nothing new: continue closing gaps with fees the council can set unilaterally, and accept the erosion of consent that goes with it.
2. Adopt a published fiscal policy: reserve targets, a rule about when fees versus taxes are used, and mandatory sunset/audit on any new revenue.
3. Redesign a Prop 414 successor around the Prop 411 template — narrow, specific purpose, hard sunset, an independent citizen oversight committee (Prop 411 has the Complete Streets Coordinating Council; Prop 407 had a defined project list).
4. Structural spending decisions: put the $68M transit subsidy, the public-safety staffing plan, and housing programs into an explicit priority ranking rather than resolving them one at a time each spring.
5. Reduce dependence on regressive sales tax entirely — shift toward user fees, franchise/utility revenue and asset strategy, with an explicit distributional analysis of who pays under each option.

**Why an assembly rather than the normal process:** Prop 414 is a documented failure of the normal process: the council and staff designed a package, referred it, and voters rejected it 7-to-3 without an organized opposition campaign. That is the textbook case for deliberation — not because voters were wrong, but because nobody knows *what* they would have said yes to, and the council's revealed response has been to route around them via fees. An assembly can also do the one thing a referendum cannot: trade off between competing goods rather than voting yes or no on a single pre-packaged bundle. And the comparison set is unusually rich — Tucson-area voters said yes at 73% (Prop 411) and 60% (RTA Next) and no at 30% (Prop 414) within four years, so there is real evidence to deliberate over.

**Disqualifiers / risks:** Scope discipline is the main risk — "the city budget" can become everything. Anchor it to a specific product: the design criteria for the next revenue referral, plus a ranked priority list for the FY2028 budget. Timing should target the fall/winter before the FY2028 recommended budget (roughly April 2027). No litigation. No moneyed lobby — the Prop 414 opposition was diffuse. Note that Props 421 and 422 resolve on November 3, 2026 and their results are additional evidence an assembly should have in hand.

**Sources:**
- "Prop. 414: Voters soundly reject Tucson sales tax increase" — https://tucson.com/news/local/government-politics/elections/article_a68b2880-fde5-11ef-b6d5-c35ea9a694b2.html — 2025-03-11
- "Prop 414 Results: Tucson voters reject sales tax hike" — https://news.azpm.org/p/azpmnews/2025/3/11/224020-prop-414-results-tucson-voters-reject-sales-tax-hike/ — 2025-03-11
- Ballotpedia, Tucson Proposition 414 (March 2025) — https://ballotpedia.org/Tucson,_Arizona,_Proposition_414,_Increased_Sales_Tax_Measure_(March_2025)
- "In wake of Prop 414 rejection, Tucson council will seek savings" — https://www.kold.com/2025/03/13/wake-prop-414-rejection-tucson-council-will-seek-savings/ — 2025-03-13
- "Tucson braces for tighter budgets as revenues dip" — https://azluminaria.org/2026/02/05/tucson-braces-for-tighter-budgets-as-revenues-dip/ — 2026-02-05
- "Tucson drafts $2.5 billion budget as 2027 forecast improves" — https://www.tucsonsentinel.com/local/report/041726_tucson_budget/ — 2026-04-17
- "Tucson City Manager Recommends $2.466 Billion FY27 Tucson Budget" — https://realestatedaily-news.com/tucson-city-manager-recommends-2-466-billion-fy27-tucson-budget-focused-on-stabilization-pay-and-capital-projects/ — 2026-04
- "Tucson faces $17.8M deficit as city boosts pay, infrastructure spending" — https://www.tucsonspotlight.org/tucson-faces-17-8m-deficit/ — 2026
- "Tucson residents could pay more for trash, water; face new clean city fee" — https://www.kold.com/2026/03/19/tucson-residents-could-pay-more-trash-water-face-new-clean-city-fee/ — 2026-03-19
- "Tucson voters approve keeping half-cent sales tax for road improvements" (Prop 411, ~73%) — https://tucson.com/news/local/govt-and-politics/article_d6504e64-d607-11ec-8b1c-ab5401c5b087.html — 2022-05
- "With 60% in favor, Pima County voters give big thumbs-up to RTA Next" — https://www.tucsonsentinel.com/local/report/031026_rta_polls_open/ — 2026-03-10

---

## 6. Tucson Water: rates, the unincorporated differential, and who gets a large allocation

**One-line frame:** How should Tucson Water allocate water and set rates among city residents, unincorporated county customers, and large industrial users in a period of Colorado River scarcity?

**Why it's live now:** Three threads converged in the last eighteen months. (a) **Large users:** after the Project Blue outcry, Tucson adopted an ordinance regulating **large quantity water users** in **August 2025**, requiring conservation commitments; the August 2026 data-center zoning ordinance goes further, barring potable water for cooling absent a formal city agreement. (b) **Geography:** in early **April 2025** the council approved moving ahead with a differential rate structure for customers in unincorporated Pima County, with a public hearing set for **June 17, 2025** and rates effective early August 2025 — raising unincorporated rates **16%–23%**, about **$6.41–$8.88/month** more per household, while lowering bills about **$2/month** for customers inside incorporated cities. Pima County supervisors, led by then-Chair **Rex Scott**, brought a resolution to oppose it and authorize support for legal challenges; the board **rejected** that resolution in **May 2025**. Unincorporated residents are about **one-third of all Tucson Water customers** and have no vote for the body that sets their rates. (c) **Rates generally:** the council approved four annual **3.5%** increases covering FY2027 through FY2030.

**Deciding body & instrument:** Tucson Mayor & Council, sitting as the governing body of Tucson Water (a city-owned utility with no separate elected board). Instruments: the annual **Notice of Intention to Adjust Water Rates and Fees** and the resulting rate ordinance; the **Large Quantity Water Users ordinance** and its amendments; the **Water Service Area Policy** governing service outside city limits; and individual water service agreements with large users.

**State preemption check:** **City retains full authority.** Municipal utility rate-setting is a core city power. The constraint is state law requiring rates be "just and reasonable" and supported by a rate study — a substantive standard, not a preemption. That standard has teeth: see litigation risk below. There is no A.R.S. 9-500.xx provision preempting municipal water rates or service-area policy that I found. Note that Colorado River / CAP allocation is set at the state and federal level and is **not** a city decision — an assembly must be scoped to what Tucson Water actually controls (rates, service area, large-user conditions), not to supply.

**Political salience:** **Med-High.** Water is the defining Tucson issue and the differential-rate fight is a genuine city-versus-county institutional conflict, with Supervisor Scott calling the plan "inherently discriminatory and unfair." The large-user question rode the Project Blue mobilization and produced an ordinance within weeks. That said, the *specific pending instrument* is less sharp than for issues 1–5 — the differential rates took effect in August 2025 and the county declined to fight, and the four-year rate plan is already adopted. The live decisions are the annual rate adjustment, amendments to the large-user rules, and the **one-year implementation review** of the data-center ordinance that the council ordered.

**Constituencies:**
- *For change:* Unincorporated Pima County ratepayers (~1/3 of customers, taxation-without-representation framing); Pima County government; conservation advocates who want large users constrained further; the No Desert Data Centers coalition.
- *Against / at risk:* City of Tucson ratepayers, whose bills fall ~$2/month under the differential structure; Tucson Water, which argues serving dispersed unincorporated areas genuinely costs more per unit of water sold (more pipe per gallon); the city's annexation strategy, which has historically used water service as leverage; large industrial users who would face tighter allocation conditions.
- *Cross-pressured / persuadable:* Suburban jurisdictions (Marana, Oro Valley, Sahuarita) that are Tucson Water customers in some areas and competitors for data-center tax base in others; Pima County supervisors, who split on whether to fight the rates; residents who support conservation in the abstract but oppose rate increases.

**Policy changes on the table (least to most ambitious):**
1. Publish a transparent cost-of-service study and rate-design rationale, and give unincorporated ratepayers a formal advisory seat — process fixes only.
2. Adjust the differential's size or tier structure so it tracks demonstrated marginal cost rather than jurisdiction.
3. Tighten the Large Quantity Water Users ordinance: hard caps, mandatory reclaimed/effluent use, and public reporting of every large-user agreement.
4. Adopt an explicit allocation hierarchy for new large users (residential growth vs. industrial vs. agriculture) rather than deciding case by case.
5. Revisit the Water Service Area Policy and the water-for-annexation link — the most institutionally explosive option, and the one most likely to trigger county retaliation.

**Why an assembly rather than the normal process:** Roughly a third of Tucson Water's customers are governed by a council they cannot vote for, and the county's only lever is a lawsuit. That is a representation gap deliberation is well suited to, if the assembly is drawn from the **service area** rather than the city electorate. On large users, the current process is deal-by-deal and NDA-shaped; a general allocation rule set deliberatively would be more durable than the ad hoc outcome Project Blue produced.

**Disqualifiers / risks:** **Partial fail on criterion 4, stated explicitly.** Pima County sued Tucson over the 2021 differential rates (Ordinance 11881) in **December 2021**, and in **September 2023** the Pima County Superior Court ruled for the county, finding the rates "unreasonable as a matter of law" because they were not based on the rate study state law requires. The county **declined** to authorize new legal action in May 2025, but the resolution it rejected would have expressly funded "support for any legal challenges" — so litigation is dormant, not foreclosed, and any assembly recommendation touching the differential lands in a space with a live precedent against the city. Also: my confirmation that a *new* rate or service-area decision is pending in the current cycle is **weaker than for issues 1–5**; the Arizona Daily Star article on Water Service Area Policy changes that surfaces in search results is from **July 10, 2013**, not 2026, and I could not fetch the city's current Water Service Area Policy page (tucsonaz.gov blocks scripted access). Treat the specific pending instrument as **unverified** and confirm against the Notice of Intention filings before committing.

**Sources:**
- "Pima County won't fight higher rate plan for suburban Tucson Water customers" — https://tucson.com/news/local/government-politics/article_68d0aacc-9f25-423f-a2fb-ea3c551ac01b.html — 2025-05-10 (updated 2026-06-14)
- "Tucson's 'unreasonable' increased water charges for Pima County residents dumped by judge" — https://www.tucsonsentinel.com/local/report/091523_tucson_pima_water/ — 2023-09-15
- "Pima County sues over Tucson Water rate shifts" — https://www.tucsonsentinel.com/local/report/121721_pima_tucson_water_suit/pima-county-sues-over-tucson-water-rate-shifts/ — 2021-12-17
- Pima County, "City of Tucson Differential Water Rates" (Ordinance 11881 reference) — https://www.pima.gov/2597/City-of-Tucson-Differential-Water-Rates
- "After Project Blue outcry, Tucson adopts rules for large water users" — https://azluminaria.org/2025/08/20/after-project-blue-outcry-tucson-adopts-rules-for-large-water-users/ — 2025-08-20
- "Tucson passes ordinance regulating large water users after data center debate" — https://news.azpm.org/p/azpmnews/2025/8/21/226109-tucson-passes-ordinance-regulating-large-water-users-after-data-center-debate/ — 2025-08-21
- "Tucson set to approve four-year plan for water rate increases" — https://tucson.com/news/local/government-politics/article_5e9ff2dd-01b3-48fe-965a-6fd779d8fe2b.html
- City of Tucson, Notice of Intent to Adjust Water Rates and Fees — https://www.tucsonaz.gov/Departments/Water/Your-Water-Bill/Rate-Adjustment (403 to scripted fetch)

---

## 7. What's left of local control over neighborhood-scale housing after HB 2721

**One-line frame:** Now that the state has mandated middle housing and ADUs, what should Tucson do with the design, infrastructure and anti-displacement choices it still controls?

**Why it's live now:** Arizona **HB 2721** required cities over 75,000 to allow 2–4 unit housing on single-family lots within a mile of the central business district, with a self-executing penalty: fail to adopt conforming regulations by **January 1, 2026** and middle housing becomes allowed on **all** single-family lots with **no limitations**. Facing that, Tucson's Mayor & Council held a public hearing and voted **6-1 on December 16, 2025** to approve a Middle Housing Unified Development Code amendment **citywide except in rural residential areas** — going beyond what the state required, on the theory that a locally designed citywide rule beat the state's no-limitations default. It took effect **January 1, 2026**: duplexes, triplexes, fourplexes, townhomes and cottage courts are now allowed across most of Tucson. Separately **HB 2720** (effective Jan 1, 2025) requires ADUs by right and **bars cities from prohibiting ADU use as short-term rentals**, and **HB 2928** further expanded ADU rights in 2025/26. The live questions are the implementation details Tucson still owns and the displacement effects in historic barrios.

**Deciding body & instrument:** Tucson Mayor & Council. Instrument: further **Unified Development Code text amendments** (design standards, parking, lot coverage, infrastructure adequacy, the rural-residential carve-out), plus non-zoning tools the state has *not* preempted — city-owned land disposition, the Housing First and community land trust programs, historic-district processes, and procurement/subsidy conditions.

**State preemption check:** **This is the clearest preemption case on the list, and the honest answer is: mostly gone.** HB 2721 and HB 2720/2928 set the floor and Tucson cannot go below it. Tucson cannot adopt **rent control** (A.R.S. § 33-1329: "no city, town or county shall enact any ordinance or resolution that would control rents on private residential property"). Arizona statutorily restricts **mandatory inclusionary zoning** — Arizona is one of a small number of states with such a prohibition. **Tax increment financing** is unavailable. Tucson cannot bar ADUs from being used as short-term rentals, and cannot prohibit STRs generally (A.R.S. § 9-500.39). What remains local: form and design standards that don't effectively prohibit the mandated uses, infrastructure adequacy requirements, the rural-residential carve-out, public land, subsidy programs, and historic preservation processes.

**Political salience:** **Med.** The December 2025 vote drew a public hearing and a 6-1 outcome; a Tucson Sentinel opinion column called it "a sparkling moment for democracy," and AARP Arizona backed it. Countervailing pressure is real but less organized: local commentary has framed the state law as a gentrification vector for Tucson's historic barrios. This is lower-salience than issues 1–5 — it is not currently a contested pending vote so much as an implementation and consequences question.

**Constituencies:**
- *For change (more housing / faster):* Housing advocates, AARP Arizona, YIMBY-aligned residents, homebuilders and small-scale developers, renters priced out by 10–20% annual rent increases in sought-after neighborhoods.
- *Against / at risk:* Established single-family neighborhood associations; residents of historic barrios who read middle housing as a displacement mechanism rather than an affordability one; rural-residential areas currently carved out, who may fear the carve-out is temporary.
- *Cross-pressured / persuadable:* Long-time barrio homeowners who would personally benefit from being able to build a fourplex or ADU but fear what happens to their neighbors; the council itself, which chose a citywide rule specifically to avoid the state's harsher default and may face pressure to narrow it.

**Policy changes on the table (least to most ambitious):**
1. Design and form standards for middle housing (massing, setbacks, tree/shade requirements) that shape outcomes without effectively prohibiting the mandated uses.
2. Infrastructure adequacy: water, wastewater and street capacity triggers tied to middle-housing build-out, coordinated with Tucson Water.
3. Anti-displacement package using non-preempted tools: property-tax relief programs, community land trust expansion, right-of-first-refusal on city land dispositions in barrio neighborhoods.
4. Revisit the rural-residential carve-out — either defend it or extend middle housing there too.
5. Use city-owned land and subsidy conditions (the one lever untouched by preemption) to produce deed-restricted affordability that mandatory inclusionary zoning legally cannot.

**Why an assembly rather than the normal process:** The most valuable output here may be civic rather than legislative: Tucson residents are litigating middle housing as though the city chose it, when the city was choosing between its own rule and a harsher state default. An assembly that works through what is actually still local — and lands on the non-preempted anti-displacement tools — corrects a widespread misunderstanding and produces recommendations the council can actually act on. It is also the best available vehicle for the barrio-displacement question, which the December 2025 hearing did not resolve.

**Disqualifiers / risks:** **Preemption risk is High by design** — this issue is *about* preemption, so the assembly must be scoped tightly to residual local authority or it will produce recommendations the state has already forbidden. Salience is the weakest on this list: there is no sharply defined pending vote, which makes it harder to give an assembly a real decision to influence. Consider pairing it with issue 5 or 6 rather than running it standalone. No litigation found; no organized moneyed fight at the city level (the fight was won in the Legislature, which is exactly the point).

**Sources:**
- "Tucson Expands Housing Options with Middle Housing Code Amendment Approval" — https://www.tucsonaz.gov/Departments/Planning-Development-Services/PDSD-News/Tucson-Expands-Housing-Options-with-Middle-Housing-Code-Amendment-Approval (403 to scripted fetch)
- "Middle Housing Moves Forward in Tucson" — https://states.aarp.org/arizona/middle-housing-moves-forward-in-tucson
- "Tucson's new middle housing ordinance a sparkling moment for democracy" — https://www.tucsonsentinel.com/opinion/report/121825_tucson_middle_housing_op/ — 2025-12-18
- Proposed Middle Housing UDC Amendments, redline draft — https://www.tucsonaz.gov/files/sharedassets/public/v/1/pdsd/documents/boards-committees-commissions/planning-commission/misc-middle-housing/attachment-b-middle-housing-udc-amendments-redline-draft-11.5.25.pdf — 2025-11-05
- Tucson Middle Housing hub (ArcGIS) — https://middle-housing-cotgis.hub.arcgis.com/
- "Gentrification Alert: How Arizona's Middle Housing Law Will Transform Tucson's Historic Barrios" — https://threesonorans.substack.com/p/gentrification-alert-7-months-until
- Morrison Institute, "State-Level Legal Barriers to Adopting Affordable Housing Policies in Arizona" — https://morrisoninstitute.asu.edu/sites/g/files/litvpz841/files/state-level-legal-barriers-to-adopting-affordable-housing-policies-in-arizona-nov-2021.pdf — 2021-11
- A.R.S. § 33-1329 (rent control preemption) — https://law.justia.com/codes/arizona/2016/title-33/section-33-1329/

---

## Rejected candidates

- **Tucson's ICE ordinance (barring ICE from staging on city property).** Adopted unanimously (6-0, one absent) in 2026 after a January 2026 direction to draft. **Killed by the litigation/lobby screen and by preemption:** a state legislator has already triggered an Attorney General probe of Phoenix and Tucson (Arizona Capitol Times, 2026-04-01), state law bars cities from limiting enforcement of federal immigration law "to less than the full extent permitted by federal law," and SB 1487 puts shared revenue at risk. This is an active legal contest, and the deliberative question ("should the city defy the state?") is not one an assembly can usefully resolve.
- **Short-term rental regulation.** **Killed outright by state preemption** — A.R.S. § 9-500.39 bars cities from prohibiting or effectively prohibiting STRs, with civil penalties and TPT license suspension as enforcement, and HB 2720 additionally bars cities from banning ADU use as STRs. Nothing meaningful left to deliberate.
- **Rent control / mandatory inclusionary zoning.** **Killed outright by state preemption** — A.R.S. § 33-1329 and Arizona's statutory restriction on mandatory inclusionary zoning. These come up constantly in Tucson housing discourse and are legally unavailable; worth naming to participants precisely because people expect them to be options.
- **Municipal firearm regulation.** **Killed by state preemption**, and Tucson has the scar tissue: *State ex rel. Brnovich v. City of Tucson* was the SB 1487 test case over the city's gun-destruction ordinance, which the city conceded conflicted with state law.
- **Prop 421 — the Tucson Electric Power franchise renewal.** Genuinely salient (voters rejected the prior franchise/undergrounding package, Prop 412, in a 2023 special election, and there is an active municipalization conversation). **Rejected on timing and the lobbying screen:** it is decided by voters on **November 3, 2026**, less than three months out, and utility franchise fights are the archetypal well-funded campaign. Worth revisiting *after* the result, particularly if it fails a second time. **I could not verify the 2023 Prop 412 margin or campaign spending** — web search budget was exhausted — so those figures are deliberately omitted rather than estimated.
- **RTA Next (Props 418 and 419).** Was the biggest regional transportation question of the cycle. **Already decided:** Pima County voters approved it in March 2026, roughly 61% for Prop 418 and 59% for Prop 419 (about 60-40 overall). Only the downstream IGA renegotiation remains, which is folded into issue 1.
- **Workplace heat protections for outdoor workers.** **Superseded** — Arizona adopted its first statewide outdoor heat safety rules effective **July 31, 2026**. Tucson's remaining local lever is its procurement-based heat protection ordinance for city contractors, which is narrow. A good illustration of the "spending power survives when regulatory power doesn't" pattern, but too thin to stand alone.
- **Tucson's local minimum wage (Prop 206).** Passed by initiative in November 2021, effective April 1, 2022, $15/hr by January 2025 with annual inflation indexing, administered by a city Department of Labor Standards. **Not rejected for preemption — it has survived** — but it is settled law with no pending decision, so there is nothing for an assembly to deliberate. Included here because it is the best available proof that Tucson's initiative route can still deliver substantive local policy.

---

## Data-source notes for tooling

**City of Tucson — Mayor & Council agendas (Hyland OnBase Agenda Online)**
- Portal: `https://tucsonaz.hylandcloud.com/221agendaonline/` — 200, no bot blocking observed.
- Search page: `https://tucsonaz.hylandcloud.com/221agendaonline/Meetings` — 200, server-rendered ASP.NET form. Meeting types available: REGULAR MEETING, REGULAR MEETING ADDENDUM, REGULAR SPECIAL MEETING, STUDY SESSION, STUDY SESSION ADDENDUM. Date presets: Last Year/Month/Week, Recent/Upcoming, This Week/Month/Year, Next Week/Month/Year, Custom Date Range.
- **No JSON API and no RSS found.** Scraping requires driving the ASP.NET form (viewstate) or hitting known URL patterns.
- URL patterns observed:
  - Meeting view: `/221agendaonline/Meetings/ViewMeeting?id=<meetingId>&doctype=1` (agenda) or `doctype=2` (minutes/summary)
  - Document: `/221agendaonline/Documents/ViewDocument/<URL-encoded name>.pdf?meetingId=<id>&documentType=Agenda&itemId=<id>&publishId=<id>&isSection=false`
  - Working example captured in the wild: `https://tucsonaz.hylandcloud.com/221agendaonline/Documents/ViewDocument/ATTACHMENT%20A_%20TRANSIT%20SAFETY%20AND%20SECURITY%20ACTION%20PLAN%20(TSSAP).pdf?meetingId=1940&documentType=Agenda&itemId=79450&publishId=200571&isSection=false`
- Pre-2010-08-04 records live in a separate archive section.
- Council meets the first four Tuesdays of the month: afternoon study session, then 5:30 p.m. regular meeting, City Hall, 255 W. Alameda St.

**Pima County — Legistar / Granicus (the good one)**
- Web UI: `https://pima.legistar.com/` (Calendar.aspx returns 200).
- **Public Legistar Web API, no key required, verified working 2026-08-15:**
  - Bodies: `https://webapi.legistar.com/v1/pima/bodies?$top=5` → Board of Supervisors is `BodyId=138`, 5 members.
  - Events: `https://webapi.legistar.com/v1/pima/events?$filter=EventDate gt datetime'2026-08-01'&$orderby=EventDate&$top=6` → returns `EventDate`, `EventTime`, `EventBodyName`, and a direct `EventAgendaFile` PDF URL of the form `https://legistar.granicus.com/pima/meetings/2026/8/1864_A_Board_of_Supervisors_26-08-17_Online_Agenda.pdf`.
  - Matters (full-text-ish search on title): `https://webapi.legistar.com/v1/pima/matters?$filter=substringof('data center',MatterTitle)&$orderby=MatterIntroDate desc&$top=10` → this is how File IDs 20637 (moratorium), 19018 (Zoning for Data Centers), 19580 (Board of Health / Project Blue) and 19642 (Houghton Data Center) were found. **This query worked and is the single best programmatic entry point in the region.**
  - Standard OData params supported: `$filter`, `$orderby`, `$top`, `$skip`. URL-encode `$` as `%24` if your shell eats it.

**Bot-blocking / access notes**
- `www.tucsonaz.gov` — **behind Akamai; returns HTTP 403 to curl and to WebFetch**, including static PDFs. Error pages carry an `errors.edgesuite.net` reference. Workaround that worked: Wayback Machine with the `if_` replay flag, e.g. `https://web.archive.org/web/20250827202014if_/https://www.tucsonaz.gov/files/.../i-r-petition-signature-requirements.pdf` — this returned a real `application/pdf`. Note the *non*-`if_` form and the `http://` form of the same URL both returned a 503 HTML stub, and the `WebFetch` tool refuses web.archive.org entirely, so this must be done via curl.
- `cms3.tucsonaz.gov` — appears in search results but did not resolve (HTTP 000).
- `www.tucsonsentinel.com` — **Cloudflare JS challenge** on scripted requests ("Just a moment... Enable JavaScript and cookies to continue"). `/rss/` and `/feed/` both 403. WebFetch succeeded on some Sentinel URLs and 403'd on others — inconsistent. Needs a headless browser for reliable access.
- `tucson.com` (Arizona Daily Star) — scriptable with a normal browser User-Agent and article body text is partially present in HTML, but content is metered/paywalled and there is no `datePublished` in JSON-LD; the byline/date appears in the visible text after the string "Copy article link". **Watch for stale articles surfacing in search:** the "Tucson water-service changes are approved" result is from **July 10, 2013** and reads as current in search snippets.
- `reddit.com` and `old.reddit.com` — **`search.json` endpoints are blocked**; both returned the HTML SPA shell (`<body class=theme-beta>`) rather than JSON, with a normal desktop User-Agent. No Reddit data was gathered for this report. A registered OAuth app or a headless browser would be required.
- `news.azpm.org` — no RSS feed found. Tried `/feed/`, `/rss/`, `/rss.xml`, and `www.azpm.org/rss/news/`: all returned the HTML site or 404. Article URLs are stable and human-readable (`/p/<section>/<yyyy>/<m>/<d>/<id>-<slug>/`) and WebFetch works on them, so date-pattern crawling is viable.

**RSS feeds verified working (HTTP 200, correct content-type, 2026-08-15)**
- Arizona Luminaria: `https://azluminaria.org/feed/` → `application/rss+xml`
- Tucson Agenda (Substack): `https://tucsonagenda.substack.com/feed` → `application/xml`
- Tucson Spotlight: `https://www.tucsonspotlight.org/rss/` → `application/rss+xml`
- Arizona Daily Star local news: `https://tucson.com/search/?f=rss&t=article&c=news/local&l=25` → `application/rss+xml` (Lee Enterprises search-as-RSS; `c=` takes a section path, `l=` the item limit — other sections should work the same way)

**Other endpoints**
- TUSD Governing Board: `https://govboard.tusd1.org/Meetings` — not probed for API/RSS; worth checking, TUSD is the deciding body for issue 2 and the December 2026 vote is the target.
- City of Tucson Mayor & Council YouTube (live + archive): `https://www.youtube.com/@cityoftucson/live` and playlist `https://www.youtube.com/playlist?list=PLiFHzXZlMJbOrvjvghQaCLUXtKaBvaLMH` — useful for transcripts where minutes lag.
- Pima County Public Library maintains a mirror/index of Mayor & Council minutes and agendas: `https://www.library.pima.gov/content/mayor-and-council-meeting-minutes-and-agendas-city-of-tucson/` — a possible non-Akamai route to city records.
- City Clerk contact for anything the website blocks: `cityclerk@tucsonaz.gov`, 520-791-4213.

**Known gaps in this research**
- Current (2026–2027 cycle) Tucson initiative/referendum signature counts — only the "through November 2025" figures (14,380 / 9,587) are verified.
- The 15%/10% statutory basis for those counts is **inferred from the exact 1.5 ratio**, not read from A.R.S. Title 19 directly.
- Prop 412 (2023 TEP franchise) vote margin and campaign spending — **not verified**, web search budget exhausted.
- Whether a *new* Tucson Water rate or Water Service Area Policy decision is pending in the current cycle (issue 6) — **not verified**; the city's policy page is 403-blocked and the Star article that surfaces in search is from 2013.
- No Reddit / r/Tucson sentiment data — endpoint blocked.
- Ward numbers for individual council members are stated only where directly confirmed in a source (Nikki Lee, Ward 4); others are listed by name only to avoid fabrication.
