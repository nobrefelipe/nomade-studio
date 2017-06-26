
// SVG 4 EVERYBODY INIT
svg4everybody({
    polyfill: true // polyfill <use> elements for External Content
});


var gallery_item = document.querySelectorAll('.img');

[].forEach.call(gallery_item, function(item) {


    item.style.height = item.offsetHeight - 50 + 'px'


});