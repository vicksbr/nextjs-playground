const low = require("lowdb");
import Memory from "lowdb/adapters/Memory";

console.log(process.env.NODE_ENV);

export const db = low(
  process.env.NODE_ENV === "development" ? new Memory() : new Memory()
);

db.defaults({ posts: [] }).write();
db.get("posts").push({ title: "lowdb" }).write();
