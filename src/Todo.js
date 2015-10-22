'use strict';

import dom from 'bower:metal/src/dom/dom';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import TodoActions from './TodoActions';
import TodoStore from './TodoStore';
import './Todo.soy';

class Todo extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
		this.todos = TodoStore.getAll();
	}

	attached() {
		TodoStore.on('change', () => {
			this.todos = TodoStore.getAll();
		});
	}

	handleInputKeyUp_(event) {
		if (event.keyCode === 13) {
			TodoActions.addTodo(event.delegateTarget.value.trim());
			event.delegateTarget.value = '';
		}
	}

	handleToggleAllChange_(event) {
		this.allCompleteChecked = event.delegateTarget.checked;
		if (event.delegateTarget.checked) {
			TodoActions.markAllCompleted();
		} else {
			TodoActions.markAllIncompleted();
		}
	}
}

ComponentRegistry.register('Todo', Todo);

export default Todo;
