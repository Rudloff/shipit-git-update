# shipit-git-update

This shipit task connects to a remote server and pulls updates to a specific Git branch.

## Install
```bash
npm install shipit-deploy
```

## Usage

### With shipit-cli
Example shipitfile.js:
```js
/*jslint node: true*/
module.exports = function (shipit) {
    'use strict';
    require('shipit-git-update')(shipit);

    shipit.initConfig({
        staging: {
            deployTo: '/path/to/working/copy/',
            branch: 'master',
            servers: 'user@qexample.com',
            postUpdateCmd: 'foobar'
        }
    });
};
```

Then run:
```bash
shipit staging update
```

### With grunt
Example Gruntfile.js:
```js
/*jslint node: true*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-shipit');
    grunt.loadNpmTasks('shipit-git-update');

    grunt.initConfig({
        shipit: {
            staging: {
                deployTo: '/path/to/working/copy/',
                branch: 'master',
                servers: 'user@qexample.com',
                postUpdateCmd: 'foobar'
            }
        }
    });
};
```

Then run:
```bash
grunt shipit:staging update
```
