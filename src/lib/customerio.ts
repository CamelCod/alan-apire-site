import { AnalyticsBrowser } from '@customerio/cdp-analytics-browser';

type CioInstance = ReturnType<typeof AnalyticsBrowser.load>;

declare global {
  interface Window {
    cioanalytics?: CioInstance;
  }
}

let instance: CioInstance | null = null;

function readWriteKey(): string | null {
  const key = document.querySelector<HTMLMetaElement>('meta[name="cio-write-key"]')?.content?.trim();
  return key || null;
}

export function initCustomerIO(): void {
  if (instance) return;
  const writeKey = readWriteKey();
  if (!writeKey) return;
  instance = AnalyticsBrowser.load(
    { writeKey },
    // One `page` event per full page load — this is a static multi-page site,
    // so there is no SPA router to double-count.
    { initialPageview: true },
  );
  // Expose the source's browser global so calls can use `cioanalytics.*`.
  window.cioanalytics = instance;
}

export function cioIdentify(userId: string, traits?: Record<string, unknown>): void {
  void instance?.identify(userId, traits)?.catch(() => {});
}

export function cioTrack(event: string, properties?: Record<string, unknown>): void {
  void instance?.track(event, properties)?.catch(() => {});
}
