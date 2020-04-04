const explode = s => {
  if (typeof s !== 'string') return ''
  if (!s.includes('f-')) return desCamelCase(s)

  let name = s.replace('f-', 'F ')
  name = name.split('-')
  name = name.join(' ')
  name = name.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase())

  return name
}

const desCamelCase = s => {
  let name = s.replace(/([A-Z])/g, ' $1')
  name = name.charAt(0).toUpperCase() + name.slice(1)
  return name.replace(/^\w/, c => c.toUpperCase())
}

const getWord = s => {
  if (typeof s !== 'string') return ''
  return explode(s).replace(/\s/g, '')
}

module.exports = function component(renderedUsage, doc) {
  const { displayName, description, docsBlocks } = doc

  return `# ${getWord(displayName)} API

    ${description ? '> ' + description : ''}

    ${renderedUsage.props}
    ${renderedUsage.methods}
    ${renderedUsage.events}
    ${renderedUsage.slots}
    ${docsBlocks ? '---\n' + docsBlocks.join('\n---\n') : ''}
  `
}
