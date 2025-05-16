import React, { FC } from 'react';
import styles from './DevilFruits.module.css';

interface DevilFruitsProps {}

const DevilFruits: FC<DevilFruitsProps> = () => (
  <div className={styles.DevilFruits} data-testid="DevilFruits">
    DevilFruits Component
  </div>
);

export default DevilFruits;
