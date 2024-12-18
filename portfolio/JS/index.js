


jQuery("#js-button-drawer").click(function(){
    jQuery(this).toggleClass("is__checked");
    jQuery("#js-drawer").slideToggle();
    jQuery("body").toggleClass("is__fixed");
});