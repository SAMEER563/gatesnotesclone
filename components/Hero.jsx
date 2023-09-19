import { Container, Fab, Grid } from "@mui/material";
import React, { useState } from "react";
import Card from "./Card";
import FormModal from "./FormDialog";
const Hero = (props) => {
  const [openForm, setopenForm] = useState(false);
  return (
    <Container>
      <Grid container>
        {props.posts
          .filter((post) => post.featured === 1)
          .slice(0, 5)
          .map((post, i) => {
            return i === 0 ? (
              <Grid item xs={12} mb={2} mt={2}>
                <Card
                  direction={"row"}
                  imgWidth={566}
                  imgHeight={400}
                  mycolor={"black"}
                  linkSrc={`posts/${post.slug}`}
                  fontSize={"40px"}
                  imgSrc={post.imageUrl}
                  heading={"Example"}
                  title={post.title}
                  Desc={post.excerpt}
                  author={"By" + post.author + "|" + "Jan 09, 2023"}
                  EditButton={
                    <Fab
                      size="small"
                      variant="extended"
                      color="success"
                      aria-label="edit"
                      onClick={() => setopenForm(post.post_id)}
                    >
                      Edit
                    </Fab>
                  }
                />
                <FormModal
                  key={post.post_id}
                  open={openForm === post.post_id ? true : false}
                  handleClose={() => setopenForm(false)}
                  posts={{
                    post_id: post.post_id,
                    title: post.title,
                    imageUrl: post.imageUrl,
                    excerpt: post.excerpt,
                    content: post.content,
                    author: post.author,
                    featured: post.featured,
                    category_name: post.category_name,
                  }}
                />
              </Grid>
            ) : (
              <Grid item md={3} spacing={1}>
                <Card
                  direction={"column"}
                  imgWidth={280}
                  imgHeight={220}
                  mycolor={"black"}
                  linkSrc={`posts/${post.slug}`}
                  fontSize={"18px"}
                  imgSrc={post.imageUrl}
                  title={post.title}
                  Desc={post.excerpt}
                  EditButton={
                    <Fab
                      size="small"
                      variant="extended"
                      color="success"
                      aria-label="edit"
                      onClick={() => setopenForm(post.post_id)}
                    >
                      Edit
                    </Fab>
                  }
                />
                <FormModal
                  key={post.post_id}
                  open={openForm === post.post_id ? true : false}
                  handleClose={() => setopenForm(false)}
                  posts={{
                    post_id: post.post_id,
                    title: post.title,
                    imageUrl: post.imageUrl,
                    excerpt: post.excerpt,
                    content: post.content,
                    author: post.author,
                    featured: post.featured,
                    category_name: post.category_name,
                  }}
                />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Hero;