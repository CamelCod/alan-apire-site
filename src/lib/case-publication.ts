/** Fail closed: a low order alone must never publish an unverified case. */
export function isPublishedCase(data: { order: number; evidenceStatus?: string; sourceRecord?: string }) {
  return data.order < 99 && data.evidenceStatus === 'verified' && Boolean(data.sourceRecord?.trim());
}
