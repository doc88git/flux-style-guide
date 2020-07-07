module.exports = function component(renderedUsage, doc) {
  const { description, docsBlocks } = doc
  const block = docsBlocks ? '---\n' + docsBlocks.join('\n---\n') : ''

  return `${description ? '> ' + description : ''}

    ${renderedUsage.props.replace(/\#\#/g, '###')}
    ${renderedUsage.methods.replace(/\#\#/g, '###')}
    ${renderedUsage.events.replace(/\#\#/g, '###')}
    ${renderedUsage.slots.replace(/\#\#/g, '###')}

${block}
  `
}
