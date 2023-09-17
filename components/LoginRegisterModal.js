import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import styled from "@emotion/styled";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Modalstyle = {
  position: "absolute",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};

const StyleBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
});

const SocialBox = styled(Box)(({ myBgColor }) => ({
  background: myBgColor,
  padding: 4,
  textAlign: "center",
  width: "60px",
  marginLeft: 1,
  cursor: "pointer",
}));

export default function LoginRegisterModal(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Modalstyle}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Signup" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <StyleBox>
              <Box flex={1}>
                <Typography variant="h4">Welcome back, Coder!</Typography>
                <Typography variant="body1">
                  Thank you for being a Codingstrade Subscriber. I feel lucky
                  that I get to connect with so many people like you. <br />
                  Codingstrade
                </Typography>
                <Typography variant="body1">
                  <br />
                  <br />
                  Not a Codingstrade Subscriber yet?
                </Typography>
              </Box>
              <Box
                flex={1}
                sx={{
                  backgroundImage:
                    'url("https://images.pexels.com/photos/531675/pexels-photo-531675.jpeg?cs=srgb&dl=beautiful-bloom-blooming-531675.jpg&fm=jpg")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                }}
              >
                <TextField
                  id="outline-basic"
                  label="Email Address"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  id="outline-password-input"
                  label="Password"
                  type="password"
                  variant="filled"
                  fullWidth
                  sx={{ marginTop: 1, marginBottom: 1 }}
                />
                <Button
                  sx={{
                    textAlign: "center",
                    background: "#0049fb",
                    color: "white",
                    width: 300,
                    padding: 1,
                  }}
                >
                  Login
                </Button>
                <Typography variant="body1">
                  <br />
                  <br />
                  Or login with your social account:
                </Typography>
                <StyleBox>
                  <SocialBox myBgColor={"red"}>
                    <Google sx={{ color: "white" }} />
                  </SocialBox>
                  <SocialBox myBgColor={"Blue"}>
                    <Facebook sx={{ color: "white" }} />
                  </SocialBox>
                </StyleBox>
              </Box>
            </StyleBox>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <StyleBox
              
            >
              <Box flex={1}>
                <Typography variant="h4">Become a Subscriber</Typography>
                <Typography variant="body1">
                  Join the Codingstrade community to get regular updates from
                  Coding on key topics like Javascript, C#, PHP and more, to
                  access exclusive content, comment on videos, get real life
                  projects and more!
                </Typography>
                <Typography variant="body1">
                  <br />
                  <br />
                  Already joined?
                </Typography>
              </Box>

              <Box flex={1} sx={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/531675/pexels-photo-531675.jpeg?cs=srgb&dl=beautiful-bloom-blooming-531675.jpg&fm=jpg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
              }}>
                <Typography variant="body1">
                  Use your social account:
                </Typography>
                <StyleBox>
                  <SocialBox myBgColor={"red"}>
                    <Google sx={{ color: "white" }} />
                  </SocialBox>
                  <SocialBox myBgColor={"Blue"}>
                    <Facebook sx={{ color: "white" }} />
                  </SocialBox>
                </StyleBox>
                <Typography variant="body1">Or sign up with email</Typography>

                <StyleBox>
                  <TextField
                    id="outline-basic"
                    label="First Name"
                    variant="filled"
                    sx={{ marginTop: 1, marginBottom: 1 }}
                  />
                  <TextField
                    id="outline-password-input"
                    label="Last name"
                    variant="filled"
                    sx={{ marginTop: 1 }}
                  />
                   </StyleBox>
                  <TextField
                    id="outline-basic"
                    label="Email Address"
                    variant="filled"
                    fullWidth
                    sx={{ marginTop: 1 }}
                  />
                  <TextField
                    id="outline-password-input"
                    label="Password"
                    type="password"
                    variant="filled"
                    fullWidth
                    sx={{ marginTop: 1 }}
                  />
                  <TextField
                    id="outline-basic"
                    label="Postal Code"
                    variant="filled"
                    fullWidth
                    sx={{ marginTop: 1, marginBottom: 1 }}
                  />
                  <TextField
                    id="outline-basic"
                    label="Country"
                    variant="filled"
                    fullWidth
                    sx={{ marginTop: 1 }}
                  />
               
                <Button
                  sx={{
                    textAlign: "center",
                    background: "#0049fb",
                    color: "white",
                    width: 300,
                    padding: 1,
                  }}
                >
                  SIGN UP
                </Button>
              </Box>
            </StyleBox>
          </CustomTabPanel>
        </Box>
      </Modal>
    </div>
  );
}

import * as React from "react";
import { Button, TextField } from "@mui/material";
import { Facebook, Google } from "@mui/icons-material";
