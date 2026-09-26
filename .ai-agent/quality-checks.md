# Quality Checks — Wellness, Love & Relationships

## 1. Purpose

Every website change must pass appropriate quality checks before
it can be published.

The goal is to prevent broken pages, damaged assets, SEO problems,
poor user experience, inaccurate content, and unintended changes.

---

## 2. Pre-Change Check

Before modifying anything:

- Inspect the current version.
- Identify affected files.
- Check protected files.
- Check related pages and links.
- Record the reason for the change.
- Preserve the previous working version.

Never make a blind change.

---

## 3. Protected File Check

Verify that protected files have:

- not been deleted
- not been renamed
- not been moved
- not been replaced
- not been modified

If any protected asset changed unexpectedly:

STOP.

Do not publish.

---

## 4. HTML Check

Check changed HTML files for:

- valid document structure
- correct HTML nesting
- correct closing tags
- valid attributes
- working links
- correct image paths
- correct heading hierarchy
- no accidental duplicate sections

If a critical HTML problem exists:

STOP.

---

## 5. Link Check

Check:

- internal links
- article links
- navigation links
- footer links
- external links where appropriate

Identify:

- broken links
- incorrect paths
- missing pages
- accidental redirects

Do not publish critical broken links.

---

## 6. Image Check

Verify:

- image files exist
- image paths are correct
- images load
- images do not unexpectedly disappear
- protected image filenames remain unchanged
- alt text is appropriate where applicable

Never replace a protected image automatically.

---

## 7. CSS and Layout Check

Check changed styles for:

- broken layout
- overlapping elements
- unreadable text
- broken cards
- incorrect spacing
- horizontal scrolling
- mobile layout problems
- desktop layout problems

---

## 8. Responsive Check

Review the affected page at:

- small mobile
- standard mobile
- tablet
- desktop

Pay special attention to:

- header
- navigation
- hero
- topic cards
- article cards
- forms
- footer

If the change breaks an existing responsive layout:

STOP.

---

## 9. Accessibility Check

Check:

- heading hierarchy
- meaningful link text
- button labels
- image alt text
- keyboard accessibility
- focus visibility
- readable text
- sufficient contrast

Fix clear accessibility issues when safe.

---

## 10. SEO Check

For affected pages verify:

- title
- meta description
- canonical
- H1
- headings
- internal links
- indexability
- sitemap status
- robots.txt impact
- structured data where applicable

Never use misleading SEO content.

---

## 11. Content Accuracy Check

For factual content:

- verify important claims
- verify current information where needed
- use authoritative sources
- remove unsupported claims
- check for contradictions
- check for fabricated citations

Never publish invented references.

---

## 12. Duplicate Content Check

Before adding content:

Compare it with existing pages.

Check for:

- duplicate titles
- near-duplicate topics
- repeated sections
- unnecessary article duplication

If substantial duplication is detected:

STOP and reconsider.

---

## 13. Navigation Check

Verify that:

- header links work
- topic links work
- article links work
- footer links work
- contact links work
- users can return to the homepage

Do not remove working navigation automatically.

---

## 14. Sitemap Check

After adding or removing an appropriate indexable page:

- verify sitemap.xml
- verify the URL is correct
- verify the page is live
- avoid duplicate sitemap entries

Do not remove valid URLs without a reason.

---

## 15. Robots Check

Verify that robots.txt does not accidentally block:

- homepage
- articles
- important assets
- important website sections

---

## 16. Performance Check

When practical, check for:

- unnecessarily large files
- excessive scripts
- unnecessary CSS
- heavy dependencies
- layout instability
- avoidable loading delays

Do not add heavy dependencies for minor cosmetic improvements.

---

## 17. Regression Check

Compare the changed website with the previous working version.

Verify that existing features still work.

Especially check:

- logo
- hero
- existing images
- navigation
- search
- article cards
- contact page
- terms page
- footer

If an existing working feature breaks:

ROLL BACK.

---

## 18. Change Scope Check

Verify that the actual changes match the intended changes.

If the agent intended to change:

one article

but changed:

homepage + CSS + images + multiple articles

then:

STOP.

Unexpected scope expansion requires review.

---

## 19. Security Check

Never expose:

- API keys
- passwords
- access tokens
- private credentials
- secret configuration

Never put AI API keys directly into public HTML, CSS,
JavaScript, or other client-side website files.

Use secure secret storage for automation.

---

## 20. Final Publish Gate

Publish only when:

- required tests pass
- protected files are unchanged
- links work
- images work
- important pages work
- SEO checks pass
- no critical accessibility issue exists
- no unexpected scope expansion exists
- rollback is possible

If any critical requirement fails:

DO NOT PUBLISH.

---

## 21. Rollback

If a published change causes:

- broken pages
- missing images
- broken navigation
- serious SEO problems
- major layout problems
- unexpected behavior

restore the previous known-good version.

Do not make additional risky changes to hide the problem.

---

## 22. Quality Decision

Use:

PASS
= Safe to continue.

REVIEW
= Human review required.

FAIL
= Stop and do not publish.

---

## 23. Core Principle

Never sacrifice a working website for an experimental improvement.

Protect existing functionality.

Test before publishing.

Stop when uncertain.

A smaller safe improvement is better than a larger risky change.
