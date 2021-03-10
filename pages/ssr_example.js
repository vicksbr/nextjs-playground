import React from "react";

const SsrExamplePage = ({ book }) => {
  return (
    <div>
      <img src={book.imageUrl} alt={book.title} width="250" />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
};

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

export default SsrExamplePage;
