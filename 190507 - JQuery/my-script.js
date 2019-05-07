$.fn.myAnimate = function (cls) {
    if (!$(this).hasClass(cls)) {
        $(this).addClass(cls);
    } else {
        $(this).removeClass(cls);
    }
}

$(document).ready(function () {
    $('input:button').click(function () {
        // $('#para').text('You clicked button 1');
        // $('#para').css("display","block");
        $('body').append('<div class="resultPara" id="result"></div>');

        if ($('result').length == 0) {
            var rightBtn = Math.floor(Math.random() * 10) + 1;
        }

        $('input:button').prop('hidden', true);

        console.log(rightBtn);

        if (this.id == 'btn-' + rightBtn) {
            $('#result').text("Congratulation! You are lucky");
            $('#name').text("The Game of Luck")
            $('#name').myAnimate("reveal");
        } else {
            $('#result').text("Game Over");
        }
    }
    )
})