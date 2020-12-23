// import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    //   react фрагмент: https://ru.reactjs.org/docs/fragments.html#short-syntax
    <>
      {/* Если total>0, тогда рендерится список */}
      {total > 0 && (
        <ul className={s.list}>
          <li className={s.item}>Good: {good}</li>
          <li className={s.item}>Neutral: {neutral}</li>
          <li className={s.item}>Bad: {bad}</li>
          <li className={s.item}>Total: {total}</li>
          <li className={s.item}>Positive feedback: {positivePercentage}</li>
        </ul>
      )}

      {/* если total=0, отображается сообщение */}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

export default Statistics;
