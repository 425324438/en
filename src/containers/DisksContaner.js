import { connect } from 'react-redux'
import Disks from '../components/Disks'
import * as Actions from '../actions/diskAction'

const mapStateToProps = state => ({
  disks: state.server.disk
})

const mapDispatchProps = dispatch => ({
  getDisks: (data) => {
    return new Promise((data,resolve,reject)=>{
      dispatch(Actions.getDisks(data,resolve,reject))
    })
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
