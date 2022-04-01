/* eslint-env browser */
/* global Prism */

document.addEventListener('DOMContentLoaded', function() {
	Array.prototype.forEach.call(document.querySelectorAll('pre code[class^="lang"]'), function(code) {
		// set pre, wrap, opts, and get meta data from code
		var pre = code.parentNode;
		var conf = {};
		var text = String(code.textContent || code.innerText || '');
		var lang = code.className.match(/^language-(\w+)/);

		// conditionally create code examples
		if (lang[1] in examples.lang) {
			examples.lang[lang[1]](pre, text, conf);
		}
	});

    var padding = 100;
	function isInViewport(rect) {
		return rect.bottom > padding && rect.top < padding;
	}

    var ticking = false;
	document.addEventListener('scroll', function(e) {
		lastKnownScrollPosition = window.scrollY;

		if (!ticking) {
			window.requestAnimationFrame(function() {
				var h2s = document.querySelectorAll('h2');

                // Only collapse nav if the window is not in mobile mode
                if (window.innerWidth > 960) {
                    for (var i = 0; i < h2s.length; i++) {
                        var section = h2s[i].parentElement;
                        var rect = section.getBoundingClientRect();
                        var link = document.querySelector('[href="#' + section.id + '"]');
                        var parentListItem = link.parentElement;
                        var childMenu = parentListItem.querySelector('ul');
                        if (isInViewport(rect)) {
                            childMenu.classList.remove('dn');
                        } else {
                            childMenu.classList.add('dn');
                        }
                    }
                } else {
                    for (var i = 0; i < h2s.length; i++) {
                        var section = h2s[i].parentElement;
                        var rect = section.getBoundingClientRect();
                        var link = document.querySelector('[href="#' + section.id + '"]');
                        var parentListItem = link.parentElement;
                        var childMenu = parentListItem.querySelector('ul');
                        childMenu.classList.remove('dn');
                    }
                }
                ticking = false;
			});

			ticking = true;
		}
	})

});
