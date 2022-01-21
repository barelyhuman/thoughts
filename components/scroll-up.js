import React, {useEffect, useState} from 'react'

const ScrollUp = () => {
	const [show, setShow] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', (_) => {
			const visiblityOffset = window.innerHeight / 2
			const scrollTop =
				document.body.scrollTop || document.documentElement.scrollTop
			if (scrollTop > visiblityOffset) {
				setShow(true)
			} else if (scrollTop < visiblityOffset) {
				setShow(false)
			}
		})
	}, [])

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		})
	}

	return (
		<>
			<div className={`${show ? 'show' : ''}`} onClick={handleClick}>
				<span>&uarr;</span>
			</div>
			<style jsx>
				{`
					div {
						opacity: 0;
						position: fixed;
						right: 2rem;
						bottom: 2rem;

						height: 48px;
						width: 48px;
						border-radius: calc(48px / 2);
						background: var(--surface);
						display: flex;
						align-items: center;
						justify-content: center;
						box-shadow: 1px 1px 3px rgba(0, 0, 0.12);
						color: var(--text);
						transition: opacity 1s ease, background-color 1s ease;
					}

					div.show {
						opacity: 1;
					}

					div:hover {
						cursor: pointer;
						background: var(--success);
						color: var(--dark);
					}

					span {
						color: inherit;
					}
				`}
			</style>
		</>
	)
}

export default ScrollUp
