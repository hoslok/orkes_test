import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

function Index(){
    return (
      <div>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </div>
    );
}

ReactDOM.render(<Index />, document.getElementById(`root`))