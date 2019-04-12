---
name: Bug
about: Bug issue template
title: ''
labels: bug
assignees: ''

---

**What's to be fixed**:
**What's the expected behavior:**
**What happens in reality (screenshot):**
**Priority (tag accordingly):** `urgent` / `regular` (`next` column) or `non-urgent` / `wontfix` (`backlog` column)
**Domain (tag accordingly):** `frontend` / `backend`
**Tested on:** (platform, OS, browser, version)
**Branch**: `hotfix-` (derived from `master`)

**Work on it**

- Derive the branch from `master`. Prefix it with `hotfix-`.
- Tag with `ongoing` and move the card to `ongoing`.
- Fix the issue
- Commit your work
- Create a PR and ask for validation. Move the card to `staged`.
- Ask for validation.
- Close the issue

** Validate **

- Check on mobile and on desktop if the issue have been correctly fixed.
- If everything is correct, move the card to accepted column.
- If the issue isn't fixed, re-open the comment clearly what the problem is and what is the desired result. Move the card to `have issues` column.

Please follow https://github.com/Whichost/frontend/wiki/Git-workflow
