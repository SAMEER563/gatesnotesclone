import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import {
  Alert,
  Box,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export default function FormModal(props) {
  const router = useRouter();
  const [openSnack, setOpenSnack] = useState(false);
  const [message, setMessage] = useState("");
  const [values, setValues] = useState(
    props.posts
      ? {
          title: props.posts.title,
          imageUrl: props.posts.imageUrl,
          excerpt: props.posts.excerpt,
          content: props.posts.content,
          author: props.posts.author,
          featured: props.posts.featured,
          category_name: props.posts.category_name,
        }
      : {
          title: "",
          imageUrl: "",
          excerpt: "",
          content: "",
          author: "",
          featured: 0,
          category_name: "",
        }
  );

  // create and update posts
  const postData = async () => {
    const res = `${
      props.posts
        ? await axios
            .put(
              `http://localhost:3000/api/post/${props.posts.post_id}`,
              values
            )
            .then(setMessage("post updated successfuly"))
        : await axios
            .post("http://localhost:3000/api/post", values)
            .then(setMessage("post created successfuly"))
    }`;
    const postData = await res.data;
    return () => {
      postData;
      router.push("/");
    };
  };

  //## Delete Posts
  const deletePost = async () => {
    const res = `${await axios.delete(
      `http://localhost:3000/api/post/${props.posts.post_id}`
    )}`;
    const postData = await res.data;
    return () => {
      postData;
      router.push("/");
    };
  };

  const handleDelete = (e) => {
    e.preventDefault(), deletePost();
    setMessage("post deleted!");
    router.push("/");
    setOpenSnack(true);
  };
  // saves Data and redirect to hompage
  const handleSubmit = (e) => {
    e.preventDefault(), postData(values);
    router.push("/");
    setOpenSnack(true);
  };

  const handleChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // fetch all categories
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/category");
        setCats(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnack}
        autoHideDuration={2000}
        onClose={() => setOpenSnack(!openSnack)}
      >
        <Alert
          onClose={() => setOpenSnack(!openSnack)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          {props.posts ? (
            <DialogTitle> Update Post </DialogTitle>
          ) : (
            <DialogTitle> Create Post </DialogTitle>
          )}
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                onChange={handleChange}
                value={values.title}
                name="title"
                required
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                fullWidth
                variant="outlined"
              />
              <TextField
                name="imageUrl"
                onChange={handleChange}
                value={values.imageUrl}
                required
                autoFocus
                margin="dense"
                id="imageUrl"
                label="ImageUrl"
                fullWidth
                variant="outlined"
              />
              <TextField
                name="excerpt"
                onChange={handleChange}
                value={values.excerpt}
                required
                autoFocus
                margin="dense"
                id="excerpt"
                label="Excerpt"
                fullWidth
                variant="outlined"
              />
              <TextField
                onChange={handleChange}
                name="content"
                value={values.content}
                required
                autoFocus
                margin="dense"
                id="content"
                label="Content"
                multiline
                rows={2}
                fullWidth
                variant="outlined"
              />

              <Box sx={{ display: "flex", alignItems: "center", margin: 2 }}>
                <InputLabel>Featured</InputLabel>
                <Checkbox
                  name="featured"
                  onChange={(e) =>
                    setValues((prevState) => ({
                      ...prevState,
                      featured: e.target.checked ? 1 : 0,
                    }))
                  }
                  value={values.featured}
                  checked={values.featured}
                />
              </Box>
              <InputLabel>Choose Category</InputLabel>
              <Select
                fullWidth
                id="category"
                label="category"
                value={values.category_name}
                onChange={(e) =>
                  setValues((prevState) => ({
                    ...prevState,
                    category_name: e.target.value,
                  }))
                }
              >
                {cats.map((cat) => (
                  <MenuItem key={cat.cat_id} value={cat.category_name}>
                    {cat.category_name}
                  </MenuItem>
                ))}
              </Select>
              <DialogActions>
                <Button
                  type="submit"
                  variant="contained"
                  color={props.posts ? "success" : "primary"}
                >
                  {props.posts ? "Update" : "Create"}
                </Button>
                <Button
                  onClick={handleDelete}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </DialogActions>
            </DialogContent>
          </form>
        </div>
      </Dialog>
    </div>
  );
}