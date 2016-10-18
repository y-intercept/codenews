const h = require('react-hyperscript') //
const React = require('react')

const ListItem = React.createClass({  //List object
  getInitialState: function () { // sets the initial state to the score in the 'items' object
    return { score: this.props.item.score }  // key value score in items object. 'this' links to object
  },
  onUp: function (event) { //named onClick event
    this.props.item.score = this.props.item.score + 1  // changes score by plus 1
    this.props.onScoreChange(this.props.item) // calls
    //console.log(this.props.item.score)
  },
  onDown: function (event) {
    if (this.props.item.score === 0) return
    this.props.item.score = this.props.item.score - 1
    this.props.onScoreChange(this.props.item)
    //console.log(this.props.item.score)
  },
  render: function () {
    const item = this.props.item
    return h('li', [
      h('a.link.light-green', { href: item.link}, item.title),
      h('button.pl2', { onClick: this.onUp }, 'Up'),
      h('button.pl2', { onClick: this.onDown }, 'Down'),
      h('span.pl2', item.score)
    ])
  }
})

module.exports = ListItem
