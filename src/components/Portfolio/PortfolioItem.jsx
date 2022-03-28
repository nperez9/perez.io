/** @jsx jsx */
import { jsx } from '@emotion/core';

const PortfolioItem = (item) => (
	<div className='item-container'>
		<div className='item-image'>
			<img alt={item.name} src={item.cover_image} />
		</div>
		<div className='item-text'>
			<h4>{item.name}</h4>
			<p>{item.short_description}</p>
		</div>
		<div className='item-buttons'>
			{
			// item.github_url && <Button>Github</Button>}
			//item.github_url && <Button>Github</Button>
			}
		</div>
	</div>
);

export default PortfolioItem;