// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.

// CRITICAL that generated/vendor-bundle must be BEFORE bootstrap-sprockets and turbolinks since it is
// exposing jQuery and jQuery-ujs
//= require generated/vendor-bundle
//= require generated/app-bundle

// Next two depend on jQuery
//= require turbolinks
//= require bootstrap-sprockets

//= require react_on_rails

//= require rails_startup
