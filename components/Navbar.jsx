import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  styled,
  Stack,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import LoginRegisterModal from "./LoginRegisterModal";

const Menu = styled(Box)({
  borderBottom: "1px solid black",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 2,
});

const MenuItem = styled(Button)({
  fontWeight: 900,
  fontSize: "12px",
  marginRight: "2px",
});

const Logo = styled("div")({
  fontWeight: 900,
  color: "black",
  fontSize: "34px",
  cursor: "pointer",
});

const LogoDesc = styled(Box)({
  fontWeight: 600,
  color: "black",
  fontSize: "12px",
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container>
        <AppBar position="static" color="transparent" elevation={0}>
          <Menu>
            <Stack direction={"row"} flex={1}>
              <Logo>CodingsNotes</Logo>
              <Stack direction={"column"} sx={{ marginLeft: 1, marginTop: 1 }}>
                <LogoDesc>THE BLOG </LogoDesc>
                <LogoDesc> OF CODINGSTRADE</LogoDesc>
              </Stack>
            </Stack>

            <Stack direction={"row"} m={2}>
              <MenuItem sx={{ fontSize: "15px" }} color="inherit">
                Books
              </MenuItem>
              <MenuItem sx={{ fontSize: "15px" }} color="inherit">
                Videos
              </MenuItem>
              <MenuItem sx={{ fontSize: "15px" }} color="inherit">
                YEAR IN REVIEW
              </MenuItem>
              <Button onClick={handleOpen} color="inherit">LOG IN</Button>
              <MenuItem
                color="inherit"
                onClick={handleOpen}
                sx={{
                  color: "#0049fb",
                  border: "1px solid #0049fb",
                  fontWeight: "bold",
                }}
              >
                SIGN UP
              </MenuItem>

              <MenuItem
                color="inherit"
                sx={{
                  color: "green",
                  border: "1px solid green",
                  fontWeight: "bold",
                }}
              >
                CREATE
              </MenuItem>
            </Stack>
            <IconButton size="small" edge="start" color="inherit">
              <SearchIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <IconButton size="small" edge="start" color="inherit">
              <MenuIcon sx={{ fontSize: 39 }} />
            </IconButton>
          </Menu>
        </AppBar>
        <LoginRegisterModal open={open} handleClose={handleClose}/>
      </Container>
    </>
  );
};

export default Navbar;
