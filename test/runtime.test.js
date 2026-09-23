"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");

test("runtime pins the PenEcho release", () => {
  const installed = require("penecho/package.json");
  assert.equal(installed.version, "0.4.2");
  assert.equal(installed.license, "AGPL-3.0-only");
});

test("distribution includes AGPL text and upstream attribution", () => {
  const license = fs.readFileSync(path.join(root, "LICENSE"), "utf8");
  const notice = fs.readFileSync(path.join(root, "NOTICE"), "utf8");
  assert.match(license, /GNU AFFERO GENERAL PUBLIC LICENSE/);
  assert.match(license, /Version 3, 19 November 2007/);
  assert.match(notice, /PenEcho 0\.4\.2 by the PenEcho authors and contributors, https:\/\/github\.com\/penecho\/penecho\./);
  assert.match(notice, /penecho@0\.4\.2|PenEcho 0\.4\.2/);
  assert.doesNotMatch(notice, /erickong/);
});

test("container base image is digest pinned", () => {
  const dockerfile = fs.readFileSync(path.join(root, "Dockerfile"), "utf8");
  const fromLines = dockerfile.split(/\r?\n/).filter((line) => line.startsWith("FROM "));
  assert.ok(fromLines.length >= 2);
  for (const line of fromLines) assert.match(line, /@sha256:[0-9a-f]{64}(?:\s|$)/);
});

test("runtime does not bake provider credentials into the image", () => {
  const dockerfile = fs.readFileSync(path.join(root, "Dockerfile"), "utf8");
  assert.doesNotMatch(dockerfile, /AI_API_KEY\s*=/);
});
