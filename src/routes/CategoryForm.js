import React from 'react';
import {Form,Modal,Input} from 'antd'

class CategoryForm extends React.Component {

  render(){
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
          visible={visible}
          title="添加商品信息"
          okText="提交"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="服务名称">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入服务名称!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="数量">
              {getFieldDecorator('num', {
                rules: [{ required: true, message: '请输入数量!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="父类编号">
              {getFieldDecorator('parent_id', {
                rules: [{ required: true, message: '请输入父类编号!' }],
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
    );
  }
}
export default Form.create()(CategoryForm);