# Dayton, OH — Candidate Assembly Issues

**Researched:** 2026-08-15
**Deciding bodies in scope:** Dayton City Commission (5 members, commission–manager form; Mayor Shenise Turner-Sloss, term began Jan 5 2026); Dayton City Plan Board; Dayton Board of Education (Dayton Public Schools, 7 members); Montgomery County Board of County Commissioners; Montgomery County Human Services Levy Council; the forthcoming 11-member Dayton public hospital Board of Trustees (created by Issue 9, Nov 2025); Montgomery County Land Bank (city contract counterparty)
**Meeting/agenda platform:** **CivicPlus / CivicEngage "AgendaCenter"** — base URL `https://www.daytonohio.gov/AgendaCenter` (City Commission category: `https://www.daytonohio.gov/AgendaCenter/City-Commission-2`). **Verified working RSS:** `https://www.daytonohio.gov/RSSFeed.aspx?ModID=65&CID=City-Commission-2` returns HTTP 200, `text/xml`, valid RSS 2.0 (fetched 2026-08-15; most recent items: Special Meeting agenda 2026-08-13, Regular Meeting agenda 2026-08-12). No JSON API found. Montgomery County uses the same CivicPlus AgendaCenter product at `https://www.mcohio.org/AgendaCenter` (HTTP 200). DPS posts board materials at `https://dps.k12.oh.us/meeting-information/` (HTTP 200) — platform not identified as Legistar/Granicus; appears to be a WordPress page with BoardDocs-style links (unverified).
**Local news sources used:**
- WYSO (NPR, Yellow Springs/Dayton) — https://www.wyso.org — **verified RSS:** `https://www.wyso.org/index.rss` and `https://www.wyso.org/news.rss` (both HTTP 200, valid RSS)
- Dayton Daily News — https://www.daytondailynews.com (no working RSS found; rate-limits aggressive fetching, returns HTTP 429)
- WHIO TV 7 / WHIO Radio — https://www.whio.com
- WDTN / Dayton 24/7 Now — https://www.wdtn.com, https://dayton247now.com
- Spectrum News 1 Ohio — https://spectrumnews1.com/oh
- Ohio Capital Journal — https://ohiocapitaljournal.com — **verified RSS:** `https://ohiocapitaljournal.com/feed/` (HTTP 200)
- Route Fifty (national, but covered Dayton's own citizens' assembly) — https://www.route-fifty.com
- Dayton Business Journal — https://www.bizjournals.com/dayton — **blocked** (Cloudflare interstitial, HTTP 403 on RSS)

**Ballot access:** Dayton is an Ohio home-rule charter city, so its charter (not ORC 731.28–.41) controls municipal initiative/referendum. **I could not verify the charter's exact percentage language** — the charter is hosted only on Municode (`https://library.municode.com/oh/dayton/codes/code_of_ordinances?nodeId=CH`, linked from the City Law Department Quick Links page) and Municode returned HTTP 403 to every automated fetch attempt. Treat the percentage as **unverified**.

What *is* verified is a real, recent working example: the Clergy Community Coalition put the West Dayton public hospital levy on the ballot by citizen initiative in 2025 after the City Commission declined to act. Per WOSU/WYSO reporting, the threshold was **1,250 valid signatures**; the coalition collected signatures July 24 – Aug 12 2025, delivered "over 2,000" to City Hall on Aug 12 2025, and **1,496 were validated**. The Commission then adopted the ministerial steps (directing the county auditor to certify estimated tax revenue, then a resolution transmitting the measure to the Montgomery County Board of Elections). That group had **failed the signature test at least three times previously** — so the threshold is real but not prohibitive.
Source: "Dayton residents will vote on public hospital initiative" — https://www.wosu.org/2025-08-22/dayton-residents-will-vote-on-public-hospital-initiative — 2025-08-22.
General Ohio backdrop (applies where a charter is silent): municipal initiative petitions require signatures of 10% of the electors who voted for governor in the municipality at the last gubernatorial general election; charter amendment petitions require 10% of the total vote cast at the last general municipal election (Ohio Const. art. XVIII §§ 8, 9, 14). Certification runs through the city auditor/clerk to the county board of elections.

**Existing participatory infrastructure:** **Substantial — this is Dayton's biggest strategic asset and it is unusual.**
1. **Seven Priority Boards** (Downtown, Fair River Oaks Council, Innerwest, Northwest, Northeast, Southeast, Southwest) — elected citizen volunteers serving as the official neighborhood voice, dating to the 1970s. Confirmed still operating: the city's 2026 Community Engagement Grants explicitly list "neighborhood associations, block clubs, **priority boards**, and business associations" as eligible applicants (https://www.daytonohio.gov/205/Community-Engagement-Grants, HTTP 200). Related **Priority Land Use Boards** (Greater Dayton, Northeast, Southeast, West) have live city pages, e.g. https://www.daytonohio.gov/1325/Greater-Dayton-Priority-Land-Use-Board (HTTP 200).
2. **Division of Community Engagement** — https://www.daytonohio.gov/973/Community-Engagement — led by division manager **Mike Squire**.
3. **THE CITY HAS ALREADY RUN A CITIZENS' ASSEMBLY.** Dayton convened its **first citizens' assembly** on the future West Dayton public hospital: lottery-selected participants reflecting area demographics, ~4 days of learning/deliberation, run with the **Federation for Innovation in Democracy (FIDE)**, the **Kettering Foundation** (headquartered in Dayton), and **New America**. It was **paused, with resumption planned for fall 2026**, because the city underestimated how emotionally charged the hospital topic was and concluded it needed more relationship-building and outreach first. Source: Route Fifty, 2026-05-20 — https://www.route-fifty.com/people/2026/05/how-daytons-citizens-assembly-showed-new-path-community-engagement/413634/
4. **Annual Dayton Resident Opinion Survey** — https://daytonresidentsurvey.org/ and https://www.daytonohio.gov/1114/Dayton-Survey — mailed to a household sample; public dashboard at https://dashboards.mysidewalk.com/dayton-oh-resident-satisfaction-survey-2025.

## Issue Shortlist

