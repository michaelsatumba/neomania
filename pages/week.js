import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Week() {
	const [input, setInput] = useState('');
	const [arrayExercises, setArrayExercises] = useState([
		'Stretch',
		'Strength',
		'Bodybuild',
		'Calisthenics',
		'Walk',
		'Jog',
		'Yoga',
		'Bike',
		'Basketball',
	]);

	const [divStyle, setDivStyle] = useState(
		`flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 text-white`
	);
	const [buttonStyle, setButtonStyle] = useState(
		`bg-[#F07DEA] hover:bg-[#A460ED] text-white font-bold py-2 px-4 rounded-full mt-4`
	);

	const [weeklyArray, setWeeklyArray] = useState([
		'Exercise',
		'Exercise',
		'Exercise',
		'Exercise',
		'Exercise',
		'Exercise',
		'Exercise',
		'Exercise',
	]);

	const [number, setNumber] = useState(3);

	// const [number, setNumber] = useState(null);
	// let number;

	// if (typeof window !== 'undefined') {
	// 	// localStorage is available, so you can use it here
	// 	// localStorage.setItem('key', 'value');
	// 	if (localStorage.getItem('number') !== null) {
	// 		// get number from local storage
	// 		number = localStorage.getItem('number');
	// 		number = parseInt(number);
	// 	} else {
	// 		// use a default value for number
	// 		number = 3;
	// 	}
	// }

	const generate = () => {
		if (number > 0) {
			setNumber(number - 1);
			// number -= 1;
			// localStorage.setItem('localNumber', number);

			weeklyArray.length = 0;
			for (let i = 0; i < 7; i++) {
				// Gets random exercise from arrayExercises
				const element =
					arrayExercises[Math.floor(Math.random() * arrayExercises.length)];

				// Adds random exercise to weeklyArray
				weeklyArray.push(element);

				// use spread operator to declare new array including the elements before + new element
				setWeeklyArray([...weeklyArray, element]);
			}
		}
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

	const p = () => {
		if (typeof window !== 'undefined') {
			window.print();
		}
	};

	return (
		<div>
			<div className={divStyle}>
				<p className="text-xl">Random Activity Generator</p>
				<p className="text-center text-xl">
					&quot;Novelty is the number one trigger of dopamine release&ldquo;
					<a
						href="https://podcastnotes.org/huberman-lab/episode-12-how-to-increase-motivation-drive-huberman-lab//"
						target="_blank"
						rel="noreferrer"
						className="text-pink-500 underline"
					>
						Andrew Huberman
					</a>
				</p>
				<div>
					<p className="text-base">Click activity to delete from list</p>
					{arrayExercises.map((n, id) => (
						<p
							className="text-center"
							onClick={() => deleteExercise(id)}
							key={id}
						>
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
				<h1 className="mb-4">Do this week:</h1>
				<div className="flex flex-col mb-4">
					<div>
						<p>Monday - {weeklyArray[0]}</p>
					</div>

					<div>
						<p>Tuesday - {weeklyArray[1]}</p>
					</div>

					<div>
						<p>Wednesday - {weeklyArray[2]}</p>
					</div>

					<div>
						<p>Thursday - {weeklyArray[3]}</p>
					</div>

					<div>
						<p>Friday - {weeklyArray[4]}</p>
					</div>

					<div>
						<p>Saturday - {weeklyArray[5]}</p>
					</div>

					<div>
						<p>Sunday - {weeklyArray[6]} </p>
					</div>
				</div>

				<button onClick={generate} className={buttonStyle}>
					Click Me
				</button>

				<h1>You can only click {number}x</h1>

				<button onClick={p} className={buttonStyle}>
					Download
				</button>

				<Link href="/">
					<button className={buttonStyle}>Home</button>
				</Link>
				<Link href="/celebrate">
					<button className={buttonStyle}>Celebrate?</button>
				</Link>
			</div>
		</div>
	);
}

export default Week;
