import { connect } from 'react-redux';
import Users from './Users';
import page from '../../redux/page/pageSelectors';
import limit from '../../redux/limit/limitSelectors';
import users from '../../redux/users/usersSelectors';
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
