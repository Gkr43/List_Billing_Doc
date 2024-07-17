/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"list_billing_doc/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
