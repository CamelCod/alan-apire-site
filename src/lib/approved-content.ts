import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
type RecordName='portfolio.md'|'case-attribution.md'|'team-approved.md'|'authorisation.md';

/** A placeholder or file's mere existence is not approval. */
export function sourceApproved(name:RecordName) {
  try {
    const text=readFileSync(resolve(process.cwd(),'content',name),'utf8');
    const frontmatter=text.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1] ?? '';
    return /^status:\s*verified\s*$/m.test(frontmatter) && /^public_use:\s*approved\s*$/m.test(frontmatter);
  } catch { return false; }
}
function approvedJson(name:RecordName) {
  if(!sourceApproved(name)) return null;
  try {
    const text=readFileSync(resolve(process.cwd(),'content',name),'utf8');
    return JSON.parse(text.match(/```json\s*\n([\s\S]*?)\n```/)?.[1] ?? 'null');
  } catch { return null; }
}
export function approvedPortfolio() {
  return sourceApproved('authorisation.md') ? approvedJson('portfolio.md') : null;
}
export function approvedTeam():Array<{name:string;roles:Record<'en'|'ar'|'ru',string>}> {
  const data=approvedJson('team-approved.md');
  if(!Array.isArray(data)) return [];
  return data.filter(item=>typeof item?.name==='string' && item.name.trim() &&
    ['en','ar','ru'].every(locale=>typeof item?.roles?.[locale]==='string' && item.roles[locale].trim()));
}
