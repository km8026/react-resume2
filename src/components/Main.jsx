import { useState } from 'react';
import styles from './Main.module.css';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
      <div className={styles.search}>
        <div className={styles.title}>
          <h2 onClick={() => { }}>CR</h2>
          <div className={styles.search_box}>
            <input
              type="text"
              placeholder="기업 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => {
              window.open(`https://www.nicebizinfo.com/ep/EP0100M001GE.nice?itgSrch=${searchTerm}`, '', 'width=1500px height=1500px');
            }}>
              검색
            </button>
          </div>
        </div>
      </div>
  );
};

export default Main;
