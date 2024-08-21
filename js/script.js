$(function(){

      /*01.첫번째 큰화면*/
      $(function(){

        function slide(){
          $('.slide').stop().animate({left:-600},function(){
            $('.slide li:first').appendTo('.slide');
            $('.slide').css({left:0});
          });
        }

        var ani=setInterval(slide,3000);

        $('.slidewrap').mouseover(function(){
          clearInterval(ani);
        });

        $('.slidewrap').mouseout(function(){
          ani=setInterval(slide,3000);
        });

      });

      /*첫번째 반응형 화면*/
      $(function(){
        function m_slide(){
          $('.m_slide1').animate({top:-3532},40000,function(){
            $('.m_slide1').css({top:0},2000);
          });
        }

        m_slide();

        $('.m_slide1').mouseover(function(){
           $('.m_slide1').stop();
        });

        $('.m_slide1').mouseout(function(){
           m_slide();
        });

        setInterval(m_slide,22000);


      });

      /*02.두번째 큰화면*/
      $(function(){

        function slide2(){
          $('.slide2').stop().animate({top:-700},function(){
            $('.slide2 li:first').appendTo('.slide2');
            $('.slide2').css({top:0});
          });
        }

        var ani2=setInterval(slide2,3000);

        $('.slidewrap2').mouseover(function(){
          clearInterval(ani2);
        });

        $('.slidewrap2').mouseout(function(){
          ani2=setInterval(slide2,3000);
        });

      });

      /*두번째 반응형 화면*/
      $(function(){
        function m_slide2(){
          $('.m_slide2').animate({top:-3729},40000,function(){
            $('.m_slide2').css({top:0},2000);
          });
        }

        m_slide2();

        $('.m_slide2').mouseover(function(){
           $('.m_slide2').stop();
        });

        $('.m_slide2').mouseout(function(){
           m_slide2();
        });

        setInterval(m_slide2,22000);


      });

      /*03.세번째 큰화면*/
      $(function(){

        function slide3(){
          $('.slide3').stop().animate({left:-600},function(){
            $('.slide3 li:first').appendTo('.slide3');
            $('.slide3').css({left:0});
          });
        }

        var ani3=setInterval(slide3,3000);

        $('.slidewrap3').mouseover(function(){
          clearInterval(ani3);
        });

        $('.slidewrap3').mouseout(function(){
          ani3=setInterval(slide3,3000);
        });

      });

      /*세번째 반응형 화면*/
      $(function(){
        function m_slide3(){
          $('.m_slide3').animate({top:-7576},40000,function(){
            $('.m_slide3').css({top:0},2000);
          });
        }

        m_slide3();

        $('.m_slide3').mouseover(function(){
           $('.m_slide3').stop();
        });

        $('.m_slide3').mouseout(function(){
           m_slide3();
        });

        setInterval(m_slide3,22000);


      });

      /*04.네번째 큰화면*/
      $(function(){

        function slide4(){
          $('.slide4').stop().animate({top:-700},function(){
            $('.slide4 li:first').appendTo('.slide4');
            $('.slide4').css({top:0});
          });
        }

        var ani4=setInterval(slide4,3000);

        $('.slidewrap4').mouseover(function(){
          clearInterval(ani4);
        });

        $('.slidewrap4').mouseout(function(){
          ani4=setInterval(slide4,3000);
        });

      });

      /*05.다섯번째 큰화면*/
      $(function(){

        function slide5(){
          $('.slide5').stop().animate({left:-600},function(){
            $('.slide5 li:first').appendTo('.slide5');
            $('.slide5').css({left:0});
          });
        }

        var ani5=setInterval(slide5,3000);

        $('.slidewrap5').mouseover(function(){
          clearInterval(ani5);
        });

        $('.slidewrap5').mouseout(function(){
          ani5=setInterval(slide5,3000);
        });

      });

});