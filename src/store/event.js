let nextId = 0;
let events = [
	// {
	// 	id: nextId++,
	// 	occasion: "",
	// 	size: "",
	// 	name: "",
	// 	date: "",
	// 	time: "",
	// 	budget: "",
	// 	invite: "",
	// 	food: "",
	// 	alcohol: "",
	// 	decorator: "",
	// 	game: "",
	// },
];
let listeners = [];

export const eventsStore = {
	addTodo(values) {
		events = [...events, { id: nextId++, ...values }];
		emitChange();
	},
	subscribe(listener) {
		listeners = [...listeners, listener];
		return () => {
			listeners = listeners.filter((l) => l !== listener);
		};
	},
	getSnapshot() {
		return events;
	},
};

function emitChange() {
	for (let listener of listeners) {
		listener();
	}
}
