/* @flow */
import React from 'react';
import Notification from 'rc-notification';
import classNames from 'classnames';

import './styles/index.scss';

let notification: any = null;
Notification.newInstance({}, n => {
  notification = n;
});

function GcNotification(
  message: string,
  type: string = 'gemcook',
  onClose: any = null,
  duration: number = 2,
  closable: boolean = true
) {
  let bgColor;
  let color;

  switch (type) {
    case 'default': {
      bgColor = '#ECF0F1';
      color = '#2C3E50';
      break;
    }
    case 'success': {
      bgColor = '#A3DE83';
      color = '#239D60';
      break;
    }
    case 'info': {
      bgColor = '#84B9EF';
      color = '#0960BD';
      break;
    }
    case 'error': {
      bgColor = '#FF847C';
      color = '#C9182B';
      break;
    }
    case 'warning': {
      bgColor = '#FFC97C';
      color = '#EA7659';
      break;
    }
    case 'black': {
      bgColor = '#393E46';
      color = '#F2F2F2';
      break;
    }
    case 'gemcook': {
      bgColor = '#F95B76';
      color = '#fff';
      break;
    }
    case 'facebook': {
      bgColor = '#3B5998';
      color = '#fff';
      break;
    }
    case 'twitter': {
      bgColor = '#1DA1F2';
      color = '#fff';
      break;
    }
    case 'airbnb': {
      bgColor = '#FF5A60';
      color = '#fff';
      break;
    }
    case 'instagram': {
      bgColor = '#262626';
      color = '#fff';
      break;
    }
    case 'snapchat': {
      bgColor = '#FFFC00';
      color = '#fff';
      break;
    }
    case 'reddit': {
      bgColor = '#ff5700';
      color = '#fff';
      break;
    }
    case 'medium': {
      bgColor = '#1A1919';
      color = '#fff';
      break;
    }
    case 'google': {
      bgColor = '#cc3732';
      color = '#fff';
      break;
    }
    case 'pinterest': {
      bgColor = '#BD081C';
      color = '#fff';
      break;
    }
    case 'line': {
      bgColor = '#5ae628';
      color = '#fff';
      break;
    }
    case 'spotify': {
      bgColor = '#84BD00';
      color = '#fff';
      break;
    }
    case 'mixi': {
      bgColor = '#d1ad59';
      color = '#fff';
      break;
    }
    default: {
      break;
    }
  }

  notification.notice({
    content: (
      <span
        className={classNames({
          gc__notification: true,
        })}
      >
        {message}
      </span>
    ),
    style: {
      backgroundColor: bgColor,
      color,
      fontSize: '18px',
      fontWeight: 'bold',
      right: '50%',
    },
    duration,
    closable,
    onClose() {
      if (onClose) {
        onClose();
      }
    },
    maxCount: 2,
  });
}

export default GcNotification;
