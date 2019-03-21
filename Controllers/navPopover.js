import DanhSachKhoaHoc from './DanhSachkhoaHoc';
import DanhSachHinhAnh from './DanhSachHinhAnh';
import {ServiceKhoaHoc} from './ServiceKhoaHoc';

var dskhSeach = new DanhSachKhoaHoc();
var dsha = DanhSachHinhAnh;
var serviceKhoaHoc = new ServiceKhoaHoc();
getDSKH();
getAnh();

function getDSKH()
{
	var json = localStorage.getItem("DanhSachKhoaHoc");
	var list = JSON.parse(json);
	dskhSeach.mangKhoaHoc = list;
}

function getAnh()
{
        var jsonAnh = localStorage.getItem("HinhAnh");
        var listAnh = JSON.parse(jsonAnh);
        dsha.mangHinhAnh = listAnh;
}



	// Search popup in navbar
	$("body").delegate(".searchInput", "keyup", function () {
		// Tạo Scroll Sidebar Left
		$(this).closest(".popover-body").niceScroll({
			cursorcolor: 'silver',
			cursorwidth: 4,
			cursorborder: 'none'
		});
		showloader2();
		$(".form-group").css("border-bottom", "1px solid #c0c0c052");
		$(".form-group").css("padding-bottom", "3px");

		var kqSearch = $(this).closest(".searchInput").val();
		var listkq = dskhSeach.TimKiemKhoaHoc2(kqSearch);

		var parent = $(this).closest(".popover-body").find("#oknha");
		parent.html("");

			if (listkq.mangKhoaHoc != null) 
			{
				setTimeout(function(){
				
					hideloader2();
					var kq = `<p class="pt-1 pb-1"> Có ${listkq.mangKhoaHoc.length} kết quả tìm thấy!</p>`
					parent.css("max-height","400px");
					
					var stringKQ = ``;

					for (let i = 0; i < listkq.mangKhoaHoc.length; i++) {
						 for(let j = 0; j < dsha.mangHinhAnh.length; j++)
						 {
							if(listkq.mangKhoaHoc[i].MaKhoaHoc == dsha.mangHinhAnh[j].ten)
							{
								var divSearch = `
									<a id="linkSearchCourse" class="oktest" data-id="${listkq.mangKhoaHoc[i].MaKhoaHoc}">
										<div class="searchKH">
											<img class="img-fluid" src="${dsha.mangHinhAnh[j].src}">
											<p>
												${listkq.mangKhoaHoc[i].TenKhoaHoc} 
											</p>
										</div>
									</a>
								`;
							stringKQ += divSearch;
							}
							
						 }
							
					}
					kq += stringKQ;
					parent.html(kq);
					$('.oktest').click(function() {
						let id = $(this).attr('data-id');
						getCourseDetails(id);
					})
					
				},500);
			} else {
				hideloader2();
				parent.css("max-height","69px");
				$(".form-group").css("border-bottom", "none");
				$(".form-group").css("padding-bottom", "0px");
			}


	});

	function getCourseDetails(id) {
		serviceKhoaHoc.ChiTietKhoaHoc(id);
	}



	//
	$("#XemAll").click(function () {
		window.location.href = "/course";
	});


	// Animation Sibar Collapse
	let isAnimation = true;
	$('#sidebarCollapse').click(function () {

		if (isAnimation == true) {
			$('#sidebarCollapse').addClass('active');
			isAnimation = false;
		} else {
			$('#sidebarCollapse').removeClass('active');
			isAnimation = true;
		}

	});


	// Popover Search
	$('#popover-content').hide();
	$("[data-toggle=popover]").popover({
		html: true,
		content: function () {
			return $('#popover-content').html();
		}
	});



	//Scroll Down Smooth Body
	$('a[href="#introduce"]').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500, 'linear');
	});




	window.onscroll = function () {
		myFunction(), scrollFunction()
	};

	// Sticky top
	var header = document.getElementById("myNav");
	var sticky = header.offsetTop;

	function myFunction() {
		if (window.pageYOffset >= sticky) {
			header.classList.add("sticky");
			$('#myNav').css('background', '#333');
			$('#myNav').css('z-index', '1000')

		} else {
			header.classList.remove("sticky");
			$('#myNav').css('background', 'rgba(0, 0, 0, 0.2)');

		}
	}

	//Up to Top
	function scrollFunction() {
		if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 200) {
			document.getElementById("myBtn").style.display = "block";
		} else {
			document.getElementById("myBtn").style.display = "none";
		}
	}
	$('#myBtn').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		//return false;
	});



//Loader 
function showloader2()
{
	$(".preloader2").css("display","inline-block");
	$(".loader2").css("border-left","3px solid #ffb606");
}
function hideloader2()
{
    $(".preloader2").hide();
}