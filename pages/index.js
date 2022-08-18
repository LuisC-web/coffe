import Head from 'next/head';
import Image from 'next/image';
import Layout from '../layout/layout';
import useKiosco from '../hooks/useKiosco';
export default function Home() {
  const { categoriaActual } = useKiosco();
  console.log(categoriaActual);
  return (
    <Layout pagina={categoriaActual.nombre}>
      <h1>Inicio</h1>
    </Layout>
  );
}
