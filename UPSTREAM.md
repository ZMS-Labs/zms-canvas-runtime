# Upstream and packaging boundary

This repository packages PenEcho; it does not fork or claim authorship of the PenEcho application.

## Pinned input

- Upstream source: [`penecho/penecho`](https://github.com/penecho/penecho)
- Pinned source revision: `8369eec77708b24915c94c5f0517e5b8865c003e`
- Packaged npm release: `penecho@0.4.2`

`package-lock.json` pins the npm package and its integrity hash.

## What ZMS Labs added

ZMS Labs owns the container build, wrapper package metadata, runtime tests, NOTICE and attribution, and the CI and image build workflows. PenEcho application code remains upstream-owned and is not copied into this repository.

## Update and divergence policy

This policy applied while the repository was active. The packaged PenEcho version stayed at 0.4.2 from the first commit until the repository was archived.

An update must change the exact package version and pinned source revision together, regenerate the lockfile, review upstream code and license changes, pass runtime tests, and push the image to the registry with its digest, SBOM and provenance records. If any check fails, retain the prior packaged runtime. Never patch upstream application code here to bypass a failed update; fix it upstream or record an explicit, reviewed packaging exception.
