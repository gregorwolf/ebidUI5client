sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter"
], function(Controller, Filter) {
	"use strict";

	return Controller.extend("io.github.gregorwolf.ebid.controller.CompanySearch", {

		onInit: function () {
		},
		
		onSearch: function(oEvent) {
			
		},

		handleSuggestCompanyName: function(oEvent) {
			var sTerm = oEvent.getParameter("suggestValue");
			var aFilters = [];
			if (sTerm) {
				aFilters.push(
					new Filter(
						"companyName", 
						sap.ui.model.FilterOperator.EQ, 
						sTerm
					)
				);
			}
			var oBinding = oEvent.getSource().getBinding("suggestionItems");
			oBinding.length = 10;
			oBinding.filter(aFilters);
		},
		
		handleSuggestCity: function(oEvent) {
			var sTerm = oEvent.getParameter("suggestValue");
			var aFilters = [];
			if (sTerm) {
				aFilters.push(
					new Filter(
						"Country", 
						sap.ui.model.FilterOperator.EQ, 
						'DE'
					)
				);
				aFilters.push(
					new Filter(
						"Language", 
						sap.ui.model.FilterOperator.EQ, 
						'D'
					)
				);
				aFilters.push(
					new Filter(
						"CityMatchCode", 
						sap.ui.model.FilterOperator.StartsWith, 
						sTerm.toUpperCase()
					)
				);
			}
			var oBinding = oEvent.getSource().getBinding("suggestionItems");
			oBinding.length = 10;
			oBinding.filter(aFilters);
		}
	});

});