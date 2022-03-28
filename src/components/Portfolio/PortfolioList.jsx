/** @jsx jsx */
import { jsx } from '@emotion/core';

import { portfolioList } from '../../data';
import PortfolioItem from './PortfolioItem';

const PortfolioList = () => {
	const itemList = portfolioList.map(item => {
		return (
			<article key={item.id}>
				<PortfolioItem item={item} />
			</article>
		);
	}); 

	return (
		<Container>
				{itemList}
		</Container>
	);
}

export default PortfolioList;