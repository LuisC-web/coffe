import Image from 'next/image';
import useKiosco from '../hooks/useKiosco';
import Categoria from './Categoria';
const SliderBar = () => {
  const { categorias } = useKiosco();
  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="Logo imagen"
      />
      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria}></Categoria>
        ))}
      </nav>
    </>
  );
};

export default SliderBar;
