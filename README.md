# PenEcho Runtime

<!-- ZMS-ESTATE:BEGIN -->

> **Estate status:** `maintenance` · **Purpose:** `mirror_or_packaging` · **Portfolio role:** `none`
> **Canonical for:** penecho-runtime-packaging
> Lifecycle authority: `ZMS-Labs/zms-homelab/governance/estate.yaml`.

<!-- ZMS-ESTATE:END -->

ZMS Labs' reproducible container packaging for [PenEcho](https://github.com/erickong/penecho). This repository does not fork PenEcho's application code. It installs the exact reviewed npm release and supplies the image build, provenance, and cluster runtime boundary needed by the ZMS homelab.

## Provenance

- PenEcho package: `penecho@0.4.2`
- Reviewed upstream commit: `8369eec77708b24915c94c5f0517e5b8865c003e`
- License: GNU Affero General Public License v3.0 (`AGPL-3.0-only`)

The complete license is in [LICENSE](LICENSE), and upstream attribution and source locations are recorded in [NOTICE](NOTICE). `package-lock.json` pins the npm artifact and integrity hash. Container images are published to `ghcr.io/zms-labs/penecho-runtime` with immutable content digests, SBOM/provenance metadata, and a human-friendly commit tag.

The exact wrapper boundary, update policy, and divergence behavior are recorded in [UPSTREAM.md](UPSTREAM.md).

## Local verification

```sh
npm ci --no-audit --no-fund
npm test
./node_modules/.bin/penecho --version
```

The production configuration and deployment live in the `zms-k3s-gitops` repository. Provider credentials and private notebook content are never included in this image.

## Upstream updates

Update the exact `penecho` version in `package.json`, regenerate `package-lock.json`, inspect the upstream diff and license, then run the verification commands above before publishing a new image.
