import styles from './statistics.module.css';


const Statistics = ( { stats } ) => {
  return (
    <div className={styles.statistics}>
    <section className={styles.statisticsSection}>
      {stats.title && <h2 className={styles.title}>{stats.title}</h2>}
      <ul className={styles.statList}>
      {stats.map(stat => 
        <li className={styles.item} key={stat.id} >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      )}
    </ul>
    </section>
    </div>
  );
};


export default Statistics;
