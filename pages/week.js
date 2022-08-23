import React from 'react';
import { useState } from 'react';

function Week() {
	const [exercise, setExercise] = useState('Exercise');
	const [exercise1, setExercise1] = useState('Exercise');
	const [exercise2, setExercise2] = useState('Exercise');
	const [exercise3, setExercise3] = useState('Exercise');
	const [exercise4, setExercise4] = useState('Exercise');
	const [exercise5, setExercise5] = useState('Exercise');
	const [exercise6, setExercise6] = useState('Exercise');
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

	const generate = () => {
		const randomNumber = Math.floor(Math.random() * arrayExercises.length);
		const randomNumber1 = Math.floor(Math.random() * arrayExercises.length);
		const randomNumber2 = Math.floor(Math.random() * arrayExercises.length);
		const randomNumber3 = Math.floor(Math.random() * arrayExercises.length);
		const randomNumber4 = Math.floor(Math.random() * arrayExercises.length);
		const randomNumber5 = Math.floor(Math.random() * arrayExercises.length);
		const randomNumber6 = Math.floor(Math.random() * arrayExercises.length);
		const randomExercise = arrayExercises[randomNumber];
		const randomExercise1 = arrayExercises[randomNumber1];
		const randomExercise2 = arrayExercises[randomNumber2];
		const randomExercise3 = arrayExercises[randomNumber3];
		const randomExercise4 = arrayExercises[randomNumber4];
		const randomExercise5 = arrayExercises[randomNumber5];
		const randomExercise6 = arrayExercises[randomNumber6];
		setExercise(randomExercise);
		setExercise1(randomExercise1);
		setExercise2(randomExercise2);
		setExercise3(randomExercise3);
		setExercise4(randomExercise4);
		setExercise5(randomExercise5);
		setExercise6(randomExercise6);
	};

	return (
		<div>
			<div className="flex flex-col items-center justify-center h-screen">
				<h1 className="mb-4">Do this week:</h1>
				<div className="flex flex-col mb-4">
					<div>
						<p>Monday - {exercise}</p>
					</div>

					<div>
						<p>Tuesday - {exercise1}</p>
					</div>

					<div>
						<p>Wednesday - {exercise2}</p>
					</div>

					<div>
						<p>Thursday - {exercise3}</p>
					</div>

					<div>
						<p>Friday - {exercise4}</p>
					</div>

					<div>
						<p>Saturday - {exercise5}</p>
					</div>

					<div>
						<p>Sunday - {exercise6} </p>
					</div>
				</div>
				<button
					onClick={generate}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
				>
					Click Me
				</button>
			</div>
		</div>
	);
}

export default Week;
