import React from 'react';
import PropTypes from 'prop-types';

import ShowCode from '../components/core/ShowCode';

const ButtonLink = (link, children) => (
	<a className="btn btn-outline-light" href={link} target="_blank" rel="noopener noreferrer">
		<ShowCode tag="a">
			{children}
		</ShowCode>
	</a>
);

ButtonLink.propTypes = {
	children: PropTypes.node.isRequired,
	link: PropTypes.string.isRequired,
};

export default ButtonLink;