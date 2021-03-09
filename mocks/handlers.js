import { rest } from "msw";
import { db } from "../db/db";

export const handlers = [
  rest.get("https://my.backend/book", (req, res, ctx) => {
    return res(
      ctx.json({
        title: "Lord of the Rings",
        imageUrl: "/book-cover.jpg",
        description:
          "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
      })
    );
  }),

  rest.get("/initial", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          status: "initial",
        },
      ])
    );
  }),
  rest.get("/lowdb", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          response: "test",
        },
      ])
    );
  }),
  rest.get("/addpost", (req, res, ctx) => {
    db.get("posts")
      .push({ title: `${Math.random()}_post` })
      .write();
    return res(
      ctx.json([
        {
          response: "test",
        },
      ])
    );
  }),

  rest.get("/swrtest", (req, res, ctx) => {
    const posts = db.get("posts").value();
    return res(
      ctx.delay(750),
      ctx.status(200),
      ctx.json({
        posts,
      })
    );
  }),
];
