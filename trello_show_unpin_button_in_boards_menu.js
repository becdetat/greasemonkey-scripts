// ==UserScript==
// @name        trello_show_unpin_button_in_boards_menu
// @namespace   belfryimages_trello
// @description Adds an unpin button to each board in the boards menu
// @include     https://trello.com/board/*
// @require		http://code.jquery.com/jquery-latest.js
// @version     0.1
// @grant		
// ==/UserScript==

$(function(){
	$('head').append('<style type="text/css">.unpin-board { font-size: small; }</style>');
	//$('a.js-open-header-boards-menu').on('click', addUnpinButtons);
});

//setTimeout(initMe, 1000);

function addUnpinButtons() {
	setTimeout(function(){
		$('ul.js-fill-boards li:not(.js-org) a').each(function(){
			$('<span class="unpin-board">unpin</span>').click(function(){
				$.post(
					'https://trello.com/api/member/4f5af7fed0bf5fc01f9248e4', {
						"token": "4f5af7fed0bf5fc01f9248e4/9d04d633e7a3ae304332b802543a92d1d9acdbeb20a91e8949b567921a846bd4",
						"method": "update",
						"data": {
							"updates": [
								{ "pull": {
									"idBoardsPinned": "51184d601e5c0c2f7f00330b"
								}
							}],
							"idParents":[]
						}
					});
				return false;
			}).appendTo($(this));
		});
	}, 300);
}
/*
$('a.js-open-header-boards-menu').live(
	'click', 
	function() { alert('2'); setInterval(addUnpinButton, 200); });

function addUnpinButton() {
}

*/