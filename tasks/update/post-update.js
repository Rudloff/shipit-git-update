/*jslint node: true*/
'use strict';
var utils = require('shipit-utils');
var chalk = require('chalk');

module.exports = function (gruntOrShipit) {
    utils.registerTask(gruntOrShipit, 'update:post-update', function () {
        var shipit = utils.getShipit(gruntOrShipit);

        function checkout() {
            if (shipit.config.postUpdateCmd) {
                shipit.log('Running post-update command');
                return shipit.remote('cd ' + shipit.config.deployTo + '; ' + shipit.config.postUpdateCmd);
            }
        }
        return checkout();
    });
};
