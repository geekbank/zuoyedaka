import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  static defaultProps = {
    className: 'content0',
  };

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const animType = {
      queue: isMobile ? 'bottom' : 'right',
      one: isMobile ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyle
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src="https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png" />
            </span>
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              操作简单便捷

            </h1>
            <p key="p" id={`${props.id}-content`}>
              系统覆盖老师日常作业管理的全流程，操作简单便捷。如1分钟创建课程，5分钟定制课程宣传，10分钟安排好作业要求等，节省从前至少90%的时间。

            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
