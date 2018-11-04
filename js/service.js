(function ($) {
    console.log($)
    $('.retail-hover a').on('click', function (e) {
        var $this = $(this)
        $('.retail-hover').removeClass('active')
        setTimeout(function () {
            $this.parent('.active-pane').addClass('active')
        })
        $('.active-pane.active').removeClass('active')
        $('#tab' + $this.data('index')).addClass('active')
    })

})(window.$);