import { describe, expect, it } from "vitest";
import {
  resolveCategory,
  resolveResponsibility,
  type WebsitesConfig
} from "./websites";

const minimal: WebsitesConfig = {
  schemaVersion: 3,
  websites: {
    main: { origin: "https://example.test", categories: ["live"] },
    assets: { origin: "https://assets.example.test", categories: ["cdn"] }
  },
  defaults: {
    live: "main",
    cdn: "assets"
  }
};

describe("website resolution", () => {
  it("uses live as the general fallback", () => {
    expect(resolveCategory(minimal, "documentation").origin).toBe("https://example.test");
  });

  it("uses cdn for unspecified asset responsibilities", () => {
    expect(resolveResponsibility(minimal, "wasm")[0].origin)
      .toBe("https://assets.example.test");
  });

  it("prefers explicit responsibility providers", () => {
    const config: WebsitesConfig = {
      ...minimal,
      websites: {
        ...minimal.websites,
        wasm: {
          origin: "https://wasm.example.test",
          responsibilities: ["wasm"]
        }
      }
    };

    expect(resolveResponsibility(config, "wasm")[0].origin)
      .toBe("https://wasm.example.test");
  });

  it("falls assets back to live when no cdn exists", () => {
    const config: WebsitesConfig = {
      schemaVersion: 3,
      websites: {
        main: { origin: "https://example.test", categories: ["live"] }
      },
      defaults: { live: "main" }
    };

    expect(resolveResponsibility(config, "video")[0].origin)
      .toBe("https://example.test");
  });
});
