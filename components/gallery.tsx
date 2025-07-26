"use client"

import { Container, Typography, Grid, Card, CardMedia, Box, useMediaQuery, useTheme } from "@mui/material"

const galleryImages = [
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Colorful glazed donuts",
    title: "Fresh Glazed Selection",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Chocolate donuts with sprinkles",
    title: "Chocolate Delights",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Baker making donuts",
    title: "Made Fresh Daily",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Shop interior",
    title: "Welcome to Fresh Donuts",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Specialty donuts",
    title: "Specialty Creations",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Coffee and donuts",
    title: "Perfect Pairings",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Donut boxes",
    title: "Take Home Boxes",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Happy customers",
    title: "Creating Sweet Memories",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Holiday donuts",
    title: "Seasonal Specials",
  },
]

export default function Gallery() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: "bold",
            mb: 2,
          }}
        >
          Photo Gallery
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Take a look at our delicious creations and happy customers
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {galleryImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                height={isMobile ? "250" : "300"}
                image={image.src}
                alt={image.alt}
                sx={{
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                  color: "white",
                  p: 2,
                  opacity: 0,
                  transition: "opacity 0.3s",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {image.title}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: 8,
          p: 4,
          backgroundColor: "secondary.main",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "black" }}>
          Share Your Sweet Moments!
        </Typography>
        <Typography variant="body1" sx={{ color: "black" }}>
          Tag us @sweetringsdonuts on social media to be featured in our gallery
        </Typography>
      </Box>
    </Container>
  )
}
