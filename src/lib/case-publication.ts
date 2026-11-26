import { sourceApproved } from './approved-content';

export const PORTFOLIO_CASE_KEYS = [
  'portfolio-thermal-network','portfolio-boiler-plant','portfolio-remediation',
  'portfolio-water-sewerage','portfolio-environmental-impact',
] as const;

export function caseSourcesAvailable() {
  return sourceApproved('portfolio.md') && sourceApproved('case-attribution.md') && sourceApproved('authorisation.md');
}

/** Fail closed at cards, detail routing and sitemap, including guessed draft URLs. */
export function isPublishedCase(
  data: { order: number; translationKey?: string; evidenceStatus?: string; sourceRecord?: string; scope?:string; role?:string; year?:string },
  sourcesAvailable = caseSourcesAvailable(),
) {
  return sourcesAvailable && data.order < 99 && data.evidenceStatus === 'verified' &&
    [data.scope,data.role,data.year].every(value=>typeof value==='string' && value.trim() && !/TO CONFIRM|pending/i.test(value)) &&
    data.sourceRecord === 'content/portfolio.md' &&
    PORTFOLIO_CASE_KEYS.some(key => key === data.translationKey);
}
