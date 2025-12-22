# Playwright E2E Framework (TypeScript)

**Purpose:** Example Playwright + TypeScript framework demonstrating POM, UI + API tests, GitHub Actions CI, and basic reporting.

## Structure
- `tests/` - example tests
- `src/pages/` - Page Objects
- `src/utils/` - helpers, fixtures
- `playwright.config.ts` - Playwright config
- `package.json` - dependencies & scripts

## Quick start
```bash
npm install
npx playwright install
npm test
```

## CI
`/.github/workflows/ci.yml` contains a sample GitHub Actions workflow.
