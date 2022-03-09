import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";
import { useStyle } from "./style/style";

let Header = () => {
  let classes = useStyle();
  let [drawerStatus, setDrawerStatus] = useState(false);

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Button className={classes.logobtn} component={Link} to="/" variant="text" color="inherit">
            <Box sx={{display:"flex",alignItems:"center",marginLeft:-10}}>
              <img
                className={classes.logo}
                src="./images/cryptologo3.png"
                alt=""
                srcSet=""
              />
              <Typography color="inherit">Cryptoworld</Typography>
            </Box>
          </Button>
          <Box
            className={classes.desktopView}
            sx={{ display: "flex", marginLeft: "auto" }}
          >
            <Button
              className={classes.btn}
              component={Link}
              to="/"
              color="inherit"
            >
              Home
            </Button>
          
            <Button
              className={classes.btn}
              component={Link}
              to="/cryptocurrencies"
              color="inherit"
            >
              Cryptocurrencies
            </Button>
            <Button
              className={classes.btn}
              component={Link}
              to="/news"
              color="inherit"
            >
              News
            </Button>
          </Box>
          <IconButton
            className={classes.mobileView}
            onClick={() => setDrawerStatus(!drawerStatus)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={drawerStatus}>
            <Box
              className={classes.box}
              role="presentation"
              anchor="left"
              onClick={() => setDrawerStatus(!drawerStatus)}
            >
              <List className={classes.list}>
                <ListItem
                  component={Link}
                  to="/"
                  className={classes.listitem}
                  button
                  onClick={() => setDrawerStatus(!drawerStatus)}
                >
                  <ListItemText primary="Home" />
                </ListItem>
               
                <ListItem
                  component={Link}
                  to="/cryptocurrencies"
                  className={classes.listitem}
                  button
                  onClick={() => setDrawerStatus(!drawerStatus)}
                >
                  <ListItemText primary="Cryptocurrencies" />
                </ListItem>

                <ListItem
                  component={Link}
                  to="/news"
                  className={classes.listitem}
                  button
                  onClick={() => setDrawerStatus(!drawerStatus)}
                >
                  <ListItemText primary="News" />
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
