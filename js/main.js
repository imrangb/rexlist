  
  $(document).ready(function(){
   
   $(".inner-one").click(function(){
      $(this).hide(2000);
      $(".my-class").addClass("slide-left");
      $(".inner-two").show(2000);


   });
   $(".inner-two").click(function(){
      $(this).hide(2000);
       $(".my-class").removeClass("slide-left");
      $(".inner-one").show(2000);
      
   });

   $(".fox-1").click(function(){
      $(".fox-6").addClass("block-6");

      $(".fox-7").removeClass("block-7");
      $(".fox-8").removeClass("block-8");
      $(".fox-9").removeClass("block-9");
      $(".fox-10").removeClass("block-10");
   });
   
    $(".fox-2").click(function(){
      $(".fox-7").addClass("block-7");

       $(".fox-6").removeClass("block-6");
      $(".fox-8").removeClass("block-8");
      $(".fox-9").removeClass("block-9");
      $(".fox-10").removeClass("block-10");
   });
     $(".fox-3").click(function(){
      $(".fox-8").addClass("block-8");

      $(".fox-6").removeClass("block-6");
       $(".fox-7").removeClass("block-7");
      $(".fox-9").removeClass("block-9");
      $(".fox-10").removeClass("block-10");
   });
      $(".fox-4").click(function(){
      $(".fox-9").addClass("block-9");

      $(".fox-6").removeClass("block-6");
       $(".fox-7").removeClass("block-7");
      $(".fox-8").removeClass("block-8");
      $(".fox-10").removeClass("block-10");
   });
       $(".fox-5").click(function(){
      $(".fox-10").addClass("block-10");

      $(".fox-6").removeClass("block-6");
      $(".fox-7").removeClass("block-7");
      $(".fox-8").removeClass("block-8");
      $(".fox-9").removeClass("block-9");
   });

  });