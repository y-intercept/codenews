const h = require('react-hyperscript')
const React = require('react')

module.exports = React.createClass({
  getInitialState: _ => ({
    score: 1,
    title: '',
    link: ''
  }),
  setTitle: function (e) {
    this.setState({
      title: e.target.value,
    })
  },
  setLink: function (e) {
    this.setState({
      link: e.target.value
    })
  },
  submit: function (e) {
    e.preventDefault()
    this.props.addNewsItem(this.state)
    this.setState({
      score: 1,
      title: '',
      link: ''
    })
  },
    render: function () {
      return (
        h('section.form', [
          h('form', { onSubmit: this.submit }, [
            h('div.pb2', [
              h('label.mr1', 'Title'),
              h('input', {
                onChange: this.setTitle,
                value: this.state.title
                })
            ]),
            h('div.pb2', [
              h('label.mr1', 'Link'),
              h('input', {
                onChange: this.setLink,
                value: this.state.link })
            ]),
            h('div', [
              h('button', 'Add News')
            ])
          ])
        ])
      )
    }
  })
