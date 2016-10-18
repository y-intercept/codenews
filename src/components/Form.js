const h = require('react-hyperscript')

module.exports = items => h('section.form', [
  h('form', [
    h('div.pb2', [
      h('label.mr1', 'Title'),
      h('input')
    ]),
    h('div.pb2', [
      h('label.mr1', 'Link'),
      h('input')
    ]),
    h('div', [
      h('button', 'Add News')
    ])
  ])
])
