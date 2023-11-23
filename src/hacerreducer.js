export const HacerReducer = (initialState, action) => {
	switch (action.type) {
		case 'Add Hacer':
			return [...initialState, action.payload];

		case 'Delete Hacer':
			return initialState.filter(hacer => hacer.id !== action.payload);

		case 'Complete Hacer':
			return initialState.map(hacer => {
				if (hacer.id === action.payload) {
					return {
						...hacer,
						done: !hacer.done,
					};
				}

				return hacer;
			});

		case 'Update Hacer':
			return initialState.map(hacer => {
				if (hacer.id === action.payload.id) {
					return {
						...hacer,
						description: action.payload.description,
					};
				}

				return hacer;
			});

		default:
			return initialState;
	}
};
