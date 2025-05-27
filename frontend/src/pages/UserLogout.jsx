
import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function UserLogout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    })
    .catch((err) => {
      console.error('Logout failed:', err.response?.data || err.message);
    });
  }, [navigate]);

  return <div>Logging out...</div>;
}

export default UserLogout;
