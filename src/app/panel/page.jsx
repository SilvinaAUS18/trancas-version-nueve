import Image from "next/image";
import trancas from '../../assets/imagenes/actualidad.jpg'
import { FaAngleDoubleRight } from "react-icons/fa";
import { FcRight } from "react-icons/fc";
export default function Home() {
  return (
    <div className="container flex flex-col md:flex-row gap-5 lg:h-[calc(60vh-4rem)] sm:h-auto">
      <div className="basis-full flex flex-col justify-center md:basis-2/3">
        <p className="special-word text-2xl font-extrabold text-blue-700">MUNICIPALIDAD DE TRANCAS</p> <br />
        <h1 className="pb-5 text-blue-950 text-2xl font-bold"> PANEL </h1>

        <h1 className="pb-5 text-blue-700 text-xl font-bold">
          A traves de este Panel puede <br /><br />
          <span className=" flex mx-4 "> <FaAngleDoubleRight  className="mx-4 my-auto"/> Cargar Noticias </span>  <br />
          <span className="flex mx-4"> <FaAngleDoubleRight  className="mx-4 my-auto"/> Cargar Calendario </span>  <br />
          <span className="flex mx-4"> <FaAngleDoubleRight  className="mx-4 my-auto"/> Ver las  Noticias Cargadas /Editar / Eliminar  </span> <br />
          <span className="flex mx-4"><FaAngleDoubleRight  className="mx-4 my-auto"/>Ver el Calendario  Cargado /Editar / Eliminar </span> 
        </h1>

        <p className="text-lg font-bold text-blue-800 flex mx-4"><FcRight  className="mx-4 my-auto" />Se necesita tener usuario para poder acceder al panel de Carga de Noticias / Calendario.</p><br />
        <p className="text-lg font-bold text-blue-800 flex mx-4"> <FcRight  className="mx-4 my-auto" /> Si no tiene Usuario == Registrar  </p>
      </div>

      <div className="hidden md:block basis-1/3 my-auto">
        <Image 
          src={trancas}
          alt="trancas"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
