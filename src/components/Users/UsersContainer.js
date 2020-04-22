import { connect } from 'react-redux';
import Users from './Users';
import { users, limit, page } from '../../redux/users/usersSelectors';
import { getUsersPaginate } from '../../redux/users/usersOperations';

const mapStateToProps = state => ({
  page: page(state),
  limit: limit(state),
  users: users(state),
});

const mapDispatchToProps = {
  getUsersPaginate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
