import type { AstroIntegration } from "astro";

export interface WebRevAstroOptions {
  revision?: string;
  inspect?: boolean;
}

export default function webrev(options: WebRevAstroOptions = {}): AstroIntegration {
  const revision = options.revision ?? process.env.WEBREV_REVISION ?? "dev";

  return {
    name: "@webrev/astro",
    hooks: {
      "astro:config:setup": ({ injectRoute }) => {
        if (options.inspect !== false) {
          injectRoute({
            pattern: "/__webrev/revision",
            entrypoint: "@webrev/astro/revision-endpoint"
          });
        }
      },
      "astro:build:done": ({ logger }) => {
        logger.info(`WebRev revision: ${revision}`);
      }
    }
  };
}
