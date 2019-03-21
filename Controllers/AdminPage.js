import DanhSachHocVien from './DanhSachHocVien'
import DanhSachKhoaHoc from './DanhSachkhoaHoc'
let dshv = new DanhSachHocVien();
let dskh = new DanhSachKhoaHoc();

$(document).ready(function () {

	//Count hoc vien + khoa hoc
	var countHV = dshv.mangHocVien.length;
	$("#countHocVien").html(countHV);
	var countKH = dskh.mangKhoaHoc.length;
	$("#countKhoaHoc").html(countKH);

	//clock
	var myVar = setInterval(myTimer, 1000);
	function myTimer() {
		Date.prototype.timeNow = function () {
			return ((this.getHours() < 10)?"0":"") + this.getHours() +" : "+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +" : "+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
		}
		var current = new Date();
		$(".time").html(current.timeNow());
	}


	$("#userTable_filter").find(".form-control").attr("placeholder", "Tìm kiếm..");
	$("#courseTable_filter").find(".form-control").attr("placeholder", "Tìm kiếm..");


	//Check login
	$("#logoutAdmin").click(function () {
		localStorage.removeItem('ThongTinDangNhap');
		localStorage.removeItem('Pass');
		location.href = "/login"
	});


	// Tạo Scroll Sidebar Left
	$("#sidebar").niceScroll({
		cursorcolor: 'silver',
		cursorwidth: 6,
		cursorborder: 'none'
	});


	var sidebar = $('#sidebarCollapse');
	var isClosed = true;

	// overlay = $('.overlay'),


	// Tạo event khi click Icon top left Navbar
	$('#sidebarCollapse').on('click', function () {
		if (isClosed == true) {
			$('#sidebar').addClass('active');
			$('#content').addClass('active');
			$(this).addClass('active');
			isClosed = false;
		} else {
			$('#sidebar').removeClass('active');
			$(this).removeClass('active');
			$('#content').removeClass('active');
			isClosed = true;
		}
	});


	// Thay đổi màu navbar khi scroll
	function changeCss() {
		if (this.scrollY > document.querySelector(".wrapper").clientHeight) {
			$('.navbar').css('background', '#3c3c43');
		} else {
			$('.navbar').css('background', 'rgba(0, 0, 0, 0.3)');
		}
	}
	window.addEventListener('scroll', changeCss, false);

});