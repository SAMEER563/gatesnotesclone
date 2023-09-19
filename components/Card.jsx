import React from "react";
import { Box, Stack, Typography, styled } from "@mui/material";
import Link from "next/link";
import Image from "next/legacy/image";

const TextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const StyledButton = styled(Box)({
  border: "1px solid white",
  width: "120px",
  padding: 1,
  cursor: "pointer",
  textAlign: "center",
});
const StyledLink = styled(Box)(({ fontSize, mycolor }) => ({
  fontSize: fontSize,
  fontFamily: "source-serif-pro, Source Serif Pro",
  fontWeight: "bold",
  color: mycolor ? mycolor : "",
  cursor: "pointer",
  lineHeight: 1,
  ":hover": {
    textDecoration: "underline",
  },
}));
const Card = (props) => {
  return (
    <Stack sx={{ cursor: "pointer" }} direction={props.direction}>
      <Box>
        <Box sx={{ marginBottom: -4.5 }}>{props.EditButton}</Box>
        <Link href={props.linkSrc}>
          <Box
            height={props.imgHeight}
            width={props.imgWidth}
            sx={{ position: "relative" }}
          >
            <Image
              component="img"
              src={props.imgSrc}
              alt="Picture of the Post"
              layout="fill"
            />
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextContainer>
          <Typography
            variant="h7"
            sx={{
              borderBottom: "2px solid",
              fontWeight: 900,
              textTransform: "uppercase",
              width: "fit-content",
              mb: "15px",
            }}
          >
            {props.heading}
          </Typography>
          <StyledLink fontSize={props.fontSize}>
            <Link href={props.linkSrc}>{props.title}</Link>
          </StyledLink>
          <Box>{props.Desc}</Box>
          <Typography variant="h6" fontWeight={900}>
            {props.author}
          </Typography>
          {props.Button ? <StyledButton>{props.ButtonText}</StyledButton> : ""}
        </TextContainer>
      </Box>
    </Stack>
  );
};

export default Card;