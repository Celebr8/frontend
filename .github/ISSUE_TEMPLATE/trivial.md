---
name: Trivial
about: Template for trivial issues
title: What's to be done? (imperative present)
labels: Trivial
assignees: ''

---

**What's to be corrected**: 
**How should it look like (screenshot or sketch)**:
**How should it work (write use case)**:

**Priority (tag accordingly):** `urgent` / `regular` (`next` column) or `non-urgent` / `wontfix` (`backlog` column)
**Domain (tag accordingly):** `frontend` / `backend`
**Tested on:** (platform, OS, browser, version)
**Branch**: (commit directly to `staging` / PR to `master` if it's `urgent`)

**Work on it**

- Work on `staging` or `master` (if it's `urgent`)
- Tag with `ongoing` and move the card to `ongoing`.
- Correct the default
- Commit your work
- Create a PR (if it's `urgent`) and ask for validation. Move the card to `staged`.
- Close the issue if all the work have been done

** Validate **

- Check on mobile and on desktop if the default have been correctly corrected.
- If everything is working fine, move the card to`accepted` column.
- If the feature isn't completely implemented, re-open the issue with a comment clearly what the problem is and what is the desired result. Move the card to `have issues` column.

Please follow https://github.com/Whichost/frontend/wiki/Git-workflow
