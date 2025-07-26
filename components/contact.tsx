"use client"

import { Container, Typography, Grid, Card, CardContent, Box, List, ListItem, ListItemText,Stack } from "@mui/material"
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
          Please call us or visit us 
        </Typography>
      </Box>

      <Stack direction={{ xs: "column", md: "row" }} spacing={4} justifyContent="space-between" sx={{ pb: 8}}>
        <Stack>
           <Box sx={{ display: "flex", alignItems: "center", mb: 1}}>
                    <LocationOnIcon sx={{ color: "secondary.main", mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Address
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" sx={{ ml: 4 }}>
                    123 Sweet Street
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ ml: 4 }}>
                    Donut City, DC 12345
                  </Typography>
        </Stack>
        <Stack>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <PhoneIcon sx={{ color: "secondary.main", mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Phone
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ ml: 4 }}>
            (555) 123-DONUT
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ ml: 4 }}>
            (555) 123-3668
          </Typography>
        </Stack>
        <Stack>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1  }}>
                    <AccessTimeIcon sx={{ color: "secondary.main", mr: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      Operating Hours
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ ml: 4, fontWeight: "bold" }}>
                    Monday - Friday: <span style={{ color: "#388e3c" }}>6:00 AM - 8:00 PM</span>
                  </Typography>
                  <Typography variant="body1" sx={{ ml: 4, fontWeight: "bold" }}>
                    Saturday: <span style={{ color: "#388e3c" }}>7:00 AM - 9:00 PM</span>
                  </Typography>
                  <Typography variant="body1" sx={{ ml: 4, fontWeight: "bold" }}>
                    Sunday: <span style={{ color: "#388e3c" }}>7:00 AM - 7:00 PM</span>
                  </Typography>
          </Stack>
    

       
      </Stack>
 {/* Map */}
        
          <Card sx={{ boxShadow: 2 }}>
            <CardContent>
              <Typography variant="h6" sx={{  fontWeight: "bold" }}>
                Find Us
              </Typography>
              <Box
                sx={{
                  height: 500,
                  borderRadius: 1,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <iframe
                  title="Google Map"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97842.45327728566!2d-75.26083164182307!3d39.97321662834567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c65564960bf3%3A0x7b5d4c0845c5248f!2sFresh%20Donuts!5e0!3m2!1sen!2sus!4v1753491726570!5m2!1sen!2sus"
                ></iframe>
              </Box>
            </CardContent>
          </Card>

      {/* Additional Info */}
      
    </Container>
  );
}