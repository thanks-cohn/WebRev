export type WebsiteRole = "primary" | "cdn";

export interface WebsiteConfigEntry {
  origin: string;
  responsibilities: string[];
}

export interface WebsitesConfig {
  schemaVersion: number;
  websites: Record<WebsiteRole, WebsiteConfigEntry>;
}

export function getWebsite(
  config: WebsitesConfig,
  role: WebsiteRole
): WebsiteConfigEntry {
  const website = config.websites[role];

  if (!website) {
    throw new Error(`WebRev website role not configured: ${role}`);
  }

  return website;
}

export function getWebsiteOrigin(
  config: WebsitesConfig,
  role: WebsiteRole
): string {
  return getWebsite(config, role).origin;
}
