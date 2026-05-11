export type { Locale, SiteCopy, CvCopy, ContactLink, Action } from "./types";
export { personSchema } from "./types";

import type { Locale, SiteCopy, CvCopy } from "./types";
import { web as enWeb, cv as enCv } from "./en";
import { web as esWeb, cv as esCv } from "./es";

export const siteCopy: Record<Locale, SiteCopy> = { en: enWeb, es: esWeb };
export const cvCopy: Record<Locale, CvCopy> = { en: enCv, es: esCv };
