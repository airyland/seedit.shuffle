/**
* jQuery shuttle tags
*/
(function(jQuery) {
	jQuery.fn.shuffle = function(c) {
		c = [];
		// 如果只有一个元素就不进行无谓操作了
		if(this.length <=1 ) return this;
		
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