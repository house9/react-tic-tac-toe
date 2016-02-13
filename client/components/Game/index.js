import React, { PropTypes } from 'react'

export default class Game extends React.Component {
  static propTypes = {
    gameOver: PropTypes.func.isRequired
  };
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
    const { gameOver } = this.props

    return (
      <div>
        <div>
          You are <span>{this.state.token}</span>
        </div>
        <div>
          <button onClick={ () => gameOver('X') }>X</button>
          <button onClick={ () => gameOver('O') }>O</button>
          <button onClick={ () => gameOver('CAT') }>CAT</button>
        </div>
      </div>
    )
  }
}
