import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
		// 'Swim',
		// 'Jump Rope',
		'Yoga',
		'Bike',
		'Basketball',
		// 'Rollerskate',
		// 'Hike',
		// 'Bat',
		// 'Dance',
	]);

	const router = useRouter();

	const {
		query: { divStyle, buttonStyle },
	} = router;

	const props = {
		divStyle,
		buttonStyle,
	};

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
			// Gets random exercise from arrayExercises
			const element =
				arrayExercises[Math.floor(Math.random() * arrayExercises.length)];

			// Adds random exercise to weeklyArray
			weeklyArray.push(element);

			// use spread operator to declare new array including the elements before + new element
			setWeeklyArray([...weeklyArray, element]);
		}
		console.log(props.divStyle);

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

	return (
		<div>
			<div className={props.divStyle}>
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
				<Link href="/">
					<button className={buttonStyle}>Daily Schedule</button>
				</Link>
			</div>
		</div>
	);
}

export default Week;
