// ==UserScript==
// @name        netregistry-hide-reach-banner
// @namespace   netregistry-hide-reach-banner
// @description netregistry-hide-reach-banner
// @include     https://theconsole.netregistry.com.au/*
// @require		http://code.jquery.com/jquery-latest.js
// @version     1
// @grant
// ==/UserScript==

$(function(){
	$('#reacherbanner').hide();
});