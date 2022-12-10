import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <button key={option} type="button" name={option} onClick={onLeaveFeedback}>
      {option}
    </button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
