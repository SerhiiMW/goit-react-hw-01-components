import data from '../../data/data.json';
import styles from './statistics.module.css';

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

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
    <>
    <section className={styles.statistics}>
      {data.title && <h2 className={styles.title}>{data.title}</h2>}
      <StatisticsList items={data} />
    </section>
    </>
  );
};


// const liEl = document.querySelector(".styles.item")
// liEl.style.backgroundColor = getRandomHexColor;

export default Statistics;
