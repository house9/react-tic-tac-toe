import React from 'react'

class Game extends React.Component {
  componentWillMount() {
    this._setToken(this.props)
  }
  componentWillReceiveProps(nextProps) {
    this._setToken(nextProps)
  }
  render() {
    return (
      <div>
        You are <span>{this.state.token}</span>
      </div>
    )
  }
  _setToken(props) {
    this.setState({
      token: props.params.token.toUpperCase()
    })
  }
}

export default Game
