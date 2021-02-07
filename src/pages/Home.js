import React, { useEffect } from "react";
//Redux
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div>
      <h1>Hello Jeremy</h1>
    </div>
  );
};

export default Home;
