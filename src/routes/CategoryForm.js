import React from 'react';
import {Form,Modal,Input} from 'antd'

class CategoryForm extends React.Component {

  render(){
    // 父组件传递给子组件值
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    // 将表单中没有出现的值做一个双向数据绑定
    getFieldDecorator("id");
  
    return (
      <Modal
          visible={visible}
          title="添加分类信息"
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
              {getFieldDecorator('parentId', {
                rules: [{ required: true, message: '请输入父类编号!' }],
              })(<Input />)}
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
})(CategoryForm);