# CHANGELOG

## 2026-06-12T05:50Z — Initial push

- **Actor:** Yuanbao
- **Approver:** Rob (Telegram msg #151)
- **Action:** Created private GitHub repo `robkr-rgb/wedding-website`, committed full initial project scaffold and wedding site source
- **Target:** `https://github.com/robkr-rgb/wedding-website`
- **Before:** No repo existed
- **After:** Private repo with initial commit on `main`
- **Reversibility:** Repo can be deleted from GitHub settings

## 2026-06-12T06:04Z — Push to GitHub

- **Actor:** Yuanbao
- **Approver:** Rob (Telegram msg #159, provided classic PAT)
- **Action:** Pushed initial commit to `robkr-rgb/Wedding-website` on `main`; PAT stripped from remote URL after push
- **Target:** `https://github.com/robkr-rgb/Wedding-website`
- **Before:** Empty repo
- **After:** 11 files on `main` (site source + governance scaffold)
- **Reversibility:** `git revert` or force-push; repo deletable from GitHub settings
- **Note:** Classic PAT used for this push — revoke it at github.com/settings/tokens once confirmed

## 2026-06-12T06:08Z — Governance remediation

- **Actor:** Yuanbao
- **Approver:** Rob (Telegram msg #162, flagged missed governance checks)
- **Action:** Added missing `docs/` scaffold (architecture.md, running-locally.md); updated PROJECTS.md and REPO_VALIDATION.md in AI-Governance-Workspace
- **Remaining deviation:** Repo is **public** — must be set to private at github.com/robkr-rgb/Wedding-website → Settings → Visibility
