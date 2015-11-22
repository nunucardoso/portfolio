
$( document ).ready(function() {
    // var hero = document.getElementsByClassName('hero');
    // console.log(hero);
    // var music = document.getElementById('music');
    // music.style.display="none";
    $('.hero').css('display','none');
    $('#default').css('display','block');
    // document.getElementById("music_logo").onclick = function() {
    //   alert('Item selected');
    // };
    $(".icon-music").click(function() {
          $('path').css('fill','#6597CA');
          $('.hero').css('display','none');
          $('#music').css('display','block');
          $('.icon-music path').css('fill','#022849');
              // document.getElementById('default').style.display="none";
              // document.getElementById('music').style.display="block";
              // $('.icon-music path').animate({'fill':'red'}, 'slow'); SVG cant be animated with Jquery
    });
    $(".avatar").click(function() {
          $('.hero').css('display','none');
          $('#default').css('display','block');
          $('path').css('fill','#6597CA');
    });

    $(".icon-positive").click(function() {
          $('path').css('fill','#6597CA');
          $('.hero').css('display','none');
          $('#positive').css('display','block');
          $('.icon-positive path').css('fill','#022849');
    });

    $(".icon-coffee").click(function() {
          $('path').css('fill','#6597CA');
          $('.hero').css('display','none');
          $('#coffee').css('display','block');
          $('.icon-coffee path').css('fill','#022849');
    });

    $(".icon-talk").click(function() {
          $('path').css('fill','#6597CA');
          $('.hero').css('display','none');
          $('#talk').css('display','block');
          $('.icon-talk path').css('fill','#022849');
    });
});

$( window ).load(function() {
    console.log( "window loaded" );
});
