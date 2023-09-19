import React from "react";
import { useRouter } from "next/router";
import { Box, Container, styled, Typography } from "@mui/material";
import Image from "next/image";
const FlexContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContents: "center",
  alignItems: "center",
});

const Details = ({ post }) => {
  return (
    <Container>
      <FlexContainer>
        <Box sx={{ width: "80%", alignContent: "center" }}>
          <Typography textAlign={"center"} variant="h3" m={3}>
            {post.title}
          </Typography>
        </Box>
        <Box sx={{ width: "70%", alignContent: "center" }}>
          <Typography textAlign={"center"} variant="body" m={3}>
            {post.excerpt}
          </Typography>
        </Box>
        <Typography textAlign={"center"} variant="body" m={3}>
          By <b>{post.author}</b> | January 31, 2023 4 minute read
        </Typography>
        <FlexContainer>
          <Image src={post.imageUrl} height={600} width={800} />
        </FlexContainer>
        <FlexContainer sx={{ width: "90vh" }}>
          <Typography textAlign={"center"} mt={2} variant="body1">
            {post.content}
          </Typography>
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
};

export default Details;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/post");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/post/${params.slug}`);
  const post = await res.json();

  return { props: { post } };
}