import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

export const PORTFOLIO_CASE_KEYS = [
  'portfolio-thermal-network','portfolio-boiler-plant','portfolio-remediation',
  'portfolio-water-sewerage','portfolio-environmental-impact',
] as const;

export function caseSourcesAvailable() {
  return ['content/portfolio.md','content/case-attribution.md'].every(file => existsSync(resolve(process.cwd(),file)));
}

/** Fail closed at cards, detail routing and sitemap, including guessed draft URLs. */
export function isPublishedCase(
  data: { order: number; translationKey?: string; evidenceStatus?: string; sourceRecord?: string },
  sourcesAvailable = caseSourcesAvailable(),
) {
  return sourcesAvailable && data.order < 99 && data.evidenceStatus === 'verified' &&
    data.sourceRecord === 'content/portfolio.md' &&
    PORTFOLIO_CASE_KEYS.some(key => key === data.translationKey);
}
