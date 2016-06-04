# Simple jQuery plygin

Simple jQuery plugin rating.

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