import React from 'react';
import {Form,Modal,Input,} from 'antd'

class OrderLineForm extends React.Component {

  render(){
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
          visible={visible}
          title="添加订单项信息"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="数量">
              {getFieldDecorator('number', {
                rules: [{ required: true, message: '请输入数量!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="产品号">
              {getFieldDecorator('product_id', {
                rules: [{ required: true, message: '请输入产品号!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="订单号">
              {getFieldDecorator('order_id', {
                rules: [{ required: true, message: '请输入订单号!' }],
              })(<Input />)}
            </Form.Item>

          </Form>
        </Modal>
    );
  }
}
export default Form.create()(OrderLineForm); 