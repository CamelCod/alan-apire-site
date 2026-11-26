import en from './partner/en.json';
import ar from './partner/ar.json';
import ru from './partner/ru.json';
import type { Locale } from './config';

/** AR/RU need native review. Identical keys do not establish translation quality. */
export const PARTNER_COPY: Record<Locale, typeof en> = { en, ar, ru };
