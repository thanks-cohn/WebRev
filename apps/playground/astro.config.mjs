import { defineConfig } from "astro/config";
import webrev from "@webrev/astro";

export default defineConfig({
  output: "static",
  integrations: [
    webrev({
      revision: process.env.WEBREV_REVISION ?? "playground-dev",
      inspect: true
    })
  ]
});
