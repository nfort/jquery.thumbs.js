# Simple jQuery plygin

Simple jQuery plugin rating.

You can see [example in action](https://cdn.rawgit.com/nfort/jquery.thumbs.js/master/example/index.html)

Simple example

```
$(function () {
        $('.js-rating-simple').thumbs();
})
```

Extended example

```
$(function () {
        $('.js-rating').thumbs({
            onLike: function (value) {
                console.log('Like ' + value);
            },
            onDislike: function(value) {
                console.log('Dislike ' + value)
            }
        });
})
```