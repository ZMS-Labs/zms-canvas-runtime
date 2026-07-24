# Upstream and packaging boundary

This repository packages PenEcho; it does not fork or claim authorship of the PenEcho application.

## Pinned input

- Upstream source: [`erickong/penecho`](https://github.com/erickong/penecho)
- Reviewed source revision: `8369eec77708b24915c94c5f0517e5b8865c003e`
- Packaged npm release: `penecho@0.4.2`

The authoritative estate record is `ZMS-Labs/zms-homelab/governance/estate.yaml`. `package-lock.json` is the package artifact and integrity lock.

## ZMS-authored overlay

ZMS owns the container build, wrapper package metadata, runtime tests, NOTICE/attribution, and CI/image publication workflows. PenEcho application code remains upstream-owned and is not copied into this repository.

## Update and divergence policy

An update must change the exact package version and reviewed source revision together, regenerate the lockfile, review upstream code and license changes, pass runtime tests, and publish immutable image/SBOM/provenance evidence. If any check fails, retain the prior packaged runtime. Never patch upstream application code here to bypass a failed update; fix it upstream or record an explicit, reviewed packaging exception.
