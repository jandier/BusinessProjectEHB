import { connect } from 'react-redux';
import Home from '../components/home';
import { getItems, toggleItem } from './home-actions';
import { getAllItems } from './home-selectors';

const mapStateToProps = state => ({
  items: getAllItems(state),
});

const mapDispatchToProps = { getItems, toggleItem };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
