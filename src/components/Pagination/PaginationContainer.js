import { connect } from 'react-redux';
import Pagination from './Pagination';
import { page, totalPages } from '../../redux/users/usersSelectors';
import { changePage } from '../../redux/users/usersOperations';

const mapStateToProps = state => ({
  page: page(state),
  totalPages: totalPages(state),
});

const mapDispatchToProps = {
  changePage: number => changePage(number),
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