| # | Issue | Deciding body | Salience | Media profile | Litigation/lobby risk | Assembly fit |
|---|-------|---------------|----------|---------------|----------------------|--------------|
| 1 | How to spend the West Dayton public hospital levy (Issue 9, ~$2M/yr) | Dayton City Commission + 11-member hospital Board of Trustees (mayor as president) | **High** — passed 58% by citizen initiative after 3 failed petition attempts; no site, no plan, no board seated as of Aug 2026 | **High** — DDN, WYSO, WHIO, WDTN, Spectrum, Route Fifty | **Low** — no litigation found; hospital systems have not visibly lobbied against | **High** — but note the city's *own* assembly on this already stalled; entering here means picking up a paused process, not a greenfield |
| 2 | Whether and under what rules to restart Dayton's ALPR (Flock) camera program | Dayton City Commission (final decision after independent audit); DPD policy | **High** — packed commission chambers May 2026; 7,100 immigration-related searches; cameras physically bagged | **High** — WYSO, WOSU, DDN, Fortune (national pickup) | **Low–Med** — no lawsuit found; Flock Safety is a well-funded vendor with an active national lobbying posture, so vendor-side pressure is real | **High** — classic values-vs-safety tradeoff with a concrete instrument |
| 3 | Group-home siting: what happens when the moratorium expires Aug 30, 2026 | Dayton City Commission (zoning code amendment); City Plan Board recommends | **High** — Dayton hosts more foster-care group homes than any other Ohio community; 1,000-ft spacing + caps already adopted Oct 2025 | **Med–High** — DDN led coverage; WHIO, CitizenPortal | **Med — flag** — no Dayton suit found, but recovery-housing/foster-home caps are a live Fair Housing Act theory nationally (US v. Town of Beekman filed 2026-03-05; a suit against Ironton, OH is pending). State bill HB 583 is in play, i.e. some lobbying | **Med–High** — but assembly must be scoped so recommendations don't create FHA exposure |
| 4 | Dayton Public Schools 7-mill continuing levy on the Nov 3, 2026 ballot | Dayton Board of Education (resolution placing levy); Montgomery County voters | **High** — $14.6M/yr, $245 per $100k, closes a $9M FY2027 gap; follows a contested districtwide reconfiguration and a 3–3 board vote on the superintendent | **High** — DDN, Springfield News-Sun, WHIO, Dayton 24/7, Spectrum | **Low** — no organized opposition committee found; adjacent busing fight *is* in court (see disqualifiers) | **High** — levy design + what gets cut if it fails is exactly assembly-shaped |
| 5 | Which downtown-safety work group recommendations to fund, and how | Dayton City Commission + Montgomery County Board of Commissioners (jointly) | **Med–High** — first joint city/county downtown meeting in a decade (Aug 10, 2026); residents pushed back publicly in Jan 2026 | **Med–High** — WYSO (Jan and Aug 2026), DDN, WDTN, Dayton 24/7 | **Med — flag** — driven by U.S. Rep. Mike Turner and downtown business interests (incl. Woodard Development); that's a well-organized, well-resourced convener, though not a paid lobbying campaign | **High** — explicit distributive conflict (downtown vs. neighborhoods) with no clean technical answer |
| 6 | AdaptDayton: what the rewritten zoning ordinance and map should allow | Dayton City Plan Board → Dayton City Commission (full zoning & subdivision ordinance replacement) | **Med** — abstract now, but the June 2026 data-center ban proved the Commission will use this code aggressively | **Med** — WYSO covered the engagement push and the data-center vote; DDN/WHIO covered the ban | **Low** — no litigation; developer interest exists but no visible campaign | **Med–High** — long runway (adoption 2027) is ideal for deliberation, low urgency is the downside |
| 7 | What replaces ARPA money for demolition/blight after Dec 31, 2026 | Dayton City Commission (budget ordinance + Land Bank contract renewal) | **Med** — ~6,000 vacant structures; housing conditions is a top-2 resident survey priority; Land Bank contract runs only through end of 2026 | **Med** — DDN has covered demolition rounds and Land Bank awards repeatedly; WYSO | **Low** | **Med–High** — a genuine "you choose the tradeoff" budget question with a hard deadline |

---

## 1. Spending the West Dayton public hospital levy (Issue 9)

**One-line frame:** Dayton voters approved about $2 million a year for ten years to seed a public hospital in West Dayton — what should that money buy first, and on what conditions, if a full hospital cannot be built with it?

**Why it's live now:** On 2025-11-04 Dayton voters passed **Issue 9**, a 1-mill, 10-year property tax raising ~$2M/yr (~$20M total, ~$35/yr per $100,000 of home value), by about **58%**. The measure reached the ballot only because the **Clergy Community Coalition** (Bishop Richard Cox) ran a citizen initiative after the City Commission repeatedly declined to place it. As of the last reporting available, **no site has been selected**, the **11-member board of trustees** (mayor as president; the Coalition expects two seats) had not been seated, collection does not begin until **January 2027**, and the ballot language commits the city to an emergency room, laboratory services, a maternity ward and doctors' offices — commitments $20M cannot cover. Commissioner Matt Joseph publicly criticized the plan's vagueness during the campaign. This is the exact topic Dayton's **own citizens' assembly** took up and then **paused until fall 2026**.

**Deciding body & instrument:** Dayton City Commission (appointments to the board of trustees; ordinances/resolutions appropriating levy proceeds and authorizing land acquisition) and the 11-member hospital Board of Trustees created by the approved initiative. The underlying instrument already exists — a voter-approved 1-mill levy — so the live question is the **spending plan and governance**, not authorization.

**Political salience:** **High** — 58% approval citywide on a self-taxing measure in a low-income city; a multi-year petition campaign that failed three times before succeeding (Clergy Community Coalition, per DDN reporting on earlier signature shortfalls); campaign infrastructure still standing at daytonissue9.org; and West Dayton has been without a full-service hospital since Good Samaritan closed in 2018. The city's 2020 "racism as a public health crisis" resolution is the stated policy lineage.

**Constituencies:**
- *For change:* West Dayton residents (majority-Black neighborhoods most affected by the Good Samaritan closure); the **Clergy Community Coalition** and affiliated congregations; Mayor **Shenise Turner-Sloss**, who is statutorily board president; organized labor (the initiative language includes construction and hospital labor standards).
- *Against / at risk:* Fiscal skeptics on the Commission (**Matt Joseph** on record); Dayton property owners generally, who pay the millage; incumbent health systems (Premier Health, Kettering Health) whose service-line economics a public competitor would touch — note I found **no evidence** of them organizing against Issue 9, so do not assume it.
- *Cross-pressured / persuadable:* Public-health professionals who support access but doubt a standalone hospital is viable at this scale; East and North Dayton residents paying for a West Dayton facility; the paused assembly's own participants.

**Policy changes on the table:**
1. Spend the levy on a **needs assessment plus a phased freestanding emergency department / urgent care**, and defer inpatient capacity.
2. Use the $20M purely as **match/leverage** — condition all spending on securing county, state, philanthropic and federal dollars first.
3. Buy and bank a **site** now while land is cheap, and set explicit milestones the trustees must hit before construction dollars flow.
4. Fund **mobile and clinic-based primary care, maternity and behavioral health** in West Dayton instead of a building, and go back to voters to amend the mandate.
5. Build the full facility described in the ballot language, and adopt an aggressive capital campaign plus a second, larger levy.

**Why an assembly rather than the normal process:** The normal process already failed twice in opposite directions — the Commission refused to act for years, then voters overrode it with a mandate that is fiscally impossible as written. Neither side can climb down without losing face. A representative assembly is the only forum in which "we cannot build what the ballot promised, here is what we should build instead" can be said with legitimacy. Dayton already tried this and paused; a well-scoped restart is lower-cost than starting cold.

**Disqualifiers / risks:** No litigation found. The real risks are (a) **emotional volatility** — the city itself paused its assembly for exactly this reason, so treat prior failure as data, not as a green light; (b) the assembly could be read as a delay tactic against a mandate voters just gave, which would poison it; (c) timing — trustees may be seated and committed before an assembly reports.

