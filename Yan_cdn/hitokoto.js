/**
 * Created by Noisky on 17/05/13.
 * Revised by Noisky on 18/11/27.
 */
// 一言异步加载代码
function getHitokoto() {
$.ajax({
        url: "https://api.imjad.cn/hitokoto/?encode=jsc&charset=utf-8&length=50",
       //url: "https://sunpma.com/other/hitokoto/?encode=jsc&charset=utf-8&length=50",
        dataType: "jsonp",
        async: true,
      jsonp: "callback",
      jsonpCallback: "hitokoto",
        success: function(result) {
  $('#hitokoto').html("<p>" + result.hitokoto + "</p>")
        },
        error: function() {
  $('#hitokoto').html("<p>Failed to read data</p>")
        }
         });
 }
getHitokoto()
