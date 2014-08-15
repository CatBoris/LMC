"use strict";
$(document).ready(function(){

	// custom checkbox/radio/select/multiselect
	$('input, select').styler({
		singleSelectzIndex: 1
	});




	Modernizr.load([
		{
			test : Modernizr.borderradius,
			nope : ['js/min/PIE.js'],
			callback: function initPIE() {
				var selectors = '' ;
				$(selectors).each(function() {
					PIE.attach(this);
				});
			}
		},
		{
			test : Modernizr.borderradius,
			nope : ['js/min/selectivizr.min.js']
		},
		{
			test : Modernizr.input.placeholder,
			nope : ['js/min/placeholdr.min.js'],
			callback: function () {
				$(document).placeholdr();
			}
		}
	]);
});