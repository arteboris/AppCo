import { connect } from 'react-redux';
import Pagination from './Pagination';
import page from '../../redux/page/pageSelectors';
import totalPages from '../../redux/totalPages/totalPagesSelectors';
import { changePage } from '../../redux/page/pageOperations';

const mapStateToProps = state => ({
  page: page(state),
  totalPages: totalPages(state),
});

const mapDispatchToProps = {
  changePage: number => changePage(number),
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
