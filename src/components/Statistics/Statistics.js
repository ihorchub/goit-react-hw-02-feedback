import PropTypes from 'prop-types';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';
import { StatisticsBody } from 'components/StatisticsBody/StatisticsBody';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      {good !== 0 || neutral !== 0 || bad !== 0 ? (
        <StatisticsBody
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <NotificationMessage />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
