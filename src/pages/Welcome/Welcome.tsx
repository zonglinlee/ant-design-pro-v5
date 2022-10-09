import { PageContainer } from '@ant-design/pro-components';
import DemoCard from '@/pages/Welcome/demo/DemoCard';
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <DemoCard title="测试Card" hoverable={false}></DemoCard>
    </PageContainer>
  );
};

export default Welcome;
