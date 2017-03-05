import { connect } from 'react-redux'
import Disks from '../components/Disks'

const mapStateToProps = state => ({
  disks: state.server.disk
})

export default connect(mapStateToProps, null)(Disks)
