/*global QUnit*/

sap.ui.define([
	"list_billing_doc/controller/List_billing_doc.controller"
], function (Controller) {
	"use strict";

	QUnit.module("List_billing_doc Controller");

	QUnit.test("I should test the List_billing_doc controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
