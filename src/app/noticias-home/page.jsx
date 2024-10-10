"use client"

import { useEffect, useState} from "react";
import UltimasNoticiasHome from "../../componetsFrondend/UltimasNoticiasHome"





 function HomeNoticiasPrincipal(){
  const [noticia, setNoticia] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/noticia`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        setNoticia(data);
      })
      .catch(err => {
        console.log(123123);
      });
  }, []);

  const ultimaNoticia =   noticia
  const aux = [...ultimaNoticia].reverse() 
  
    return (
      <div  >
        {ultimaNoticia?.length > 0  ? (
          <>
          <div>
            <h2 className="text-center my-5 text-blue-800 text-2xl font-bold bg-blue-100" >
              <span className="text-blue-800  font-light">Ultimas</span>{" "}
              Noticias
            </h2>
            <UltimasNoticiasHome ultimaNoticia={aux} />
          </div>
          

          </>
        ) : (
          <h3>Final...</h3>
        )}
      </div>
    );
  }
export default HomeNoticiasPrincipal;

