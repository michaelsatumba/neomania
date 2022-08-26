import React from 'react';
import { useState } from 'react';

function Week() {
	// orginal code
	/*
	const [exercise0, setExercise0] = useState('Exercise');
	const [exercise1, setExercise1] = useState('Exercise');
	const [exercise2, setExercise2] = useState('Exercise');
	const [exercise3, setExercise3] = useState('Exercise');
	const [exercise4, setExercise4] = useState('Exercise');
	const [exercise5, setExercise5] = useState('Exercise');
	const [exercise6, setExercise6] = useState('Exercise');
	*/
	const arrayExercises = [
		'Stretch',
		'Strength',
		'Power Clean',
		'Bodybuild',
		'Calisthenics',
		'Walk',
		'Jog',
		'Sprint',
		'Rest',
		'Foam Roll',
		'Walking with Backpack',
		'Swim',
		'Jump Rope',
		'Yoga',
		'Bike',
		'Basketball',
		'Rollerskate',
		'Hike',
		'Bat',
		'Dance',
	];

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

	const generate = () => {
		weeklyArray.length = 0;
		for (let i = 0; i < 7; i++) {
			const element =
				arrayExercises[Math.floor(Math.random() * arrayExercises.length)];
			weeklyArray.push(element);
			setWeeklyArray([...weeklyArray, element]);
		}

		// orginal code
		/*
		const randomNumber0 = Math.floor(Math.random() * arrayExercises.length);
		const randomNumber1 = Math.floor(Math.random() * arrayExercises.length);
		const randomNumber2 = Math.floor(Math.random() * arrayExercises.length);
		const randomNumber3 = Math.floor(Math.random() * arrayExercises.length);
		const randomNumber4 = Math.floor(Math.random() * arrayExercises.length);
		const randomNumber5 = Math.floor(Math.random() * arrayExercises.length);
		const randomNumber6 = Math.floor(Math.random() * arrayExercises.length);
		const randomExercise0 = arrayExercises[randomNumber0];
		const randomExercise1 = arrayExercises[randomNumber1];
		const randomExercise2 = arrayExercises[randomNumber2];
		const randomExercise3 = arrayExercises[randomNumber3];
		const randomExercise4 = arrayExercises[randomNumber4];
		const randomExercise5 = arrayExercises[randomNumber5];
		const randomExercise6 = arrayExercises[randomNumber6];
		setExercise0(randomExercise0);
		setExercise1(randomExercise1);
		setExercise2(randomExercise2);
		setExercise3(randomExercise3);
		setExercise4(randomExercise4);
		setExercise5(randomExercise5);
		setExercise6(randomExercise6);
		*/
	};

	const hi = () => alert('hi');

	return (
		<div>
			<div className="flex flex-col items-center justify-center h-screen">
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
				<button
					onClick={generate}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
				>
					Click Me
				</button>
				{/* <p>{weeklyArray}</p>  // test */}
			</div>
		</div>
	);
}

export default Week;
