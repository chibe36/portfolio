


jQuery("#js-button-drawer").click(function(){
    jQuery(this).toggleClass("is__checked");
    jQuery("#js-drawer").slideToggle();
    jQuery("body").toggleClass("is__fixed");
});

// ハンバーガーメニュー内のボタンをクリックしたらメニューを閉じる
jQuery("#js-drawer a").click(function(){
    jQuery("#js-button-drawer").trigger("click");
});