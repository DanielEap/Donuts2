"use client"

import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Chip,
} from "@mui/material"

const menuItems = [
  {
    category: "Classic Donuts",
    items: [
      { name: "Glazed Original", price: "$2.50", description: "Our signature glazed donut", popular: true },
      { name: "Chocolate Glazed", price: "$2.75", description: "Rich chocolate glaze on fluffy donut" },
      { name: "Boston Cream", price: "$3.25", description: "Filled with vanilla cream, topped with chocolate" },
      { name: "Jelly Filled", price: "$3.00", description: "Strawberry or raspberry jelly filling" },
    ],
  },
  {
    category: "Specialty Donuts",
    items: [
      { name: "Maple Bacon", price: "$3.75", description: "Maple glaze with crispy bacon bits", popular: true },
      { name: "Lemon Coconut", price: "$3.50", description: "Lemon glaze with toasted coconut flakes" },
      { name: "Cinnamon Sugar", price: "$2.75", description: "Classic cake donut with cinnamon sugar" },
      { name: "Apple Fritter", price: "$4.00", description: "Large fritter with apple pieces and glaze" },
    ],
  },
  {
    category: "Vegan Options",
    items: [
      { name: "Vegan Chocolate", price: "$3.25", description: "Plant-based chocolate donut" },
      { name: "Vegan Vanilla", price: "$3.00", description: "Light vanilla glaze, dairy-free" },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Fresh Coffee", price: "$2.25", description: "Locally roasted, hot or iced" },
      { name: "Specialty Latte", price: "$4.50", description: "Espresso with steamed milk" },
      { name: "Hot Chocolate", price: "$3.00", description: "Rich and creamy hot chocolate" },
      { name: "Fresh Juice", price: "$3.50", description: "Orange, apple, or cranberry" },
    ],
  },
]

export default function Menu() {
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
          Our Menu
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Freshly made daily with the finest ingredients
        </Typography>
      </Box>

      {menuItems.map((category, categoryIndex) => (
        <Box key={categoryIndex} sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: "bold",
              color: "primary.main",
              borderBottom: "3px solid",
              borderColor: "secondary.main",
              pb: 1,
              display: "inline-block",
            }}
          >
            {category.category}
          </Typography>

          <TableContainer component={Paper} sx={{ boxShadow: 2 }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>Item</TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>Description</TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                    Price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {category.items.map((item, itemIndex) => (
                  <TableRow
                    key={itemIndex}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(255, 235, 59, 0.1)",
                      },
                    }}
                  >
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {item.name}
                        </Typography>
                        {item.popular && (
                          <Chip
                            label="Popular"
                            size="small"
                            sx={{
                              backgroundColor: "success.main",
                              color: "white",
                              fontSize: "0.75rem",
                            }}
                          />
                        )}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "secondary.main",
                        }}
                      >
                        {item.price}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}

      <Box
        sx={{
          mt: 6,
          p: 3,
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
          Bulk Orders & Catering
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Planning an event? We offer special pricing for orders of 2 dozen or more. Contact us for custom arrangements
          and delivery options.
        </Typography>
      </Box>
    </Container>
  )
}
