const { loadYaml } = require(`./load-yaml`);
const docsLinksData = loadYaml(`src/data/sidebar/docs-links.yaml`);

const docsLinks = docsLinksData[0].items;

function getSibling(index, list, direction) {
  if (direction === `next`) {
    const next = index === list.length - 1 ? null : list[index + 1];
    if (next && next.link && next.link.includes(`#`)) {
      return getSibling(index + 1, list, `next`);
    }
    return next;
  } else if (direction === `prev`) {
    const prev = index === 0 ? null : list[index - 1];
    if (prev && prev.link && prev.link.includes(`#`)) {
      return getSibling(index - 1, list, `prev`);
    }
    return prev;
  } else {
    return null;
  }
}

function flattenList(itemList) {
  return itemList.reduce((reducer, { items, ...rest }) => {
    reducer.push(rest);
    if (items) reducer.push(...flattenList(items));
    return reducer;
  }, []);
}

const flattenedDocs = flattenList(docsLinks);

function findDoc(doc) {
  if (!doc.link) return null;
  return (
    doc.link === this.link ||
    doc.link === this.link.substring(0, this.link.length - 1)
  );
}

function getPrevAndNext(slug) {
  const docIndex = flattenedDocs.findIndex(findDoc, {
    link: slug,
  });

  // add values to page context for next and prev page
  let prevAndNext = {};
  if (docIndex > -1) {
    prevAndNext.prev = getSibling(docIndex, flattenedDocs, `prev`);
    prevAndNext.next = getSibling(docIndex, flattenedDocs, `next`);
  }
  return prevAndNext;
}

module.exports = { getPrevAndNext };
