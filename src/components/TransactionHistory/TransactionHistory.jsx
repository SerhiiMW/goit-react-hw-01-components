import styles from './transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.transactionWrapper}>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th className={styles.transactionTitle}>Type</th>
            <th className={styles.transactionTitle}>Amount</th>
            <th className={styles.transactionTitle}>Currency</th>
          </tr>
        </thead>
        <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={styles.transaction}>{item.type}</td>
            <td className={styles.transaction}>{item.amount}</td>
            <td className={styles.transaction}>{item.currency}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
