import renderer from 'react-test-renderer';

// Mocked version of `import { action } from "@kadira/storybook"`.
export const action = () => jest.fn();

// Mocked version of `import { storiesOf } from "@kadira/storybook"`.
export const storiesOf = groupName => {
	const createSpec = (storyName, story) => {
		describe(groupName, () => {
			it(storyName, () => {
				const component = renderer.create(story());

				expect(component.toJSON()).toMatchSnapshot();
			});
		});
	};
	// Mocked API to generate tests from & snapshot stories.
	const api = {
		add(storyName, story) {
			createSpec(storyName, story);
			return api;
		},

		addWithInfo(storyName, ...info) {
			const fns = info.filter(x => typeof x === 'function');
			const story = fns[fns.length - 1];
			createSpec(storyName, story);
			return api;
		},

		// Any `storybook-addon-*` packages may require noop-ing them:
		addDecorator() {
			return api;
		}
	};

	return api;
};
