import React, { FC } from 'react';
import styles from './DevilFruitFinder.module.css';

interface DevilFruitFinderProps {}

const DevilFruitFinder: FC<DevilFruitFinderProps> = () => (
  <div className={styles.DevilFruitFinder} data-testid="DevilFruitFinder">
    testing testing
  </div>
);

export default DevilFruitFinder;
