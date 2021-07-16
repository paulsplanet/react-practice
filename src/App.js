import React, { Component } from "react";
import ScrollBox from "./ScrollBox";





// <MyComponent name={"Luna"} favoriteNumber={7}>React</MyComponent> = comopenet practice

class App extends Component {
  render() {
      return (
        <div>
          <ScrollBox ref={(ref) => (this.scrollBox=ref)}></ScrollBox>
          <button onClick={() => this.scrollBox.scrollToBottom()}>To Bottom</button>
        </div> 
      )
  }
  
}

export default App;
