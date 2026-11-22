import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const i18nDir = path.join(rootDir, 'src/content/i18n');

// Read JSON files
const en = JSON.parse(fs.readFileSync(path.join(i18nDir, 'en.json'), 'utf8'));
const ar = JSON.parse(fs.readFileSync(path.join(i18nDir, 'ar.json'), 'utf8'));
const ru = JSON.parse(fs.readFileSync(path.join(i18nDir, 'ru.json'), 'utf8'));

// Read constants
const constantsFile = fs.readFileSync(path.join(rootDir, 'src/i18n/constants.ts'), 'utf8');

function flattenKeys(obj, prefix = '') {
  let keys = [];
  for (const [k, v] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      keys = keys.concat(flattenKeys(v, fullKey));
    } else if (Array.isArray(v)) {
      keys.push(`${fullKey}[]`);
      v.forEach((item, idx) => {
        if (typeof item === 'object' && item !== null) {
          keys = keys.concat(flattenKeys(item, `${fullKey}[${idx}]`));
        }
      });
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

const enKeys = new Set(flattenKeys(en));
const arKeys = new Set(flattenKeys(ar));
const ruKeys = new Set(flattenKeys(ru));

// Parity checks
const missingInAr = [...enKeys].filter((k) => !arKeys.has(k));
const missingInRu = [...enKeys].filter((k) => !ruKeys.has(k));
const extraInAr = [...arKeys].filter((k) => !enKeys.has(k));
const extraInRu = [...ruKeys].filter((k) => !enKeys.has(k));

// Needs review check
function countNeedsReview(obj) {
  let count = 0;
  function traverse(val) {
    if (typeof val === 'string') {
      if (val.includes('[NEEDS REVIEW]') || val.includes('[needs review]') || val.includes('needs review')) {
        count++;
      }
    } else if (typeof val === 'object' && val !== null) {
      Object.values(val).forEach(traverse);
    }
  }
  traverse(obj);
  return count;
}

const enNeedsReview = countNeedsReview(en);
const arNeedsReview = countNeedsReview(ar);
const ruNeedsReview = countNeedsReview(ru);

// Validate technical constants parity across locales
const constantParityErrors = [];

// 1. Licence number
['88988'].forEach((num) => {
  if (en.brand.licenceNumber !== num) constantParityErrors.push(`EN brand.licenceNumber (${en.brand.licenceNumber}) != ${num}`);
  if (ar.brand.licenceNumber !== num) constantParityErrors.push(`AR brand.licenceNumber (${ar.brand.licenceNumber}) != ${num}`);
  if (ru.brand.licenceNumber !== num) constantParityErrors.push(`RU brand.licenceNumber (${ru.brand.licenceNumber}) != ${num}`);
});

// 2. Email & Phone
if (en.brand.email !== 'info@alanapire.ae' || ar.brand.email !== 'info@alanapire.ae' || ru.brand.email !== 'info@alanapire.ae') {
  constantParityErrors.push('Brand email mismatch across locales');
}
if (en.brand.phone !== '+971558286328' || ar.brand.phone !== '+971558286328' || ru.brand.phone !== '+971558286328') {
  constantParityErrors.push('Brand phone mismatch across locales');
}

// 3. Technical numbers and Gosexpertiza approval code
const gosexpertizaCode = '66-1-1-3-028194-2026';
if (!en.trust.items[1].value.includes(gosexpertizaCode) ||
    !ar.trust.items[1].value.includes(gosexpertizaCode) ||
    !ru.trust.items[1].value.includes(gosexpertizaCode)) {
  constantParityErrors.push(`Gosexpertiza code ${gosexpertizaCode} mismatch in trust credentials`);
}

// 4. SRO and NOPRIZ codes
const sroDesign = 'P-161-005611025054-2471';
const sroSurvey = '5611025054-20250325-0804';
const nopriz = 'PI-114432';

if (!en.trust.items[2].value.includes(sroDesign) || !ar.trust.items[2].value.includes(sroDesign) || !ru.trust.items[2].value.includes(sroDesign)) {
  constantParityErrors.push(`SRO Design code mismatch across locales`);
}
if (!en.trust.items[3].value.includes(sroSurvey) || !ar.trust.items[3].value.includes(sroSurvey) || !ru.trust.items[3].value.includes(sroSurvey)) {
  constantParityErrors.push(`SRO Survey code mismatch across locales`);
}
if (!en.trust.items[4].value.includes(nopriz) || !ar.trust.items[4].value.includes(nopriz) || !ru.trust.items[4].value.includes(nopriz)) {
  constantParityErrors.push(`NOPRIZ code mismatch across locales`);
}

// Output Parity Report
console.log('====================================================');
console.log('       TRANSLATION & CONSTANTS PARITY REPORT        ');
console.log('====================================================');
console.log(`Total master keys (EN):          ${enKeys.size}`);
console.log(`Total Arabic keys (AR):          ${arKeys.size}`);
console.log(`Total Russian keys (RU):         ${ruKeys.size}`);
console.log('----------------------------------------------------');
console.log(`Missing keys in AR:              ${missingInAr.length}`);
console.log(`Missing keys in RU:              ${missingInRu.length}`);
console.log(`Extra keys in AR:                ${extraInAr.length}`);
console.log(`Extra keys in RU:                ${extraInRu.length}`);
console.log('----------------------------------------------------');
console.log(`Needs-review count (EN):         ${enNeedsReview}`);
console.log(`Needs-review count (AR):         ${arNeedsReview}`);
console.log(`Needs-review count (RU):         ${ruNeedsReview}`);
console.log('----------------------------------------------------');
console.log(`Constant Parity Errors:          ${constantParityErrors.length}`);
if (constantParityErrors.length > 0) {
  constantParityErrors.forEach((err) => console.error(`  - ${err}`));
} else {
  console.log('All figures, licence, standards & contact data match 100%');
}
console.log('====================================================');

if (missingInAr.length > 0 || missingInRu.length > 0 || extraInAr.length > 0 || extraInRu.length > 0 || constantParityErrors.length > 0) {
  console.error('❌ Parity check FAILED!');
  process.exit(1);
} else {
  console.log('✅ Translation and constants parity check PASSED!');
  process.exit(0);
}
