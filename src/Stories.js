import React from 'react'
import moment from 'moment'

import { useGlobalContext } from './context'

const Stories = () => {
	const { isLoading, hits, removeStory } = useGlobalContext()

	if (isLoading) {
		return <div className='loading'></div>
	}

	return (
		<section className='stories'>
			{hits.map((story) => {
				const {
					objectID,
					title,
					num_comments,
					url,
					points,
					author,
					created_at,
				} = story
				return (
					<article key={objectID} className='story'>
						<h4 className='title'>{title}</h4>
						<p className='info'>
							{moment(created_at).format('dddd, D MMMM YYYY')}
						</p>
						<p className='info'>
							<b>{points}</b> points | by{' '}
							<span>
								<b>{author}</b> |{' '}
							</span>{' '}
							<b>{num_comments}</b> comments
						</p>
						<div>
							<a
								href={url}
								className='read-link'
								target='_blank'
								rel='noopener noreferrer'
							>
								read more
							</a>
							<button
								className='remove-btn'
								onClick={() => removeStory(objectID)}
							>
								remove
							</button>
						</div>
					</article>
				)
			})}
		</section>
	)
}

export default Stories
