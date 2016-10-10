[![NPM](https://nodei.co/npm/jquery.thumbs.js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/jquery.thumbs.js/)

# Simple jQuery plygin 
[![npm version](https://badge.fury.io/js/jquery.thumbs.js.svg)](https://badge.fury.io/js/jquery.thumbs.js)

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