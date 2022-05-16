import "./App.css";
import React, { useState, Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PayuHome from "./payUIntegration/PayuHome";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <header className="App-header">
//             <p>Reactjs Demo List</p>
//           </header>
//           <div className="container mw-100 mt-3">
//             <ol className="list-group list-group-numbered">
//               {/* <li id="payu" href="#" className="list-group-item" onClick={goTo}>PayU Integration</li> */}
//               <Link to="/" className="list-group-item">Home</Link>
//             </ol>
//           </div>

//           <Routes>
//             <Route exact path='/' element={<PayuHome />}></Route>
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: "",
    };
  }

  goTo = (where, e) => {
    if (where === "back") {
      this.setState({ navigate: "" });
      return;
    }
    this.setState({ navigate: where });
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <button type="button" className="btn btn-primary" style={{ marginLeft: 10 }} onClick={this.goTo.bind(this, "back")}>Back</button>
          <p className="w-100 text-center">Reactjs Demo List</p>
        </header>

        {this.state.navigate === "" && (
          <div className="App">
            <div className="container mw-100 mt-3">
              <ol className="list-group list-group-numbered">
                <li
                  className="list-group-item"
                  onClick={this.goTo.bind(this, "payU")}
                >
                  PayU Integration
                </li>
              </ol>
            </div>
          </div>
        )}

        {this.state.navigate === "payU" ? <PayuHome /> : null}
      </div>
    );
  }
}

export default App;
