import { connect } from 'react-redux';
import App from './app';
import { showChangeName, initialName } from './../actions/actionState';

mapStateToProps = ({ app }) =>({
  name: app.nameReducer.name,
})

mapDispatchToProps = dispatch => ({
  initialName: () => {
    dispatch(initialName())
  },
  showChangeName: () => {
    dispatch(showChangeName());
  }
})

export default connect(mapDispatchToProps, mapStateToProps)(App)
