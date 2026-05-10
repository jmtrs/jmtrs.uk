# Content Model

## Source of truth

The website content is based on the current bilingual CV files supplied outside this repository:

- `/Users/jmtrs/Downloads/Jose_Miguel_Torres_Hernandez_CV_Exact_Replica_Source.html`
- `/Users/jmtrs/Downloads/Jose_Miguel_Torres_Hernandez_CV_Modern_Gray_ES_Source.html`
- `/Users/jmtrs/Downloads/Jose_Miguel_Torres_Hernandez_CV_Modern_Gray.pdf`
- `/Users/jmtrs/Downloads/Jose_Miguel_Torres_Hernandez_CV_Modern_Gray_ES.pdf`

Inside the repo, the current canonical source is:

- `src/content/site.ts`

## v1 section map

### Shared sections

1. Hero
2. About
3. Selected experience
4. Key projects
5. Technical strengths
6. Working style
7. Contact and downloads

### Content rules

- Keep both locales equivalent in structure and intent
- Rewrite the CV for screen reading, not A4 replication
- Prefer short, scannable blocks over long paragraphs
- Avoid confidential project details
- Keep claims supported by the current CV

## Transformation strategy

### Reused directly from the CV

- name and professional positioning
- location
- contact channels
- core stack and strengths
- employment history
- project references already named in the CV
- certifications and education mentions where relevant

### Rewritten for the website

- hero positioning
- section intros
- project summaries
- working style statements
- CTA copy

## Content object shape

Each locale exports:

- metadata
- navigation labels
- hero content
- about copy
- experience entries
- project cards
- strengths grid
- working style bullets
- contact card
- footer note

This shape is intentionally rigid so EN and ES cannot drift structurally.
