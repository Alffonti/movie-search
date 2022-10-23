import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchMovies from "./searchMovies";
import "./style.css"

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search App</h1>
        <SearchMovies/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
)
