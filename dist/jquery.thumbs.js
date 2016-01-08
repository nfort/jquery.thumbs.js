;(function ($, window, document, undefined) {
    'use strict';

    var methods = {
        init: function (options) {
            return this.each(function () {
                this.self = $(self);
                methods.destroy.call(this.self);

                var like    = $this.data('like'),
                    dislike = $this.data('dislike'),
                    id      = Math.round(1E6 * Math.random()) + Date.now();

                this.opt = $.extend(true, {}, $.fn.thumbs.defaults, options);


                $this
                    .addClass('jq-rating')
                    .attr('data-id-review', id)
                    .append($('<div>').addClass('sprite sprite-fa-thumbs-up-grey'),
                        $('<div>').addClass('jq-rating-like').html(like),
                        $('<div>').addClass('sprite sprite-fa-thumbs-down-grey'),
                        $('<div>').addClass('jq-rating-dislike').html(dislike));


                //$(document).on('click', '[data-id-review=' + id + '] .sprite-fa-thumbs-up-grey', function () {
                //    if ($.isFunction(o.onLike)) {
                //        o.onLike.call(this);
                //    }
                //});
                //
                //$(document).on('click', '[data-id-review=' + id + '] .sprite-fa-thumbs-down-grey', function () {
                //    if ($.isFunction(o.onDislike)) {
                //        o.onDislike.call(this);
                //    }
                //});
            });
        },
        destroy: function() {
            return this.each(function() {
                var self = $(this),
                    raw  = self.data('raw');

                console.log('Destroy method');

                //if (raw) {
                //    self.off('.raty').empty().css({ cursor: raw.style.cursor }).removeData('readonly');
                //} else {
                //    self.data('raw', self.clone()[0]);
                //}
            });
        }
    };

    $.fn.thumbs = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist!');
        }
    };

    $.fn.thumbs.defaults = {
        cancel: false
    };

    //$.fn.extend({
    //    thumbs: function (options) {
    //        var defaults = {
    //                onLike: function () {
    //                },
    //                onDislike: function () {
    //                }
    //            },
    //            options  = $.extend(defaults, options),
    //            o        = options;
    //
    //        return this.each(function () {
    //            var $this   = $(this),
    //                like    = $this.data('like'),
    //                dislike = $this.data('dislike'),
    //                id      = Math.round(1E6 * Math.random()) + Date.now();
    //
    //            $this
    //                .addClass('jq-rating')
    //                .attr('data-id-review', id)
    //                .append($('<div>').addClass('sprite sprite-fa-thumbs-up-grey'),
    //                    $('<div>').addClass('jq-rating-like').html(like),
    //                    $('<div>').addClass('sprite sprite-fa-thumbs-down-grey'),
    //                    $('<div>').addClass('jq-rating-dislike').html(dislike));
    //
    //
    //            $(document).on('click', '[data-id-review=' + id + '] .sprite-fa-thumbs-up-grey', function () {
    //                if ($.isFunction(o.onLike)) {
    //                    o.onLike.call(this);
    //                }
    //            });
    //
    //            $(document).on('click', '[data-id-review=' + id + '] .sprite-fa-thumbs-down-grey', function () {
    //                if ($.isFunction(o.onDislike)) {
    //                    o.onDislike.call(this);
    //                }
    //            });
    //        });
    //    }
    //});
})(jQuery, window, document);