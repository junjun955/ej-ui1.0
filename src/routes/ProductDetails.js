import React from 'react'
import {Button,Tabs} from 'antd'
import axios from '../utils/axios';

class ProductDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      product:[]
    }
  }

  componentDidMount(){
    let payload = this.props.location.payload;
    if(payload){
     // this.loadProducts();
     //将page页面传递过来的值设置到局部状态中
     this.setState({product:payload})
    } else {
      this.props.history.push("/product")
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
            <p>{this.state.product.name}</p>
            <p>{this.state.product.description}</p>
            <p>{this.state.product.price}</p>
            <img alt="图片找不到..." src={"http://134.175.154.93:8888/group1/"+this.state.product.photo}/>
          </TabPane>
        </Tabs>
        <Button type="link" onClick={()=>{this.props.history.goBack()}}>返回</Button>
      </div>
    )
  }
}

export default ProductDetails;