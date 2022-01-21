import React from 'react'
import {useTheme} from 'next-themes'
import {Icon} from './icon.js'

const next = (theme) => {
	switch (theme) {
		case 'system': {
			return ['sun', 'light']
		}

		case 'light': {
			return ['moon', 'dark']
		}

		case 'dark': {
			return ['system', 'system']
		}

		default: {
			return ['system', 'system']
		}
	}
}

export const ThemeToggle = () => {
	const {theme, setTheme} = useTheme()

	const [iconName, nextTheme] = next(theme || 'dark')

	return (
		<>
			<button onClick={() => setTheme(nextTheme)}>
				<Icon key="icon" name={iconName} height={24} width={24} />
			</button>
			<style jsx>
				{`
					button {
						color: var(--text);
						border: 0px;
						padding: 8px;
						display: inline-flex;
						align-items: center;
						justify-content: center;
						margin: 0px;
						height: 35px;
						width: 35px;
						background: var(--base);
						border-radius: 35px;
						transition: background 250ms linear;
					}

					button:hover {
						background: var(--surface);
					}
				`}
			</style>
		</>
	)
}
