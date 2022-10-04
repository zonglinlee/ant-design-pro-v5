import { Button, Checkbox, Form, Input, message, Col, Row } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import React from 'react';
import { testLogin } from '@/services/ant-design-pro/testApi';
import { ResponseCode } from '../../../../mock/test';
import styles from './index.less';

const CustomLogin: React.FC = () => {
  const [loginForm] = Form.useForm();
  const onFinish = async (values: any) => {
    const res = await testLogin(values);
    const { code, msg } = res;
    if (code === ResponseCode.OK) {
      message.success(msg).then(() => {});
    } else {
      message.error(msg);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    message.error('表单提交失败!').then(() => {});
  };
  const resetFields = () => {
    loginForm.resetFields();
  };
  return (
    <PageContainer>
      <Form
        form={loginForm}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true, username: 'admin', password: 'ant.design' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请填写用户名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请填写密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Row>
          <Col span={5} offset={4}>
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ span: 24 }}>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
          </Col>
          <Col span={3}>
            <div className={styles.forget}>忘记密码</div>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
          <Button type="primary" htmlType={'submit'} block>
            登录
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 8 }}>
          <Button type="primary" htmlType={'button'} danger={true} onClick={resetFields} block>
            重置
          </Button>
        </Form.Item>
      </Form>
    </PageContainer>
  );
};

export default CustomLogin;
