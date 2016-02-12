import React from 'react'

class Game extends React.Component {
  componentWillMount() {
    this.setToken(this.props)
  }
  componentWillReceiveProps(nextProps) {
    this.setToken(nextProps)
  }
  setToken(props) {
    this.setState({
      token: props.params.token.toUpperCase()
    })
  }
  render() {
    return (
      <div>
        You are <span>{this.state.token}</span>
      </div>
    )
  }
}

export default Game
