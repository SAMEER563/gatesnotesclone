import React from "react";
import { Facebook, Instagram, Google } from "@mui/icons-material";
import {
  Box,
  Container,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { StyledButton } from "./Card";
import Link from "next/link";

const CatList = [
  { id: 1, name: "About us" },
  { id: 2, name: "Photo essays" },
  { id: 3, name: "Saving lives" },
  { id: 4, name: "Search" },
  { id: 5, name: "Books" },
  { id: 6, name: "Climate and Energy" },
  { id: 7, name: "Personal" },
  { id: 8, name: "Education" },
  { id: 9, name: "Pandemic prevention" },
  { id: 10, name: "Podcast" },
  { id: 11, name: "Videos" },
  { id: 12, name: "Inequality, gender, and race" },
];

const List = styled("div")({
  fontWeight: 300,
  color: "white",
  marginTop: 20,
  marginBottom: 70,
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "480px",
  justifyContent: "center",
  alignItems: "center",
});

const ListItem = styled("a")({
  margin: "20px 0px 5px 0px",
  width: "150px",
  cursor: "pointer",
});

const LogoTwo = styled("div")({
  fontWeight: 800,
  fontSize: "18px",
  color: "white",
});

const Footer = () => {
  return (
    <Box sx={{ background: "black", height: "100%" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { sm: "row" },
            flexWrap: "wrap",
            padding: "80px",
          }}
        >
          <Stack flex={1} sx={{ marginLeft: 1 }}>
            <LogoTwo>THE BLOG</LogoTwo>
            <LogoTwo> OF CODINGSTRADE </LogoTwo>
          </Stack>
          <Stack
            flexDirection={"row"}
            sx={{ cursor: "pointer", marginRight: 4 }}
          >
            <Instagram color="warning" />
            <Google color="secondary" />
            <Facebook color="primary" />
          </Stack>
        </Box>
        <Stack flexDirection={{ sm: "row" }}>
          <Box
            flex={1}
            mt={8}
            sx={{
              borderTop: "0.1px solid white",
              borderBottom: "0.1px solid white",
            }}
          >
            <List>
              {CatList.map((cat) => (
                <ListItem key={cat.id}>{cat.name}</ListItem>
              ))}
            </List>
          </Box>
          <Box
            flex={1}
            mt={8}
            sx={{
              color: "white",
              borderTop: "0.1px solid white",
              borderBottom: "0.1px solid white",
              borderLeft: "0.1px solid white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Subscribe to Codingstrade</Typography>

            <TextField
              id="standard-basic"
              variant="standard"
              color="info"
              placeholder="First Name"
              inputProps={{
                style: {
                  color: "white",
                  borderBottom: "2px solid white",
                  width: "300px",
                },
              }}
            />
            <TextField
              id="standard-basic"
              variant="standard"
              color="info"
              placeholder="First Name"
              inputProps={{
                style: {
                  color: "white",
                  borderBottom: "2px solid white",
                  width: "300px",
                },
              }}
            />
            <TextField
              id="standard-basic"
              variant="standard"
              color="info"
              placeholder="Email"
              inputProps={{
                style: {
                  color: "white",
                  borderBottom: "2px solid white",
                  width: "300px",
                },
              }}
            />

            <StyledButton sx={{ marginTop: 2 }}>Sign up</StyledButton>
          </Box>
        </Stack>
        <Box 
           sx={{
            color: 'grey',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 3,
            marginTop: 5,

           }}
           >
            <Typography variant="body1">&copy; 2023 Codingstrade LLC</Typography>

            <Link href={"/privacy"}>Privacy</Link>

            <Link href={"/terms"}>Terms</Link>

            <Link href={"/contact"}>Contact</Link>
            
           </Box>
      </Container>
    </Box>
  );
};

export default Footer;
