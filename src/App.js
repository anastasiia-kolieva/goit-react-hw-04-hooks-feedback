import { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import categories from './data/categoriesOfFeedback.js';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Приходит событие.Деструктуризация, определение того что именно на кнопку нажали event.target
  addFeedback = ({ target }) => {
    // деструктуризация=>определение на какую конкретно кнопку нажали по data атрибуту feedback ????????
    const { feedback } = target.dataset;
    // стрелочная функция вовзращает обьект/слайс, например{'good'(значение свойства feedback [feedback]) : prevState
    // именно кнопки с дата-атрибутом feedback + 1}
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    // если total>0 тогда идёт вичисление, если меньне нуля, тогда %позитивных отзывов равен нулю
    return total ? Math.round((good / total) * 100) : 0;
    // Или ещё вариант:  Math.round(good / total) * 100 || 0;
    // "||" возвращает первое истинное значение или последнее, если такое значение не найдено.
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={categories}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;
