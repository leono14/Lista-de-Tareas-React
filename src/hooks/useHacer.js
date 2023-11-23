import { useEffect, useReducer } from 'react';
import { hacerReducer } from '../hacerreducer';

export const useHacer = () => {
	const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

	const [todos, dispatch] = useReducer(
		hacerReducer,
		initialState,
		init
	);

    const todosCount = todos.length
    const pendingTodosCount = todos.filter(hacer => !hacer.done).length


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


	const handleNewHacer = hacer => {
		const action = {
			type: 'Add Hacer',
			payload: hacer,
		};

		dispatch(action);
	};

	const handleDeleteHacer = id => {
		const action = {
			type: 'Delete Hacer',
			payload: id,
		};

		dispatch(action);
	};

	const handleCompleteHacer = id => {
		const action = {
			type: 'Complete Hacer',
			payload: id,
		};

		dispatch(action);
	};

	const handleUpdateHacer = (id, description) => {
		const action = {
			type: 'Update Hacer',
			payload: {
				id,
				description,
			},
		};

		dispatch(action);
	};

    return{
        todos,
        todosCount,
        pendingTodosCount,
        handleNewHacer,
        handleDeleteHacer,
        handleCompleteHacer,
        handleUpdateHacer
    }
};
