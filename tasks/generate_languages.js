/*
 * grunt-generate-languages
 * https://github.com/creat-or/grunt-generate-languages
 *
 * Copyright (c) 2014 Johannes Herrnegger
 * Licensed under the MIT license.
 */

'use strict';


module.exports = function(grunt) {

  var parse = require('csv-parse');
  var async = require('async');

  grunt.registerMultiTask('generate_languages', 'Generates multiple JSON files from one or multiple CSV files', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();
    var done = this.async();
    var parsedLanguages = {};

    var parseStr = function (str, done) {
      parse(str, function(err, output){
        //grunt.log.writeln(output[0]);
        var i;
        for(i=output[0].length-1; i>0; --i ) {
          parseLanguage(output, output[0][i], i);
        }
        done();
      });
    };

    var parseLanguage = function (lanArr, lanKey, index) {
      var j, currentKey, currentValue;
      if(!parsedLanguages[lanKey]) {
        parsedLanguages[lanKey] = {};
      }
      for( j=lanArr.length-1; j>0; --j ) {
        //grunt.log.writeln(lanKey, index, j);
        currentKey = lanArr[j][0];
        currentValue = lanArr[j][index];
        if(currentValue !== "") {
          parsedLanguages[lanKey][currentKey] = currentValue;
        }
      }
    };

    // Iterate over all specified file groups.
    async.forEach(this.files, function(fl, filesNext) {
      var destination = fl.dest;
      // if (!grunt.file.isDir(destination)) {
      //   grunt.log.warn('Destination dest "' + destination + '" should be a directory.');
      //   return false;
      // }

      //Concat specified files.
      var src = fl.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      async.forEach(src, function(filepath, srcNext) {
        // Read file source.
        parseStr(grunt.file.read(filepath), srcNext);
      }, function () {
        for(var langkey in parsedLanguages) {
          grunt.file.write(fl.dest+'/'+langkey+'.json', JSON.stringify(parsedLanguages[langkey], null, 2));
        }
        done();
      });

      grunt.log.writeln(JSON.stringify(parsedLanguages));

      // Write the destination file.
      // grunt.file.write(fl.dest, src);


      // Print a success message.
      grunt.log.writeln('File "' + fl.dest + '" created.');
    });
  });

};
