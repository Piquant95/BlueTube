import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './'; 
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI
  }, [id])
  return (
    <div>ChannelDetail</div>
  )
}

export default ChannelDetail