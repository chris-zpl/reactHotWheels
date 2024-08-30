import React from "react";
import { useNavigate } from "react-router-dom";
import { useCarContext } from "../CarDetail/CarDetail";
import { Delete, ModeEdit } from "@mui/icons-material";
import { Typography, Button, Box, Avatar, Stack } from "@mui/material";
import { Container } from "@mui/system";

function CarsList() {
  const { carros, eliminarCarro } = useCarContext();
  const navigate = useNavigate();

  function handleEdit(id) {
    navigate(`/cars/edit/${id}`);
  }
  function handleDelete(id) {
    eliminarCarro(id);
  }

  return (
    <Container component="section" maxWidth="sm">
      <Stack direction="column" spacing={2} sx={{ mt: 6 }}>
        <Typography variant="h5">Lista de Carros</Typography>
        {carros.length === 0 ? (
          <Typography component="p">Sem resultados</Typography>
        ) : (
          carros.map((carro) => (
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              key={carro.id}
              /* sx={{ justifyContent: "space-between", flexGrow: 1 }} */
            >
              <Avatar src="/broken-image.jpg" />
              <Typography component="span" textAlign="center" margin="auto">
                {carro.name} - {carro.brand}
              </Typography>
              <Box
                component="div"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleEdit(carro.id)}
                  startIcon={<ModeEdit />}
                  sx={{ mr: 1 }}
                >
                  Editar
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={() => handleDelete(carro.id)}
                  startIcon={<Delete />}
                >
                  Eliminar
                </Button>
              </Box>
            </Box>
          ))
        )}
      </Stack>
    </Container>
  );
}

export default CarsList;
