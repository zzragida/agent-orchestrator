#!/usr/bin/env bash
set -euo pipefail
: "${OPENSHIP_URL:?}" "${OPENSHIP_TOKEN:?}"
curl -fsS "$OPENSHIP_URL/api/mcp" \
  -H "Authorization: Bearer $OPENSHIP_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | python3 -m json.tool
