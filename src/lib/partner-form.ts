/** Only the provider allowed by the existing CSP is accepted. No placeholder fallback. */
export function partnerEndpoint(value: unknown): string | null {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== 'https:' || url.hostname !== 'formspree.io' || url.port ||
        url.username || url.password || url.search || url.hash ||
        !/^\/f\/[A-Za-z0-9]+$/.test(url.pathname)) return null;
    return url.toString();
  } catch { return null; }
}

/** A 2xx response without parseable success JSON is not a confirmed acceptance. */
export async function sendPartnerEnquiry(endpoint: string, data: FormData, fetcher: typeof fetch = fetch): Promise<void> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  try {
    const response = await fetcher(endpoint, {
      method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: controller.signal,
    });
    const body = await response.json();
    if (!response.ok || body?.ok !== true) throw new Error('Acceptance not confirmed');
  } finally { clearTimeout(timer); }
}

export function enquiryMailto(email: string, data: FormData, labels: Record<string,string>, subject: string): string {
  const body = Object.entries(labels).map(([name,label]) => `${label}: ${data.get(name) ?? ''}`).join('\n\n');
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
