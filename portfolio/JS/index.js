


// ハンバーガーメニューのボタンをクリック
jQuery("#js-button-drawer").click(function(){
    // ボタンに 'is-checked' クラスをトグル（追加・削除）
    jQuery(this).toggleClass("is-checked");
    // メニューをスライド表示・非表示
    jQuery("#js-drawer").slideToggle();
    // bodyに 'is__fixed' クラスをトグルしてスクロールを固定
    jQuery("body").toggleClass("is-fixed");
});

// ハンバーガーメニュー内のリンクをクリックしたらメニューを閉じる
jQuery("#js-drawer a").click(function(){
    // メニューのボタンをクリックしたのと同じ動作をトリガーしてメニューを閉じる
    if ($(window).width() <= 768) {
        jQuery("#js-button-drawer").trigger("click");
    }
});
