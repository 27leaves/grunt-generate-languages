'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.generate_languages = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(3);

    var actual_de = grunt.file.readJSON('tmp/languages/combined/de.json');
    var expected_de = grunt.file.readJSON('test/expected/languages_combined/de.json');
    test.deepEqual(actual_de, expected_de, 'should output a valid de.json file.');

    var actual_en = grunt.file.readJSON('tmp/languages/combined/en.json');
    var expected_en = grunt.file.readJSON('test/expected/languages_combined/en.json');
    test.deepEqual(actual_en, expected_en, 'should output a valid en.json file.');

    var actual_es = grunt.file.readJSON('tmp/languages/combined/es.json');
    var expected_es = grunt.file.readJSON('test/expected/languages_combined/es.json');
    test.deepEqual(actual_es, expected_es, 'should output a valid es.json file.');

    test.done();
  },
  default_options_general: function(test) {
    test.expect(3);

    var actual_de = grunt.file.readJSON('tmp/languages/general/de.json');
    var expected_de = grunt.file.readJSON('test/expected/languages_general/de.json');
    test.deepEqual(actual_de, expected_de, 'should output a valid de.json file.');

    var actual_en = grunt.file.readJSON('tmp/languages/general/en.json');
    var expected_en = grunt.file.readJSON('test/expected/languages_general/en.json');
    test.deepEqual(actual_en, expected_en, 'should output a valid en.json file.');

    var actual_es = grunt.file.readJSON('tmp/languages/general/es.json');
    var expected_es = grunt.file.readJSON('test/expected/languages_general/es.json');
    test.deepEqual(actual_es, expected_es, 'should output a valid es.json file.');

    test.done();
  },
  default_options_specific: function(test) {
    test.expect(3);

    var actual_de = grunt.file.readJSON('tmp/languages/specific/de.json');
    var expected_de = grunt.file.readJSON('test/expected/languages_specific/de.json');
    test.deepEqual(actual_de, expected_de, 'should output a valid de.json file.');

    var actual_en = grunt.file.readJSON('tmp/languages/specific/en.json');
    var expected_en = grunt.file.readJSON('test/expected/languages_specific/en.json');
    test.deepEqual(actual_en, expected_en, 'should output a valid en.json file.');

    var actual_es = grunt.file.readJSON('tmp/languages/specific/es.json');
    var expected_es = grunt.file.readJSON('test/expected/languages_specific/es.json');
    test.deepEqual(actual_es, expected_es, 'should output a valid es.json file.');

    test.done();
  },
  custom_options: function(test) {
    test.expect(0);



    test.done();
  },
};
