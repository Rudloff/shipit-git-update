/*jslint node: true*/
'use strict';
var utils = require('shipit-utils');
var chalk = require('chalk');

module.exports = function (gruntOrShipit) {
    utils.registerTask(gruntOrShipit, 'update:pull', 'Run git pull on the remote host', function () {
        var shipit = utils.getShipit(gruntOrShipit);

        function pull() {
            shipit.log('Updating "%s"', shipit.config.branch);

            return shipit.remote('cd ' + shipit.config.deployTo + '; git pull')
                .then(function () {
                    shipit.log(chalk.green('Up-to-date 😊'));
                });
        }
        return pull();
    });
};
