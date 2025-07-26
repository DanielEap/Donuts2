"use client";

import {
	Container,
	Typography,
	Button,
	Box,
	Grid,
	Card,
	CardContent,
	CardMedia,
	Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
export default function Homepage() {
	const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const features = [
		{
			title: "Fresh Daily",
			description: "Made fresh every morning with premium ingredients",
			image: "/placeholder.svg?height=200&width=300",
		},
		// {
		//   title: "Artisan Quality",
		//   description: "Handcrafted with love and attention to detail",
		//   image: "/placeholder.svg?height=200&width=300",
		// },
		// {
		//   title: "Local Favorite",
		//   description: "Serving our community for over 10 years",
		//   image: "/placeholder.svg?height=200&width=300",
		// },
	];

	return (
		<Box>
			{/* Hero Section */}
			<Box
				sx={{
					// background: `linear-gradient(90deg, #D9ED92 0%, #99D98C 100%)`,
					py: { xs: 8 },
					textAlign: "center",
				}}
			>
				<Container maxWidth="md">
					<Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
						<img
							src="/Donut.png"
							alt="Donut"
							style={{
								maxWidth: "220px",
								width: "100%",
								height: "auto",
								borderRadius: "50%",
								boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
								background: "#fff",
							}}
						/>
					</Box>
					<Typography
						variant="h1"
						sx={{
							fontSize: { xs: "2.5rem", md: "4rem" },
							fontWeight: "bold",
							color: "Black",
							mb: 2,
							textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
						}}
					>
						Fresh Donuts
					</Typography>
					<Typography
						variant="h5"
						sx={{
							color: "Black",
							mb: 4,
							// textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
						}}
					>
						Freshly made donuts that bring joy to your day
					</Typography>
					<Stack direction={"row"} spacing={2} justifyContent="center">
						<Button
							component={Link}
							to="/menu"
							variant="contained"
							size="large"
							sx={{
								backgroundColor: "black",
								color: "white",

								borderRadius: 8,
								boxShadow: "0 4px 6px rgba(0,0,0, 0.1)",
								fontWeight: "bold",
								fontSize: "1.1rem",
								"&:hover": {
									backgroundColor: "#333",
								},
							}}
						>
							View Our Menu
						</Button>
						<Button
							component={Link}
							to="/menu"
							variant="contained"
							size="large"
							sx={{
								backgroundColor: "white",
								color: "black",

								borderRadius: 8,
								boxShadow: "0 4px 6px rgba(0,0,0, 0.1)",
								fontWeight: "bold",
								fontSize: "1.1rem",
								"&:hover": {
									backgroundColor: "#eee",
									borderColor: "#333",
								},
							}}
						>
							Call to Order
						</Button>
					</Stack>
				</Container>
			</Box>

			{/* Hours Section */}
			<Container maxWidth={false} sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={4}
					alignItems="center"
				>
					<Box sx={{ flex: 1 }}>
						<img
							src="/CinnRolls.jpg"
							alt="Cinnamon Rolls"
							style={{
								width: "100%",
								height: "auto",
								borderRadius: 8,
								boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
								marginBottom: 16,
							}}
						/>
					</Box>
					<Stack
						sx={{ flex: 1 }}
						direction="column"
						spacing={2}
						alignItems={"center"}
					>
						<Typography
							variant="h4"
							sx={{ mb: 2, fontWeight: "bold", color: "black", pb: 6 }}
						>
							Opening Hours
						</Typography>
						<Typography variant="body1">
							Monday - Saturday: 6:00 AM - 4:00 PM
						</Typography>
						<Typography variant="body1">Sunday: 7:00 AM - 4:00 PM</Typography>
						<Typography variant="body1">
							(All Cooked Orders Stop <b>30 Minutes Before</b> Closing Time)
						</Typography>
						<Typography variant="body1">
							Sunday subject to close an hour earlier, please call to see if we
							are open
						</Typography>
					</Stack>
				</Stack>

				{/* <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardMedia component="img" height="200" image={feature.image} alt={feature.title} />
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> */}
			</Container>

			{/* About Section */}
			<Container maxWidth={false}>
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 8,
      }}
    >
      {!isMobile && (
        <img
          src="/ChocoDonut.jpg"
          alt="Donut"
          style={{
            maxWidth: "500px",
            width: "100%",
            height: "auto",
            borderRadius: "16px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            zIndex: 1,
            position: "relative",
          }}
        />
      )}
      <Box
        sx={{
          position: !isMobile ? "absolute" : "relative",
          right: !isMobile
            ? { xs: "calc(50% + 175px * 0.4)", md: "calc(50% + 350px * 0.4)" }
            : undefined,
          height: !isMobile ? "60%" : "auto",
          width: { xs: "100%", md: "450px" },
          bgcolor: "secondary.light",
          color: "black",
          borderRadius: 2,
          boxShadow: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
          zIndex: 2,
        }}
      >
        <Stack
          spacing={2}
          justifyContent={"space-evenly"}
          sx={{ height: "80%" }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "left" }}
          >
            About
          </Typography>
          <Typography variant="body1" sx={{}}>
            Open since 1990, this local business has been serving delicious
            food to the West Philadelphia area. We have served many people
            over the years and have created a great sense of community with
            our customers!
          </Typography>
          <Typography variant="body1">
            We make our Donuts fresh daily in our bakery. We make sandwiches
            to enjoy right from our kitchen. And, we make our customers
            smile at the window!
          </Typography>
        </Stack>
      </Box>
    </Box>
  </Container>
      {/* Gallery Section */}
			<Container maxWidth={false} sx={{ py: 8, backgroundColor: "#f5f5f5"}}>
				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={4}
					alignItems="center"
				>
					<Box sx={{ flex: 1 }}>
						<img
							src="/croissant.jpg"
							alt="Bacon Egg and Cheese Croissant"
							style={{
								width: "100%",
								height: "auto",
								borderRadius: 8,
								boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
								marginBottom: 16,
							}}
						/>
					</Box>
					<Stack
						sx={{ flex: 1 }}
						direction="column"
						spacing={2}
						alignItems={"center"}
					>
						<Typography
							variant="h4"
							sx={{ mb: 2, fontWeight: "bold", color: "black", pb: 6 }}
						>
							Photos of Our Food
						</Typography>
						<Stack direction={{ xs: "column", md: "row" }} spacing={2}>
             <Button
							component={Link}
							to="/menu"
							variant="contained"
							size="large"
							sx={{
								backgroundColor: "black",
								color: "white",

								borderRadius: 8,
								boxShadow: "0 4px 6px rgba(0,0,0, 0.1)",
								fontWeight: "bold",
								fontSize: "1.1rem",
								"&:hover": {
									backgroundColor: "#333",
								},
							}}
						>
							Donuts
						</Button>
              <Button
							component={Link}
							to="/menu"
							variant="contained"
							size="large"
							sx={{
								backgroundColor: "white",
								color: "black",

								borderRadius: 8,
								boxShadow: "0 4px 6px rgba(0,0,0, 0.1)",
								fontWeight: "bold",
								fontSize: "1.1rem",
								"&:hover": {
									backgroundColor: "#eee",
									borderColor: "#333",
								},
							}}
						>
							Call to Order
						</Button>
            </Stack>
					</Stack>
				</Stack>
			</Container>

      {/* Contact Section */}
			<Container maxWidth={false} sx={{ py: 8, }}>
				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={4}
					alignItems="center"
				>
					
					<Stack
						sx={{ flex: 1 }}
						direction="column"
						spacing={2}
						alignItems={"center"}
					>
						<Typography
							variant="h4"
							sx={{ mb: 2, fontWeight: "bold", color: "black", pb: 6 }}
						>
							Contact
						</Typography>
						<Typography variant="body1" textAlign={"center"}>
							3914 Lancaster Ave, Philadelphia, PA 19104
						</Typography>
						<Typography variant="body1">215-222-8119</Typography>
            
					</Stack>
          <Box sx={{ flex: 1 }}>
						<img
							
            src="/People.jpg"
            alt="People enjoying donuts"
            
							style={{
								width: "100%",
								height: "auto",
								borderRadius: 8,
								boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
								marginBottom: 16,
							}}
						/>
					</Box>
				</Stack>

			
			</Container>
		</Box>
	);
}
