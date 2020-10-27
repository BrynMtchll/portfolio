
$(document).ready(function () {
   // handles reloads
   let hash = window.location.hash;
   if (hash == '#inspiration') {
      $(".current").load('inspiration.html');

   } else if (hash == '#landing') {
      $(".current").load('landing.html');
   } else if (hash == '#classTasks') {
      $(".current").load('classTasks.html');
      
   } else if (hash.substr(0, hash.length - 1) == '#taskAnchor') {
      $(".current").load('classTasks.html');
   } else {
      $(".current").load('landing.html');
      window.history.replaceState({ page: "inspiration" }, "gd-portfolio-inspiration", "index.html#landing");

   }

   // handles window history
   window.onhashchange = function () {
      let hash = window.location.hash;
      subHash = hash.substr(0, hash.length - 1);
      console.log(subHash);
      if (subHash == "#taskAnchor"){
         location.href = hash;
      } else{
         hash = hash.substring(1);
         let url = '' + hash + '.html';
         $(".current").load(url);
      }



   }

   // handles click - doesn't refresh, pushes state
   $('#inspirationItemLink').on('click', function (e) {
      console.log('called');
      $(".current").load('inspiration.html');
      window.history.pushState({ page: "inspiration" }, "gd-portfolio-inspiration", "#inspiration");
   });
   $('#classTasksItemLink').on('click', function (e) {
      $(".current").load('classTasks.html');
      window.history.pushState({ page: "classTasks" }, "gd-portfolio-inspiration", "#classTasks");
   });

});

// let hash = window.location.hash;
// if (hash == '#inspiration') {
//    $(".current").load('inspiration.html');

// } else if (hash == '#landing') {
//    $(".current").load('landing.html');
// } else if (hash == '#classTasks') {
//    $(".current").load('classTasks.html');
// } else {
//    anchor = hash.substring(0, hash.length - 1);
//    hash = "index.html" + hash;
//    if (hash== "#taskAnchor"){
//       window.history.pushState({ page: "classTasks" }, "gd-portfolio-classTasks", hash)
//       window.history.replaceState({ page: "classTasks" }, "gd-portfolio-classTasks", "index.html#classTasks")
//    }
// }