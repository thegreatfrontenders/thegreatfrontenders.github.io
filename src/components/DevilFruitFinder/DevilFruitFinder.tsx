import React, { useState, FC } from 'react';
import styles from './DevilFruitFinder.module.css';


interface DevilFruitFinderProps { }

const DevilFruitFinder: FC<DevilFruitFinderProps> = () => {
  const [numFruits, setNumFruits] = useState(10);

  return (


    <div >
        <div>
            <h2>devil fruit SHIT</h2>
        </div>
        <div className={styles.DevilFruitFinder} data-testid="DevilFruitFinder"></div>
    </div>
  );
}

export default DevilFruitFinder;
