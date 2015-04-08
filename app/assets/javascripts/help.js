function centerModal() {
    $(this).css('display', 'block');
    var $dialog = $(this).find(".modal-dialog");
    if($(window).height()>$dialog.height()){
        var offset = ($(window).height() - $dialog.height()) / 2;
        $dialog.css("margin-top", offset);
    }
    
    // Center modal vertically in window

}
window.addEventListener('polymer-ready', function() { angular.bootstrap(wrap(document), ['sweatnetApp']); });