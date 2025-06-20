module.exports.sortTemplateDataComponents = (content) => {
  let sortedContent = content;

  for (const key in sortedContent) {
    const contentData = sortedContent[key];
    const sortedContentData = Object.entries(contentData).sort(
      ([, a], [, b]) => a.index - b.index
    );
    sortedContent[key] = Object.fromEntries(sortedContentData);
  }

  return sortedContent;
};
