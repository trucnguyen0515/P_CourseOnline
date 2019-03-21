
import '../Public/js/moment';
import '../Public/js/fullcalendar';


DateEventLocalStorage();
let date = new Date().getDate();
if (date < 10) {
    date = `0${date}`
}
let month = new Date().getMonth();
if (month < 10) {
    month = `0${month + 1}`
}
let year = new Date().getFullYear();
let currentTime = year + '-' + month + '-' + date

$(document).ready(function () {

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        contentHeight: 750,
        defaultDate: currentTime,
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectHelper: true,
        editable: true,
        eventLimit: true, // allow "more" link when too many events

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
                DateEventLocalStorage(eventData);
                $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#calendar').fullCalendar('unselect');
        },

        eventClick: function (event, jsEvent, view) {

            $('#calendar').fullCalendar('removeEvents', event.id); // stick? = true
            removeDateEvent(event.id)

        },
        events: function (start, end, timezone, callback) {
            callback(DateEventLocalStorage())
        }
    });

});

function removeDateEvent(id) {
    let data = localStorage.getItem('DateEvent');
    data = JSON.parse(data);
    data.map(function (val, index) {
        if (val.id === id) {
            data.splice(index, 1)
        }
    })
    localStorage.setItem('DateEvent', JSON.stringify(data))
}

function DateEventLocalStorage(val) {
    if (val) {
        let data = localStorage.getItem('DateEvent');
        if (data) {
            let kq = JSON.parse(data)
            kq.push(val);
            localStorage.setItem('DateEvent', JSON.stringify(kq))
        } else {
            localStorage.setItem('DateEvent', JSON.stringify([data]));
        }
    } else {
        let data = localStorage.getItem('DateEvent');
        if (data) {
            return JSON.parse(data)
        } else {
            localStorage.setItem('DateEvent', JSON.stringify([]));
        }
    }
}
