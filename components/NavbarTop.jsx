import React from "react";
import {
  AppBar,
  Box,
  Button,
  styled,
  Stack,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";

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



function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 150,
  });
  return (
    <Fade in={trigger}>
      <Box role={"presentation"}>{children}</Box>
    </Fade>
  );
}

const NavbarTop = (props) => {
  return (
    <>
      <ScrollTop {...props}>
        <AppBar
          sx={{
            position: "fixed",
            top: "0px",
            width: "100%",
            backgroundColor: "black !important",
          }}
        >
          <Menu>
            <Typography flex={3} variant="h6" component={"div"} sx={{marginLeft:2}}>
              CODINGSNOTE THE BLOG OF CODINGSTRADE
            </Typography>

            <Box flex={1}>
              <Stack direction={"row"} m={2}>
                <MenuItem
                  color="inherit"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  LOG IN
                </MenuItem>
                <MenuItem
                  color="inherit"
                  sx={{
                    color: "white",
                    background: "#0049fb",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginRight: "0px",
                    height: "50%",
                    marginTop: 2,
                    fontSize: 11,
                  }}
                >
                  SIGN UP
                </MenuItem>

                <MenuItem
                  color="inherit"
                  sx={{
                    color: "white",
                    background: "green",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginRight: "0px",
                    height: "50%",
                    marginTop: 2,
                    fontSize: 11,
                    margin:'15.5px 2px 0px 4px',
                  }}
                >
                  CREATE
                </MenuItem>

                <IconButton size="small" edge="start" color="inherit" sx={{ml: 2}}>
                  <SearchIcon sx={{ fontSize: 35, fontWeight:200 }} />
                </IconButton>
                <IconButton size="small" edge="start" color="inherit">
                  <MenuIcon sx={{ fontSize: 39 }} />
                </IconButton>
              </Stack>
            </Box>
          </Menu>
        </AppBar>
      </ScrollTop>
    </>
  );
};

export default NavbarTop;
