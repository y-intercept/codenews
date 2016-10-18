const h = require('react-hyperscript')
var items = [
  { id: 1,
    title: 'JavaScript Fatigue',
    link: 'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.qtciu77bd',
    score: 0
  }]

const Header = require('./components/Header.js')
const List = require('./components/List.js')
const Form = require('./components/Form.js')


module.exports = () => h('div.bg-mid-gray.pa4.vh-100', [
    Header(),
    h('main', [
      List(items),
      Form()
  ])
])
