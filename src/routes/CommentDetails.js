import React from 'react'
import {Button,Tabs} from 'antd'

class CommentDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      customer:[],
      comment:[]
    }
  }

  componentDidMount(){
    let payload = this.props.location.payload;
    if(payload){
     // this.loadProducts();
     //将page页面传递过来的值设置到局部状态中
     this.setState({customer:payload})
     this.setState({comment:payload})
     // orderId -> 顾客信息
      
    
    } else {
      this.props.history.push("/customer")
      this.props.history.push("/comment")
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
          <TabPane tab="顾客信息" key="1">
            <p>{this.state.customer.realname}</p>
            <p>{this.state.customer.telephone}</p>
            <img alt="图片找不到..." src={"http://134.175.154.93:8888/group1/"+this.state.customer.photo}/>
            <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="评论信息" key="2">
            <p>{this.state.comment.content}</p>
            <p>{this.state.comment.commentTime}</p>
          </TabPane>
          </Tabs>
          </TabPane>
        </Tabs>
        <Button type="link" onClick={()=>{this.props.history.goBack()}}>返回</Button>
      </div>
    )
  }
}

export default CommentDetails;