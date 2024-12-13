import React, { useState, useEffect } from "react";
import { addUser, editUser } from "../../apiServices/apiService";

interface User{
    id?: number;
    username: string;
    email: string;
    password: string;
    rol: string;
}

const UserForm: React.FC<{ user?: User; onSuccess: () => void }> = ({
  user,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<User>({
    username: user?.username || "",
    email: user?.email || "",
    password: user?.password || "",
    rol: user?.rol || ""
  });

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
        password: user.password,
        rol: user.rol
      });
    }
  }, [user]); // Este hook se ejecuta cada vez que 'user' cambia

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
  
    // Verifica el valor del select
    console.log(`Selected ${name}:`, value); // Aquí puedes ver el valor que se selecciona
  
    setFormData({
      ...formData,
      [name]: value
    });
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ver el contenido que se enviará al servidor
    console.log("Form data being submitted:", formData);
    try {
      if (user?.id) {
        const updateUser = {
          ...formData,
          id: user.id,
        };
        await editUser(user.id, updateUser);
      } else {
        await addUser(formData);
      }
      onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-black">
      {/* Descripción */}
  <div>
    <label htmlFor="username" className="block text-sm font-semibold">username</label>
    <input
      type="text"
      id="username"
      name="username"
      value={formData.username}
      onChange={handleChange}
      placeholder="Username"
      className="border p-2 w-full"
      required
    />
  </div>

  <div className="grid grid-cols-2 gap-4"> {/* Se usa grid para dos columnas */}
    {/* Precio */}
    <div>
      <label htmlFor="email" className="block text-sm font-semibold">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@gmail.com"
        className="border p-2 w-full"
        required
      />
    </div>

    {/* Stock */}
    <div>
      <label htmlFor="password" className="block text-sm font-semibold">password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="password"
        className="border p-2 w-full"
        required
      />
    </div>
  </div>


  {/* Marca */}
  <div>
    <label htmlFor="rol" className="block text-sm font-semibold">Rol</label>
    <input
      type="text"
      id="rol"
      name="rol"
      value={formData.rol}
      onChange={handleChange}
      placeholder="rol"
      className="border p-2 w-full"
      required
    />
  </div>

  {/* Botón de envío */}
  <div>
    <button type="submit" className="bg-blue-500 text-white px-4 py-2">
      {user?.id ? "Update" : "Add"} User
    </button>
  </div>
    </form>
  );
};

export default UserForm;
