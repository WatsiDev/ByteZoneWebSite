import React, { useEffect, useState } from 'react';
import { listUsers, deleteUser } from '../../apiServices/apiService';

interface User {
    id: number,
    username: string,
    email: string,
    password: string,
    rol: string
}

const UserTable: React.FC<{ onEdit: (user: User) => void }> = ({ onEdit }) => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    console.log("fetchUsers is running"); // Agrega este log para depurar
    try {
      const data = await listUsers();
      console.log("API response:", data); // Verifica si llegan los datos
      setUsers(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

  const handleDelete = async (id: number) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("useEffect is running");
    fetchUsers();
  }, []);
  

  return (
    <table className="table-auto w-full text-left">
      <thead>
        <tr>
          <th className="border px-4 py-2">Nombre de usuario</th>
          <th className="border px-4 py-2">Email</th>
          <th className="border px-4 py-2">Rol</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border px-4 py-2">{user.username}</td>
            <td className="border px-4 py-2">{user.email}</td>
            <td className="border px-4 py-2">{user.rol}</td>
            <td className="border px-4 py-2">
              <button
                className="text-blue-500 hover:underline mr-2"
                onClick={() => onEdit(user)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:underline"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
