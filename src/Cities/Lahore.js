import React from "react";
import NavBar from "../nav-bar/NavBar";
import "./Lahore.css";
const Lahore = () => {
  return (
    <>
      <NavBar />
      {/* <!-- jumbotron and nav --> */}

      <section className="search-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="row my-3">
                <div className="col-sm-12 map-container-btn text-center">
                  <input
                    name="map"
                    id=""
                    className="btn btn-outline-secondary map-btn"
                    type="button"
                    value="map"
                  />
                </div>
              </div>
              <div className="row mt-2 justify-content-between">
                <div className="filter-card">
                  <h5>Filter</h5>
                  <form action="#">
                    <div className="row form-group">
                      <div className="col-md-12">
                        <label for="mintopay">Check in</label>
                        <p>
                          <input
                            type="date"
                            name="checkin"
                            id="checkin"
                            className="form-control"
                          />
                        </p>
                      </div>
                      <div className="col-md-12">
                        <label for="maxtopay">Check out</label>
                        <p>
                          <input
                            type="date"
                            name="checkout"
                            id="checkout"
                            className="form-control"
                          />
                        </p>
                      </div>
                    </div>
                    <div className="row form-group">
                      <div className="col-md-12">
                        <label for="date-start">Price Range</label>: £
                        <span id="price" className="price">
                          1000
                        </span>
                        <input
                          type="range"
                          min="23"
                          max="1000"
                          value="1000"
                          className="slider"
                          id="myRange"
                        />
                        {/* </p> */}
                      </div>
                    </div>
                    <div className="row form-group">
                      <div className="col-md-12">
                        <input
                          type="submit"
                          className="btn btn-primary btn-block"
                          value="Limit"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-9  px-4">
              <div className="row mt-3">
                <div className="col-md-6 align-self-center">
                  <p className="m-0">
                    <b>123</b> out of 1987
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="form-inline">
                    <label className="m-4" for="exampleFormControlSelect1">
                      Sort by
                    </label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>Recommended</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row search-card-result">
                <div className="col-md-3">
                  <img
                    className="img-fluid"
                    src="http://placeimg.com/640/640/arch"
                    alt="Card image cap"
                  />
                </div>
                <div className="col-md-5">
                  <h5>Choose The Best Plan For You</h5>
                  <div className="review">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <p>
                    Join over 1 Million of users. Dignissimos asperiores vitae
                    velit veniam
                  </p>
                  <p>
                    <span className="badge badge-primary">8.5</span> Excellent
                    (2323 reviews)
                  </p>
                  <p>
                    <i className="fa fa-bath"></i>
                    <i className="fa fa-phone"></i>
                    <i className="fa fa-wifi"></i>
                    <i className="fa fa-tv"></i>
                  </p>
                </div>
                <div className="col-md-2 border-left text-center more-offers">
                  <p>place.com</p>
                  <p>
                    <s>£123</s>
                  </p>
                  <p>Place.com</p>
                  <p>£65</p>
                  <p className="border-top additional">More Deals from £65</p>
                </div>
                <div className="col-md-2 border-left text-center more-offers">
                  <h4>
                    <span className="badge badge-success">Top Deal</span>
                  </h4>
                  <div className="text-warning">
                    <p>place.com</p>
                    <p>
                      <s>£123</s>
                    </p>
                  </div>
                  <div className="text-success">
                    <p>Place.com</p>
                    <h5>£65</h5>
                  </div>

                  <div className="btn btn-success">View deal </div>
                </div>
              </div>
              <div className="row search-card-result">
                <div className="col-md-3">
                  <img
                    className="img-fluid"
                    src="http://placeimg.com/640/640/arch"
                    alt="Card image cap"
                  />
                </div>
                <div className="col-md-5">
                  <h5>Choose The Best Plan For You</h5>
                  <div className="review">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <p>
                    Join over 1 Million of users. Dignissimos asperiores vitae
                    velit veniam
                  </p>
                  <p>
                    <span className="badge badge-primary">8.5</span> Excellent
                    (2323 reviews)
                  </p>
                  <p>
                    <i className="fa fa-bath"></i>
                    <i className="fa fa-phone"></i>
                    <i className="fa fa-wifi"></i>
                    <i className="fa fa-tv"></i>
                  </p>
                </div>
                <div className="col-md-2 border-left text-center more-offers">
                  <p>place.com</p>
                  <p>
                    <s>£123</s>
                  </p>
                  <p>Place.com</p>
                  <p>£65</p>
                  <p className="border-top additional">More Deals from £65</p>
                </div>
                <div className="col-md-2 border-left text-center more-offers">
                  <h4>
                    <span className="badge badge-success">Top Deal</span>
                  </h4>
                  <div className="text-warning">
                    <p>place.com</p>
                    <p>
                      <s>£123</s>
                    </p>
                  </div>
                  <div className="text-success">
                    <p>Place.com</p>
                    <h5>£65</h5>
                  </div>

                  <div className="btn btn-success">View deal </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <div className="row justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* <!-- Subscribe Panel --> */}
      <section id="subscribe-panel">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h2>Subscribe</h2>
              <p>To be sent our latest deals.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form className="form-inline justify-content-center">
                <div className="form-group mb-2 col-md-6 col-sm-6">
                  <label for="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <button type="submit" className="btn btn-primary mb-2">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="pt-3" id="main-footer" role="contentinfo">
        <div className="container pb-4">
          <div className="row border-bottom my-3 py-3">
            <div className="col-md-6">
              <address className="">
                Hotel Spoof U.S.A, 699 Mount Street, Munger, 48747 Michigan,
                United States
              </address>
            </div>
            <div className="col-md-6">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <img src="images/flags/US.png" /> English(US)
                    <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">
                        <img src="images/flags/DE.png" /> Deutsch
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/flags/GB.png" /> English(UK)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/flags/FR.png" /> Français
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/flags/RO.png" /> Română
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/flags/IT.png" /> Italiano
                      </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#">
                        <img src="images/flags/ES.png" /> Español
                        <span className="label label-default">soon</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/flags/BR.png" /> Português
                        <span className="label label-default">soon</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/flags/JP.png" /> 日本語
                        <span className="label label-default">soon</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/flags/TR.png" /> Türkçe
                        <span className="label label-default">soon</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h5>A Little About Us</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eos molestias quod sint ipsum possimus temporibus officia iste
                perspiciatis consectetur in fugiat repudiandae cum. Totam
                cupiditate nostrum ut neque ab?
              </p>
            </div>
            <div className="col-md-6">
              <h5>More Top Cities & Countries</h5>
              <div className="row">
                <div className="col-md-6">
                  <form>
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Top Cities</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <form>
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Countries</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i href="#" className="fa fa-google"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i href="#" className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i href="#" className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i href="#" className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i href="#" className="fa fa-snapchat-ghost"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="container">
                  <div className="col-sm-12 p-0">
                    <h5 className="border-bottom pb-3">More information</h5>
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-sm-4 col-md-4">
                      <ul className="nav flex-column footer-nav">
                        <li className="nav-item">
                          <a href="#">Terms and Conditions</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Legal Information</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Site Map</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Cookie policy</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-3">
                      <ul className="nav flex-column footer-nav">
                        <li className="nav-item">
                          <a href="#">Company</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Careers</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Press</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Investors</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Dubai</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-4 col-md-3">
                      <ul className="nav flex-column footer-nav">
                        <li className="nav-item">
                          <a href="#">Android App</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">IOS APP</a>
                        </li>
                        <li className="nav-item">
                          <a href="#">Window Store</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright border-top pb-4">
          <div className="">
            <h3 className="text-center">Spoof Hotels</h3>
            <p className="text-center">
              <small className="block">
                Copyright 2018 Spoof Hotels&copy; | All rights reserved.{" "}
              </small>
              <small className="block">
                Designed by
                <a href="#" target="_blank">
                  UndreamtMayhem
                </a>{" "}
                | Demo Images:
                <a href="#" target="_blank">
                  UndreamtMayhem
                </a>
              </small>
            </p>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i href="#" className="fa fa-google"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i href="#" className="fa fa-youtube"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i href="#" className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i href="#" className="fa fa-pinterest"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i href="#" className="fa fa-snapchat-ghost"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Lahore;
