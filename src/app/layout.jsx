import NavBarPrincipal from "../componetsFrondend/NavPrincipal";
import "./globals.css";
import Cabeza from "../componetsFrondend/Cabeza";
import Footer from '../componetsFrondend/Footer'

export const metadata = {
  title: "MUNICIPALIDAD DE TRANCAS",
  description: "Pagina institucional de la municipalidad de Trancas - Tucuman - Argentina",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body
      >
        <div className="container">
        <Cabeza/>
        <NavBarPrincipal/>
        {children}

        <Footer/>
        </div>
      </body>
    </html>
  );
}
