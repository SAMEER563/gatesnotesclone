import openDb from "../../../helpers/sqliteDatabase";
const sqlite3 = require("sqlite3");

export default async function getCategories(req, res) {
  const db = await openDb();
  if (req.method === "GET") {
    const allCategories = await db.all("Select * FROM category");
    res.json(allCategories);
  } else if (req.method === "POST") {
    const createCategory = await db.prepare(
      "INSERT INTO category ('category_name') VALUES(?)"
    );
    try {
      const response = await createCategory.run(req.body.category_name);
      await response.finalize();
    } catch (error) {
      res.json(error, "no data is inserted");
    }
  } else if (req.method === "PUT") {
    const updateCategory = await db.prepare(
      "UPDATE category set category_name = ? where cat_id = ?"
    );
    try {
      const response = await updateCategory.run(
        req.body.category_name,
        req.body.cat_id
      );
      await response.finalize();
    } catch (error) {
      res.json(error, "no data is updated");
    }
  } else if (req.method === "DELETE") {
    const deleteCategory = await db.prepare(
      "DELETE FROM category where cat_id = ?"
    );
    try {
      const response = await deleteCategory.run(req.body.cat_id);
      await response.finalize();
    } catch (error) {
      res.json(error, "no data is deleted");
    }
  } else {
    res.json("no data found");
  }
}