import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'semantic-ui-react';
import {withState} from '@dump247/storybook-state';
import {notify} from '../../src';

const NotificationStories = () => {
  storiesOf('Notification UI', module)
    .add(
      'default',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() => notify('これは通知メッセージです')}
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'change duration',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() =>
                notify('これは通知メッセージです', undefined, undefined, 0.5)
              }
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'remove close button',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() =>
                notify(
                  'これは通知メッセージです',
                  undefined,
                  undefined,
                  undefined,
                  false
                )
              }
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'onClose event',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() =>
                notify('これは通知メッセージです', undefined, () => {
                  console.info('onClose Event!!!!!');
                })
              }
            >
              Open Modal
            </Button>
          </>
        );
      })
    );
};

export default NotificationStories;
