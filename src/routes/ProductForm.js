import React from 'react';
import {Form,Modal,Input,} from 'antd'


class ProductForm extends React.Component {

  render(){
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
          visible={visible}
          title="添加产品信息"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="姓名">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入姓名!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="描述">
              {getFieldDecorator('description', {
                rules: [{ required: true, message: '请输入描述!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="价格">
              {getFieldDecorator('price', {
                rules: [{ required: true, message: '请输入价格!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="状态">
              {getFieldDecorator('status', {
                rules: [{ required: true, message: '请输入状态!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="照片">
              {getFieldDecorator('photo', {
                rules: [{ required: true, message: '请输入照片!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="种类名">
              {getFieldDecorator('category_id', {
                rules: [{ required: true, message: '请输入种类名!' }],
              })(<Input />)}
            </Form.Item>

          </Form>
        </Modal>
    );
  }
}
export default Form.create()(ProductForm); 