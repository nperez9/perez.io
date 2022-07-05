/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Divider } from '../../library';

import PortfolioItem from './PortfolioItem';

const style = {
	marginTop: '25px'
};

const PortfolioList = ({ portfolioList }) => {
	const itemList = portfolioList.map(item => {
		return (
			<article key={item.id}>
				<PortfolioItem item={item} />
				<Divider />
			</article>
		);
	});

	return <div style={style}>{itemList}</div>;
}

export default PortfolioList;