import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';


function Base({children}) {

    const navigate = useNavigate();
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SchoolIcon  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Student Database
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
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            <MenuItem onClick={()=>navigate("/addstudents")}>
                <Typography textAlign="center">Add Students</Typography>
            </MenuItem>

            <MenuItem onClick={()=>navigate("/")}>
                <Typography textAlign="center">Dashboard</Typography>
            </MenuItem>

            <MenuItem onClick={()=>navigate("/login")}>
                <Typography textAlign="center">Login</Typography>
            </MenuItem>

            <MenuItem onClick={()=>navigate("/signup")}>
                <Typography textAlign="center">Signup</Typography>
            </MenuItem>

            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Student Database
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={()=>navigate("/addstudents")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Add Students
              </Button>

              <Button
                onClick={()=>navigate("/")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Dashboard
              </Button>

              <Button
                onClick={()=>navigate("/login")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Login
              </Button>

              <Button
                onClick={()=>navigate("/signup")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Signup
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div>
      {children}
    </div>
    </>
  )
}

export default Base