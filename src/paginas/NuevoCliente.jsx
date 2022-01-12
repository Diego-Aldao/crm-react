import Formulario from "../components/Formulario";

function NuevoCliente() {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-700 capitalize">
        nuevo cliente
      </h1>
      <p className="mt-3">
        Llena los siguientes campos para agregar un nuevo cliente
      </p>
      <Formulario />
    </>
  );
}

export default NuevoCliente;
