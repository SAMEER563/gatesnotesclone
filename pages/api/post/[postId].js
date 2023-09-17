import openDb from "../../../helpers/sqliteDatabase";
import slugify from "slugify";

export default async function getPosts(req, res) {
  const db = await openDb();

  if (req.method === "GET") {
    const postById = await db.get("Select * FROM post where slug = ?", [
      req.query.postId,
    ]);
    res.json(postById);
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
        req.query.postId
      );
      await response.finalize();
    } catch (error) {
      res.json(error, "no post data is updated");
    }
  } else if (req.method === "DELETE") {
    await db.get("DELETE FROM post where post_id = ?", [req.query.postId]);
    res.json("deleted successfuly");
  } else {
    res.json("method not suported");
  }
}