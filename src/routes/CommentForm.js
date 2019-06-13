import React from 'react';
import {Form,Modal,Input} from 'antd'

class CommentForm extends React.Component {

  render(){
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
      // 将表单中没有出现的值做一个双向数据绑定
      getFieldDecorator("id");
      getFieldDecorator("content");
      getFieldDecorator("comment_time");
      getFieldDecorator("order_id");
    return (
      <Modal
          visible={visible}
          title="添加顾客评论信息"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="内容">
              {getFieldDecorator('content', {
                rules: [{ required: true, message: '请输入内容!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="评论时间">
              {getFieldDecorator('comment_time', {
                rules: [{ required: true, message: '请输入评论时间!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="订单号">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入订单号!' }],
              })(<Input.Password />)}
            </Form.Item>
            
           
          </Form>
        </Modal>
    );
  }
}
// 将通过props从父组件中获取的值拿出来设置到表单元素上
const mapPropsToFields = (props)=>{
  let obj = {};
  for(let key in props.initData){
    let val = props.initData[key];
    obj[key] = Form.createFormField({value:val})
  }
  return obj;
}

export default Form.create({
  mapPropsToFields
})(CommentForm);