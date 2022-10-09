import React from 'react';
import { Card, CardProps } from 'antd';

const { createRef, useEffect, useState } = React;

const DemoCard: React.FC<CardProps> = (props) => {
  // Card源码是一个 React.forwardRef 组件，支持 ref 传入，ref 指向 card 组件最外层 div
  const ref = createRef<HTMLDivElement>();
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  const addCount = (event: React.UIEvent) => {
    setCount((preCount) => preCount + 1);
    event.preventDefault();
  };
  useEffect(() => {
    console.log(`you clicked ${count} times!`, 'ref =>', ref);
  }, [count]);

  const children = (
    <>
      <div> ChildNode</div>
      <div> you clicked {count} times!</div>
    </>
  );
  const extra = (
    <a href="#" onClick={addCount}>
      Click
    </a>
  );
  const cardProps = { loading, extra, children, ref, ...props };
  return <Card {...cardProps} />;
};
export default DemoCard;
