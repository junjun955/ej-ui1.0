import React from 'react';
import {Form,Modal,Input} from 'antd'

class CommentForm extends React.Component {

  render(){
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
          visible={visible}
          title="添加顾客评论信息"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="姓名">
              {getFieldDecorator('realname', {
                rules: [{ required: true, message: '请输入姓名!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="评论信息">
              {getFieldDecorator('telephone', {
                rules: [{ required: true, message: '请输入评论信息!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="密码">
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(<Input.Password />)}
            </Form.Item>
            
           
          </Form>
        </Modal>
    );
  }
}
export default Form.create()(CommentForm);