import transactions from '../../data/transactions.json';
import styles from './transaction.module.css';


const TransactionHistory = ({ items = [] }) => {
<TransactionHistory items={transactions} />;
  const elements = items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>,
      <td>{item.amount}</td>,
      <td>{item.currency}</td>,
    </tr>
  ));
  console.log({elements})
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {elements}
      </tbody>
    </table>
  );
};



export default TransactionHistory;

