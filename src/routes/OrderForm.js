import React from 'react';
import {Form,Modal,Input,} from 'antd'

class OrderForm extends React.Component {

  render(){
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
          visible={visible}
          title="添加订单信息"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="订单时间">
              {getFieldDecorator('order_time', {
                rules: [{ required: true, message: '请输入订单时间!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="总数">
              {getFieldDecorator('total', {
                rules: [{ required: true, message: '请输入总数!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="地址编号">
              {getFieldDecorator('address_id', {
                rules: [{ required: true, message: '请输入订单号!' }],
              })(<Input />)}
            </Form.Item>

          </Form>
        </Modal>
    );
  }
}
export default Form.create()(OrderForm); 