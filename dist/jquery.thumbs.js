;(function ($, window, document, undefined) {
    'use strict';

    var methods = {
        init: function (options) {
            return this.each(function () {
                var self = this,
                    opt = $.extend(true, {}, $.fn.thumbs.defaults, options);

                var like = $(self).data('like'),
                    dislike = $(self).data('dislike'),
                    id = Math.round(1E6 * Math.random()) + Date.now();

                methods.destroy.call($(self));
                methods.setLikes(opt, like);
                methods.setDislikes(opt, dislike);

                $(self)
                    .addClass(opt.classCss)
                    .attr('data-id-review', id)
                    .append($('<div>').addClass('sprite sprite-fa-thumbs-up-grey'),
                        $('<div>').addClass('jq-rating-like').html(like),
                        $('<div>').addClass('sprite sprite-fa-thumbs-down-grey'),
                        $('<div>').addClass('jq-rating-dislike').html(dislike));


                $(self)
                    .find('.sprite-fa-thumbs-up-grey')
                    .on('click', function () {
                        var likes = methods.getLikes.call(opt);
                        likes++;

                        $(self).find('.jq-rating-like').html(likes);
                        methods.setLikes(opt, likes);
                        methods.getLikes.call(opt);
                        if (typeof options !== 'undefined' && $.isFunction(options.onLike)) {
                            options.onLike(likes);
                        }
                    });

                $(self)
                    .find('.sprite-fa-thumbs-down-grey')
                    .on('click', function () {
                        var dislikes = methods.getDislikes.call(opt);
                        dislikes++;

                        $(self).find('.jq-rating-dislike').html(dislikes);
                        methods.setDislikes(opt, dislikes);
                        methods.getDislikes.call(opt);
                        if (typeof options !== 'undefined' && $.isFunction(options.onDislike)) {
                            options.onDislike(dislikes);
                        }
                    });
            });
        },
        setLikes: function (self, value) {
            self.likes = value;
        },
        setDislikes: function (self, value) {
            self.dislikes = value;
        },
        getLikes: function () {
            return this.likes;
        },
        getDislikes: function () {
            return this.dislikes;
        },
        destroy: function () {
            return this.each(function () {
                var self = $(this),
                    raw = self.data('raw');
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
        classCss: 'jq-rating',
        likes: 1,
        dislikes: 1
    };
})(jQuery, window, document);