/*jslint node: true*/
'use strict';
var utils = require('shipit-utils');
var chalk = require('chalk');

module.exports = function (gruntOrShipit) {
    utils.registerTask(gruntOrShipit, 'update:checkout', function () {
        var shipit = utils.getShipit(gruntOrShipit);

        function checkout() {
            shipit.log('Checking out "%s"', shipit.config.branch);

            return shipit.remote('cd ' + shipit.config.deployTo + ' && git checkout ' + shipit.config.branch)
                .then(function () {
                    shipit.log(chalk.green('We are now on branch ' + shipit.config.branch + '.'));
                });
        }
        return checkout();
    });
};
