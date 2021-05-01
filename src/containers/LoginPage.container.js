import { connect } from 'react-redux';
import LoginPage from '../components/login-page';
import withError from '../components/hoc/withError';
import { loginFlow } from '../store/auth';

const mapStateToProps = state => ({
  isRequesting: state.auth.isRequesting,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = dispatch => {
  return {
    loginUser: values => {
      dispatch(loginFlow(values));
    },
  };
};

export default withError('login')(
  connect(mapStateToProps, mapDispatchToProps)(LoginPage)
);
