'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'todo.css',
	bundleFileName: 'todo.js',
	globalName: 'metal',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'metal-todo'
});
