import { action, thunk } from "easy-peasy";

const defaultState = {
	name: "Arpit",
	course: "Learn Arpit",
};

export default {
	...defaultState,

	updateUserProfileInClientStore: action((state, payload) => ({
		...state,
		...payload,
	})),
};
