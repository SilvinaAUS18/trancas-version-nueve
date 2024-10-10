
import React from "react";
import Image from "next/image";
import Link from "next/link";
import demoImage from "../assets/imagenes/actualidad.jpg";

//import moment from "moment";

const UltimasNoticias = ({ ultimaNoticia }) => {
  return (
    <section className="  grid grid-cols gap-10 text-blue-950  ">
        {ultimaNoticia?.length > 0 &&
          ultimaNoticia?.map((item, index) => (
            <div  key={index}  className="  container ">

              <Link href={`/panel/noticias/${item?._id}`} >
              <div className=" grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-8 text-blue-800 ">
                <div className="w-full h-auto mx-auto ">
                <p className="text-primaryColor font-extrabold ">{item?.category}</p>

                  <Image
                    src={ item?.imagen ?  item.imagen?.url : demoImage }
                    alt="blog image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="lg:w-[calc(50vh-1rem)] sm:w-full sm:h-[calc(30vh-1rem)] mx-auto lg:h-[calc(40vh-2rem)] rounded-lg mb-2"
                  />
                 </div>
                 
                 
                    <div className=" container  mx-auto grid grid-cols-1 p-5">
                          <h2 className="text-blue-950  flex-row text-[1.5rem] text-justify my-4 font-bold">{item?.titulo}</h2>
                          <p className="text-blue-950  text-[1rem] mx-4 text-justify my-2 italic font-bold ">{item?.bajada}</p>
                          <p className="text-blue-950  text-lg mx-2 text-justify my-2">{item?.texto}</p>

                          <p className="text-blue-950  text-lg mx-2 text-justify my-2">{item?.resumen}</p>

                  </div>
               </div>
              </Link>
              </div>
          ))}
      <Link href="/panel" className="text-xl  font-bold bg-gray-900 text-white px-1 rounded-2xl "> Volver al panel</Link>
     
      </section>
  );
};

export default UltimasNoticias;
