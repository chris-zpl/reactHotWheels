import React, { createContext, useState, useContext, useEffect } from "react";
import useApi from "../../Hooks/useApi";

const CarContext = createContext();

export function useCarContext() {
  return useContext(CarContext);
}

export function CarDetail({ children }) {
  const apiUrl = "http://localhost:5000/cars";
  const { data: carsData, error } = useApi(apiUrl);
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    if (!error && carsData.length > 0) {
      setCarros(carsData);
    }
  }, [carsData, error]);

  function addCarro(carro) {
    if (
      carro.name  === "" ||
      carro.brand === "" ||
      carro.color === "" ||
      carro.year  === ""
    ) {
      return;
    }
    setCarros([...carros, carro]);
  }

  function updateCarro(id, updatedCarro) {
    const novosCarros = carros.map((carro) =>
      carro.id === id ? updatedCarro : carro
    );
    setCarros(novosCarros);
  }

  function eliminarCarro(id) {
    const novaListaDeCarros = carros.filter((carro) => carro.id !== id);
    setCarros(novaListaDeCarros);
  }

  return (
    <CarContext.Provider
      value={{ carros, addCarro, updateCarro, eliminarCarro, error }}
    >
      {children}
    </CarContext.Provider>
  );
}
