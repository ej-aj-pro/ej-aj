# Namigi za naslednji tedenski pregled

Leads for the next weekly digest, added by Anže or by an agent at his request. The
`tedenski-pregled` skill reads this file from `origin/main` in step 3. Every lead is only a
starting point: re-open the primary source, take the facts from there, and drop the lead if the
page no longer supports it. The digest PR removes the leads it used (or decided against) from
this file, so the list only holds what is still open.

Format: one `##` section per lead with the date, the primary source and a short note on why it
matters for a Slovenian business reader. Facts below were checked on the date shown, not copied
into the digest as they are.

## Za pregled #5 (23. oktober 2026)

Already covered in their own articles (PR #92): PHP2Shell vulnerabilities and Claude Duet. If
`src/content/novice/2026-10-22-kriticni-ranljivosti-php.md` and `2026-10-22-claude-duet.md` are on
`origin/main`, mention each in one or two sentences with an internal link; if not, leave them out
of the digest instead of repeating them.

### OpenAI models in Google Cloud (21. 10. 2026)

- Source: https://openai.com/index/openai-models-google-cloud/ (blocks scripts; read it in the
  built-in browser).
- Checked 22. 10.: OpenAI frontier models and Codex are coming to Google Cloud Model Garden,
  bought through Google Cloud Marketplace; customers with Google Cloud spend commitments can
  draw them down. OpenAI models are also coming to Google Antigravity and the Gemini Agent.
  General availability "in the coming weeks"; Microsoft remains OpenAI's primary cloud partner.
- Why: companies already on Google Cloud can use GPT models under their existing contract and
  data controls.

### Claude Security: continuous scanning and fix tracking (21. 10. 2026)

- Source: https://claude.com/resources/articles/claude-security-now-scans-continuously-and-tracks-fixes
- Checked 22. 10.: after a baseline scan Claude Security rescans code changes by risk and
  complexity; findings are marked fixed when a fix ships and reopen if the issue returns. Claude
  Enterprise only, public beta, enabled by an admin. Launch offer: 25.000 USD in usage credits per
  month for two months, usage through 31. 12. 2026. Since the April beta "thousands of
  organizations" found over one million vulnerabilities (Anthropic's figure).
- Why: fits the PHP2Shell week (AI finding vulnerabilities); relevant only to companies that
  develop software and have Claude Enterprise.

### LLM-BRIDGE calls for generative AI companies (22. 10. 2026)

- Source: https://www.gov.si/novice/2026-10-22-nove-priloznosti-za-podjetja-in-podporne-organizacije-na-podrocju-generativne-umetne-inteligence/
- Checked 22. 10.: EU project LLM-BRIDGE (coordinated by ALT-EDIC, Digital Europe programme).
  Acceleration programme: 16 companies with market-ready generative AI or language technology
  solutions (TRL 8 to 9), 14-week programme, deadline 18. 11. 2026 at 17.00. Incubation
  programme: one organisation runs a 12-week programme, deadline 28. 11. 2026 at 17.00. Webinar
  3. 11. 2026. Call for evaluators, November 2026 to January 2027. Check on the project's own
  page who may apply (the gov.si notice does not say whether it is open EU-wide).
- Why: a concrete Slovenian-relevant funding item with a near deadline.
