import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types';
export const TransactionHistory = ({ items }) => (
    <table className={css.TransactionHistory}>
        <thead className={css.rowHead}>
        <tr className={css.rowValues}>
            <th className={css.columnHead}>Type</th>
            <th className={css.columnHead}>Amount</th>
            <th className={css.columnHead}>Currency</th>
        </tr>
        </thead>

        <tbody>
        {items.map(item => (
            <tr key={item.id} className={css.rowValues}>
            <td className={css.transactionData}>{item.type}</td>
            <td className={css.transactionData}>{item.amount}</td>
            <td className={css.transactionData}>{item.currency}</td>
            </tr>
        ))}
        </tbody>
    </table>
);

TransactionHistory.protoType = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
  };