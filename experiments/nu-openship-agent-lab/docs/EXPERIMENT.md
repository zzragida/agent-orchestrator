# Openship Experiment Matrix

## Gate 0 — Openship health
- `openship status`
- `openship doctor`
- Dashboard reachable

## Gate 1 — GitHub source deploy
- Connect GitHub account/app
- Confirm repository is visible in Openship
- Deploy `experiment/openship-agent-lab`
- Verify `/health`

## Gate 2 — Push auto-deploy
- Change response/version
- Push commit
- Confirm webhook-triggered deployment

## Gate 3 — MCP read-only agent
- Create read-only/scoped PAT
- Call `tools/list`
- Verify project/deployment/log visibility only within scope

## Gate 4 — MCP deployment agent
- Grant write scope only for lab project
- Trigger deployment through MCP
- Verify status/log/health

## Gate 5 — Failure + rollback
- Deploy deliberate bad revision
- Detect via logs/health
- Roll back to prior known-good release
- Verify `/health` returns 200

## Gate 6 — Security
- Revoke token and verify 401
- Confirm read-only token cannot mutate
- Confirm audit log contains agent actions

## KPI
- First deploy lead time
- Push-to-live latency
- Agent deployment success rate
- Rollback recovery time
- Manual dashboard operations
- Unauthorized-operation rejection rate
- Audit coverage
