import React from 'react';
import { HacerItem } from './HacerItem';

export const HacerList = ({
	todos,
	handleUpdateHacer,
	handleDeleteHacer,
	handleCompleteHacer,
}) => {
	return (
		<ul>
			{todos.map(hacer => (
				<HacerItem
					key={hacer.id}
					hacer={hacer}
					handleUpdateHacer={handleUpdateHacer}
					handleDeleteHacer={handleDeleteHacer}
					handleCompleteHacer={handleCompleteHacer}
				/>
			))}
		</ul>
	);
};
