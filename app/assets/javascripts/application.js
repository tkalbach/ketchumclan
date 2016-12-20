// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require moment 
//= require fullcalendar
//= require_tree .

/*global $*/

// using turbolinks:load for the navbar since it has turbolinks

$(document).on('turbolinks:load', function(){
    
    
    $('#calendar').fullCalendar({
        navLinks: true,
        navLinkDayClick: function(date, jsEvent) {
            console.log('day', date.format()); // date is a moment
            console.log('coords', jsEvent.pageX, jsEvent.pageY);
        },
        navLinkWeekClick: function(weekStart, jsEvent) {
            console.log('week start', weekStart.format()); // weekStart is a moment
            console.log('coords', jsEvent.pageX, jsEvent.pageY);
        }
    });
        
})


