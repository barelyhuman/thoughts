import React from 'react'
import Image from 'next/image.js'
import {Flexery} from 'flexery'

const Header = () => {
	return (
		<>
			<header>
				<Flexery flex flex-1 justBetween>
					<Image alt="logo" height={24} width={24} src="/logo.svg" />
				</Flexery>
			</header>
			<style jsx>
				{`
					header {
						padding: 10px 0px;
					}
				`}
			</style>
		</>
	)
}

export default Header
