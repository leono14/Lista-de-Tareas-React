import React from 'react';
import { useForm } from '../hooks/useForm';

export const HacerAdd = ({ handleNewHacer }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return;

		let newHacer = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewHacer(newHacer);
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='Ingrese la Tarea'
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
};
