import React from "react";
import Link from "next/link";
import BreakLine from "../src/BreakLine";

const Home = () => {
  return (
    <div>
      <Link href="/form_example">/form example</Link>
      <BreakLine number={2} />
      <Link href="/ssr_example">/ssr example</Link>
      <BreakLine number={2} />
      <Link href="/fetching_example">/fetching example</Link>
      <BreakLine number={2} />
      <Link href="/render_example">/render_example</Link>
    </div>
  );
};

export default Home;
