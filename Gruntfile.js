/*
 * grunt-generate-languages
 * https://github.com/creat-or/grunt-generate-languages
 *
 * Copyright (c) 2014 Johannes Herrnegger
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    generate_languages: {
      default_options: {
        options: {
        },
        files: [
          {
            src: [ 'test/fixtures/general.csv', 'test/fixtures/specific.csv' ],
            dest: 'tmp/languages/combined'
          }
        ]
      },
      default_options_general: {
        options: {
        },
        files: [
          {
            src: 'test/fixtures/general.csv',
            dest: 'tmp/languages/general'
          }
        ]
      },
      default_options_specific: {
        options: {
        },
        files: {
          'tmp/languages/specific': ['test/fixtures/specific.csv']
        }
      }
      /*custom_options: {
        options: {
          separator: ': ',
          punctuation: ' !!!'
        },
        files: {
          'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      }*/
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'generate_languages', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
