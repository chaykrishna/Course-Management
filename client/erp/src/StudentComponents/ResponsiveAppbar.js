import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SchoolIcon from '@mui/icons-material/School';
import FeedbackIcon from '@mui/icons-material/Feedback';
import TimetableIcon from '@mui/icons-material/CalendarToday';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Home', link: '/home', icon: <HomeIcon /> },
  { name: 'Attendance', link: '/attendance', icon: <SchoolIcon /> },
  { name: 'Courses', link: '/courses', icon: <AssignmentIcon /> },
  { name: 'Results', link: '/results', icon: <AssignmentIcon /> },
  { name: 'Feedback', link: '/feedback', icon: <FeedbackIcon /> },
  { name: 'Timetable', link: '/timetable', icon: <TimetableIcon /> },
];

const courseOptions = [
  { name: 'Assignments', link: '/courses/assignments',icon: <AssignmentIcon /> },
  { name: 'Handouts', link: '/courses/handouts', icon: <AssignmentIcon /> },
  { name: 'Internals', link: '/courses/internals', icon: <AssignmentIcon /> },
  { name: 'Materials', link: '/courses/materials', icon: <AssignmentIcon /> },
];

const settings = [
  { name: 'Profile', link: '/profile', icon: <PersonIcon /> },
];

function ResponsiveAppBar({ handleLogout }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElCourses, setAnchorElCourses] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenCoursesMenu = (event) => {
    setAnchorElCourses(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseCoursesMenu = () => {
    setAnchorElCourses(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'red' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h2"
            noWrap
            component={Link}
            to="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              height: '70px',
              alignItems: 'center',
            }}
          >
            <img src="/kl.jpg" alt="kl" style={{ maxHeight: '100%', width: 'auto' }} />
          </Typography>

          {/* Mobile Menu */}
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.link}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {page.icon}
                    <Typography sx={{ ml: 1, color: 'white' }}>{page.name}</Typography>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={page.name === 'Courses' ? handleOpenCoursesMenu : handleCloseNavMenu}
                component={page.name === 'Courses' ? undefined : Link}
                to={page.name === 'Courses' ? undefined : page.link}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {page.icon}
                  <Typography sx={{ ml: 1 }}>{page.name}</Typography>
                </Box>
              </Button>
            ))}
          </Box>

          <Menu
            anchorEl={anchorElCourses}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElCourses)}
            onClose={handleCloseCoursesMenu}
            sx={{ mt: 0 }}
          >
            {courseOptions.map((course) => (
              <MenuItem
                key={course.name}
                onClick={handleCloseCoursesMenu}
                component={Link}
                to={course.link}
              >
                <Typography sx={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}>
                  {course.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.5 }}>
                <Avatar alt="User Avatar" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.name}
                  onClick={handleCloseUserMenu}
                  component={Link}
                  to={setting.link}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(255, 255, 255, 0.4)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {setting.icon}
                    <Typography sx={{ textAlign: 'center', color: 'red', fontWeight: 'bold', ml: 1 }}>
                      {setting.name}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}
              <MenuItem
                onClick={() => {
                  handleLogout();
                  handleCloseUserMenu();
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ExitToAppIcon />
                  <Typography sx={{ textAlign: 'center', color: 'red', fontWeight: 'bold', ml: 1 }}>
                    Logout
                  </Typography>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar
