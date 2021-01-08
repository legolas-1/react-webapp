import { createStore } from "easy-peasy";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";
import localForage from "localforage";
import { persist } from 'easy-peasy';

import models from "models";

const store = createStore(persist(models), {
	disableImmer: true,
	devTools: process.env.NODE_ENV === "development",
});

export default store;
