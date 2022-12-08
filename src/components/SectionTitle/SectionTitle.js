import PropTypes from 'prop-types';

export const SectionTitle = ({ children }) => {
  return (
    <section>
      <h1>Please leave feedback</h1>
      {children}
    </section>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};