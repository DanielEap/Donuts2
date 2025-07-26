"use client"

import { Container, Typography, Grid, Card, CardContent, Box, List, ListItem, ListItemText } from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

const contactInfo = [
  {
    icon: <LocationOnIcon />,
    title: "Address",
    details: ["123 Sweet Street", "Donut City, DC 12345"],
  },
  {
    icon: <PhoneIcon />,
    title: "Phone",
    details: ["(555) 123-DONUT", "(555) 123-3668"],
  },
  {
    icon: <EmailIcon />,
    title: "Email",
    details: ["hello@sweetrings.com", "orders@sweetrings.com"],
  },
]

const hours = [
  { day: "Monday - Friday", time: "6:00 AM - 8:00 PM" },
  { day: "Saturday", time: "7:00 AM - 9:00 PM" },
  { day: "Sunday", time: "7:00 AM - 7:00 PM" },
]

export default function Contact() {
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
          Contact Us
        </Typography>
        <Typography variant="h6" color="text.secondary">
          We'd love to hear from you! Visit us or get in touch
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
            Get In Touch
          </Typography>

          {contactInfo.map((info, index) => (
            <Card key={index} sx={{ mb: 2, boxShadow: 2 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Box
                    sx={{
                      color: "secondary.main",
                      mr: 2,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {info.title}
                  </Typography>
                </Box>
                {info.details.map((detail, detailIndex) => (
                  <Typography key={detailIndex} variant="body1" color="text.secondary" sx={{ ml: 4 }}>
                    {detail}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Hours and Map */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
            Store Hours
          </Typography>

          <Card sx={{ mb: 4, boxShadow: 2 }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <AccessTimeIcon sx={{ color: "secondary.main", mr: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Operating Hours
                </Typography>
              </Box>
              <List>
                {hours.map((schedule, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemText
                      primary={
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                            {schedule.day}
                          </Typography>
                          <Typography variant="body1" color="success.main">
                            {schedule.time}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card sx={{ boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                Find Us
              </Typography>
              <Box
                sx={{
                  height: 250,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundImage: "url(/placeholder.svg?height=250&width=400&query=map location of donut shop)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Interactive Map Coming Soon
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Info */}
      <Box
        sx={{
          mt: 6,
          p: 4,
          backgroundColor: "success.main",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "white" }}>
          Special Orders & Catering
        </Typography>
        <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
          Planning a special event? We offer custom donut arrangements, corporate catering, and bulk orders with advance
          notice.
        </Typography>
        <Typography variant="body2" sx={{ color: "white" }}>
          Call us at least 24 hours in advance for special orders
        </Typography>
      </Box>
    </Container>
  )
}
