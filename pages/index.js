import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

export default function Home() {
	const [exercise, setExercise] = useState('Exercise');
	const [input, setInput] = useState('');
	const [arrayExercises, setArrayExercises] = useState([
		'Stretch',
		'Strength',
		// 'Power Clean',
		'Bodybuild',
		'Calisthenics',
		'Walk',
		'Jog',
		// 'Sprint',
		// 'Rest',
		// 'Foam Roll',
		// 'Walking with Backpack',
		'Swim',
		// 'Jump Rope',
		'Yoga',
		'Bike',
		'Basketball',
		// 'Rollerskate',
		// 'Hike',
		// 'Bat',
		// 'Dance',
	]);
	const [divStyle, setDivStyle] = useState(
		`flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 text-white`
	);
	const [buttonStyle, setButtonStyle] = useState(
		`bg-[#F07DEA] hover:bg-[#A460ED] text-white font-bold py-2 px-4 rounded-full mt-4`
	);

	const generate = () => {
		const randomNumber = Math.floor(Math.random() * arrayExercises.length);
		const randomExercise = arrayExercises[randomNumber];
		setExercise(randomExercise);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setArrayExercises([...arrayExercises, input]);
		setInput('');
	};

	const deleteExercise = (id) => {
		// filters array, exercise index does not equal index
		const arr = arrayExercises.filter(
			(exercise, exerciseIndex) => exerciseIndex != id
		); // deletes the index
		setArrayExercises(arr);
	};

	// const weekPage = () => {
	// 	Router.push(
	// 		{
	// 			pathname: '/week',
	// 			query: { divStyle, buttonStyle },
	// 		},
	// 		'/week'
	// 	);
	// };

	return (
		<div>
			<Head>
				<title>Neomania</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={divStyle}>
				<p className="text-center text-lg">
					<a
						href="https://podcastnotes.org/huberman-lab/episode-12-how-to-increase-motivation-drive-huberman-lab//"
						target="_blank"
						rel="noreferrer"
					>
						Novelty is the number one trigger of dopamine release - Andrew
						Huberman
					</a>
				</p>
				<div>
					<p>Random Activity Generator</p>
					<p className="text-xs">Click activity to delete from list</p>
					{arrayExercises.map((n, id) => (
						<p onClick={() => deleteExercise(id)} key={id}>
							{n}
						</p>
					))}
				</div>
				<form className="flex space-x-2" onSubmit={handleSubmit}>
					<input
						type="text"
						className="bg-gray-500 rounded-full my-2 px-4 py-2"
						value={input}
						placeholder={`Add Exercise`}
						onChange={(e) => setInput(e.target.value)}
					/>
				</form>
				<h1 className="mb-4">Do this today:</h1>
				<p
					// className="animate-spin"
					// className="animate-ping"
					// className="animate-pulse"
					className="animate-bounce"
				>
					{exercise}
				</p>
				<button onClick={generate} className={buttonStyle}>
					Click Me
				</button>
				<Link href="/week">
					<button className={buttonStyle}>Weekly Schedule</button>
				</Link>
				<Link href="/celebrate">
					<button className={buttonStyle}>Celebrate?</button>
				</Link>
			</div>
		</div>
	);
}

// use router?
