---
name: website-papers
description: Add or update papers on Sergei Glebkin's academic website in this project, keeping coauthor links, paper order, and the public CV consistent.
---

# Website papers and CV

This repository is the existing static website at https://sglebkin.com, published from `master` in `sglebkin/site` through GitHub Pages. Preserve its existing design and publishing setup.

- Add or update the requested paper PDF and its website entry. Use the requested filename and the title, authors, and abstract from the actual paper.
- Keep the research listings in `index.htm` and `huindex.htm` consistent.
- Link coauthors' names to their current academic websites. Reuse and verify existing links; look up missing or outdated links. Prefer a personal academic site, or an official institutional profile when no personal site can be found. Stathi Avdis's existing link is https://apps.ualberta.ca/directory/person/avdis.
- Put newly posted or substantively revised working papers first. Renumber the working papers consecutively after publications, and apply the same order and numbering to the public CV. For example, with six publications, the most recently updated working paper is number 7 and the remaining working papers shift down. A link-only correction need not change the paper order.
- Update `CV.tex`, its last-updated date, and rebuild `CV.pdf` whenever adding or updating a paper. In the CV, coauthor names are plain text and paper titles link to their paper URLs. Keep the research listing in the older `cv.htm` consistent too.
- `CV.tex` also drives the local Faculty Activity Report edition. Keep `\new{...}` markers for report changes. Move a newly public paper out of `faronly`, while keeping other unpublished work in that block and its numbering consistent. `FAR_CV.tex` and `FAR_CV.pdf` are ignored local files and must remain uncommitted.
- Build the public CV with `latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=<temporary-directory> CV.tex`. Verify the rendered pages, paper links, ordering, numbering, and exclusion of remaining `faronly` material before replacing `CV.pdf`. If rebuilding the local FAR edition, use LuaLaTeX.
- When publishing is authorized, commit the requested site and CV changes, push through the existing GitHub Pages setup, and verify the live page and PDF. A request to change this skill alone does not authorize publication.
