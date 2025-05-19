import React, { useState, useEffect } from 'react';
import { DevilFruit } from '../../types';
import DFCarousel from './DFCarousel';

interface DevilFruitsProps {}

function DevilFruits () {
  const [fruits, setFruits] = useState<DevilFruit[]>([]);

  useEffect(() => {
    
  })

  return (
  <div>
    DevilFruits Component
    <DFCarousel />
  </div>);
};

export default DevilFruits;
