import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class SignIn extends Component {
  componentWillMount() {
    document.getElementById("body").className = "bg-gradient-danger";
  }

  handleSignIn = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div className="center-vertical">
        <div className="container">
          {/* <!-- Outer Row --> */}
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  {/* <!-- Nested Row within Card Body --> */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">
                            Administrator
                          </h1>
                        </div>
                        <form onSubmit={this.handleSignIn} className="user">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Masukkan email"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="Masukkan password"
                            />
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck"
                              />
                              <label
                                className="custom-control-label"
                                for="customCheck"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-danger btn-user btn-block"
                          >
                            Login
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
