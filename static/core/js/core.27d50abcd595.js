function toggleRubricSelection(element){if($(element).is(":visible")){$(element).slideUp();$(element+"-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");}else{$(element).slideDown();$(element+"-icon").removeClass("fa-chevron-down").addClass("fa-chevron-up");}}
function showHighlights(){$("#highlights").removeClass("is-collapsed");$(".expand-highlights").hide();}
document.addEventListener('DOMContentLoaded',()=>{$(".is-collapsed").click(showHighlights);$("button[type=submit]").click(function(){$(this).addClass("is-loading").wait(10000).removeClass("is-loading");});$("#directory-search").submit(function(){$("#directory-search-icon").removeClass("fa-search").addClass("fa-cog").addClass("fa-spin");});document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});});});const $navbarBurgers=Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'),0);if($navbarBurgers.length>0){$navbarBurgers.forEach(el=>{el.addEventListener('click',()=>{const target=el.dataset.target;const $target=document.getElementById(target);el.classList.toggle('is-active');$target.classList.toggle('is-active');});});}});var isOpera=(!!window.opr&&!!opr.addons)||!!window.opera||navigator.userAgent.indexOf(' OPR/')>=0;var isFirefox=typeof InstallTrigger!=='undefined';var isSafari=/constructor/i.test(window.HTMLElement)||(function(p){return p.toString()==="[object SafariRemoteNotification]";})(!window['safari']||(typeof safari!=='undefined'&&safari.pushNotification));var isIE=false||!!document.documentMode;var isEdge=!isIE&&!!window.StyleMedia;var isChrome=!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime);var isBlink=(isChrome||isOpera)&&!!window.CSS;function installBrowserExtension(){if(isChrome){window.open('https://chrome.google.com/webstore/detail/ppembnadnhiknioggbglgiciihgmkmnd','_blank');}else if(isFirefox){window.open('https://addons.mozilla.org/en-US/firefox/addon/privacyspy/','_blank');}else{alert("We can't detect your browser! To install the PrivacySpy extension, please navigate to the appropriate extension marketplace for your browser and install it.");}}