/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from Todo.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.Todo.
 */

if (typeof Templates.Todo == 'undefined') { Templates.Todo = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="component"><section class="todoapp">' + Templates.Todo.header(opt_data, null, opt_ijData) + Templates.Todo.main(opt_data, null, opt_ijData) + Templates.Todo.footer(opt_data, null, opt_ijData) + '</section><footer class="info"><p>Double-click to edit a todo</p><p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p><p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p><p>Part of <a href="http://todomvc.com">TodoMVC</a></p></footer></div>');
};
if (goog.DEBUG) {
  Templates.Todo.content.soyTemplateName = 'Templates.Todo.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.header = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<header id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-header" class="header"><h1>todos</h1><input class="new-todo" placeholder="What needs to be done?" autofocus data-onkeyup="handleInputKeyUp_"></header>');
};
if (goog.DEBUG) {
  Templates.Todo.header.soyTemplateName = 'Templates.Todo.header';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.main = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<section id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-main" class="main' + soy.$$escapeHtmlAttribute(opt_data.todos.length == 0 ? ' hidden' : '') + '"><input class="toggle-all" type="checkbox" data-onchange="handleToggleAllChange_"' + soy.$$filterHtmlAttributes(opt_data.allCompletedChecked ? 'checked' : '') + '><label for="toggle-all">Mark all as complete</label>' + Templates.Todo.list({surfaceElementId: opt_data.id + '-list', todos: opt_data.todos}, null, opt_ijData) + '</section>');
};
if (goog.DEBUG) {
  Templates.Todo.main.soyTemplateName = 'Templates.Todo.main';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.list = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<ul id="' + soy.$$escapeHtmlAttribute(opt_data.surfaceElementId) + '" class="todo-list">';
  var todoList30 = opt_data.todos;
  var todoListLen30 = todoList30.length;
  for (var todoIndex30 = 0; todoIndex30 < todoListLen30; todoIndex30++) {
    var todoData30 = todoList30[todoIndex30];
    output += '<li class="' + soy.$$escapeHtmlAttribute(todoData30.completed ? 'completed' : '') + '" data-index="' + soy.$$escapeHtmlAttribute(todoIndex30) + '"><div class="view"><input class="toggle" type="checkbox" data-onchange="handleCompletedCheckboxChange_"' + soy.$$filterHtmlAttributes(todoData30.completed ? 'checked' : '') + '><label data-ondblclick="handleLabelDoubleClick_">' + soy.$$escapeHtml(todoData30.text) + '</label><button class="destroy" data-onclick="handleDestroyClick_"></button></div><input class="edit" value="' + soy.$$escapeHtmlAttribute(todoData30.text) + '" data-onkeyup="handleEditKeyUp_"></li>';
  }
  output += '</ul>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.Todo.list.soyTemplateName = 'Templates.Todo.list';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.Todo.footer = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<footer id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-footer" class="footer' + soy.$$escapeHtmlAttribute(opt_data.todos.length == 0 ? ' hidden' : '') + '"><span class="todo-count"><strong>' + soy.$$escapeHtml(opt_data.incompleteCount) + '</strong> item' + soy.$$escapeHtml(opt_data.incompleteCount == 1 ? '' : 's') + ' left</span><ul class="filters"><li><a href="#/" class="selected">All</a></li><li><a href="#/active">Active</a></li><li><a href="#/completed">Completed</a></li></ul><button class="clear-completed' + soy.$$escapeHtmlAttribute(opt_data.incompleteCount == opt_data.todos.length ? ' hidden' : '') + '" data-onclick="handleClearCompletedClick_">Clear completed</button></footer>');
};
if (goog.DEBUG) {
  Templates.Todo.footer.soyTemplateName = 'Templates.Todo.footer';
}

Templates.Todo.content.params = ["id"];
Templates.Todo.header.params = ["id"];
Templates.Todo.main.params = ["allCompletedChecked","id","todos"];
Templates.Todo.list.params = ["surfaceElementId","todos"];
Templates.Todo.footer.params = ["id","incompleteCount","todos"];
export default Templates.Todo;
/* jshint ignore:end */
