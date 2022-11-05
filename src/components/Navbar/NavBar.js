import React, { useState } from "react";
import axios from "axios";
import "./NavBar.css"
const NavBar = () => {
  const [movieName, setMovieName] = useState("");
  

  const [movie, setMovie] = useState([]);

  const changeHandler = (event) => {
    setMovieName(event.target.value);
  };

  const getMovie = (e) => {
    e.preventDefault();
    axios
      .get(`https://fake-movie-database-api.herokuapp.com/api?s=${movieName}`)
      .then((res) => {
        console.log(res);
        setMovie(res.data.Search);
      });
      axios
      .get(`https://fake-movie-database-api.herokuapp.com/api?s=${movieName}`)
      .then((res) => {
        console.log(res);
        setMovie(res.data.Search);
      });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Favourits
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={getMovie}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search A Movie"
                aria-label="Search"
                value={movieName}
                onChange={changeHandler}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>


      <div className="container">
        <div className="row">
          {movie.map((value, index) => {
            return (
              <div className="col-3">
                <div className="card">
                  <img src={value.Poster} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.Title}</h5>
                    <h3 className="card-text">{value.Year}</h3>
                    <a href="/" className="btn btn-primary">
                      Add to favourite
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
