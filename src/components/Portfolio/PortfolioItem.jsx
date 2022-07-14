/** @jsx jsx */
import { jsx } from '@emotion/core';

import { ButtonLink, Divider } from '../../library';
import { publicResource } from '../../utils';

const style = {
	display: 'flex',
	maxHeight: '300px',
	width: '100%',
	padding: '20px 0',
	marginTop: '25px',
	'.item-image': {
		width: '35%',
		'img': {
			width: '100%',
			borderRadius: '10px',
		}
	},
	'.item-content': {
		padding: '0 20px',
		width: '65%',
		display: 'flex',
		flexFlow: 'column',
		justifyContent: 'space-between',
		'.item-buttons': {
			display: 'flex',
			flexWrap: 'wrap!important',
			flexFlow: 'row',
			gap: '10px',
			justifyContent: 'flex-start',
			width: '100%',
			'> a': {
				minWidth: '200px'
			}
		}
	},
	'@media (max-width: 780px)': {
		flexFlow: 'column',
		maxHeight: 'none',
		'.item-image': {
			width: '100%',
			padding: '10px',
		},
		'.item-content': {
			width: '100%',
			padding: '0 10px',
		}
	}
}

const PortfolioItem = ({ item }) => {
	return (
		<div className='item-container' css={style}>
			<div className='item-image'>
				<img alt={item.name} src={publicResource(item.cover_image)} />
			</div>
			<div className='item-content'>
				<div>
					<h4>{item.name}</h4>
					<Divider />
					<p>{item.short_description}</p>
				</div>
				<div className='item-buttons'>
					{
						item.id && (<ButtonLink link={`/portfolio/${item.id}`} isExternal={false}>Details</ButtonLink>)
					}
					{item.github_url && (<ButtonLink link={item.github_url}>Code</ButtonLink>)}
					{item.devlog_url && (<ButtonLink link={item.devlog_url}>DevLog</ButtonLink>)}
					{item.play_url && item.isPlayable && (<ButtonLink link={publicResource(item.play_url)} >Play</ButtonLink>)}
				</div>
			</div>
		</div>
	);
}

export default PortfolioItem;