**Sources:**
- Dayton public hospital levy Issue 9 passes: 'This has never been done before' — https://www.daytondailynews.com/local/dayton-public-hospital-levy-issue-9-passing-in-early-election-results/Y2VTBTVUY5H5HKPJVUAHQUMZOM/ — 2025-11-04
- Dayton voters approved a public hospital levy. What happens next? — https://www.wyso.org/news/2025-11-17/dayton-voters-approved-a-public-hospital-levy-what-happens-next — 2025-11-17
- Dayton residents will vote on public hospital initiative — https://www.wosu.org/2025-08-22/dayton-residents-will-vote-on-public-hospital-initiative — 2025-08-22
- Issue 9 would raise $2M for West Dayton hospital: Is proposal a solution or 'fantasy'? — https://www.daytondailynews.com/local/issue-9-would-raise-2m-for-west-dayton-hospital-is-proposal-a-solution-or-fantasy/N23BZW54DFHRVBHNCO2V3WO4EY/ — date unverified (pre-election 2025)
- Dayton voters approve levy for new public hospital, raising $20M over 10 years — https://dayton247now.com/news/local/dayton-voters-approve-levy-for-new-public-hospital-raising-20m-over-10-years — 2025-11-04
- How Dayton's citizens' assembly showed a new path for community engagement — https://www.route-fifty.com/people/2026/05/how-daytons-citizens-assembly-showed-new-path-community-engagement/413634/ — 2026-05-20
- Dayton Public Hospital Issue 9 (campaign site) — https://www.daytonissue9.org/ — accessed 2026-08-15

---

## 2. Automated license plate readers (Flock) — restart, restrict, or end

**One-line frame:** Under what conditions, if any, should Dayton operate fixed automated license plate reader cameras, and who should be able to see the data?

**Why it's live now:** In **October 2025** DPD found higher-than-expected data sharing in its fixed Flock system; sharing settings were progressively disabled, with **all outside-agency access cut off on 2026-04-07**. On **2026-05-01** the city **indefinitely suspended** the program after an internal review found a former Support Services Division commander had never implemented the city's own access safeguards — including **7,100 search requests citing immigration-related purposes**, which city policy prohibited. City Manager **Shelley Dickstein** called them "egregious violations of policy." On **2026-05-08** residents packed the commission chamber demanding removal, release of all data logs back to 2020, public hearings, an independent investigation, an accountability ordinance, and Dickstein's removal; **Mayor Turner-Sloss** agreed the cameras should come down and Commissioner **Matt Joseph** asked for a review of data-sharing policy across all departments. By June 2026 the city was physically covering cameras with trash bags. The city's own ALPR FAQ states an **independent audit is being procured, findings will be published, and the City Commission will make the final decision on ALPR camera use** — that decision has not been made.

**Deciding body & instrument:** Dayton City Commission — vendor contract (renew/terminate the Flock Safety agreement), plus an ordinance or amended administrative policy governing surveillance-technology acquisition, retention periods, audit rights, and inter-agency data sharing. DPD sets operational policy under the City Manager.

**Political salience:** **High.** Packed chamber with sustained public comment (named speakers include Joseph Abrams, Ri Molar, Stephen Weir); mayor and at least one commissioner publicly aligned with removal; national pickup (Fortune, 2026-06-03). It also sits directly on top of Dayton's **Welcome Dayton** immigrant-integration identity (Commission-adopted 2011), which raises the stakes. Countervailing: the 2025 Resident Opinion Survey found **~90% called crime and safety the most important city issue** and **fewer than 35%** thought it was being handled well — so the pro-surveillance constituency is large but was not the one in the room.

