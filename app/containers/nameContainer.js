import { connect } from 'react-redux';
import App from './app';
import { showChangeName, initialName } from './../actions/actionState';

const mapStateToProps = ({ app }) =>({
  name: app.Name.name,
})

const mapDispatchToProps = () => ({
  initialName: () => {
    dispatch(initialName())
  },
  showChangeName: () => {
    dispatch(showChangeName());
  }
})

export default connect(mapDispatchToProps, mapStateToProps)(App)
