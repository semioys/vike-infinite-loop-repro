
## Description

Reproduction of https://github.com/vikejs/vike/issues/2262

## Steps

1. npm i && npm run dev
2. Manually set `language` cookie to `en`. In this reproduction repo we assume that it is default application language.
3. Visit a non-default language URL (e.g., `/fr/`)
4. Observe the error: `Error: [vike][Wrong Usage] Infinite loop of HTTP URL redirects: / -> /`

## Additional info
Commenting out validate(graph) in assertNoInfiniteHttpRedirect.js resolves the issue. Adding a query param (/?redirected=true) also works, but it isn’t a viable solution due to SEO reasons.