import assert from "node:assert/strict";
import test from "node:test";
import { resolveBasePath } from "../scripts/base-path.mjs";

test("local development and production builds default to the root", () => {
  assert.equal(resolveBasePath(), "");
  assert.equal(resolveBasePath({ NODE_ENV: "production" }), "");
  assert.equal(resolveBasePath({ NODE_ENV: "development", GITHUB_REPOSITORY: "Autally-com/landing-page" }), "");
});

test("GitHub production project sites receive their repository prefix", () => {
  assert.equal(resolveBasePath({ NODE_ENV: "production", GITHUB_REPOSITORY: "Autally-com/landing-page" }), "/landing-page");
});

test("organization and user Pages repositories deploy at root", () => {
  assert.equal(resolveBasePath({ NODE_ENV: "production", GITHUB_REPOSITORY: "Autally-com/autally-com.github.io" }), "");
});

test("explicit root supports custom domains; empty workflow variables retain auto-detection", () => {
  const github = { NODE_ENV: "production", GITHUB_REPOSITORY: "Autally-com/landing-page" };
  assert.equal(resolveBasePath({ ...github, NEXT_PUBLIC_BASE_PATH: "/" }), "");
  assert.equal(resolveBasePath({ ...github, NEXT_PUBLIC_BASE_PATH: "" }), "/landing-page");
});

test("explicit paths override detection and normalize trailing slashes", () => {
  assert.equal(resolveBasePath({ NEXT_PUBLIC_BASE_PATH: "/preview/site/" }), "/preview/site");
});

test("invalid overrides fail instead of generating broken asset links", () => {
  for (const path of ["landing-page", "https://example.com", "//example.com", "/../site", "/a/./b", "/site?x=1", "/two words", "//"]) {
    assert.throws(() => resolveBasePath({ NEXT_PUBLIC_BASE_PATH: path }), /NEXT_PUBLIC_BASE_PATH/);
  }
});
