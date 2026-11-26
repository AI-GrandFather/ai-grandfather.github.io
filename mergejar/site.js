'use strict';

const language = document.querySelector('#locale');
const fields = document.querySelector('#fields');
const status = document.querySelector('#status');
const labels = [
  ['App name', 30],
  ['App Store subtitle', 30],
  ['Google Play short description', 80],
  ['Suggested App Store keywords', 100, 'bytes'],
  ['Full description', 4000],
];

for (const listing of listings) {
  language.add(new Option(listing.language, listing.locale));
}
const requested = new URLSearchParams(location.search).get('lang');
if (listings.some((listing) => listing.locale === requested)) {
  language.value = requested;
}

function render() {
  const listing = listings.find((item) => item.locale === language.value);
  fields.replaceChildren();
  status.textContent = '';
  const values = [...listing.fields];
  values.splice(3, 0, suggestedKeywords[listing.locale]);
  for (const [index, [title, limit, unit = 'characters']] of labels.entries()) {
    const value = values[index];
    const card = document.createElement('section');
    card.className = 'field';
    const header = document.createElement('div');
    header.className = 'field-header';
    const label = document.createElement('label');
    label.textContent = title;
    label.htmlFor = `store-field-${index}`;
    const box = document.createElement('textarea');
    box.id = label.htmlFor;
    box.value = value;
    box.readOnly = true;
    box.lang = listing.locale;
    box.dir = 'auto';
    box.rows = index === labels.length - 1 ? 14 : 2;
    const copy = document.createElement('button');
    copy.type = 'button';
    copy.textContent = 'Copy';
    copy.setAttribute('aria-label', `Copy ${title}`);
    copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(value);
        status.textContent = `${title} copied.`;
        copy.textContent = 'Copied';
        setTimeout(() => { copy.textContent = 'Copy'; }, 1400);
      } catch {
        box.focus();
        box.select();
        status.textContent = `${title} selected. Use your device’s copy command.`;
      }
    });
    const count = document.createElement('small');
    count.className = 'count';
    const length = unit === 'bytes' ? new TextEncoder().encode(value).length : [...value].length;
    count.textContent = `${length} / ${limit} ${unit}`;
    header.append(label, copy);
    card.append(header, box, count);
    fields.append(card);
  }
}

language.addEventListener('change', () => {
  const url = new URL(location.href);
  url.searchParams.set('lang', language.value);
  history.replaceState(null, '', url);
  render();
});
render();
