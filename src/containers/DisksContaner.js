import { connect } from 'react-redux'
import Disks from '../components/Disks'
import * as Actions from '../actions/diskAction'

const mapStateToProps = state => ({
  disks: state.server.disk
})

const mapDispatchProps = dispatch => ({
  getDisks: () => {
    dispatch(Actions.getDisks())
  }
})

export default connect(mapStateToProps, mapDispatchProps)(Disks)
