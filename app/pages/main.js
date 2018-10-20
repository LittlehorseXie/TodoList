let React = require('react');
let ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
  render() {
    return (
        <div className="row">
            <div className="col s6 offset-s3">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Hello</span>
                  <p>NW.js + Gulp + Webpack + React + Materialize</p>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));