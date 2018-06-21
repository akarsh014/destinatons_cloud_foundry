sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.sap.destination.service.frontend.destination_service_frontend.controller.View1", {
		onInit: function() {
			var url = "/getUsers";
			jQuery
				.ajax({
					url: url,
					type: "GET",
					dataType: "json",
					success: function(result) {
						console.log("*****************Inside success "+result);
					},
					error: function(e) {
						// log error in browser
						console.log(e.message);
					}
				});
		}
	});
});