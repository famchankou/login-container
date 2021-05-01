import React from 'react';
import { connect } from 'react-redux';
import PageTemplate from '../../templates/PageTemplate';
import { clearMessage } from '../../store/errors';

const mapStateToProps = state => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => {
  return {
    clearError: page => {
      dispatch(clearMessage(page));
    },
  };
};

const withError = page => {
  return WrappedComponent => {
    const componentsError = ({ errors, clearError, ...props }) => {
      const error = errors[page] || '';
      
      return (
        <PageTemplate error={error} clearError={clearError} >
          <WrappedComponent {...props} error={error}/>
        </PageTemplate>
      );
    };
    return connect(mapStateToProps, mapDispatchToProps)(componentsError);
  };
};

export default withError;
