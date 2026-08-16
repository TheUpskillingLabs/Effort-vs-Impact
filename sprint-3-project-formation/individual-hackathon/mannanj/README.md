# Civic Signal — Constituent Needs Demo

Individual Hackathon submission for [mannanj](https://github.com/mannanj).

This is a fully mocked Next.js prototype for testing whether information a constituent already generates could be converted—with their explicit verification—into a civic need that is easier for a local representative's office to receive and use.

The demo follows one complete example, **“Fix Rose Hill sign,”** through:

1. mocked Google continuation and analysis;
2. a discovered need prepared with minimal constituent effort;
3. optional corrections and personal notes;
4. constituent confirmation;
5. an office-ready share preview;
6. mocked sending, status, and update subscription.

No Google OAuth, Takeout upload, AI model, or government submission is connected. All demo state stays in the browser.

## Run locally

```bash
cd code
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supporting artifact

- [Civic Signal experiment one-pager](./civic_signal_experiment_one_pager.pdf)

## Verify

```bash
cd code
pnpm test
pnpm typecheck
pnpm lint
pnpm build
```
