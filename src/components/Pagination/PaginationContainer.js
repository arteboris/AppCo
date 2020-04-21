import { connect } from 'react-redux';
import Pagination from './Pagination';
import page from '../../redux/page/pageSelectors';
import totalPages from '../../redux/totalPages/totalPagesSelectors';

const mapStateToProps = state => ({
  page: page(state),
  totalPages: totalPages(state),
});

export default connect(mapStateToProps)(Pagination);
