# PenEcho Runtime

## Archived 2026-07-30

This repository is archived and read-only. It packaged [PenEcho](https://github.com/penecho/penecho), an open-source canvas for thinking with AI through handwriting, equations and diagrams, into a container image pinned to PenEcho's npm release 0.4.2. That release is an early one, so this packaging is not a working fallback.

The history here is kept for reference. Archiving can be undone by an organization owner. No history was deleted.

I'm [Zach Stern](https://github.com/SternOne). AI tools write the code. I decide what each project is for and check what comes back.

## What the packaging did

This repository did not fork PenEcho's application code. It installed the exact pinned npm release and built it into a container image with:

- a base image pinned by its content digest
- a non-root user
- builds for both x86 (amd64) and ARM (arm64) processors
- a software bill of materials (SBOM) listing what is inside each image
- provenance attestations recording how each image was built
- third-party actions pinned to commit SHAs (the four Docker actions; GitHub's own actions stayed on version tags)
- the full AGPL-3.0 license text and a notice crediting the upstream authors

Provider credentials and private notebook content are never included in this image.

## Sources and license

- PenEcho package: `penecho@0.4.2`
- Pinned upstream commit: `8369eec77708b24915c94c5f0517e5b8865c003e`
- License: GNU Affero General Public License v3.0 (`AGPL-3.0-only`)

The complete license is in [LICENSE](LICENSE), and upstream attribution and source locations are recorded in [NOTICE](NOTICE). `package-lock.json` pins the npm package and its integrity hash. The Container workflow built each image and tagged it with the short hash of the commit it came from, plus a `latest` tag. The images are not publicly available.

[UPSTREAM.md](UPSTREAM.md) records what this repository added, what stayed upstream's, and the update policy it had while active.

## Local verification

```sh
npm ci --no-audit --no-fund
npm test
./node_modules/.bin/penecho --version
```

The CI workflow ran the same three commands.
