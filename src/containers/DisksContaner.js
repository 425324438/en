import { connect } from 'react-redux'
import Disks from '../components/Disks'
import * as Actions from '../actions/diskAction'

const mapStateToProps = state => ({
  disks: state.server.disk
})

const mapDispatchProps = dispatch => ({
  getDisks: () => {
    dispatch(Actions.getDisks())
  },
  deltClick: (data) => {
    return new Promise((resolve, reject)=>{
      dispatch(Actions.deltClick(data,resolve,reject))
    })
  },
  saveClick: (data) => {
    return new Promise((resolve, reject)=>{
      dispatch(Actions.saveClick(data,resolve,reject))
    })
  }
})



export default connect(mapStateToProps, mapDispatchProps)(Disks)
