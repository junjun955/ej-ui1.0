import React from 'react';
import {Form,Modal,Input} from 'antd'


class ProductForm extends React.Component {

  render(){
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;

     // 将表单中没有出现的值做一个双向数据绑定
    getFieldDecorator("id");
    getFieldDecorator("name");
    getFieldDecorator("description");
    getFieldDecorator("price");
    getFieldDecorator("status");
    getFieldDecorator("photo");
    getFieldDecorator("categoryId");

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
              {getFieldDecorator('categoryId', {
                rules: [{ required: true, message: '请输入种类名!' }],
              })(<Input/>)}
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
})(ProductForm);