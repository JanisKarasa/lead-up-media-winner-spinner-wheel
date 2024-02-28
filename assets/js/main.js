window.onload = function () {
	console.log('LOADED');

	//seg
	//lid
	//aff_id
	//atk
	//ln
	//fn
	//email

	window.seg = getUrlParam('seg','');
	window.lid = getUrlParam('lid','');
	window.aff_id = getUrlParam('aff_id','');
	window.atk = getUrlParam('atk', '');
	window.ln = getUrlParam('ln', '');
	window.fn = getUrlParam('fn', '');
	window.email = getUrlParam('email', '');
	window.v = getUrlParam('v', '');

	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
		});
		return vars;
	};

	function getUrlParam(parameter, defaultvalue){
		var urlparameter = defaultvalue;
		if(window.location.href.indexOf(parameter) > -1){
			urlparameter = getUrlVars()[parameter];
			}
		return urlparameter;
	};

	console.log('seg: ', window.seg);
	console.log('lid: ', window.lid);
	console.log('aff_id: ', window.aff_id);
	console.log('atk: ', window.atk);
	console.log('ln: ', window.ln);
	console.log('fn: ', window.fn);
	console.log('email: ', window.email);
	console.log('v: ', window.v);

	if (window.$) {
		$(function () {
			$("#spin-to-win-container").addClass('enlarged');
		});

		var touchStartPoint;
		$("canvas").bind('touchstart', function (e) {
			touchStartPoint = e.originalEvent.touches[0].clientY;
		});

		$("canvas").bind('touchend', function (e) {
			var touchEndPoint = e.originalEvent.changedTouches[0].clientY;
			if (touchStartPoint > touchEndPoint + 5) {
				$("html, body").animate({
					scrollTop: $(document).height()
				}, 500);
			} else if (touchStartPoint < touchEndPoint - 5) {
				$("html, body").animate({
					scrollTop: 0
				}, 500);
			}
		});
	}
}
