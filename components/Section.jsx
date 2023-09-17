import { Box, Container, Fab, Grid, Typography, styled } from "@mui/material";
import React from "react";
import Card from "./Card";

const StyleContainer = styled(Box)(
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

const Section = () => {
  return (
    <>
      <StyleContainer
        mybgcolor={"black"}
        mycolor={"white"}
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
                Category Name
              </Typography>
            </Box>
            <Box>
              <a href="/">See More</a>
            </Box>
          </StyledBox>
          <Grid container>
            <Grid sm={4}>
              <Card
                direction={"column"}
                imgWidth={350}
                imgHeight={300}
                myColor={"white"}
                linkSrc="/"
                imgSrc="https://cdn.pixabay.com/photo/2023/05/11/03/34/baseball-7985433_640.jpg"
                title={
                  "The Unlimited NEXTJS13 Course with MUI5 by Cloning GatesNotes Blog"
                }
                Desc={
                  "Complete NEXT API and CRUD with Respopnsive MUI5 Blog Codingstrade Coding"
                }
                EditButton={
                  <Fab
                    size="small"
                    variant="extended"
                    color="success"
                    aria-label="edit"
                  >
                    Edit
                  </Fab>
                }
              />
            </Grid>
            <Grid sm={4}>
              <Card
                direction={"column"}
                imgWidth={350}
                imgHeight={300}
                myColor={"white"}
                linkSrc="/"
                imgSrc="https://cdn.pixabay.com/photo/2023/07/19/04/44/mountains-8136054_640.jpg"
                title={
                  "The Unlimited NEXTJS13 Course with MUI5 by Cloning GatesNotes Blog"
                }
                Desc={
                  "Complete NEXT API and CRUD with Respopnsive MUI5 Blog Codingstrade Coding"
                }
                EditButton={
                  <Fab
                    size="small"
                    variant="extended"
                    color="success"
                    aria-label="edit"
                  >
                    Edit
                  </Fab>
                }
                Button = 'Button'
                ButtonText = 'Read More'
              />
            </Grid>
            <Grid sm={4}>
              <Card
                direction={"column"}
                imgWidth={350}
                imgHeight={300}
                myColor={"white"}
                linkSrc="/"
                imgSrc="https://cdn.pixabay.com/photo/2023/05/01/14/26/bee-7963186_640.jpg"
                title={
                  "The Unlimited NEXTJS13 Course with MUI5 by Cloning GatesNotes Blog"
                }
                Desc={
                  "Complete NEXT API and CRUD with Respopnsive MUI5 Blog Codingstrade Coding"
                }
                EditButton={
                  <Fab
                    size="small"
                    variant="extended"
                    color="success"
                    aria-label="edit"
                  >
                    Edit
                  </Fab>
                }
              />
            </Grid>
          </Grid>
        </Container>
      </StyleContainer>

      <StyleContainer
        mybgcolor={"white"}
        mycolor={"black"}
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
                Category Name
              </Typography>
            </Box>
            <Box>
              <a href="/">See More</a>
            </Box>
          </StyledBox>
          <Grid container>
            <Grid sm={4}>
              <Card
                direction={"column"}
                imgWidth={350}
                imgHeight={300}
                myColor={"white"}
                linkSrc="/"
                imgSrc="https://cdn.pixabay.com/photo/2023/05/11/03/34/baseball-7985433_640.jpg"
                title={
                  "The Unlimited NEXTJS13 Course with MUI5 by Cloning GatesNotes Blog"
                }
                Desc={
                  "Complete NEXT API and CRUD with Respopnsive MUI5 Blog Codingstrade Coding"
                }
                EditButton={
                  <Fab
                    size="small"
                    variant="extended"
                    color="success"
                    aria-label="edit"
                  >
                    Edit
                  </Fab>
                }
              />
            </Grid>
            <Grid sm={4}>
              <Card
                direction={"column"}
                imgWidth={350}
                imgHeight={300}
                myColor={"white"}
                linkSrc="/"
                imgSrc="https://cdn.pixabay.com/photo/2023/07/19/04/44/mountains-8136054_640.jpg"
                title={
                  "The Unlimited NEXTJS13 Course with MUI5 by Cloning GatesNotes Blog"
                }
                Desc={
                  "Complete NEXT API and CRUD with Respopnsive MUI5 Blog Codingstrade Coding"
                }
                EditButton={
                  <Fab
                    size="small"
                    variant="extended"
                    color="success"
                    aria-label="edit"
                  >
                    Edit
                  </Fab>
                }
                Button = 'Button'
                ButtonText = 'Read More'
              />
            </Grid>
            <Grid sm={4}>
              <Card
                direction={"column"}
                imgWidth={350}
                imgHeight={300}
                myColor={"white"}
                linkSrc="/"
                imgSrc="https://cdn.pixabay.com/photo/2023/05/01/14/26/bee-7963186_640.jpg"
                title={
                  "The Unlimited NEXTJS13 Course with MUI5 by Cloning GatesNotes Blog"
                }
                Desc={
                  "Complete NEXT API and CRUD with Respopnsive MUI5 Blog Codingstrade Coding"
                }
                EditButton={
                  <Fab
                    size="small"
                    variant="extended"
                    color="success"
                    aria-label="edit"
                  >
                    Edit
                  </Fab>
                }
              />
            </Grid>
          </Grid>
        </Container>
      </StyleContainer>
    </>
  );
};

export default Section;
