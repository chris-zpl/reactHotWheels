import React, { createContext, useState, useContext } from "react";
import carsData from '../../Data/carsData';

const CarContext = createContext();

export function useCarContext() {
  return useContext(CarContext);
}

export function CarDetail({ children }) {
  const [carros, setCarros] = useState(carsData);

  function addCarro(carro) {
    if (carro.nome === "" || carro.modelo || carro.cor === "" || carro.ano === ""){
      return; 
    }
    setCarros([...carros, carro]);
  }

  function updateCarro(id, updatedCarro) {
    const novosCarros = [...carros];
    novosCarros[id] = updatedCarro;
    setCarros(novosCarros);
  }

  function eliminarCarro(id) {
    const novaListaDeCarros = carros.filter((carro) => carro.id !== id);
    setCarros(novaListaDeCarros);
  }

  return (
    <CarContext.Provider value={{ carros, addCarro, updateCarro, eliminarCarro }}>
      {children}
    </CarContext.Provider>
  );
}