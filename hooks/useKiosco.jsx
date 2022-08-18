import React from 'react';
import KioscoContexto from '../context/KioscoProvide';
import { useContext } from 'react';
const useKiosco = () => {
  return useContext(KioscoContexto);
};

export default useKiosco;
