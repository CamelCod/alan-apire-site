import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const locales=['en','ar','ru'];
const data=Object.fromEntries(locales.map(locale=>[locale,JSON.parse(readFileSync(new URL(`../src/i18n/partner/${locale}.json`,import.meta.url),'utf8'))]));
function keys(value,prefix='') {
  return Object.entries(value).flatMap(([key,item]) => {
    const path=prefix ? `${prefix}.${key}` : key;
    return item && typeof item==='object' ? keys(item,path) : [path];
  }).sort();
}
for(const locale of locales) {
  assert.deepEqual(keys(data[locale]),keys(data.en),`${locale} has different dictionary keys`);
  assert.equal(data[locale].steps.length,3);
  assert.equal(data[locale].capabilities.length,5);
  assert.equal(data[locale].benefits.length,4);
  assert.equal(data[locale].roles.length,5);
  assert.match(data[locale].footerPrefix,/\| IFZA,/);
  assert.doesNotMatch(JSON.stringify(data[locale]),/DIEZ|DIEZA|دييز|Four Licensed|three licensed|Tier.?1|FEED/i);
}
console.log('PASS: EN/AR/RU key parity, process/responsibility counts and approved IFZA wording. Native-language quality is NOT verified.');
