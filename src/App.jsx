import { useState } from 'react';
import './App.css';
import { HacerAdd } from './components/HacerAdd';
import { HacerList } from './components/HacerList';
import { useHacer } from './hooks/useHacer';

function App() {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewHacer,
		handleDeleteHacer,
		handleCompleteHacer,
		handleUpdateHacer,
	} = useHacer();

	return (
		<>
			<div className='card-to-do'>
				<h1>Lista de tareas - Grupo 4 - Comisión 133</h1>
				<div className='counter-todos'>
					<h3>
						Cantidad de Tareas: <span>{todosCount}</span>
					</h3>
					<h3>
						Pendientes: <span>{pendingTodosCount}</span>
					</h3>
				</div>

				<div className='add-todo'>
					<h3>Agregar Tarea</h3>
					<HacerAdd handleNewHacer={handleNewHacer} />
				</div>

				<HacerList
					todos={todos}
					handleUpdateHacer={handleUpdateHacer}
					handleDeleteHacer={handleDeleteHacer}
					handleCompleteHacer={handleCompleteHacer}
				/>
			</div>
		</>
	);
}

export default App;
