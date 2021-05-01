import { connect } from 'react-redux';
import DashboardPage from '../components/dashboard-page';
import withError from '../components/hoc/withError';

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default withError('dashboard')(
  connect(mapStateToProps, null)(DashboardPage)
);
