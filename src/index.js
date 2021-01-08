import React from "react";
import ReactDOM from "react-dom";
import { useStoreRehydrated, StoreProvider } from 'easy-peasy';

import store from "store";

import App from "./App";

function WaitForStateRehydration({ children }) {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? children : null;
}

ReactDOM.render(
	<StoreProvider store={store}>
		<WaitForStateRehydration>
			<App />
		</WaitForStateRehydration>
	</StoreProvider>,
	document.getElementById("root"),
);
