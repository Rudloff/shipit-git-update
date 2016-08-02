/*jslint node: true*/
'use strict';
var utils = require('shipit-utils');

module.exports = function (gruntOrShipit) {
    require('./checkout')(gruntOrShipit);
    require('./pull')(gruntOrShipit);
    require('./post-update')(gruntOrShipit);

    utils.registerTask(gruntOrShipit, 'update', [
        'update:checkout',
        'update:pull',
        'update:post-update'
    ]);
};
