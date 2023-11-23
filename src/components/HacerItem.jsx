import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { HacerUpdate } from './HacerUpdate';

export const HacerItem = ({
	hacer,
	handleUpdateHacer,
	handleDeleteHacer,
	handleCompleteHacer,
}) => {
	return (
		<li>
			<span onClick={() => handleCompleteHacer(hacer.id)}>
				<label
					className={`container-done ${hacer.done ? 'active' : ''}`}
				></label>
			</span>
			<HacerUpdate hacer={hacer} handleUpdateHacer={handleUpdateHacer} />
			<button
				className='btn-delete'
				onClick={() => handleDeleteHacer(hacer.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};
