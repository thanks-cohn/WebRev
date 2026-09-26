export interface WebsiteConfigEntry {
  origin: string;
  categories?: string[];
  responsibilities?: string[];
}

export interface WebsitesConfig {
  schemaVersion: number;
  websites: Record<string, WebsiteConfigEntry>;
  defaults?: Record<string, string>;
}

export function getWebsite(
  config: WebsitesConfig,
  websiteId: string
): WebsiteConfigEntry {
  const website = config.websites[websiteId];

  if (!website) {
    throw new Error(`WebRev website not configured: ${websiteId}`);
  }

  return website;
}

export function getWebsiteOrigin(
  config: WebsitesConfig,
  websiteId: string
): string {
  return getWebsite(config, websiteId).origin;
}

export function resolveCategory(
  config: WebsitesConfig,
  category: string
): WebsiteConfigEntry {
  const defaultWebsiteId = config.defaults?.[category];

  if (defaultWebsiteId) {
    return getWebsite(config, defaultWebsiteId);
  }

  const match = Object.values(config.websites).find((website) =>
    website.categories?.includes(category)
  );

  if (match) return match;

  if (category !== "live") {
    return resolveCategory(config, "live");
  }

  throw new Error(`No WebRev website provides category: ${category}`);
}

export function resolveResponsibility(
  config: WebsitesConfig,
  responsibility: string,
  broadCategory = "cdn"
): WebsiteConfigEntry[] {
  const specific = Object.values(config.websites).filter((website) =>
    website.responsibilities?.includes(responsibility)
  );

  if (specific.length > 0) return specific;

  try {
    return [resolveCategory(config, broadCategory)];
  } catch {
    return [resolveCategory(config, "live")];
  }
}
