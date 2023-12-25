import data from '../../data/data.json';
import styles from './statistics.module.css';


const StatisticsList = ({ items }) => {
  return (
    <ul className={styles.statList}>
      {items.map(item => (
        <li className={styles.item} key={item.id} >
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

const Statistics = () => {
  return (
    <div className={styles.statistics}>
    <section className={styles.statisticsSection}>
      {data.title && <h2 className={styles.title}>{data.title}</h2>}
      <StatisticsList items={data} />
    </section>
    </div>
  );
};


export default Statistics;
