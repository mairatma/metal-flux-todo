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
			this.allCompletedChecked = TodoStore.areAllCompleted();
			this.incompleteCount = this.todos.reduce((count, todo) => {
				return count + (todo.completed ? 0 : 1);
			}, 0);
		});
		dom.on(document, 'blur', this.handleBlur_.bind(this), true);
	}

	editTodo_(input) {
		var listElement = input.parentNode;
		var index = parseInt(listElement.getAttribute('data-index'), 10);
		var text = input.value.trim();
		if (text) {
			TodoActions.editTodo(index, text);
		} else {
			TodoActions.removeTodo(index);
		}
		this.editing_ = false;
	}

	handleBlur_(event) {
		if (dom.hasClass(event.target.parentNode, 'editing') && this.editing_) {
			this.editTodo_(event.target);
		}
	}

	handleDestroyClick_(event) {
		var index = parseInt(event.delegateTarget.parentNode.parentNode.getAttribute('data-index'), 10);
		TodoActions.removeTodo(index);
	}

	handleCompletedCheckboxChange_(event) {
		var index = parseInt(event.delegateTarget.parentNode.parentNode.getAttribute('data-index'), 10);
		if (event.delegateTarget.checked) {
			TodoActions.markCompleted(index);
		} else {
			TodoActions.markIncompleted(index);
		}
	}

	handleClearCompletedClick_() {
		TodoActions.removeCompleted();
	}

	handleEditKeyUp_(event) {
		if (event.keyCode === 13) {
			this.editTodo_(event.delegateTarget);
		} else if (event.keyCode === 27) {
			var listElement = event.delegateTarget.parentNode;
			dom.removeClasses(listElement, 'editing');
			this.editing_ = false;
		}
	}

	handleInputKeyUp_(event) {
		if (event.keyCode === 13) {
			var text = event.delegateTarget.value.trim();
			if (text) {
				TodoActions.addTodo(text);
				event.delegateTarget.value = '';
			}
		}
	}

	handleLabelDoubleClick_(event) {
		var listElement = event.delegateTarget.parentNode.parentNode;
		dom.addClasses(listElement, 'editing');

		this.editing_ = true;
		var index = parseInt(listElement.getAttribute('data-index'), 10);
		var editInput = listElement.querySelector('.edit');
		editInput.focus();
		editInput.value = this.todos[index].text;
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
