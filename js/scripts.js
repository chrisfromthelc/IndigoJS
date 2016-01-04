var baseURL = "http://ha.chrisandrai.com:8176";
var devicesURL = baseURL + '/devices.json';

$.getJSON( devicesURL, function(result) {
  $.each(result, function( index, value ) {
    $.addTemplateFormatter("indexLinkFormat",
        function(value, template) {
            return baseURL + '/devices/' + value + '.html';
        });
    $.addTemplateFormatter("deviceLinkFormat",
        function(value, template) {
            return 'devices.html?device=' + value;
        });
    $(".main").loadTemplate($("#template"),result);
  });
});
