import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCarContext } from "../CarDetail/CarDetail";
import "./CarForm.css";

function CarForm() {
  const { id } = useParams();
  const { carros, updateCarro, addCarro } = useCarContext();
  const navigate = useNavigate();

  /*{Verifica se o carro é novo ou se é uma edição}*/
  const carro = carros.find((carro) => carro.id === parseInt(id));
  const [editedCarro, setCarroEditado] = useState(
    carro || { id: "", nome: "", marca: "", cor: "", ano: "" }
  );

  useEffect(() => {
    /* {Atualiza o estado se o carro mudar} */
    if (carro) {
      setCarroEditado(carro);
    } else {
      /* {Limpa os campos após adicionar o carro} */
      setCarroEditado({ id: "", nome: "", marca: "", cor: "", ano: "" });
    }
  }, [carro]);

  function handleSave() {
    if (id) {
      updateCarro(editedCarro.id, editedCarro);
    } else {
      const novoId = carros.length > 0 ? Math.max(...carros.map((c) => c.id)) + 1 : 1;
      addCarro({ ...editedCarro, id: novoId });
    }
    navigate("/cars");
  }

  function handleCancel() {
    setCarroEditado({ id: "", nome: "", marca: "", cor: "", ano: "" });
    navigate("/cars");
  }

  return (
    <div className="d-flex centralizado">
      <div className="d-flex flex-column edit-car container-md ">
        <h2 className="text-center">
          {id ? "Editar Carro" : "Adicionar Carro"}
        </h2>
        <div className="d-flex flex-row align-items-center justify-content-between m-2">
          <label className="me-2">Nome:</label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control form-control-sm w-auto"
              value={editedCarro.nome}
              onChange={(e) =>
                setCarroEditado({ ...editedCarro, nome: e.target.value })
              }
            />
          </div>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between m-2">
          <label className="me-2">Marca:</label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control form-control-sm w-auto"
              value={editedCarro.marca}
              onChange={(e) =>
                setCarroEditado({ ...editedCarro, marca: e.target.value })
              }
            />
          </div>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between m-2">
          <label className="me-2">Cor:</label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control form-control-sm w-auto"
              value={editedCarro.cor}
              onChange={(e) =>
                setCarroEditado({ ...editedCarro, cor: e.target.value })
              }
            />
          </div>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-between m-2">
          <label className="me-2">Ano:</label>
          <div className="d-flex justify-content-center">
            <input
              type="number"
              className="form-control form-control-sm w-auto"
              value={editedCarro.ano}
              onChange={(e) =>
                setCarroEditado({ ...editedCarro, ano: e.target.value })
              }
            />
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around">
          <button className="btn btn-primary" onClick={handleSave}>
            {id ? "Salvar" : "Adicionar"}
          </button>
          <button className="btn btn-danger" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarForm;
