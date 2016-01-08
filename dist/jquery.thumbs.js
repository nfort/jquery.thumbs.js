;(function($,window,document,undefined) {
    $.fn.extend({
        thumbs: function(options){
            var defaults = {
                    onLike	: function() {},
                    onDislike	: function() {}
                },
                options = $.extend(defaults, options),
                o = options;

            return this.each(function(){
                var $this = $(this),
                    like = $this.data('like'),
                    dislike = $this.data('dislike'),
                    id = Math.round(1E6*Math.random()) + Date.now();

                $this
                    .addClass('jq-rating')
                    .attr('data-id-review', id)
                    .append($('<div>').addClass('sprite sprite-fa-thumbs-up-grey'),
                    $('<div>').addClass('jq-rating-like').html(like),
                    $('<div>').addClass('sprite sprite-fa-thumbs-down-grey'),
                    $('<div>').addClass('jq-rating-dislike').html(dislike));


                $(document).on('click', '[data-id-review=' + id + '] .sprite-fa-thumbs-up-grey', function() {
                    if ($.isFunction(o.onLike)) {
                        o.onLike.call(this);
                    }
                });

                $(document).on('click', '[data-id-review=' + id + '] .sprite-fa-thumbs-down-grey', function() {
                    if ($.isFunction(o.onDislike)) {
                        o.onDislike.call(this);
                    }
                });
            });
        }
    });
}) (jQuery, window, document);