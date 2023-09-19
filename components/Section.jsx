import { Box, Container, Fab, Grid, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import Card from "./Card";
import FormModal from "./FormDialog";

const StyledContainer = styled(Box)(
  ({ mycolor, mybgcolor, myheight, mywidth }) => ({
    color: mycolor,
    background: mybgcolor,
    height: myheight,
    width: mywidth,
  })
);

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 20px 10px 0px",
});

const Section = (props) => {
  const [openForm, setopenForm] = useState(false);
  return (
    <>
      {props.category.slice(0, 10).map((category) => {
        return (
          <StyledContainer
            mybgcolor={`${(category.cat_id + 3) % 4 === 0 ? "black" : ""}`}
            mycolor={`${(category.cat_id + 3) % 4 === 0 ? "white" : "black"}`}
            key={category.cat_id}
            mywidth="100%"
          >
            <Container>
              <StyledBox>
                <Box flex={1}>
                  <Typography
                    sx={{
                      textTransform: "capitalize",
                      borderBottom: "2px solid white",
                      width: "fit-content",
                      fontWeight: "bold",
                    }}
                  >
                    {category.category_name}
                  </Typography>
                </Box>
                <Box>
                  <a href="/">See More</a>
                </Box>
              </StyledBox>
              <Grid container>
                {props.posts
                  .filter(
                    (post) => post.category_name === category.category_name
                  )
                  .slice(0, 3)
                  .map((post) => {
                    return (
                      <Grid sm={4}>
                        <Card
                          direction={"column"}
                          imgWidth={350}
                          imgHeight={300}
                          mycolor={"white"}
                          linkSrc={`posts/${post.slug}`}
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
          </StyledContainer>
        );
      })}
    </>
  );
};

export default Section;