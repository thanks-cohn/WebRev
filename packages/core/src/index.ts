export type RevisionId = string;

export type HealthState = "healthy" | "degraded" | "failed" | "unknown";

export interface WebRevRevision {
  id: RevisionId;
  parent?: RevisionId;
  createdAt: string;
  source?: { commit?: string; branch?: string };
  configuration: Record<string, string | number | boolean>;
}

export interface HealthReport {
  state: HealthState;
  revision: RevisionId;
  checks: Array<{
    id: string;
    state: HealthState;
    message?: string;
  }>;
}

export interface DeploymentProvider {
  readonly id: string;
  deploy(revision: WebRevRevision): Promise<{ deploymentId: string; url?: string }>;
  status(deploymentId: string): Promise<HealthState>;
  rollback(targetRevision: RevisionId): Promise<void>;
}

export interface MediaPanel {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  kind: "video" | "sketchfab" | "iframe" | "javascript" | "wasm" | "image";
  src?: string;
  poster?: string;
  href?: string;
  load?: "eager" | "visible" | "interaction";
}
