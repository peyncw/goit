module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'dist/js/script.min.js': ['src/jsBuilt/script.js']
				}
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/js/**/*.js'],
				dest: 'src/jsBuilt/script.js'
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Default task(s).
	grunt.registerTask('default', ['concat', 'uglify']);

};