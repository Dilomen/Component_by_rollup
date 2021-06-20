import React from 'react';
import { Notification, CodePreview } from 'cps';
import renderInstruction from './instruction';
import './index.scss';

function NotificationShow () {
  return (
    <>
      <CodePreview title="基本">
        <Notification />
      </CodePreview>
      <div
        className="instruction"
        dangerouslySetInnerHTML={{ __html: renderInstruction }}
      />
    </>
  );
}

export default NotificationShow;
