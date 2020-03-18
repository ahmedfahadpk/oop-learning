$(document).ready(function () {
    $('#pipe').css('top', $(window).height() - $('#pipe').height());

    function makeBird(){
        return {
            birdId: null,
            distanceRatio: null,
            bumpSpeed: null,
            addBird: function(){
                var _temp = document.createElement('img');
                _temp.id = this.birdId;
                _temp.className = 'bird';
                _temp.style.left = Math.floor((Math.random() * 1000) + 1) + 'px';
                _temp.style.width = Math.floor((Math.random() * 300) + 1) + 'px';
                _temp.style.top = Math.floor((Math.random() * 80) + 10) + '%';
                _temp.style.filter = 'hue-rotate(' + Math.floor((Math.random() * 360) + 1) + 'deg)';
                _temp.src = 'assets/img/bird.png';
                document.body.appendChild(_temp);
            },
            moveRight: function(distance){
                document.getElementById(this.birdId).style.left = (distance / this.distanceRatio) + 'px';
                if (!$('#' + this.birdId).is(':animated')){
                    $('#' + this.birdId).animate({ 'top': '+=100px' }, this.bumpSpeed).animate({ 'top': '-=100px' }, this.bumpSpeed);          
                }
            },
            init: function(){
                this.birdId = 'bird_' + Math.floor((Math.random() * 1000) + 1);
                this.distanceRatio = Math.floor((Math.random() * 100) + 30);
                this.bumpSpeed = Math.floor((Math.random() * 300) + 100);
                this.addBird();
            }
        };
    }

    window.bird1 = makeBird();
    window.bird2 = makeBird();
    window.bird3 = makeBird();
    window.bird4 = makeBird();

    bird1.init();
    bird2.init();
    bird3.init();
    bird4.init();

    $(window).scroll(function (event) {
        var offset = $(window).scrollTop();
        // $(window).scrollTop gives you the distance
        // to the top of the page
        var imgX = offset / 50;
        var pipeX = 1000 + (offset / 20 * (-1));

        console.log(imgX);
        // move these elements sideway
        $('#background').css('background-position', imgX + 'px 0px');
        $('#pipe').css('left', pipeX);
        bird1.moveRight(offset);
        bird2.moveRight(offset);
        bird3.moveRight(offset);
        bird4.moveRight(offset);
    });

    $(document).one('click', flyUp);

    function flyDown() {
        document.getElementById('bird').style.transform = 'rotate(0deg)';
        $('#bird').animate({ 'top': '+=100px' }, 500);
        $(document).one('click', flyUp);
    }

    function flyUp() {
        $('#bird').animate({ 'top': '-=100px' }, 500);
        document.getElementById('bird').style.transform = 'rotate(45deg)';
        flyDown();
    }
});


