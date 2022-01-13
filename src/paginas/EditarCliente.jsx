import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario";

function EditarCliente() {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const respuesta = await fetch(url);
        console.log(respuesta);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(!cargando);
    };
    obtenerClienteAPI();
  }, []);
  return (
    <>
      {cliente?.nombre ? (
        <>
          <h1 className="font-black text-4xl text-blue-700 capitalize">
            editar cliente
          </h1>
          <p className="mt-3">
            Utiliza el formulario para editar los datos del cliente
          </p>
          <Formulario cargando={cargando} cliente={cliente} />
        </>
      ) : (
        <p>Cliente id no existe</p>
      )}
    </>
  );
}
export default EditarCliente;
