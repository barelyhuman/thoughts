import React from 'react'
import {Text} from './text.js'

const Footer = () => {
	return (
		<>
			<footer>
				<Text className="text-dim">
					The code for this site is{' '}
					<a
						target="_blank"
						rel="noreferrer noopener"
						href="https://opensource.org/licenses/MIT"
					>
						MIT
					</a>{' '}
					and available{' '}
					<a
						target="_blank"
						rel="noreferrer noopener"
						href="https://github.com/barelyhuman/thoughts"
					>
						here
					</a>
				</Text>
			</footer>
			<style />
		</>
	)
}

export default Footer
