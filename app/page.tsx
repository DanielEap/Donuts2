"use client"

import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "@/components/navbar"
import Homepage from "@/components/homepage"
import Menu from "@/components/menu"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",     
    },
    secondary: {
      main: "#D9ED92", // Yellow
      dark: "#B5E48C", 
    },
    success: {
      light: "#99D98C",
      main: "#76C893", // Green
      dark: "#52B69A",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}
