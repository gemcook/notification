/* @flow */
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';
import {Welcome} from '@storybook/react/demo';
import {NotificationStories} from './NotificationStories';
import {ColorStories} from './ColorStories';

import 'semantic-ui-css/semantic.min.css';
import './../src/styles/index.scss';

storiesOf('Welcome', module).add('to Gemcook Component', () => (
  <Welcome showApp={linkTo('Button')} />
));

NotificationStories();
ColorStories();
