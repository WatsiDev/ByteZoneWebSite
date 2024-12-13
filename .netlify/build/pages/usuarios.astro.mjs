/* empty css                                     */
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_AzqMR3Zz.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_Bn5syghL.mjs';
import { c as listUsers, f as deleteUser, g as editUser, h as addUser, $ as $$DashboardButton } from '../chunks/dashboardButton_Cj_jylTz.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const UserTable = ({ onEdit }) => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    console.log("fetchUsers is running");
    try {
      const data = await listUsers();
      console.log("API response:", data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const handleDelete = async (id) => {
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
  return /* @__PURE__ */ jsxs("table", { className: "table-auto w-full text-left", children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("th", { className: "border px-4 py-2", children: "Nombre de usuario" }),
      /* @__PURE__ */ jsx("th", { className: "border px-4 py-2", children: "Email" }),
      /* @__PURE__ */ jsx("th", { className: "border px-4 py-2", children: "Rol" }),
      /* @__PURE__ */ jsx("th", { className: "border px-4 py-2", children: "Actions" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: users.map((user) => /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("td", { className: "border px-4 py-2", children: user.username }),
      /* @__PURE__ */ jsx("td", { className: "border px-4 py-2", children: user.email }),
      /* @__PURE__ */ jsx("td", { className: "border px-4 py-2", children: user.rol }),
      /* @__PURE__ */ jsxs("td", { className: "border px-4 py-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-blue-500 hover:underline mr-2",
            onClick: () => onEdit(user),
            children: "Edit"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-red-500 hover:underline",
            onClick: () => handleDelete(user.id),
            children: "Delete"
          }
        )
      ] })
    ] }, user.id)) })
  ] });
};

const UserForm = ({
  user,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
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
  }, [user]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Selected ${name}:`, value);
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being submitted:", formData);
    try {
      if (user?.id) {
        const updateUser = {
          ...formData,
          id: user.id
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
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 text-black", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "username", className: "block text-sm font-semibold", children: "username" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "username",
          name: "username",
          value: formData.username,
          onChange: handleChange,
          placeholder: "Username",
          className: "border p-2 w-full",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      " ",
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-semibold", children: "Email" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            value: formData.email,
            onChange: handleChange,
            placeholder: "example@gmail.com",
            className: "border p-2 w-full",
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "block text-sm font-semibold", children: "password" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            id: "password",
            name: "password",
            value: formData.password,
            onChange: handleChange,
            placeholder: "password",
            className: "border p-2 w-full",
            required: true
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "rol", className: "block text-sm font-semibold", children: "Rol" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          id: "rol",
          name: "rol",
          value: formData.rol,
          onChange: handleChange,
          placeholder: "rol",
          className: "border p-2 w-full",
          required: true
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("button", { type: "submit", className: "bg-blue-500 text-white px-4 py-2", children: [
      user?.id ? "Update" : "Add",
      " User"
    ] }) })
  ] });
};

const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const refreshTable = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };
  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-8 space-y-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: "Usuarios" }),
    /* @__PURE__ */ jsx("button", { type: "submit", className: "bg-blue-500 text-white px-4 py-2", onClick: openModal, children: "New User" }),
    /* @__PURE__ */ jsx(UserTable, { onEdit: openModal }),
    isModalOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg w-1/3", children: [
      /* @__PURE__ */ jsx(UserForm, { user: selectedUser, onSuccess: refreshTable }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "mt-4 px-4 py-2 bg-gray-500 text-white rounded-md",
          onClick: () => setIsModalOpen(false),
          children: "Close"
        }
      )
    ] }) })
  ] });
};

const $$Usuarios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="w-40 m-4"> ${renderComponent($$result2, "DashboardButton", $$DashboardButton, { "rute": "dashboard", "BtnLabel": "Productos" })} </div> ${renderComponent($$result2, "Users", Dashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/dev/ByteZoneWebSite/src/components/usersCrud/users", "client:component-export": "default" })} </main> ` })}`;
}, "C:/dev/ByteZoneWebSite/src/pages/usuarios.astro", void 0);

const $$file = "C:/dev/ByteZoneWebSite/src/pages/usuarios.astro";
const $$url = "/usuarios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Usuarios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
