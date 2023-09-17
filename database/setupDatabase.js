const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function openDb() {
  return sqlite.open({
    filename: "./blog.db",
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();
  await db.migrate({
    migrationsPath: "./database",
    force: "last",
  });

  const category = await db.all("SELECT * FROM category");
  const post = await db.all("SELECT * FROM post");
  console.log("all category", JSON.stringify(category, null, 2));
  console.log("all posts", JSON.stringify(post, null, 2));
}

setup();