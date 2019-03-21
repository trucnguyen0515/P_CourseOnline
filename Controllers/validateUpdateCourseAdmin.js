import {ServiceKhoaHoc} from './ServiceKhoaHoc';
let service = new ServiceKhoaHoc();

$("#formUpdateCourse").validate({
    rules: {
        idCourse2: {
            required: true,
        },
        nameCourse2: {
            required: true,
            maxlength: 30
        },
        desCourse2: {
            required: true,
            maxlength: 400
        },
    },
    messages: {
        idCourse2: {
            required: "Vui lòng nhập mã khóa học!",
        },
        nameCourse2: {
            required: "Vui lòng nhập tên khóa học!",
            maxlength: "Tối đa 30 kí tự",
        },
     
        desCourse2: {
            required: "Vui lòng nhập mô tả khóa học",
            minlength: "Tối đa 400 kí tự",
        },
    },
    submitHandler: function (form) {
        CapNhatThongTinKhoaHoc()
    }
});


// Update KhoaHoc
function CapNhatThongTinKhoaHoc()
{   
    var id = $("#idCourse2").val();
    var name = $("#nameCourse2").val();
    var des = $("#desCourse2").val();
    var img = $("#imgCourse2").val();
    var luotxem = $("#viewCourse2").val();
    var creater = $("createrCourse2").val();

    //var khoahoc = new KhoaHoc(id,name,des,img,luotxem,creater);     
    //dskh.CapNhatThongTinKhoaHoc(khoahoc);
    service.CapNhatThongTinKhoaHoc(id,name,des,luotxem,creater)
}