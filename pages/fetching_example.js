import React, { useState, useEffect } from "react";
import useSWR from "swr";

import Form from "../src/Form";
import BreakLine from "../src/BreakLine";

const useFetch = () => {
  return;
  //Todo
};

const FetchingExamplePage = () => {
  const [initial, setInitial] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false);

  const handleLowDB = () => {
    fetch("/lowdb")
      .then((res) => res.json())
      .then((response) => console.log(response));
  };

  const handleAddPost = () => {
    fetch("/addpost")
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  useEffect(() => {
    fetch("/initial")
      .then((res) => res.json())
      .then((response) => setInitial(response));
  }, []);

  const { data, isValidating } = useSWR(shouldFetch ? "/swrtest" : null);

  const isStarted = !data && !isValidating;

  return (
    <div>
      <button onClick={handleLowDB}>get Lowdb</button>
      <button onClick={handleAddPost}>Add post</button>
      <button onClick={() => setShouldFetch((prevState) => !prevState)}>
        Fetch {isStarted ? "OFF" : "ON"}{" "}
        {isValidating && " - FETCHING/VALIDATING"}
      </button>
      <BreakLine number={3} />
      <Form />
      <BreakLine number={3} />
      {initial && JSON.stringify(initial, null, 2)}
      {data && <pre>{JSON.stringify(data.posts, null, 2)}</pre>}
      <BreakLine number={3} />
    </div>
  );
};

export default FetchingExamplePage;
