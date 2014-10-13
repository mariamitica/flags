var Flags = (function(){

	function init() {
		$('#africa').on('click', function(){
				$('#continents').hide();
			});
	}
	return {
		init: init
			
		}
}());