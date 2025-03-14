jQuery("#toggle").click(function(){
    jQuery(".toggle-list").slideToggle();
});

jQuery(".page-top").click(function(){
    jQuery("html, body").animate({ scrollTop: 0 }, 500);
});

jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 80) {
        // 80px以上スクロールした場合
        jQuery(".page-top").fadeIn();
    } else {
        // 80px未満の場合
        jQuery(".page-top").fadeOut();
    }
});

jQuery(".page-top").hover(
    function() {
        // ホバー時にカーソルを手の形に変更
        jQuery(this).css("cursor", "pointer");
    },
    function() {
        // ホバーを外したときにデフォルトのカーソルに戻す（必要なら）
        jQuery(this).css("cursor", "default");
    }
);

$(function(){

    const modal = $("#js-modal");
    const overlay = $("#js-overlay");
    const overImg =$('#open-img');
    const miniImg =$('.menu-img img');

    miniImg.click(function(){
       const index = miniImg.index(this);
       overImg.attr('src',$(miniImg[index]).attr('src'));
       modal.fadeIn('slow');
       overlay.fadeIn('slow');
       return false;
   });

   $(window).click(function () {
           modal.fadeOut('slow');
           overlay.fadeOut('slow');
           return false;
         });
});