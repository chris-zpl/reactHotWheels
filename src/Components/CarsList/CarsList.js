import React from "react";
import { useNavigate } from "react-router-dom";
import { useCarContext } from "../CarDetail/CarDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";

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
    <div className="centralizado">
      <h2 className="text-center">Lista de Carros</h2>
      {carros.length === 0 ? (
        <p className="text-center">Sem resultados</p>
      ) : (
        carros.map((carro) => (
          <div key={carro.id} className="col my-cars">
            <span>
              {carro.nome} - {carro.marca}
            </span>
            <div className="icone">
              <span title="Editar" onClick={() => handleEdit(carro.id)}>
                <FontAwesomeIcon icon={faPen} />
              </span>
              <span title="Eliminar" onClick={() => handleDelete(carro.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CarsList;
