var decodeHtmlEntity = function(str) {
    return str.replace(/&#(\d+);/g, function(match, dec) {
        return String.fromCharCode(dec);
    });
};
$(function () {
    $('.mock-cm').each(function (k, v) {
        $(this).after('<div id="Canvas' + k + '" class="Canvas"></div>');
        var options = {
            dom: '#Canvas'+k,
            tabSize:1
        };
        window.jf = new JsonFormater(options);
        $(this).remove();
        jf.doFormat(decodeHtmlEntity(v.innerHTML));
        window.jf.collapseLevel(4);
    });
});