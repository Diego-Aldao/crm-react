import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function VerCliente() {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
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

  return cargando ? (
    <p>Cargando...</p>
  ) : Object.keys(cliente).length === 0 ? (
    <p>No hay resultados</p>
  ) : (
    <div>
      <h1 className="font-black text-4xl text-blue-700 capitalize">
        ver cliente: {cliente.nombre}
      </h1>
      <p className="mt-2">Informacion del cliente</p>
      {cliente.nombre && (
        <p className="text-4xl text-gray-600 mt-4">
          <span className="uppercase font-bold text-gray-800">Nombre: </span>
          {cliente.nombre}
        </p>
      )}
      {cliente.email && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="uppercase font-bold text-gray-800">Email: </span>
          {cliente.email}
        </p>
      )}

      {cliente.empresa && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="uppercase font-bold text-gray-800">Empresa: </span>
          {cliente.empresa}
        </p>
      )}

      {cliente.telefono && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="uppercase font-bold text-gray-800">Telefono: </span>
          {cliente.telefono}
        </p>
      )}
      {cliente.notas && (
        <p className="text-2xl text-gray-600 mt-4">
          <span className="uppercase font-bold text-gray-800">Notas: </span>
          {cliente.notas}
        </p>
      )}
    </div>
  );
}

export default VerCliente;