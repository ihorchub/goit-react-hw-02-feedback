import { Component } from 'react';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addRespond = e => {
    const selectedOption = e.target.name;

    if (selectedOption === 'good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    } else if (selectedOption === 'neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    } else if (selectedOption === 'bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);

    let totalFeedbacks = 0;

    for (const value of values) {
      totalFeedbacks += value;
    }
    return totalFeedbacks;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = this.countTotalFeedback();
    const goodFeedbacks = this.state.good;
    return Number(((goodFeedbacks * 100) / totalFeedbacks).toFixed());
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <SectionTitle>
        <FeedbackOptions onLeaveFeedback={this.addRespond} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </SectionTitle>
    );
  }
}
