import React from 'react'
import {Button,Tabs} from 'antd'
import axios from '../utils/axios';

class WaiterDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      waiter:{}
    }
  }

  componentDidMount(){
    let payload = this.props.location.payload;
    if(payload){
     
     //将page页面传递过来的值设置到局部状态中
      this.setState({waiter:payload})
    } else {
      this.props.history.push("/waiter")
    }
  }

  render(){
    const { TabPane } = Tabs;
    
    function callback(key) {
      console.log(key);
    }

    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="基本信息" key="1">
            <p>{this.state.waiter.realname}</p>
            <p>{this.state.waiter.telephone}</p>
            <img alt="图片找不到..." src={"http://134.175.154.93:8888/group1/"+this.state.waiter.photo}/>
          </TabPane>
        </Tabs>
        <Button type="link" onClick={()=>{this.props.history.goBack()}}>返回</Button>
      </div>
    )
  }
}

export default WaiterDetails;