const explode = s => {
  if (typeof s !== 'string') return ''
  if (!s.includes('f-')) return desCamelCase(s)

  let name = s.replace('f-', '')
  name = name.split('-')
  name = name.join(' ')

  return name.replace(/^\w/, c => c.toUpperCase())
}

const desCamelCase = s => {
  let name = s.replace(/([A-Z])/g, ' $1')
  name = name.charAt(0).toUpperCase() + name.slice(1)
  return name.replace('F ', '').replace(/^\w/, c => c.toUpperCase())
}

const getWord = s => {
  if (typeof s !== 'string') return ''
  return explode(s)
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
