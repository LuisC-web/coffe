import React from 'react';
import Image from 'next/image';
import useKiosco from '../hooks/useKiosco';

const Categoria = ({ categoria }) => {
  const { nombre, icono, id } = categoria;
  const { categoriaActual, handleCategoriaActual } = useKiosco();

  return (
    <div
      className={`${
        categoriaActual?.id === id ? 'bg-amber-400' : ''
      }  flex items-center gap-2 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        alt={`Imagen de ${nombre}`}
        width={100}
        height={100}
        src={`/assets/img/icono_${icono}.svg`}
      ></Image>
      <button
        type="button"
        className="hover:cursor-pointer text-2xl font-bold"
        onClick={() => handleCategoriaActual(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
