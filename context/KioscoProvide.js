import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
const KioscoContexto = createContext();

const KioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const getCategoria = async () => {
    const { data } = await axios('/api/categoria');
    setCategorias(data);
  };
  useEffect(() => {
    getCategoria();
  }, []);
  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  const handleCategoriaActual = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
  };
  return (
    <KioscoContexto.Provider
      value={{ categorias, handleCategoriaActual, categoriaActual }}
    >
      {children}
    </KioscoContexto.Provider>
  );
};

export default KioscoContexto;
export { KioscoProvider };
