import React from "react";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { Container } from "@mui/system";
import wallpaper from "../../Img/hotwheels-wallpaper.jpg";

function Home() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box component="div" display="flex" justifyContent="center" sx={{mt:6}}>
          <Card sx={{ width: 400 }}>
            <CardMedia
              component="img"
              height="200"
              image={wallpaper}
              alt="Carro HotWheels"
            />
            <CardContent>
              <Typography variant="h5">HotWheels</Typography>
              <Typography variant="body3" component="p" gutterBottom>
                Bem-vindo à coleção HotWheels!
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