**Constituencies:**
- *For change (removal/strict limits):* Immigrant and Latino/Haitian community members and their advocates; civil-liberties residents; Mayor Turner-Sloss; the Police Reform working group lineage (the city's five 2020 reform areas include **Oversight** and the Citizen Appeal Board).
- *Against / at risk:* DPD leadership (Chief Kamran Afzal) and rank-and-file who used ALPR for auto theft and violent-crime leads; residents in high-crime neighborhoods who asked for the cameras; **Flock Safety** as vendor.
- *Cross-pressured / persuadable:* Black residents in West and Northwest Dayton who are simultaneously the most policed and the most victimized — the survey shows 62% "very" or "somewhat" concerned about gun violence, up 3.5 points from 2024.

**Policy changes on the table:**
1. Publish the audit and restart with the same technology plus contractual audit rights and shortened retention.
2. Restart only with a **hard technical ban on federal/out-of-state sharing**, quarterly public audit reports, and automatic suspension on any violation.
3. Adopt a **surveillance-technology ordinance** requiring Commission approval and a public use policy before DPD acquires *any* new surveillance tool (a CCOPS-style ordinance).
4. Terminate the Flock contract permanently; redirect the funds — several speakers explicitly asked for reallocation to housing and services.
5. Terminate, plus create a standing resident oversight body with subpoena-like access to police data-sharing logs.

**Why an assembly rather than the normal process:** The commission chamber produced a one-sided sample — the people who show up at 6pm are not the people who told the survey that crime is the city's top problem. The trust failure was administrative, not political, so an election won't resolve it. An assembly can hold both facts at once (the violation was real; the demand for safety is also real) and produce a rule set that survives the next chief.

**Disqualifiers / risks:** No litigation found in Dayton. Flock Safety is a well-capitalized vendor active in municipal advocacy nationally — expect vendor-supplied counter-messaging, though I found **no evidence** of a paid lobbying campaign in Dayton specifically. Timing risk: the independent audit may land and force a Commission vote before an assembly could convene. Ohio state preemption on this is not established either way — **unverified**.

**Sources:**
- Dayton suspends automated license plate readers after 'egregious' data sharing violations — https://www.wyso.org/news/2026-05-01/dayton-suspends-automated-license-plate-readers-after-egregious-data-sharing-violations — 2026-05-01
- Dayton mayor, commissioner say Flock data violation isn't 'isolated failure' — https://www.wyso.org/news/2026-05-03/dayton-mayor-commissioner-say-flock-data-violation-isnt-isolated-failure — 2026-05-03
- Dayton residents demand Flock cameras removed, seek more accountability — https://www.wyso.org/news/2026-05-08/dayton-residents-demand-flock-cameras-removed-more-accountability — 2026-05-08
- Dayton suspends Flock license plate readers, says data used for immigration enforcement — https://www.daytondailynews.com/local/dayton-suspends-flock-license-plate-readers-says-data-used-for-immigration-enforcement/article_14a3f629-ac59-57cd-91e8-c53ed5619971.html — 2026-05
- Dayton is covering Flock cameras with trash bags after officials found data use violated policy — https://fortune.com/2026/06/03/why-are-ohio-city-workers-covering-flock-cameras-immigration-enforcement-data-sharing-policy-violations/ — 2026-06-03
- Dayton ALPR Cameras Community FAQs (City of Dayton) — https://www.daytonohio.gov/1368/Dayton-ALPR-Cameras-Community-FAQs — accessed 2026-08-15
- Update on Automated License Plate Reader Review (City of Dayton newsflash) — https://www.daytonohio.gov/m/NewsFlash/Home/Detail/812 — accessed 2026-08-15
- Flock Safety License Plate Readers dataset, Dayton Transparency Portal — https://dayton-transparency-portal-1-daytonohio.hub.arcgis.com/datasets/flock-safety-license-plate-readers — accessed 2026-08-15

---

## 3. Group homes: what happens when the moratorium expires August 30, 2026

**One-line frame:** How many group homes — foster care, sober living, and supportive care for people with disabilities — should any Dayton neighborhood be asked to host, and what should the city require of operators?

**Why it's live now:** Dayton has **far more foster-care group homes than any other community in Ohio**. In **October 2025** the City Commission adopted zoning changes creating separate definitions for "group home — supportive care" and "group home — foster care," a **1,000-foot separation** requirement between any two group homes, a cap of **12 foster-care homes per land-use geography** (the North Central and West geographies already exceed that), a **five-resident cap** for most categories in single-family settings, mandatory interior and exterior property-maintenance inspections before operation, and a bar on permits for blocks in the city's public-nuisance program or containing boarded properties; it took effect 90 days later. A **moratorium on new group-home sites** was extended in **February 2026 through August 30, 2026** — i.e. it lapses in roughly two weeks. Separately, DPD worked with Ohio legislators on **HB 583** to add state-level group-home regulation. The Downtown Dayton Safety Work Group also recommended group-home moratoriums and stepped-up code enforcement.

**Deciding body & instrument:** Dayton City Commission — ordinance either letting the moratorium lapse, extending it again, or replacing it with permanent zoning-code text; City Plan Board recommends. Note this will also be swept into the AdaptDayton rewrite (issue 6).

**Political salience:** **High** in the affected geographies. Concentration is real and measurable (two land-use geographies already over the 12-home cap), neighborhood associations and priority boards have pushed it, DDN has run repeated investigative coverage, and the city escalated all the way to seeking state legislation. Counter-salience: the residents of these homes — foster youth, people in recovery, people with disabilities — are the least organized constituency in the city.

**Constituencies:**
- *For change (tighter caps):* Homeowners and block clubs in North Central, West and Northwest Dayton; priority boards; DPD (nuisance-call load); the Downtown Dayton Safety Work Group; downtown business interests.
- *Against / at risk:* Foster-care and recovery-housing operators; Montgomery County Children Services and ADAMHS, which depend on placement capacity; residents of the homes themselves, who lose housing options; disability-rights and fair-housing advocates.
- *Cross-pressured / persuadable:* Renters and homeowners who want both fewer poorly-run facilities and more recovery capacity; county human-services agencies that fund placements but do not control siting.

**Policy changes on the table:**
1. Let the moratorium lapse and rely on the October 2025 zoning rules plus enforcement.
2. Extend the moratorium a further fixed period tied to completion of AdaptDayton.
3. Replace caps with **operator-conduct standards** — licensing, staffing ratios, 24/7 responsible-party contact, nuisance-abatement triggers — so the constraint is on bad operators rather than on protected classes.
4. Keep the caps but add a **reasonable-accommodation variance process** with published criteria, to reduce Fair Housing Act exposure.
5. Pair caps with an affirmative **regional siting compact** with Montgomery County and suburban jurisdictions so placements distribute beyond Dayton.

**Why an assembly rather than the normal process:** The two sides here are structurally mismatched — organized homeowners versus disaggregated, stigmatized residents who cannot show up to a zoning hearing. That asymmetry is precisely what sortition corrects. And the legally durable answer (conduct standards and accommodation processes) is not the one that wins a hearing-room shouting match, so deliberation genuinely changes the output.

**Disqualifiers / risks:** **Flag this one.** I found **no active Dayton litigation**, but caps and spacing rules on recovery and disability housing are a live Fair Housing Act theory: the U.S. filed a pattern-or-practice FHA complaint in *United States v. Town of Beekman* on **2026-03-05** over a recovery group home, and a suit against **Ironton, Ohio** alleges its zoning code discriminates against people in recovery. An assembly here could produce a recommendation that creates legal exposure — scope it toward operator conduct and accommodation, and get fair-housing counsel into the evidence phase. **HB 583** also means a state preemption layer could land mid-process.

**Sources:**
- Dayton zoning changes could space out, cap group homes in city — https://www.daytondailynews.com/local/dayton-zoning-changes-could-space-out-cap-group-homes-in-city/5X4GAZH4HRE5HI5KJCBDZ77IDY/ — 2025-10
- City leaders approve new regulations for group homes in Dayton — https://www.whio.com/news/local/city-leaders-approve-new-regulations-group-homes-dayton/MIVLTCB2GRDNFM3WDKDYMYWWIA/ — 2025-10
- New rules could stop foster care group homes from opening in west, northwest Dayton — https://www.daytondailynews.com/local/new-rules-could-stop-foster-care-group-homes-from-opening-in-west-northwest-dayton/X2VLZMGJKNFSJKLWDNOPPEWLHA/ — date unverified (2025)
- Dayton commission advances zoning changes to limit concentration of group homes — https://citizenportal.ai/articles/6698420/Dayton-commission-advances-zoning-changes-to-limit-concentration-of-group-homes — 2025
- City of Dayton's Response to Downtown Community Leaders' Recommendations (moratorium extended through 2026-08-30; HB 583) — https://turner.house.gov/_cache/files/7/d/7d3cc480-747b-43cf-8ed4-c7ad01936e8e/070646E586CAB31DB5EF83CFA06EFA2B81877B97E2A543C0DCD0A3B988FD40D4.city-of-dayton-s-response-to-downtown-community-leaders-recommenda8ons.pdf — 2026
- Recent Accomplishments of the Housing and Civil Enforcement Section (US v. Town of Beekman, filed 2026-03-05) — https://www.justice.gov/crt/recent-accomplishments-housing-and-civil-enforcement-section — accessed 2026-08-15

---

## 4. Dayton Public Schools 7-mill continuing levy, November 3, 2026

**One-line frame:** Should Dayton property owners fund a permanent $14.6 million-a-year tax increase for Dayton Public Schools, and if voters say no, what should the district cut?

**Why it's live now:** The Dayton Board of Education voted to place a **7-mill continuing levy** on the **2026-11-03** ballot — **5 mills for current operating expenses and 2 mills for permanent improvements** — raising **$14.6 million/yr** and costing **$245 per $100,000** of valuation. It is one of **nine tax issues** Montgomery County voters face in November (six new, three renewals) — DDN, 2026-08-05. The board first considered a May 2026 ballot with a 5-mill or 7-mill option, then Superintendent **Dr. David Lawrence** agreed November was "more prudent... give us more time to prepare and get the message out." The district projects running out of cash by the end of **2028-29** and is trying to close a **$9 million gap in 2027**. Board member **Joe Lacey** rejected an income-tax alternative on the grounds it would give Dayton the highest income tax rate in the state. This lands on top of two other stressors: a contested **districtwide reconfiguration for 2026-27** (preschools consolidated to four locations, 6th grade moved into standalone middle schools, feeder-pattern changes; board member **Jamica Garrison** voted no over transportation burdens on preschool families), and a **3–3 board vote on 2026-07-31** that failed to place Lawrence on administrative leave during an investigation (Rhynard, Walker, Garrison yes; Smith, Goodwine, Bailey no) — allegations later reported as unsubstantiated.

**Deciding body & instrument:** Dayton Board of Education (resolution of necessity and resolution to proceed placing the levy); Montgomery County Board of Elections certifies; **Dayton voters decide 2026-11-03**. Post-election, the board controls the reduction plan if it fails.

**Political salience:** **High.** Voter appetite for Dayton-area taxes is real but thinning: the **Montgomery County Human Services Levy renewed at ~69%** in Nov 2025, but the **Dayton Metro Library levy passed only 53%–47%**, and **Issue 9 got 58%** — a *new, continuing, non-renewal* 7-mill school tax is a harder ask than any of those. Neighboring Miami County voters rejected a jail sales tax in May 2026. DPS also carries a damaged public brand (state report card, busing chaos, superintendent turmoil), which is the district's own stated reason for delaying to November.

**Constituencies:**
- *For change (passage):* DPS families; Dayton Education Association and district staff; the Board majority; civic and philanthropic institutions.
- *Against / at risk:* Fixed-income homeowners and seniors facing the ninth tax issue on one ballot; landlords and small commercial property owners; residents who blame the district for the busing collapse.
- *Cross-pressured / persuadable:* Parents who use DPS but opposed the reconfiguration; West Dayton households already absorbing the new 1-mill hospital levy from Jan 2027; charter and parochial families who pay the tax without using the schools.

**Policy changes on the table:**
1. Ratify the 7-mill continuing structure as placed.
2. Recommend a **fixed-term (e.g. 5- or 10-year) levy** rather than continuing, to force accountability checkpoints.
3. Recommend a **smaller millage plus a published cuts schedule** so voters see the tradeoff explicitly.
4. Shift the operating share to an **earned-income tax** (Lacey's rejected option) and revisit the "highest rate in the state" objection with actual incidence numbers.
5. Design the **failure plan** — which buildings, programs and staff go if it fails — as the assembly's primary deliverable, independent of the vote.

**Why an assembly rather than the normal process:** The board is visibly split (3–3 on the superintendent), and levy campaigns are structurally incapable of discussing failure — the campaign's job is to say "yes," which means nobody publicly plans for "no." An assembly can do the thing the campaign cannot: produce a legitimate, community-authored contingency plan. That is useful whether the levy passes or fails, which is unusual and makes it low-risk to run.

**Disqualifiers / risks:** The **adjacent busing question is in active litigation** — DPS sued the state over the 2025 budget provision barring high-school students from transferring at the downtown RTA hub, won a ruling securing RTA passes through the 2025-26 school year, and the fight is ongoing. **An assembly must not touch busing.** Timing is also tight: 79 days to the election as of 2026-08-15, so a pre-election assembly is not feasible; a post-election assembly on the cuts/next-levy plan is. Ohio's levy system itself is state-controlled — the district cannot invent a funding mechanism outside ORC.

**Sources:**
- Montgomery County voters face 9 tax issues in November: Election 2026 — https://www.daytondailynews.com/local/montgomery-county-voters-face-9-tax-issues-in-november-election-2026/article_79bf34b4-b607-5d05-8f38-5776d8cb855e.html — 2026-08-05
- Dayton Public to put property tax levy on ballot generating $14.6 million — https://www.springfieldnewssun.com/local/dayton-public-to-put-property-tax-levy-on-ballot-generating-14-6-million/article_3f03ee2d-47a6-57ef-95b6-ada0b8f85fed.html — 2026
- Dayton school board considering two levy options for May ballot — https://www.daytondailynews.com/local/dayton-school-board-considering-two-levy-options-for-may-ballot/article_39f60303-fb46-54f2-a3c3-8e43ca853f46.html — 2026
- Dayton school board motion to place superintendent on administrative leave fails — https://www.daytondailynews.com/local/dayton-school-board-motion-to-place-superintendent-on-administrative-leave-fails/article_025633e6-bf0d-526a-bec7-8695bb58197d.html — 2026-07-31
- 2026-2027 District Reconfiguration Information & Explanation (DPS) — https://dps.k12.oh.us/news/2026-2027-district-reconfiguration/ — 2026-02
- Dayton Public Schools to be reconfigured for 2026-2027 — https://spectrumnews1.com/oh/columbus/news/2026/02/27/dayton-public-schools-to-be-reconfigured-for-2026-2027 — 2026-02-27
- Election results: Dayton Library, MetroParks tax levy election results — https://www.daytondailynews.com/local/tax-levies-roundup-dayton-library-metroparks-city-charter-issue-results/H5UIEAW4SBFIXCN6YG5BQ5FCGI/ — 2025-11 (library levy 53%–47%)
- Montgomery County voters overwhelmingly renew Human Services levy — https://www.daytondailynews.com/local/montgomery-county-human-services-levy-passing-in-partial-results/O7BYTSRWVRCTBO4XV7NAP3OT24/ — 2025-11 (~69%)
- Dayton Public Schools sues state for new busing law, calling it 'unreasonable,' 'discriminatory' — https://www.whio.com/news/local/dayton-public-schools-sues-state-new-busing-law-calling-it-unreasonable-discriminatory/BUGX6UUDONFRPKEFH552ZRNLFY/ — 2025

---

## 5. Downtown safety recommendations: what to fund, and at whose expense

**One-line frame:** Which of the Downtown Dayton Safety Work Group's recommendations should the city and county actually pay for, and how should that be balanced against safety spending in the neighborhoods?

**Why it's live now:** U.S. Rep. **Mike Turner** convened the **Downtown Dayton Safety Work Group** in **August 2025**; it delivered recommendations in **January 2026** across justice/policing, social services, intergovernmental coordination and business development. The Commission voted to review them; residents objected in public comment the same week. Implementation has moved unevenly since: a **police substation at the RTA hub** was approved by Commission lease and CBD officers were to operate from it by **2026-03-01**; the **group-home moratorium** was extended (issue 3). On **2026-08-10** city commissioners, county commissioners, state legislators and business leaders met at Sinclair Community College — described by organizers as **the first joint city/county downtown meeting in a decade** — and added recommendations: a **specialized court docket for downtown cases**, clearer allocation of which properties each government secures, expanded housing and mental-health services, and a **fund to attract new businesses**. WYSO reported on 2026-08-13 that **funding remains unspecified** and that observers want financing detail before it goes to the city and county commissions. Separately, unsheltered homelessness in Montgomery County is at its highest level in at least a decade.

**Deciding body & instrument:** Dayton City Commission (appropriation ordinances, lease/contract approvals, code-enforcement policy, any camping/encampment code changes) and the **Montgomery County Board of Commissioners** (sheriff coverage of county property, human-services allocations). Dayton Municipal Court would have to create a specialized docket. A downtown redevelopment fund would need a defined revenue source.

**Political salience:** **Med–High.** The 2025 Resident Opinion Survey has crime/safety as the #1 issue at ~90% with under 35% satisfied — the demand is enormous. But the January 2026 public comment showed the fault line clearly: **Berkley Moore** asked how more downtown police affects neighborhood patrols; **Ebony Hastings** noted the city's own stats show violent, property and drug crime all fell in 2025 and warned that "when we rely on perception, it leads to misinformed choices"; **Lynn Lamance** asked whether homeless and poor people downtown would be targeted. Commissioner **Darryl Fairchild** made the same point in August: "All of Dayton is perceived to be unsafe" when crimes are reported, not just downtown.

**Constituencies:**
- *For change:* Downtown property owners and developers (Woodard Development is named in coverage); downtown employers trying to bring workers back; Rep. Turner and county officials; RTA.
- *Against / at risk:* Unhoused people and the providers who serve them; neighborhood residents who fear patrol resources migrating downtown; group-home and recovery-housing operators caught by the code-enforcement recommendations.
- *Cross-pressured / persuadable:* Downtown residents (a growing population) who want both safety and not to see encampment sweeps; RTA-dependent students, whom the recommendations single out for afterschool programming; Black Daytonians who are the plurality of both crime victims and enforcement subjects.

**Policy changes on the table:**
1. Adopt the low-cost coordination items only — the private-security/DPD communication link and the property-responsibility inventory.
2. Fund the **census of unhoused people and the social-services inventory** first, and make everything else contingent on what they show.
3. Fund the **specialized downtown court docket**, with diversion-first design rather than a fast-track to jail.
4. Fund **expanded housing and mental-health capacity** at a scale matched to the census result, and adopt written encampment-response standards that limit sweeps.
5. Create the downtown business-attraction fund with an explicit **neighborhood parity clause** — a matching allocation to non-downtown commercial corridors.

**Why an assembly rather than the normal process:** This is a pure distributive fight — downtown versus neighborhoods, enforcement versus services — being decided by a working group that was convened by a member of Congress and populated substantially by downtown business interests. Nobody disputes the group's competence; the objection is representativeness, and that is exactly the objection a sortition body answers. It also spans two governments that just met jointly for the first time in ten years, and a shared deliberative body is a cheap coordination mechanism.

**Disqualifiers / risks:** **Flag this one.** The convening structure is asymmetric — a sitting U.S. Representative plus organized downtown business — which is not paid lobbying but is a well-resourced interest with a head start and its own report already in circulation. An assembly risks being framed as second-guessing a year of work. No litigation found. Note also that if recommendations drift toward an encampment/camping ban, *Grants Pass*-era enforcement questions and Ohio's uneven city record on sleeping bans come into play; the city's stated position is that encampments are already prohibited on public property.

**Sources:**
- Dayton City Commissioners, residents react to new downtown safety recommendations — https://www.wyso.org/news/2026-01-16/dayton-city-commissioners-residents-react-to-new-downtown-safety-recommendations — 2026-01-16
- Local leaders share recommendations to make downtown Dayton safety a priority — https://www.wyso.org/news/2026-08-13/local-leaders-share-recommendations-to-make-downtown-dayton-safety-a-priorty — 2026-08-13
- City, county leaders discuss proposals to make downtown Dayton safer — https://www.daytondailynews.com/local/city-county-leaders-discuss-proposals-to-make-downtown-dayton-safer/article_23948a42-da61-56dc-8277-631bfde302ed.html — 2026-08
- City of Dayton's Response to Downtown Community Leaders' Recommendations — https://turner.house.gov/_cache/files/7/d/7d3cc480-747b-43cf-8ed4-c7ad01936e8e/070646E586CAB31DB5EF83CFA06EFA2B81877B97E2A543C0DCD0A3B988FD40D4.city-of-dayton-s-response-to-downtown-community-leaders-recommenda8ons.pdf — 2026
- Downtown Dayton getting new police substation in 2026 — https://www.wdtn.com/news/local-news/dayton-police-department-substation-central-business-district/ — 2026
- 'We're family out here': Why homeless people choose encampments over shelters, what Dayton can do about it — https://www.daytondailynews.com/local/we-re-family-out-here-why-homeless-people-choose-encampments-over-shelters-what-dayton-can/article_164cad62-5721-5559-88fc-30abb98a9e68.html — date unverified
- Annual Dayton survey shows continued growth in satisfaction of residents — https://spectrumnews1.com/oh/columbus/news/2026/04/24/annual-dayton-survey-shows-continued-growth-in-satisfaction-of-residents — 2026-04-24

---

## 6. AdaptDayton: what the rewritten zoning ordinance should allow

**One-line frame:** As Dayton replaces its 20-year-old zoning code, what should be allowed to be built, and where — and what should be banned outright?

**Why it's live now:** **AdaptDayton** is a full rewrite of Dayton's zoning and subdivision ordinance and map. The city's published phase timeline runs: Research and Evaluation (2025); Framework (late 2025–early 2026); **Draft Regulations (mid-2026 — now)**; Draft Ordinance and Map (late 2026–early 2027); **Final Adoption (2027)**. In **April 2026** WYSO covered the city's push for resident feedback on what should get built and where. Then on **2026-06-24** the City Commission proved the code's teeth: acting on a **2026-06-17** Planning Department recommendation, and following a City Plan Board–recommended **180-day data-center construction moratorium**, it **passed zoning amendments effectively banning large-scale data centers** and restricting gas stations and car washes. Planning Director **Jeff Green** said the department weighed water usage, electric rates, environmental effects on residents, and financial benefit to the city: "With the information we have, we believed a ban was best suited at this time."

**Deciding body & instrument:** Dayton City Plan Board (recommendation) → Dayton City Commission (ordinance adopting the new zoning and subdivision ordinance and official zoning map). Interim pieces — the data-center ban, the group-home rules — are being adopted as standalone code amendments ahead of the full rewrite.

**Political salience:** **Med.** Zoning rewrites are structurally low-salience until a specific project lands, and the resulting engagement skews toward homeowners and developers. But the data-center episode shows this code is where genuinely contested economic-development questions get settled in Dayton, and it settled that one with almost no public deliberation on the tradeoff (jobs and tax base versus water, power costs and neighborhood impacts). The 2025 Resident Survey puts **housing conditions and neighborhood safety** as residents' top priorities, which is a zoning question whether residents frame it that way or not.

**Constituencies:**
- *For change:* Homebuilders and infill developers; housing advocates wanting missing-middle and ADU allowances; the Planning Department.
- *Against / at risk:* Single-family homeowners and block clubs wary of density; industrial and logistics interests affected by the new use bans; data-center developers now shut out.
- *Cross-pressured / persuadable:* Priority Boards and Priority **Land Use** Boards — which already have a formal advisory role in this exact process and are the natural partner; renters, who are a majority-adjacent share of Dayton households and are almost never in the room for zoning.

**Policy changes on the table:**
1. Ratify the draft as written and keep the interim bans.
2. Convert the flat data-center ban into a **conditional-use standard** with binding water, grid-cost and community-benefit thresholds — the four criteria Green named, written into code.
3. Legalize **missing-middle housing and ADUs** by right in more districts to use the 6,000-structure vacancy problem as capacity.
4. Give **Priority Land Use Boards** a formal, non-advisory role in the new code's review process.
5. Rewrite parking minimums and lot-coverage rules citywide.

**Why an assembly rather than the normal process:** The AdaptDayton timeline has an unusually long runway — final adoption in 2027 — which is the single best condition for a deliberative process and is rare. The normal process (open houses, comment portals) reliably produces a self-selected sample of homeowners and developers. And the data-center ban shows the Commission is willing to make big, irreversible use decisions on a planning-staff memo; a deliberative body would give those calls a durable public mandate.

**Disqualifiers / risks:** Lowest urgency of the seven — the risk is an assembly that produces recommendations nobody feels pressure to act on. No litigation found; no organized lobbying campaign identified, though data-center developers are an obvious future counterparty. Also note the AdaptDayton phase page does **not** name a City Commission adoption date beyond "2027" — treat any more specific date as unverified. (One search result describing an AdaptDayton timeline with "Common Council" adoption was contaminated with another city's project; Dayton has no Common Council.)

**Sources:**
- Dayton to vote on zoning changes to ban data centers, restrict gas stations and car washes — https://www.wyso.org/news/2026-06-22/dayton-to-vote-on-zoning-changes-to-ban-data-centers-restrict-gas-stations-and-car-washes — 2026-06-22
- Dayton bans building of large data centers in city — https://www.daytondailynews.com/local/dayton-bans-building-of-large-data-centers-in-city/article_f73f8555-0cd9-5e23-8f78-676cd89b191f.html — 2026-06-24
- Dayton moves to ban data centers in new zoning changes — https://www.whio.com/news/local/city-planners-suggest-total-ban-data-centers-dayton/C7WHT33ZLFEBFNHVRZ7T52HO3U/ — 2026-06
- What developments should get built in Dayton? City wants feedback to drive zoning overhaul — https://www.wyso.org/news/2026-04-10/what-developments-should-get-built-in-dayton-and-where-city-seeks-feedback-on-zoning-overhaul — 2026-04-10
- Text Version of the Adapt Dayton Expected Timeline (City of Dayton) — https://www.daytonohio.gov/1370/Text-Version-of-the-Adapt-Dayton-Expecte — accessed 2026-08-15
- AdaptDayton project hub — https://adaptdayton-daytonohio.hub.arcgis.com/pages/explore — accessed 2026-08-15

---

## 7. The post-ARPA cliff: what replaces federal money for demolition and blight after December 31, 2026

**One-line frame:** Federal pandemic money that has paid for Dayton's demolition and blight program runs out on December 31, 2026 — what should the city fund with its own money in 2027, and what should it stop doing?

**Why it's live now:** ARPA State and Local Fiscal Recovery Funds must be **fully expended by 2026-12-31**. Dayton received **$138 million** in federal COVID relief and planned to raze about **1,100 properties between 2022 and 2026**, proposing nearly **$22 million** for nuisance-structure removal through 2026; its budget allocated **$10.1M for demolition and blight removal, $1.9M for vacant property reuse and $18M for housing**. The city's operating contract with the **Montgomery County Land Bank** runs **through the end of 2026**. Dayton still has roughly **6,000 vacant structures**. Meanwhile the general fund is already structurally short: the 2026 recommended budget projected ~**$229M revenue against ~$242.7M expenses**, closed with nearly **$4 million of cash reserves** plus ~**$14.8 million of one-time sources** — much of it interest earnings on the ARPA money, which also disappear. Every department was cut 0.75%, and police and fire recruit classes were reduced (fire 20→18, police 22→17). Nationally, 69% of city leaders expect negative budget impacts once ARPA ends.

**Deciding body & instrument:** Dayton City Commission — the **2027 operating and capital budget ordinance** (city-manager-recommended, presented in the fall), plus renewal or replacement of the **Land Bank operating contract**, plus any decision to seek a dedicated local revenue source.

**Political salience:** **Med, and rising.** Not yet a headline fight — which is part of the argument for doing it now — but the substance is the top thing residents say they care about: the 2025 Resident Opinion Survey puts **housing conditions and neighborhood safety as residents' top priorities**, and streets/sidewalks next. Overall satisfaction with Dayton as a place to live rose to nearly **64% in 2025, up 4 points from 2024**, highest downtown and in southeast Dayton — a distribution that itself maps onto where the demolition money did and did not go (recent rounds concentrated in Dayton View and Santa Clara).

**Constituencies:**
- *For change:* Residents of high-vacancy blocks in West, Northwest and Northeast Dayton; block clubs and priority boards that queue properties for demolition; the Montgomery County Land Bank.
- *Against / at risk:* Every general-fund department competing for the same dollars — police and fire, whose recruit classes were already cut; preservationists who argue demolition destroys repairable housing stock; residents who would face a new tax if the city seeks dedicated revenue.
- *Cross-pressured / persuadable:* Homeowners who want blight gone but not another levy after the hospital levy (collections start Jan 2027) and a possible DPS levy; the city's new market-rate vacant-home rehab program constituency, which argues rehab beats demolition.

**Policy changes on the table:**
1. Absorb the loss — shrink demolition to whatever the general fund and state Land Bank grants support, and publish an explicit prioritization rule for which structures come down.
2. Shift the balance from **demolition to rehab/reuse**, scaling the vacant-home rehab program and the $1.9M reuse line.
3. Renew and restructure the **Land Bank contract** with performance terms and a per-property cost cap.
4. Pursue **state demolition grants** aggressively as the primary replacement (the Land Bank has repeatedly won awards, including $5.3M and an earlier $11M round).
5. Put a **dedicated local revenue source** on the ballot for neighborhood stabilization — the most ambitious and the one that most needs public legitimacy.

**Why an assembly rather than the normal process:** Budget cliffs are decided in city-manager memos in October and ratified in December with near-zero public engagement, and this one converts a visible neighborhood benefit into an invisible absence. The deadline is hard and known, which makes it schedulable. And if option 5 is ever on the table, a levy for neighborhood stabilization needs the kind of public authorship that Issue 9 demonstrated actually wins in Dayton.

**Disqualifiers / risks:** No litigation, no organized lobby. Real risks are (a) low intrinsic salience — "blight" is exactly the vague framing to avoid, so the assembly must be anchored on the specific 2027 budget line and Land Bank contract, not on blight as a concept; (b) the 2027 budget calendar is short — the city manager's recommended budget lands in the fall, so an assembly would have to be commissioned within weeks to influence it, or else target the 2028 budget and the contract renewal; (c) some of the numbers above come from budget-cycle reporting whose exact publication dates I could not confirm.

**Sources:**
- Budget cuts, spending down reserves helped Dayton balance 2026 budget — https://www.daytondailynews.com/local/budget-cuts-spending-down-reserves-helped-dayton-balance-2026-budget/article_0908ba13-7645-5acd-9fa2-37d7621e1f6b.html — date unverified (late 2025)
- Dayton's $243M budget: City expects to use cash reserves to fill funding gap — https://www.daytondailynews.com/local/daytons-243m-budget-city-expects-to-use-cash-reserves-to-fill-funding-gap/LAYSTG4O3NDFZK7MCMCWAXKPMU/ — date unverified (late 2025)
- City Manager's 2026 Recommended Budget, Budget Overview Presentation — https://www.daytonohio.gov/DocumentCenter/View/16934/Budget-Overview-Presentation — 2025-10-15
- Dayton Recovery Plan Demolition Strategy (City of Dayton) — https://www.daytonohio.gov/1109/Dayton-Recovery-Plan-Demolition-Strategy — accessed 2026-08-15
- Dayton demolition: Next round of blight removal to get underway. Dayton View, Santa Clara demo hotspots — https://www.daytondailynews.com/local/abandoned-homes-in-dayton-view-santa-clara-big-part-of-demolition-efforts/ZM3XJHOGRZAA3OKM36LPFQ5GPM/ — date unverified
- Blight demolition: Montgomery County Land Banks to get millions to take down 150 properties — https://www.daytondailynews.com/local/state-gives-53m-to-tear-down-151-blighted-properties-in-montgomery-county/NTB6JZGMTRCB3F6IA3XFTOGO2Y/ — date unverified
- Dayton approves new vacant home rehab program to create new market-rate homes — https://www.daytondailynews.com/local/dayton-approves-new-vacant-home-rehab-program-to-create-new-market-rate-homes/article_a49537a1-c401-5660-aced-57950e044510.html — date unverified
- 2025 City of Dayton Resident Opinion Survey — https://daytonresidentsurvey.org/ and dashboard https://dashboards.mysidewalk.com/dayton-oh-resident-satisfaction-survey-2025 — accessed 2026-08-15
- ARPA SLFRF expenditure deadline 2026-12-31 — https://grantedai.com/blog/arpa-slfrf-expenditure-deadline-december-2026-compliance-clawback-strategy — accessed 2026-08-15

---

## Rejected candidates

- **DPS high-school busing / RTA hub transfers** — genuinely the most salient education issue in Dayton, but **disqualified by criterion 4**: DPS is in active litigation against the State of Ohio over the budget provision barring RTA hub transfers, has won at least one ruling securing bus passes through 2026, and the case is ongoing. Also largely a state-preemption question, not a local one.
- **PFAS in Dayton's drinking water / who pays** — a ~$350M treatment facility (Tetra Tech, 8-year design contract awarded July 2026), the largest dedicated PFAS plant in the U.S. **Disqualified**: Dayton **sued Wright-Patterson AFB in March 2026** for more than $300M in remediation costs. Active federal litigation. The *water/sewer affordability* question is technically severable but is so entangled with the litigation's cost allocation that I would not run it.
- **Water and sewer rate increases (8.5% water annually 2026–28; 9.5%/9%/9% sewer)** — already adopted; the 2026 rates took effect 2026-01-01. Decided, and inseparable from the PFAS litigation above.
- **Montgomery County Human Services Levy** — renewed by voters at **~69% in November 2025** on an 8-year, 6.03-mill basis, funding ~$58M in services. Not contested and not pending. The *allocation* fight among the five agencies (ADAMHS has absorbed $16.5M in voluntary cuts and is asking for a $4.1M increase) is more interesting, but the Human Services Levy Council process is technical, county-controlled, and has a low media profile.
- **Data-center ban** — decided 2026-06-24 by City Commission zoning amendment. Retained only as evidence inside issue 6, not as a standalone candidate.
- **Montgomery County jail** — funding is coming from the state Jail Safety and Security Program (~$13M for renovations), not a local ballot measure or local appropriation fight. The comparable local decision happened in **Miami County**, where voters rejected a jail sales tax in May 2026 — wrong county.
- **Short-term rental regulation** — Ohio cities are adding rules and a state STR tax is under discussion, but I found **no pending Dayton ordinance or code amendment**. No specific instrument = fails criterion 1.
- **Trash/recycling fees and cart policy** — searched; found only service-schedule pages, no pending City Commission fee or cart decision. Nothing to deliberate.

## Data-source notes for tooling

**City of Dayton (CivicPlus / CivicEngage "AgendaCenter")**
- Landing: `https://www.daytonohio.gov/AgendaCenter` (200)
- City Commission category: `https://www.daytonohio.gov/AgendaCenter/City-Commission-2` (200)
- **Verified RSS (this is the scraper hook):** `https://www.daytonohio.gov/RSSFeed.aspx?ModID=65&CID=City-Commission-2` → HTTP 200, `text/xml; charset=utf-8`, RSS 2.0. Items carry `<title>`, `<link>` (to `/AgendaCenter/PreviousVersions/<id>`), `<pubDate>`, and a `<guid isPermaLink="false">`. `ModID=65` is the AgendaCenter module; swap `CID` for other bodies (Plan Board, etc.) — enumerate CIDs from the AgendaCenter landing page.
- Agenda/minutes documents are **PDFs** served from `/AgendaCenter/ViewFile/Agenda/_<MMDDYYYY>-<id>` and `/AgendaCenter/ViewFile/Minutes/_<MMDDYYYY>-<id>`; archived minutes use `/AgendaCenter/ViewFile/ArchivedMinutes/_<MMDDYYYY>-<id>`. No JSON API found. Expect PDF text extraction.
- Other useful city endpoints (all 200): Community Engagement `/973/Community-Engagement`; Community Engagement Grants `/205/Community-Engagement-Grants`; Dayton Survey `/1114/Dayton-Survey`; ALPR FAQ `/1368/Dayton-ALPR-Cameras-Community-FAQs`; ALPR newsflash `/m/NewsFlash/Home/Detail/812`; AdaptDayton timeline `/1370/Text-Version-of-the-Adapt-Dayton-Expecte`; Priority Land Use Boards `/1325/`, `/1330/`, `/1335/`, `/1340/`.
- **Open data**: Dayton runs an ArcGIS Hub transparency portal — `https://dayton-transparency-portal-1-daytonohio.hub.arcgis.com/` (200), including a Flock ALPR camera-location dataset. ArcGIS Hub exposes standard `/api/feed/dcat-us/1.1.json` and per-dataset GeoJSON/CSV download endpoints — **not individually verified**, but that is the product's normal surface. AdaptDayton also runs on ArcGIS Hub: `https://adaptdayton-daytonohio.hub.arcgis.com/pages/explore` (200).
- The city site does **not** appear to block bots: plain `curl` with a normal desktop User-Agent got 200 on every `daytonohio.gov` URL tested.

**Montgomery County**
- `https://www.mcohio.org/AgendaCenter` (200) — same CivicPlus AgendaCenter product, so the same `RSSFeed.aspx?ModID=65&CID=...` pattern should work; **not verified** for this host.
- Board of Elections: `https://www.montgomery.boe.ohio.gov/election-results/` returned **HTTP 403 to curl** (bot-blocked; loads fine in a browser and is reachable via search-engine cache). Issue lists are posted as PDFs under `/wp-content/uploads/`, e.g. the verified-by-search path `https://www.montgomery.boe.ohio.gov/wp-content/uploads/2021/02/3.4.2026-Issues-List-with-Numbers.pdf`. A scraper will need a browser-like UA and probably a headless browser.

**Dayton Public Schools**
- `https://dps.k12.oh.us/meeting-information/` (200). News/announcements at `https://dps.k12.oh.us/news/<slug>/`. Not a Legistar/Granicus install; no RSS or API located.

**Municode (city code and charter) — blocked**
- `https://library.municode.com/oh/dayton` and `.../codes/code_of_ordinances?nodeId=CH` return **HTTP 403** to both WebFetch and curl with a desktop UA. `api.municode.com` returned 400/empty for the endpoints tried. **This is why the charter's initiative/referendum thresholds are unverified.** To get them, use a headless browser, or request the charter directly from the City Law Department (quick-links page `https://www.daytonohio.gov/QuickLinks.aspx?CID=37` links to the Municode charter node).

**Reddit — blocked**
- `https://www.reddit.com/r/Dayton/search.json?q=...&restrict_sr=1&sort=top&t=year` returned **HTTP 403 with an HTML shell** (not JSON) even with a normal desktop User-Agent, from both WebFetch and curl. Reddit is now gating the `.json` endpoints on this network. Options: OAuth via a registered app against `oauth.reddit.com`, or `old.reddit.com` HTML scraping (untested). **No Reddit data informed this report.**

**News RSS — tested**
- ✅ `https://www.wyso.org/index.rss` — 200, valid RSS. Best single feed for Dayton civic coverage; WYSO carried the Flock, downtown-safety, zoning and hospital stories first.
- ✅ `https://www.wyso.org/news.rss` — 200, valid RSS.
- ✅ `https://ohiocapitaljournal.com/feed/` — 200, valid RSS (statewide; useful for preemption/legislature).
- ❌ `https://www.daytondailynews.com/arcio/rss/` — 404. No working DDN feed found. DDN is an Arc XP site and **rate-limits hard**: repeated fetches returned **HTTP 429**. Throttle to roughly one request per 30s.
- ❌ `https://www.whio.com/arcio/rss/` — 404 (empty body).
- ❌ `https://www.bizjournals.com/dayton/news/rss.xml` — **403, Cloudflare challenge**. Dayton Business Journal is effectively unscrapable without a browser and is paywalled regardless.
- Example query that worked well for discovery (WebSearch): `Dayton Ohio 2026 city commission <topic>` and `WYSO Dayton 2026 <topic>` — WYSO's date-stamped URL slugs (`/news/YYYY-MM-DD/slug`) make recency filtering trivial and give a free, citable date.

**Caveats a downstream consumer should carry**
- Several Dayton Daily News article dates could not be confirmed because of the 429 rate-limiting; those are marked "date unverified" inline rather than guessed.
- Dayton's charter initiative/referendum percentages are **unverified**. The only hard number here is the **1,250 valid signatures** reported for the 2025 Issue 9 petition.
- Dayton has **already run a citizens' assembly** (West Dayton public hospital, with FIDE, the Kettering Foundation and New America) and **paused it**. Any pilot design should start from that experience, and should contact Mike Squire, Division of Community Engagement, before scoping anything.
