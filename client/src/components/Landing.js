import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  //sketchy check
  componentDidMount() {
    if (localStorage.jwtToken) {
      this.props.history.push('/collections');
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row center">
          <h1>Debt Collector</h1>
        </div>
        <div className="row center">
          <div className="col s12 m6 offset-m3 landing_actions">
            <div className="row ">
              <div className="col s12 center">
                <Link to="/create">
                  <button className="waves-effect waves-light btn btn-large btn-landing">
                    Create
                  </button>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col s12 center">
                <Link to="/login">
                  <button className="waves-effect waves-light btn btn-large btn-landing">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
