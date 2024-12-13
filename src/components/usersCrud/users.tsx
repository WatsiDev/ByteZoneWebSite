import React, { useState } from 'react';
import UserTable from './UserTable';
import UserForm from './UserForm';


const Dashboard = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const refreshTable = () => {
    setSelectedUser(null); // Clear selected product to trigger table refresh
    setIsModalOpen(false); // Close the modal after success
  };

  const openModal = (user: any) => {
    setSelectedUser(user); // Set the product to be edited
    setIsModalOpen(true); // Open the modal
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Usuarios</h1>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2" onClick={openModal}>
        New User
      </button>
      <UserTable onEdit={openModal} />
      
      {/* Modal for editing product */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <UserForm user={selectedUser} onSuccess={refreshTable} />
            <button
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md"
              onClick={() => setIsModalOpen(false)} // Close modal
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
