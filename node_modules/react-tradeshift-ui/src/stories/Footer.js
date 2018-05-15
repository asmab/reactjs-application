import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import _ from 'lodash';

import { Footer } from '../components';

const stories = storiesOf('Footer', module);

stories.addWithInfo(
	'Show buttons',
	`The Footer component accepts a 'buttons' prop in an Array of Objects format as documented in ui.tradeshift.com.
	No buttons will be displayed if this prop is empty or not passed.`,
	() => {
		const buttons = _.times(number('buttonsCount', 2)).map(count => ({
			label: text(`button_${count}_title`, `Button ${count}`),
			type: text(`button_${count}_class`, `ts-primary button-${count}`),
			onclick() {
				action(`Footer button ${count} clicked`);
			}
		}));

		return <Footer buttons={buttons} />;
	},
	{ inline: true }
);

stories.addWithInfo(
	'Open collaboration',
	`The Footer component accepts an 'onOpenCollaboration' prop as a function to open the
	collaboration panel`,
	() => <Footer onOpenCollaboration={() => alert('hallo')} />,
	{ inline: true }
);
