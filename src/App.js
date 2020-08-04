import React from "react";
import "./App.css";
import { requests } from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Banner fetchUrl={requests.netflix_original} />
      <Row
        title="NETFLIX-ORIGINALS"
        fetchUrl={requests.netflix_original}
        isLargeRow
      />
      <Row title="TOP-RATED" fetchUrl={requests.top_rated} />
      <Row title="TRANDING" fetchUrl={requests.tranding} />
      <Row title="ROMANCE" fetchUrl={requests.romance_movies} />
      <Row title="ACTION" fetchUrl={requests.action_movies} />
      <Row title="HORROR" fetchUrl={requests.horror_movies} />
      {/* <Row title="DOCUMENTARIES" fetchUrl={requests.documentaries} /> */}
    </div>
  );
};

export default App;
