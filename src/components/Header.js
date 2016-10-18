const h = require('react-hyperscript')
const React = require('react')

const Header = React.createClass({
  render: function () {
    return h('header', [
      h('h1.f3.dark-gray', this.props.title)
    ])
  }
})

module.exports = Header
