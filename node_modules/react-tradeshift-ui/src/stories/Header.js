import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { select } from '@storybook/addon-knobs/react';

import _ from 'lodash';

import { Header } from '../components';

const stories = storiesOf('Header', module);

stories.addWithInfo(
	'Change the title',
	'The Header component accepts a "title" property.',
	() => <Header title={text('header title', 'My cool title')} />,
	{ inline: true }
);

stories.addWithInfo(
	'Change the color',
	'The Header component accepts a "color" property to change the color.',
	() => (
		<Header
			title={'the title'}
			color={select(
				'color',
				[
					'blue',
					'dark',
					'green',
					'purple'
				],
				'dark',
				'foo-id-2'
			)}
		/>
	),
	{ inline: true }
);

stories.addWithInfo(
	'Show buttons',
	`The Header component accepts a 'buttons' prop in an Array of Objects format as documented in ui.tradeshift.com.
	No buttons will be displayed if this prop is empty or not passed.`,
	() => {
		const buttons = _.times(number('buttonsCount', 2)).map(count => ({
			label: text(`button_${count}_title`, `Button ${count}`),
			type: text(`button_${count}_class`, `ts-primary button-${count}`),
			onclick() {
				action(`Header button ${count} clicked`);
			}
		}));

		return <Header buttons={buttons} title={'the title'} color={'purple'} />;
	},
	{ inline: true }
);
