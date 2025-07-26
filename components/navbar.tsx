"use client"

import { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { Link, useLocation } from "react-router-dom"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
  { name: "215-222-8119", path: "tel:215-222-8119" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const location = useLocation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemText>
              <Button
                component={Link}
                to={item.path}
                fullWidth
                sx={{
                  color: location.pathname === item.path ? "secondary.main" : "text.primary",
                  fontWeight: location.pathname === item.path ? "bold" : "normal",
                }}
              >
                {item.name}
              </Button>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 1 }}>
        <Toolbar>
          <Stack direction={'row'} justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
          <Stack direction={'row'}>
            <img
              src="/Donut.png"
              alt="Fresh Donuts Logo"
              style={{ height: 40, width:40, marginRight: 16 }}
              />
              <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                fontSize: "1.5rem",
                alignSelf: "center",
              }}
              >
              Fresh Donuts
              </Typography>
          
         </Stack>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: location.pathname === item.path ? "success.dark" : "black",
                    fontWeight: location.pathname === item.path ? "bold" : "normal",
                    "&:hover": {
                      backgroundColor: "rgba(255, 235, 59, 0.1)",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}
