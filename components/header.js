import React from 'react'
import Image from 'next/image.js'

const Header = () => {
	return (
		<>
			<header className="flex">
				<Image alt="logo" height={24} width={24} src="/logo.svg" />
				<div className="ml-auto">
					<a href="#about">About</a>
				</div>
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
