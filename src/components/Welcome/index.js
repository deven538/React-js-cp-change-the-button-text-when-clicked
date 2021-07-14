// Write your code here
import {Component} from 'react'
import './index.css'

class App extends Component {
  state = {isClicked: false, text: 'Subscribe'}

  subscribed = () => {
    this.setState(prev => {
      if (prev.isClicked === false) {
        return {isClicked: true, text: 'Subscribed'}
      }
      return {isClicked: false, text: 'Subscribe'}
    })
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <div className="button-div">
          <button className="button" type="button" onClick={this.subscribed}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default App
