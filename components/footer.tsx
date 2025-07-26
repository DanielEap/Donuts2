import App from "@/app/page";
import { AppBar, Box, Typography } from "@mui/material";

export default function Footer() {
    const date = 'July 2025';
	return (
        <AppBar position="static" sx={{ backgroundColor: "#F3F3F3", color: "black", mt: 4 }}>
		<Box
			component="footer"
			sx={{
				backgroundColor: "#F3F3F3",
				color: "black",
				py: 4,
				textAlign: "center",
			}}
		>
			<Typography variant="body2" sx={{ mb: 1 }}>
				© {new Date().getFullYear()} Fresh Donuts. All rights reserved.
			</Typography>
            <Typography variant="body2">
                Last Updated: {date}
            </Typography>
		</Box>
    </AppBar>
	);
}
