import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class Disks extends Component {
  constructor(props) {
    super(props)
    this.state ={
      updateId : null,
      updateFirstName:null,
      updateLastName:null
    };
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
  update(id){
    /**
    1.先设置状态 赋值update id
    2.点击修改按钮 修改 状态 渲染页面
    3.点击修改后 后台查询数据渲染页面
    4.点击保存 请求后台 update 数据
    5.修改完成，页面重新 查询 update ID 状态恢复为 null
    */
    const { getDisks } = this.props
    const {updateId} = this.state
    if(updateId){
      this.setState({updateId:null})
    }else{
      this.setState({updateId:id})

      // getDisks(id)
    }



  }
  render() {
    const { disks } = this.props
    const {updateId} = this.state
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
                    <td>
                       {
                        updateId === disks.entities[item].id ?
                          (
                          <input
                            type="text"
                            value={disks.entities[item].first_name}
                          />
                          )
                          :disks.entities[item].first_name
                        }
                    </td>
                    <td>
                        {
                          updateId === disks.entities[item].id ?
                          (
                          <input
                            type="text"
                            value={disks.entities[item].first_name}
                          />
                          )
                          :disks.entities[item].last_name
                        }
                    </td>
                    <td>
                      <button type="button" onClick={() => this.deltClick(disks.entities[item].id)} >删除</button>&emsp;
                      <button type="button" onClick={() => this.update(disks.entities[item].id)}>
                      {updateId === disks.entities[item].id ? '保存':'修改'}
                      </button>
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
