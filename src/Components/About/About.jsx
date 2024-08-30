import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { Container } from "@mui/system";

function About() {
  return (
    <Container component="section">
      <Box
        component="div"
        display="flex"
        justifyContent="center"
        sx={{ mt: 6 }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardContent sx={{ "& > :not(style)": { mb: 2 } }}>
            <Typography variant="h4">Sobre</Typography>
            <Typography variant="body3" component="p" gutterBottom>
              Esta é uma aplicação para um CRUD de carros HotWheels.
            </Typography>
            <Typography variant="body3" component="p" gutterBottom>
              Elaborada na Disciplina Desenvolvimento de Sistemas Frontend.
            </Typography>
            <Typography variant="body3" component="p" gutterBottom>
              Do curso de Graduação Online da PUCRS.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default About;
