/* eslint-env browser */
/* global Prism */

document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('pre code[class^="lang"]'), function (code) {
		// set pre, wrap, opts, and get meta data from code
		var pre  = code.parentNode;
		var conf = {};
		var text = String(code.textContent || code.innerText || '');
        var lang = code.className.match(/^language-(\w+)/);

		// conditionally create code examples
		if (lang[1] in examples.lang) {
			examples.lang[lang[1]](pre, text, conf);
		}
	});
});
