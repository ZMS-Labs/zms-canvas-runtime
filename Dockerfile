FROM node:22-bookworm-slim@sha256:6c74791e557ce11fc957704f6d4fe134a7bc8d6f5ca4403205b2966bd488f6b3 AS dependencies

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund

FROM node:22-bookworm-slim@sha256:6c74791e557ce11fc957704f6d4fe134a7bc8d6f5ca4403205b2966bd488f6b3

ENV NODE_ENV=production \
    HOME=/state \
    PENECHO_STATE_DIR=/state

WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY package.json LICENSE NOTICE ./

LABEL org.opencontainers.image.title="ZMS packaging of PenEcho (archived)" \
      org.opencontainers.image.source="https://github.com/ZMS-Labs/penecho-runtime" \
      org.opencontainers.image.licenses="AGPL-3.0-only"

RUN mkdir -p /config /state /tmp/penecho \
    && chown -R 1000:1000 /app /config /state /tmp/penecho

USER 1000:1000
EXPOSE 3888

ENTRYPOINT ["/app/node_modules/.bin/penecho"]
CMD ["--config", "/config/config.env"]
