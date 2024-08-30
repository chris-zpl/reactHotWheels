import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCarContext } from "../CarDetail/CarDetail";
import { Typography, TextField, Button, Box } from "@mui/material";
import "./CarForm.css";

function CarForm() {
  const { id } = useParams();
  const { carros, updateCarro, addCarro } = useCarContext();
  const navigate = useNavigate();

  /*{Verifica se o carro é novo ou se é uma edição}*/
  const carro = carros.find((carro) => carro.id === parseInt(id));
  const [editedCarro, setCarroEditado] = useState(
    carro || { id: "", name: "", brand: "", color: "", year: "" }
  );

  const [errors, setErrors] = useState({
    name: false,
    brand: false,
    color: false,
    year: false,
  });

  useEffect(() => {
    /* {Atualiza o estado se o carro mudar} */
    if (carro) {
      setCarroEditado(carro);
    } else {
      /* {Limpa os campos após adicionar o carro} */
      setCarroEditado({ id: "", name: "", brand: "", color: "", year: "" });
    }
  }, [carro]);

  function validarCampos() {
    let errosTemp = {};
    errosTemp.name = editedCarro.name === "";
    errosTemp.brand = editedCarro.brand === "";
    errosTemp.color = editedCarro.color === "";
    errosTemp.year = editedCarro.year === "";

    setErrors(errosTemp);

    // Verifica se há algum erro
    return Object.values(errosTemp).every((valor) => valor === false);
  }

  function handleSave() {
    if (validarCampos()) {
      if (id) {
        updateCarro(editedCarro.id, editedCarro);
      } else {
        const novoId =
          carros.length > 0 ? Math.max(...carros.map((c) => c.id)) + 1 : 1;
        addCarro({ ...editedCarro, id: novoId });
      }
      navigate("/cars");
    }
  }

  function handleCancel() {
    setCarroEditado({ id: "", name: "", brand: "", color: "", year: "" });
    navigate("/cars");
  }

  return (
    <Box component="form" sx={{ mt: 6 }} noValidate autoComplete="off">
      <Typography
        variant="h4"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {id ? "Editar Carro" : "Adicionar Carro"}
      </Typography>
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          required
          error={errors.name}
          label="Nome"
          id="name"
          size="small"
          margin="normal"
          defaultValue={editedCarro.name}
          helperText={errors.name ? "Nome é obrigatório" : ""}
          onChange={(e) =>
            setCarroEditado({ ...editedCarro, name: e.target.value })
          }
        />
        <TextField
          required
          error={errors.brand}
          label="Marca"
          id="brand"
          size="small"
          margin="normal"
          defaultValue={editedCarro.brand}
          helperText={errors.brand ? "Marca é obrigatória" : ""}
          onChange={(e) =>
            setCarroEditado({ ...editedCarro, brand: e.target.value })
          }
        />
        <TextField
          required
          error={errors.color}
          label="Cor"
          id="color"
          size="small"
          margin="normal"
          defaultValue={editedCarro.color}
          helperText={errors.color ? "Cor é obrigatória" : ""}
          onChange={(e) =>
            setCarroEditado({ ...editedCarro, color: e.target.value })
          }
        />
        <TextField
          required
          error={errors.year}
          label="Ano"
          type="number"
          id="year"
          size="small"
          margin="normal"
          defaultValue={editedCarro.year}
          helperText={errors.year ? "Ano é obrigatório" : ""}
          onChange={(e) =>
            setCarroEditado({ ...editedCarro, year: e.target.value })
          }
        />

        <Box component="div">
          <Button
            variant="contained"
            onClick={handleSave}
            size="small"
            sx={{ mr: 1 }}
          >
            {id ? "Salvar" : "Adicionar"}
          </Button>
          <Button
            variant="contained"
            onClick={handleCancel}
            size="small"
            color="error"
            sx={{ ml: 1 }}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CarForm;
