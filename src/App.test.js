import React from 'react';
import { render } from '@testing-library/react';

/* Funções para teste */
function addCarro(carro, carros, setCarros) {
  if (
    carro.name === '' ||
    carro.brand === '' ||
    carro.color === '' ||
    carro.year === ''
  ) {
    return;
  }
  setCarros([...carros, carro]);
}

function updateCarro(id, updatedCarro, carros, setCarros) {
  const novosCarros = carros.map((carro) =>
    carro.id === id ? updatedCarro : carro
  );
  setCarros(novosCarros);
}

function eliminarCarro(id, carros, setCarros) {
  const novaListaDeCarros = carros.filter((carro) => carro.id !== id);
  setCarros(novaListaDeCarros);
}

/* Testes */
test('Função addCarro adiciona um carro à lista', () => {
  const mockSetCarros = jest.fn();
  const carros = [];
  const carro = { id: 1, name: 'Fusca', brand: 'Volkswagen', color: 'Azul', year: '1976' };

  addCarro(carro, carros, mockSetCarros);

  expect(mockSetCarros).toHaveBeenCalledWith([carro]);
});

test('Função addCarro não adiciona um carro se um campo estiver vazio', () => {
  const mockSetCarros = jest.fn();
  const carros = [];
  const carro = { id: 1, name: '', brand: 'Volkswagen', color: 'Azul', year: '1976' };

  addCarro(carro, carros, mockSetCarros);

  expect(mockSetCarros).not.toHaveBeenCalled();
});

test('Função updateCarro atualiza um carro na lista', () => {
  const mockSetCarros = jest.fn();
  const carros = [{ id: 1, name: 'Fusca', brand: 'Volkswagen', color: 'Azul', year: '1976' }];
  const updatedCarro = { id: 1, name: 'Uno', brand: 'Fiat', color: 'Vermelho', year: '1984' };

  updateCarro(1, updatedCarro, carros, mockSetCarros);

  expect(mockSetCarros).toHaveBeenCalledWith([updatedCarro]);
});

test('Função eliminarCarro remove um carro da lista', () => {
  const mockSetCarros = jest.fn();
  const carros = [{ id: 1, name: 'Fusca', brand: 'Volkswagen', color: 'Azul', year: '1976' }];

  eliminarCarro(1, carros, mockSetCarros);

  expect(mockSetCarros).toHaveBeenCalledWith([]);
});