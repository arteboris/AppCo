import { connect } from 'react-redux';
import Users from './Users';
import { users, limit, page, sort } from '../../redux/users/usersSelectors';
import { getUsersPaginate, sortUsers } from '../../redux/users/usersOperations';

const mapStateToProps = state => ({
  page: page(state),
  limit: limit(state),
  users: users(state),
  sort: sort(state),
});

const mapDispatchToProps = {
  getUsersPaginate,
  sortUsers: query => sortUsers(query),
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
