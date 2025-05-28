


/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { captainDataContext } from '../context/CaptainContext';
import axios from 'axios';

export default function CaptainProtectWrapper({ children }) {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(captainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If there's no token, redirect immediately
    if (!token) {
      navigate('/captain-login');
      return;
    }

    // Fetch captain profile if token exists
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/captain/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (res.status === 200) {
          setCaptain(res.data.captain);
        }
      } catch (err) {
        console.error('Error in CaptainProtectWrapper:', err);
        localStorage.removeItem('token');
        navigate('/captain-login');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [navigate, setCaptain, token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
