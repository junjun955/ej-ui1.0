import React from 'react'
import {Button,Tabs} from 'antd'
import axios from '../utils/axios';

class CustomerDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      waiter:{}
    }
  }

  componentDidMount(){
    let payload = this.props.location.payload;
    if(payload){
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
            <img alt="图片找不到..." src={this.state.waiter.photo}/>
          </TabPane>
        </Tabs>
        <Button type="link" onClick={()=>{this.props.history.goBack()}}>返回</Button>
      </div>
    )
  }
}

export default CustomerDetails;