#!/bin/bash
# Create a GitHub repo from this project and push it.
set -euo pipefail
cd "$(dirname "$0")"

# Prefer local gh if present, otherwise system gh
if [[ -x ./.tools/gh ]]; then
  GH=./.tools/gh
elif command -v gh >/dev/null 2>&1; then
  GH=gh
else
  echo "GitHub CLI(gh)가 없습니다. https://cli.github.com 에서 설치한 뒤 다시 실행하세요."
  exit 1
fi

REPO_NAME="${1:-portfolio-site}"
VISIBILITY="${2:-public}" # public | private

echo "==> GitHub 로그인 확인"
if ! "$GH" auth status >/dev/null 2>&1; then
  echo "브라우저에서 GitHub 로그인을 완료해주세요."
  "$GH" auth login --hostname github.com --git-protocol https --web
fi

echo "==> git 저장소 준비"
# Incomplete .git (e.g. missing HEAD) blocks init — remove and recreate
if [[ -d .git && ! -f .git/HEAD ]]; then
  echo "불완전한 .git 발견, 재생성합니다."
  rm -rf .git
fi
if [[ ! -d .git ]]; then
  git init -b main
fi
# Avoid committing secrets / deps / local tools
grep -qxF '.tools' .gitignore 2>/dev/null || echo '.tools' >> .gitignore
grep -qxF 'publish-to-github.sh' .gitignore 2>/dev/null || true

git add -A
if git diff --cached --quiet; then
  echo "커밋할 변경사항이 없습니다."
else
  git commit -m "Initial commit: portfolio site"
fi

echo "==> GitHub 저장소 생성 및 푸시 ($VISIBILITY/$REPO_NAME)"
if git remote get-url origin >/dev/null 2>&1; then
  echo "이미 origin이 있습니다. 푸시만 시도합니다."
  git push -u origin HEAD
else
  "$GH" repo create "$REPO_NAME" --"$VISIBILITY" --source=. --remote=origin --push
fi

echo ""
echo "완료! 저장소 URL:"
"$GH" repo view --web --json url -q .url 2>/dev/null || git remote get-url origin
