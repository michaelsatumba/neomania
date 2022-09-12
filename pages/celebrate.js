import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

function Celebrate() {
	const [celebrate, setCelebrate] = useState('celebrate?');
	const [array, setArray] = useState(['celebrate', 'do not celebrate']);

	const [divStyle, setDivStyle] = useState(
		`flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 text-white`
	);
	const [buttonStyle, setButtonStyle] = useState(
		`bg-[#F07DEA] hover:bg-[#A460ED] text-white font-bold py-2 px-4 rounded-full mt-4`
	);

	const generate = () => {
		const randomNumber = Math.floor(Math.random() * array.length);
		const randomCelebrate = array[randomNumber];
		setCelebrate(randomCelebrate);
	};

	return (
		<div>
			<div className={divStyle}>
				<p className="text-center text-lg">
					<a
						href="https://podcastnotes.org/huberman-lab/episode-12-how-to-increase-motivation-drive-huberman-lab//"
						target="_blank"
					>
						Novelty is the number one trigger of dopamine release - Andrew
						Huberman
					</a>
				</p>
				<h1 className="mb-4">Do this today:</h1>
				<p
					// className="animate-spin"
					// className="animate-ping"
					// className="animate-pulse"
					className="animate-bounce"
				>
					{celebrate}
				</p>
				<button onClick={generate} className={buttonStyle}>
					Click Me
				</button>
				<Link href="/">
					<button className={buttonStyle}>Home</button>
				</Link>
			</div>
		</div>
	);
}

export default Celebrate;
