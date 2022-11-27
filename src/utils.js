import { root } from './mock/root'

const firstLevel = getKey(root.children);
const secondLevel = getKey(root.children[firstLevel].children);
const thirdLevel = getKeyByEntries(
  root.children[firstLevel].children[secondLevel].children,
  'dir'
);
const fourthLevel = getKeyByEntries(
  root.children[firstLevel].children[secondLevel].children[thirdLevel].children,
  'dir'
);

export function getNavigationData() {
  let navigation = [];

  navigation.push(
    ...firstLevel,
    ...secondLevel,
    ...thirdLevel,
    ...fourthLevel
  );

  return navigation;
}

export function getFiles() {
  const files = getKeyByEntries(
    root.children[firstLevel].children[secondLevel].children,
    'file'
  );

  return files;
}

export function getSecretFiles() {
  const files = getKeyByEntries(
    root.children[firstLevel].children[secondLevel].children[thirdLevel].children[fourthLevel].children,
    'file'
  );

  return files;
}

function getKey(object = {}) {
  if (!object && stringToFilter) { return null; }

  return Object.keys(object).map((key) => key.toLowerCase());
}

function getKeyByEntries(object = {}, stringToFilter = 'dir') {
  if (!object && stringToFilter) { return null; }

  return Object.entries(object).filter((item) => item[1].type === stringToFilter).map((key) => key[0].toLowerCase());
}

