$(document).ready(function () {
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2018-02-12',
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectHelper: true,

        select: function (start, end) {
            var title = prompt('Tên sự kiện:');
            var eventData;
            if (title) {
                eventData = {
                    id: title,
                    title: title,
                    start: start,
                    end: end
                };
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');
        },
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        eventClick: function (event, jsEvent, view) {

            var a = $('#calendar').fullCalendar('removeEvents', event.id); // stick? = true
        },
        events: [{
                
            },

        ]
    });

});