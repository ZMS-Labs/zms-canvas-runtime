# PenEcho Runtime

<!-- ZMS-ESTATE:BEGIN -->

> **Obligation:** `none` · **Stage:** `retired` · **Load-bearing:** `L0 — free`
> **Purpose:** `mirror_or_packaging`
> **Canonical for:** penecho-runtime-packaging
> Estate authority: `ZMS-Labs/zms-homelab/governance/estate.yaml`.

<!-- ZMS-ESTATE:END -->

## Archived 2026-07-30

**This repository is archived and read-only. Nothing consumed it.**

**Why.** It is a packaging lane for stock upstream [PenEcho](https://github.com/erickong/penecho),
and the cluster was moved onto a ZMS fork of PenEcho four days after this lane
was stood up. `ZMS-Labs/zms-canvas` **is** PenEcho, rebranded: the same upstream
commit `8369eec77708b24915c94c5f0517e5b8865c003e` appears in both histories, and
zms-canvas's first commit is literally `Initial PenEcho release`. So this lane
was superseded before it was ever consumed.

**The evidence that nothing pulls it.** The image was built and published --
`ghcr.io/zms-labs/penecho-runtime` has 42 versions -- but the `penecho`
namespace does not run it. `zms-k3s-gitops/apps/base/penecho/deployment.yaml`
runs `ghcr.io/zms-labs/zms-canvas@sha256:94838cf5a2c526d8f136c6aecb9bdb267f199182569c88fd2269f65c60d38243`.
The namespace name is the fossil that made this repository look load-bearing;
the image reference is the truth. An org-wide code search for
`zms-labs/penecho-runtime` returns 8 hits, every one of them a citation and none
of them a consumption.

The work here is not junk -- digest-pinned base image, non-root UID, multi-arch
build with `provenance: mode=max`, SBOM and attestation, SHA-pinned actions,
correct AGPL-3.0 attribution. It is archived because it is *unneeded*, not
because it is bad. Note also that it is pinned to `penecho@0.4.2` while upstream
ships `0.7.2`, so it is not a working fallback in its current state either.

**How to reverse this.** Archiving is reversible and read-preserving; no history,
package, or tag was deleted.

```sh
gh api -X PATCH repos/ZMS-Labs/penecho-runtime -F archived=false
```

Then in `ZMS-Labs/zms-homelab`, set `repositories.penecho-runtime.github_archived: false`
and `stage:` back to `building` in `governance/estate.yaml`, drop the
`superseded_by:` key, and bump the pinned `penecho` version before trusting the
image -- a lane three minor versions behind upstream is not a fallback.

Disposition analysis and full evidence: [ZMS-Labs/zms-homelab#1330](https://github.com/ZMS-Labs/zms-homelab/issues/1330).

---

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
