import transactions from '../../data/transactions.json';
import styles from './transaction.module.css';

const Transaction = ({ items }) => {
  return items.map(item => (
    <tr key = {item.id} >
      <td className={styles.transaction}>{item.type}</td>
      <td className={styles.transaction}>{item.amount}</td>
      <td className={styles.transaction}>{item.currency}</td>
    </tr>
  ));
};

const TransactionHistory = ( { id, type, amount, currency } ) => {
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
          <Transaction items={transactions} />
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
