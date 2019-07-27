import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'semantic-ui-react';
import {withState} from '@dump247/storybook-state';
import {notify} from '../../src';

const ColorStories = () => {
  storiesOf('Color', module)
    .add(
      'success',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() => notify('フルーツの登録に成功しました', 'success')}
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'warning',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() =>
                notify('フルーツの状態が最新ではありません', 'warning')
              }
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'error',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() => notify('フルーツの登録に失敗しました', 'error')}
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'info',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() => notify('新しいフルーツが入荷しています', 'info')}
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'black',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() => notify('新しいフルーツが入荷しています', 'black')}
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'gemcook',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() =>
                notify('新しいフルーツが入荷しています', 'gemcook')
              }
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'facebook',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() =>
                notify('新しいフルーツが入荷しています', 'facebook')
              }
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'twitter',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() =>
                notify('新しいフルーツが入荷しています', 'twitter')
              }
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'airbnb',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() => notify('新しいフルーツが入荷しています', 'airbnb')}
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'instagram',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() =>
                notify('新しいフルーツが入荷しています', 'instagram')
              }
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'spotify',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() =>
                notify('新しいフルーツが入荷しています', 'spotify')
              }
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'medium',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() => notify('新しいフルーツが入荷しています', 'medium')}
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'snapchat',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() =>
                notify('新しいフルーツが入荷しています', 'snapchat')
              }
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'google',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() => notify('新しいフルーツが入荷しています', 'google')}
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'pinterest',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() =>
                notify('新しいフルーツが入荷しています', 'pinterest')
              }
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'reddit',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() => notify('新しいフルーツが入荷しています', 'reddit')}
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'line',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() => notify('新しいフルーツが入荷しています', 'line')}
            >
              Open Modal
            </Button>
          </>
        );
      })
    )
    .add(
      'mixi',
      withState({})(({store}) => {
        return (
          <>
            <Button
              style={{
                margin: '10px',
              }}
              color="pink"
              onClick={() => notify('新しいフルーツが入荷しています', 'mixi')}
            >
              Open Modal
            </Button>
          </>
        );
      })
    );
};

export default ColorStories;
