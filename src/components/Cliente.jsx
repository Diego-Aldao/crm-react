import { useNavigate } from "react-router-dom";
function Cliente({ cliente, handleEliminar }) {
  const navigate = useNavigate();
  const { nombre, email, empresa, telefono, notas, id } = cliente;
  return (
    <>
      <tr className="border-b hover:bg-gray-50">
        <td className="p-3 text-center">{nombre}</td>
        <td className="p-3 text-center">
          <p>
            <span className="text-gray-800 uppercase font-bold">Email: </span>
            {email}
          </p>
          <p>
            <span className="text-gray-800 uppercase font-bold">Tel: </span>
            {telefono}
          </p>
        </td>
        <td className="p-3 text-center">{empresa}</td>
        <td className="p-3 text-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-1 capitalize"
            type="button"
            onClick={() => {
              navigate(`/clientes/${id}`);
            }}
          >
            Ver
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-1 capitalize mt-3"
            type="button"
            onClick={() => {
              navigate(`/clientes/editar/${id}`);
            }}
          >
            Editar
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 block w-full text-white p-1 capitalize mt-3"
            type="button"
            onClick={() => {
              handleEliminar(id);
            }}
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
}

export default Cliente;
