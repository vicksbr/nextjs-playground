import { useState, useEffect } from "react";
import useSWR from "swr";

export default function Home({ book }) {
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
      <img src={book.imageUrl} alt={book.title} width="250" />
      <h1>{book.title}</h1>
      <p>{book.description}</p>

      <button onClick={handleLowDB}>get Lowdb</button>
      <button onClick={handleAddPost}>Add post</button>
      <button onClick={() => setShouldFetch((prevState) => !prevState)}>
        Fetch {isStarted ? "OFF" : "ON"}{" "}
        {isValidating && " - FETCHING/VALIDATING"}
      </button>
      <br></br>
      <br></br>

      {initial && JSON.stringify(initial, null, 2)}
      {data && <pre>{JSON.stringify(data.posts, null, 2)}</pre>}
    </div>
  );
}

export async function getServerSideProps() {
  // Server-side requets are mocked by `mocks/server.js`.
  const res = await fetch("https://my.backend/book");
  const book = await res.json();

  return {
    props: {
      book,
    },
  };
}
