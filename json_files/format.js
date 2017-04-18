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
        };
        window.jf = new JsonFormater(options);
        $(this).remove();
        jf.doFormat(decodeHtmlEntity(v.innerHTML));
    });
});