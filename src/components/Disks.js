import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Table } from 'react-bootstrap'

class Disks extends Component {
  constructor(props) {
    super(props)
    this.click = this.click.bind(this)
  }
  componentWillMount (){
    console.log('组件渲染前调用')
    const { getDisks } = this.props
    getDisks()
  }
  click() {
    const { getDisks } = this.props
    getDisks()
  }
  deltClick(data){
    const { deltClick, getDisks} = this.props
    deltClick(data).then(()=>{
      getDisks()
    })
  }
  saveClick(){
    const { saveClick ,getDisks} = this.props
    let data ={}
    data.first_name=document.getElementById("first").value
    data.last_name =document.getElementById("last").value
    saveClick(data).then(()=>{
      getDisks()
    })
  }
  render() {
    const { disks } = this.props
    return (
      <div>

        <Table striped bordered condensed hover  >
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td><input type="text" id="first" placeholder="输入..." /></td>
              <td><input type="text" id="last" placeholder="输入..." /></td>
              <td>
                <button type="button" onClick={() => this.saveClick()} >添加</button>
                <button type="button" onClick={() => this.click()} > 查询 </button>
              </td>
            </tr>
            {
              disks.ids.map((item, i) => {
                return (
                  <tr key={i} >
                    <td>{disks.entities[item].id}</td>
                    <td>{disks.entities[item].first_name}</td>
                    <td>{disks.entities[item].last_name}</td>
                    <td>
                      <button type="button" onClick={() => this.deltClick(disks.entities[item].id)} >删除</button>&emsp;
                      <button type="button" >修改</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Disks
