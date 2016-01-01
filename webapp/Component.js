sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"io/github/gregorwolf/ebid/model/models",
	"sap/ui/model/odata/v2/ODataModel"
], function(UIComponent, Device, models, ODataModel) {
	"use strict";

	return UIComponent.extend("io.github.gregorwolf.ebid.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			// set invoice model - remote
			var oConfig = this.getMetadata().getConfig();
			var oEBIDModel = new ODataModel(oConfig.EBIDRemote);
			this.setModel(oEBIDModel);
		}
	});

});