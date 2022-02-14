//Header.jsx

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { animateScroll as scroll } from "react-scroll";
import { Link as Scroll } from 'react-scroll';
import { createTheme, } from '@mui/material/styles';

const menus = [
  {pages: "Profile", link: "profileLink"},
  {pages: "Skill", link: "skillLink"},
  {pages: "Work", link: "workLink"},
  {pages: "Comment", link: "commentLink"},

];

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
      position: 'fixed'
    },
  },
});

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" theme={theme}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Scroll onClick={scrollToTop} smooth={true}>
              <h3>tattu-'s profile</h3>
            </Scroll>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ //anchorEl のどの位置からポップオーバーさせるかを指定する
                vertical: 'bottom', //垂直
                horizontal: 'left', //水平
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top', //垂直
                horizontal: 'left', //水平
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menus.map((menu) => (
                <Scroll  key={menu.pages} to={menu.link} smooth={true}>
                  <MenuItem 
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      {menu.pages}
                    </Typography>
                  </MenuItem>
                </Scroll>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Scroll onClick={scrollToTop} smooth={true}>
              <h3>tattu-'s profile</h3>
            </Scroll>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <div style={{ flexGrow: 1 }}></div>
            {menus.map((menu) => (
              <Button
              key={menu.pages}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Scroll
                to={menu.link}
                smooth={true}
              >
                {menu.pages}
              </Scroll>
            </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;