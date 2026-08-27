#!/usr/bin/env bash
set -euo pipefail
: "${OPENSHIP_URL:?}" "${OPENSHIP_TOKEN:?}" "${OPENSHIP_PROJECT_ID:?}"
BRANCH="${1:-main}"
curl -fsS -X POST "$OPENSHIP_URL/api/deployments" \
  -H "Authorization: Bearer $OPENSHIP_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"projectId\":\"$OPENSHIP_PROJECT_ID\",\"branch\":\"$BRANCH\",\"environment\":\"production\"}" | python3 -m json.tool
