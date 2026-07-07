#!/bin/bash
#
#  Double-click to publish this website to GitHub.
#  Repo: https://github.com/XYHDX/DemeriahWebsite
#
cd "$(dirname "$0")" || exit 1

SLUG="XYHDX/DemeriahWebsite"
REMOTE="https://github.com/$SLUG.git"
BRANCH="main"

echo "======================================================"
echo "   Publish your site to GitHub  ($SLUG)"
echo "======================================================"
echo

if ! command -v git >/dev/null 2>&1; then
  echo "Git isn't installed. An installer window may appear — click Install,"
  echo "wait, then double-click this script again."
  xcode-select --install 2>/dev/null
  read -n 1 -s -r -p "Press any key to close..."; exit 1
fi

echo "This publishes this folder and REPLACES the old template on GitHub."
read -r -p "Continue? (y/N): " OK
case "$OK" in y|Y) ;; *) echo "Cancelled."; read -n 1 -s -r -p "Press any key to close..."; exit 0;; esac
echo

echo "-> Preparing a clean snapshot (none of your files are deleted)..."
rm -rf .git
git init -q
git branch -M "$BRANCH"
git config user.name  "XYHDX"
git config user.email "yahyademeriah@gmail.com"
git add -A
git commit -q -m "Robotics & AI Engineer portfolio — bilingual EN/AR, light/dark, hardened contact form"
git remote add origin "$REMOTE"
echo "   $(git ls-files | wc -l | tr -d ' ') files ready."
echo

# Try an existing saved login first. GIT_TERMINAL_PROMPT=0 = fail fast, never hang.
echo "-> Publishing..."
if GIT_TERMINAL_PROMPT=0 git push --force --progress -u origin "$BRANCH" 2>/dev/null; then
  echo; echo "SUCCESS!  Your site is on GitHub:"; echo "   https://github.com/$SLUG"
  read -n 1 -s -r -p "Press any key to close..."; exit 0
fi

echo
echo "------------------------------------------------------------"
echo "  GitHub needs you to log in with a TOKEN (not a password)."
echo ""
echo "  1) Open:   https://github.com/settings/tokens/new"
echo "  2) In 'Note' type: website"
echo "  3) Tick the box labelled  repo"
echo "  4) Scroll down, click  Generate token"
echo "  5) Copy the token (it begins with  ghp_ )"
echo "------------------------------------------------------------"
echo
echo "Now type your username, then paste the token."
echo "(While pasting the token you will NOT see anything — that's normal. Just paste and press Enter.)"
echo
read -r -p "GitHub username: " U
read -r -s -p "Paste token here, then press Enter: " T; echo
if [ -n "$U" ] && [ -n "$T" ]; then
  echo "-> Publishing..."
  if GIT_TERMINAL_PROMPT=0 git -c credential.helper= push --force --progress "https://${U}:${T}@github.com/${SLUG}.git" "$BRANCH"; then
    git remote set-url origin "$REMOTE"   # keep clean URL; token is NOT saved
    echo; echo "SUCCESS!  Your site is on GitHub:"; echo "   https://github.com/$SLUG"
  else
    echo; echo "Didn't go through. Almost always one of these:"
    echo "  • the  repo  box wasn't ticked when creating the token"
    echo "  • the username isn't exactly  XYHDX"
    echo "  • the token got cut off when pasting — make a fresh one and retry"
  fi
else
  echo "Nothing entered — cancelled."
fi
echo
read -n 1 -s -r -p "Press any key to close..."
echo
