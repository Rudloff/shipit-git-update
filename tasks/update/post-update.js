/*jslint node: true*/
'use strict';
var utils = require('shipit-utils');
var chalk = require('chalk');

module.exports = function (gruntOrShipit) {
    utils.registerTask(gruntOrShipit, 'update:post-update', 'Custom command executed after update:pull', function () {
        var shipit = utils.getShipit(gruntOrShipit);

        function postUpdate() {
            if (shipit.config.postUpdateCmd) {
                shipit.log('Running post-update command');
                return shipit.remote('cd ' + shipit.config.deployTo + '; ' + shipit.config.postUpdateCmd);
            }
        }
        return postUpdate();
    });
};
