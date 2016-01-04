var baseURL = "http://ha.chrisandrai.com:8176";
var queries = {};
$.each(document.location.search.substr(1).split('&'), function(c,q){
    var i = q.split('=');
    queries[i[0].toString()] = i[1].toString();
});

var device = queries["device"];

$.getJSON( baseURL + '/devices/' + device + '.json', function(jd) {

    switch (jd.type) {
      case "Dimmable Scene Switch":

        $("button.on").click (function () {
          $.ajax({
            type: "POST", // or GET
            url: baseURL + "/devices/" + device,
            data: "isOn=1&_method=put",
            success: function(msg) {
                window.location.reload(true);
            }
            });
            return false; // stop the browser following the link
          });

         $("button.off").click (function () {
           $.ajax({
             type: "POST", // or GET
             url: baseURL + "/devices/" + device,
             data: "isOn=0&_method=put",
             success: function(msg) {
                window.location.reload(true);
             }
             });
             return false; // stop the browser following the link
           });

            function process(){
              var url = baseURL + "/devices/" + device + "?_method=put&brightness=" + document.getElementById("brightness-level").value;

              location.href=url;
              }
              $.addTemplateFormatter({
                  onOffFormat : function(value, template) {
                          if(value == false) {
                              return "off";
                          } else {
                              return "on";
                          }
                      }
              });
              $.addTemplateFormatter({
                  brightnessFormat : function(value, template) {
                          return value + "/100";
                      }
              });
              $(".devicestatus").loadTemplate($("#dimmable-scene-switch"),jd);
              console.log("this is a dimmable switch:" + " " + jd.name);
      break;

      case "Virtual On/Off Device":

        $("button.on").click (function () {
          $.ajax({
            type: "POST", // or GET
            url: baseURL + "/devices/" + device,
            data: "isOn=1&_method=put",
            success: function(msg) {
                window.location.reload(true);
            }
            });
            return false; // stop the browser following the link
          });

         $("button.off").click (function () {
           $.ajax({
             type: "POST", // or GET
             url: baseURL + "/devices/" + device,
             data: "isOn=0&_method=put",
             success: function(msg) {
                window.location.reload(true);
             }
             });
             return false; // stop the browser following the link
           });
           $.addTemplateFormatter({
               onOffFormat : function(value, template) {
                       if(value == false) {
                           return "off";
                       } else {
                           return "on";
                       }
                   }
           });
           $(".devicestatus").loadTemplate($("#virtual-on-off-device"),jd);
          console.log("this is a on/off device:" + " " + jd.name);
      break;

      case "Door Sensor":
          $.addTemplateFormatter({
              openClosedFormat : function(value, template) {
                      if(value == false) {
                          return "closed";
                      } else {
                          return "open";
                      }
                  }
          });
          $(".devicestatus").loadTemplate($("#door-sensor"),jd);
          console.log("this is a door sensor:" + " " + jd.name);
      break;

      case "IP-Device":
          $.addTemplateFormatter({
              hereAwayFormat : function(value, template) {
                      if(value.indexOf('down')) {
                          return "away";
                      } else {
                          return "here";
                      }
                  }
          });
          $(".devicestatus").loadTemplate($("#ip-device"),jd);
          console.log("this is an IP-Device:" + " " + jd.name);
      break;

      default:
          console.log("I don't know what kind of device this is!");

      }

  });

  function handleChange(input) {
    if (input.value < 0) input.value = 0;
    if (input.value > 100) input.value = 100;
  }
