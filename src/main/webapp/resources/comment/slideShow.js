
(function($){
    var viewUL = $('div.view')
            .css('overflow', 'hidden')
            .children('ul'),
        imgs = viewUL.find('img'),
        imgW = 400;//imgs[0].width,
        imgsLen = imgs.length,
        totalImgsW = imgW * imgsLen,
        current = 1;
    $('#show').show()
        .find('button').on('click', function(){
            var direction = $(this).attr('id');
            var position = imgW;
            (direction === 'next') ? ++current : --current;
            if (current === 0) {
                current = imgsLen;
                direction = 'next';
                position = totalImgsW - imgW;
            } else if (current - 1 === imgsLen) {
                current = 1;
                position = 0;
            };
            doIt(viewUL, position, direction);
        });

    function doIt(container, position, direction) {
        var sign;//-= +=
        if (direction && position !== 0) {
            sign = (direction === 'next') ? '-=':'+=';
        }
        container.animate({
            'margin-left' : sign ? (sign + position) : position
        });
    }
})(jQuery);