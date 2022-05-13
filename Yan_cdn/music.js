//$('#popShadow').css('height',document.body.scrollHeight +'px')
var audio = null,
    core = {
        //控制背景音乐播放
        audioControl: function() {
            if (audio.paused) {
                audio.play();
                document.getElementById("Jm").className = 'audio-control audio-yes';
                pgvSendClick({
                    hottag: 'act.a20150401fool.audio.play'
                })
            } else {
                audio.pause();
                document.getElementById("Jm").className = 'audio-control audio-no';
                pgvSendClick({
                    hottag: 'act.a20150401fool.audio.stop'
                })
            }
        },
        popOpen: function() {
            //				need("biz.dialog",function(Dialog){
            //					Dialog.show({
            //						id:e,
            //						bgcolor:'#000', //弹出“遮罩”的颜色，格式为"#FF6600"，可修改，默认为"#fff"
            //						opacity:70      //弹出“遮罩”的透明度，格式为{10-100}，可选
            //					});
            //				});
            $('#J_popFace').show();
            $('#popShadow').show();
            $('#J_popSide').hide();
        },
        popClose: function() {
            //				need("biz.dialog",function(Dialog){
            //					Dialog.hide();
            //				});
            $('#J_popFace').hide();
            $('#popShadow').hide();
            $('#J_popSide').show();
        }
        //			popAgain : function(e){
        //				core.popOpen('J_popFace');
        //				$('#J_popSide').hide();
        //			}
    };
//是否支持audio并插入audio
if (document.createElement("audio").canPlayType) {
    audio = document.createElement("audio");
   // audio.src = "https://www.20010102.xyz/Monsters.mp3";
    audio.src = "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-12d4810f-1351-47aa-b909-986a190258c5/06e11152-d304-49b9-807d-09aeec954604.mp3";
    audio.autoplay = 'autoplay';
    audio.loop = 'loop';
    $('#Jm').show();
    pgvSendClick({
        hottag: 'act.a20150401fool.support.audio'
    })
}
//检测是否是否支持H5 video
if (!!document.createElement('video').canPlayType) {
    pgvSendClick({
        hottag: 'act.a20150401fool.support.video'
    })
    //创建video元素
    var vidTest = document.createElement("video");
    //检测是否可以播放webm格式的视频
    webmTest = vidTest.canPlayType('video/webm; codecs="vp8.0, vorbis"');
    if (webmTest != "probably") {
        document.getElementById("nb-video").style.display = "none";
        pgvSendClick({
            hottag: 'act.a20150401fool.webm.no'
        });
        //检测是否可以播放mp4格式的视频
        if (vidTest.canPlayType('video/mp4; codecs="avc1.4D401E, mp4a.40.2"') == "probably") {
            pgvSendClick({
                hottag: 'act.a20150401fool.mp4.yes'
            })
        }
    } else {
        pgvSendClick({
            hottag: 'act.a20150401fool.webm.yes'
        })
    }
}


(function(){
    var vendorPrefix=getBrowserPrefix();
    var eventName=visibilityEvent(vendorPrefix);
    document.addEventListener(eventName,visibilityEventCallback);
    var oldTitle=document.title;
    function visibilityEventCallback(){
        if(document.hidden){
            oldTitle=document.title;
            document.title="o(>﹏<)o不要离开我"+oldTitle;
        }else{
            document.title=oldTitle;
        }
    }
    /*------------------------ 解决浏览器兼容性问题 ----------------------------------*/
    // Get Browser-Specifc Prefix
    function getBrowserPrefix() {
          // Check for the unprefixed property.  
          if ('hidden' in document) {
            return null;
        }
        // All the possible prefixes.  
        var browserPrefixes = ['moz', 'ms', 'o', 'webkit'];
        for (var i = 0; i < browserPrefixes.length; i++) {
            var prefix = browserPrefixes[i] + 'Hidden';
            if (prefix in document) {
              return browserPrefixes[i];
            }
        }
         // The API is not supported in browser.  
         return null;
    }
    // Get Browser Specific Hidden Property
    function hiddenProperty(prefix) {
        if (prefix) {
            return prefix + 'Hidden';
        } else {
            return 'hidden';
        }
    }
    // Get Browser Specific Visibility State
    function visibilityState(prefix) {
      if (prefix) {
        return prefix + 'VisibilityState';
      } else {
        return 'visibilityState';
      }
    }
    // Get Browser Specific Event
    function visibilityEvent(prefix) {
      if (prefix) {
        return prefix + 'visibilitychange';
      } else {
        return 'visibilitychange';
      }
    }
})();