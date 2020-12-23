import { useState, useEffect } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import categories from './data/categoriesOfFeedback.js';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const addFeedback = event => {
    const { feedback } = event.target.dataset;
    switch (feedback) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  const countPositiveFeedbackPercentage = () => {
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={categories} onLeaveFeedback={addFeedback} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   // Приходит событие.Деструктуризация, определение того что именно на кнопку нажали event.target
//   addFeedback = ({ target }) => {
//     // деструктуризация=>определение на какую конкретно кнопку нажали по data атрибуту feedback ????????
//     const { feedback } = target.dataset;
//     // стрелочная функция вовзращает обьект/слайс, например{'good'(значение свойства feedback [feedback]) : prevState
//     // именно кнопки с дата-атрибутом feedback + 1}
//     this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     // если total>0 тогда идёт вичисление, если меньне нуля, тогда %позитивных отзывов равен нулю
//     return total ? Math.round((good / total) * 100) : 0;
//     // Или ещё вариант:  Math.round(good / total) * 100 || 0;
//     // "||" возвращает первое истинное значение или последнее, если такое значение не найдено.
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={categories}
//             onLeaveFeedback={this.addFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
