'use strict';

import FluxStore from 'bower:metal-flux/src/FluxStore';
import TodoActions from './TodoActions';
import TodoDispatcher from './TodoDispatcher';

var todos = [];

class TodoStore extends FluxStore {
	getAll() {
		return todos;
	}

	handleDispatch_(payload) {
		switch (payload.type) {
			case TodoActions.ADD_TODO:
				todos.push({
					text: payload.text
				});
				this.emit(FluxStore.EVENT_CHANGE);
				break;
			case TodoActions.MARK_ALL_COMPLETED:
				if (changeAllCompleted(true)) {
					this.emit(FluxStore.EVENT_CHANGE);
				}
				break;
			case TodoActions.MARK_ALL_INCOMPLETED:
				if (changeAllCompleted(false)) {
					this.emit(FluxStore.EVENT_CHANGE);
				}
				break;
		}
	}
}

function changeAllCompleted(newValue) {
	var changed = false;
	todos.forEach((todo) => {
		changed = changed || (!todo.completed === newValue);
		todo.completed = newValue;
	});
	return changed;
}

export default new TodoStore(TodoDispatcher);
