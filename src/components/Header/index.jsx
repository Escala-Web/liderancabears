import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";
import { IoMenu, IoClose } from "react-icons/io5";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Header = ({ anchor = "right" }) => {
  const [headerActive, setHeaderActive] = React.useState(false);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState((prevState) => ({ ...prevState, [anchor]: open }));
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: "Home", link: "/" },
          { text: "About", link: "/about" },
          { text: "Services", link: "/services" },
          { text: "Contact", link: "/contact" },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/agendamento"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              "&:hover": { bgcolor: "primary.dark" },
              borderRadius: 1,
              margin: 1,
              justifyContent: "center",
            }}
          >
            <ListItemText primary="Agendamento" sx={{ textAlign: "center" }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer active={headerActive ? 1 : undefined}>
      <div className="containerHeader">
        <Link to="/" className="logo">
          <img src="/images/logo-site.png" alt="Logo" />
        </Link>

        <div className="menu">
          <nav>
            <ul>
              <li>Home</li>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
            <button className="agendar">Agendamento</button>
          </nav>
        </div>
      </div>

      <Button className="toggleMenu" onClick={toggleDrawer(anchor, true)}>
        <IoMenu size={24} />
      </Button>

      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <Button onClick={toggleDrawer(anchor, false)}>
          <IoClose size={24} />
        </Button>
        {list(anchor)}
      </Drawer>
    </HeaderContainer>
  );
};

export default Header;
