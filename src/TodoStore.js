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
		}
	}
}

export default new TodoStore(TodoDispatcher);
