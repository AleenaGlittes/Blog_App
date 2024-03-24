import React from 'react';
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

function Header() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn);
  const dispatch = useDispatch();

  return (
    <AppBar sx={{ background: "#2888d2" }}>
      <Toolbar>
        <Typography variant="h5" component="div">
          Blogs
        </Typography>
        <Box sx={{ marginLeft: 'auto', marginRight: 'auto' }}>
          {isLoggedIn &&
            <Tabs>
              <Tab component={Link} to="/blogs" label="All Blogs" />
              <Tab component={Link} to="/myblogs" label="My Blogs" />
            </Tabs>
          }
        </Box>
        <Box>
          {isLoggedIn ? (
            <>
              {/* <Button component={Link} to="/blogs" sx={{ backgroundColor: "#2888d2", color: "#fff", mr: 1 }}>All Blogs</Button>
              <Button component={Link} to="/myblogs" sx={{ backgroundColor: "#2888d2", color: "#fff", mr: 1 }}>My Blogs</Button> */}
              <Button onClick={()=>dispatch(authActions.logout())} component={Link} to="/auth" sx={{ backgroundColor: "#2888d2", color: "#fff" }}>Logout</Button>
            </>
          ) : (
            <>
              <Button component={Link} to="/auth" sx={{ backgroundColor: "#2888d2", color: "#fff", mr: 1 }}>Login</Button>
              <Button sx={{ backgroundColor: "#2888d2", color: "#fff" }}>SignUp</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
