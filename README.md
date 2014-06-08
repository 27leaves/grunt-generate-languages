# grunt-generate-languages

> Generates multiple JSON files from one or multiple CSV files

## Getting Started
This plugin requires (only tested with) Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-generate-languages --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-generate-languages');
```

## The "generate_languages" task

### Overview
In your project's Gruntfile, add a section named `generate_languages` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  generate_languages: {
    options: {
      // Task-specific options go here. Currently, no options are available
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

By now, no options are available.

### Usage Examples

The following files are used in the examples:

[general.csv](/test/fixtures/general.csv)

| key     | en      | de        | es                  |
|---------|---------|-----------|---------------------|
| Logout  | Logout  | Ausloggen | logout              |
| VERSION | Version |           | versión             |
| Room    | Room    |           | lugar, with comma   |

[specific.csv](/test/fixtures/specific.csv)

| key       | en        | de      | es   |
|-----------|-----------|---------|------|
| YESTERDAY | Yesterday | Gestern | Ayer |
| TODAY     | Today     | Heute   |     ||


### General example

```js
grunt.initConfig({
  generate_languages: {
    options: {},
    files: {
      'your/output/dir': ['src/general.csv', 'src/specific.csv'],
    },
  },
});
```

In this example, both general.csv and specific.csv will be parsed and 3 files
will be created within `your/output/dir`: `en.json`, `de.json`, `es.json`.

`en.json` has the following content:
```
{
  "Room": "Room",
  "VERSION": "Version",
  "Logout": "Logout",
  "TODAY": "Today",
  "YESTERDAY": "Yesterday"
}
```

Empty cells are not considered, so `de.json` becomes
```
{
  "Logout": "Ausloggen",
  "TODAY": "Heute",
  "YESTERDAY": "Gestern"
}
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.0

## Licence
Copyright (c) 2014 Johannes Herrnegger. Licensed under the MIT license.
