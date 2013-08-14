/**
* jQuery shuttle tags
*/
(function(jQuery) {
	jQuery.fn.shuffle = function(c) {
		c = [];
		return this.each(function() {
			c.push(jQuery(this).clone(true))
		}).each(function(a, b) {
			jQuery(b).replaceWith(c[a = Math.floor(Math.random() * c.length)]);
			c.splice(a, 1)
		})
	};
	jQuery.shuffle = function(a) {
		return jQuery(a).shuffle()
	}
})(jQuery);