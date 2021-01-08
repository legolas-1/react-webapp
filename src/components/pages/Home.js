import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

function Home() {
	const { name, course } = useStoreState((state) => state.profile);
	const { updateUserProfileInClientStore } = useStoreActions(
		(actions) => actions.profile,
	);

	const onClick = () => {
		updateUserProfileInClientStore({ name: "Hoho" });
	};

	return (
		<div>
			{name}

			{course}
			{/* {todos.map((todo, idx) => (
				<div key={idx}>{todo}</div>
			))} */}
			{/* <AddTodo onAdd={add} /> */}
			<button onClick={onClick}>Click</button>
		</div>
	);
}

// function Home() {
// 	return (
// 		<>
// 			adjdkj
// 			{/* <HeroSection /> */}
// 			{/* <Cards /> */}
// 			{/* <Footer /> */}
// 		</>
// 	);
// }

export default Home;
