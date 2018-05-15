import PropTypes from 'prop-types';
import { Component } from 'react';

class Footer extends Component {
	static update({ onOpenCollaboration, buttons }) {
		window.ts.ui.ready(() => {
			const footer = window.ts.ui.Footer;

			if (onOpenCollaboration) {
				footer.collabbutton(onOpenCollaboration);
			}
			footer.buttons(buttons);
		});
	}

	componentDidMount() {
		Footer.update(this.props);
	}

	componentWillReceiveProps(nextProps) {
		Footer.update(nextProps);
	}

	render() {
		return null;
	}
}

/* eslint-disable react/no-unused-prop-types, react/require-default-props */
Footer.propTypes = {
	buttons: PropTypes.arrayOf(PropTypes.object),
	onOpenCollaboration: PropTypes.func
};
/* eslint-enable react/no-unused-prop-types, react/require-default-props */
export default Footer;
