import openDb from "../../../helpers/sqliteDatabase";
import slugify from "slugify";
export default async function getPosts(req, res) {
  const db = await openDb();
  if (req.method === "GET") {
    const allPosts = await db.all(
      "Select * FROM post ORDER BY created_at desc"
    );
    res.json(allPosts);
  } else if (req.method === "POST") {
    const createPost = await db.prepare(
      "INSERT INTO post (title,slug,imageUrl,excerpt,content,author,featured,category_name) VALUES(?,?,?,?,?,?,?,?)"
    );
    try {
      const response = await createPost.run(
        req.body.title,
        (req.body.slug = slugify(req.body.title)),
        req.body.imageUrl,
        req.body.excerpt,
        req.body.content,
        req.body.author,
        req.body.featured,
        req.body.category_name
      );
      await response.finalize();
    } catch (error) {
      res.json(error, "no post data is inserted");
    }
  } else if (req.method === "PUT") {
    const updatePost = await db.prepare(
      "UPDATE post set title = ?,slug = ?,imageUrl = ?,excerpt = ?,content = ?,author = ?,featured = ? ,category_name = ? where post_id = ?"
    );
    try {
      const response = await updatePost.run(
        req.body.title,
        (req.body.slug = slugify(req.body.title)),
        req.body.imageUrl,
        req.body.excerpt,
        req.body.content,
        req.body.author,
        req.body.featured,
        req.body.category_name,
        req.body.post_id
      );
      await response.finalize();
    } catch (error) {
      res.json(error, "no post data is updated");
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