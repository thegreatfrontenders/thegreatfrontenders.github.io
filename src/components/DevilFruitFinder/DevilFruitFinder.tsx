import React, { useState, useEffect, FC } from 'react';
import styles from './DevilFruitFinder.module.css';


interface DevilFruitFinderProps { }

const DevilFruitFinder: FC<DevilFruitFinderProps> = () => {
  const [numFruits, setNumFruits] = useState(10);

  return (
    <div className={styles.DevilFruitFinder} data-testid="DevilFruitFinder">
      testing routing
    </div>
  );
}

export default DevilFruitFinder;
