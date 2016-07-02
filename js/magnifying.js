/**
 * Created by leson on 2016/6/28.
 */
function  init(dataSource){
    //设置默认效果
    var defaultSmallImg = $("<img src=img/"+dataSource.smallList[0]+" />");
    $("#small").append(defaultSmallImg);

    var defaultBigImg = $("<img src=img/"+dataSource.bigList[0]+" />");
    $("#big").append(defaultBigImg);

    for (var i = 0;i<dataSource.smallList.length;i++){
        var li =$("<li><img src=img/"+dataSource.smallList[i]+"  data-bigSrc=img/"+dataSource.bigList[i]+" /></li>");
        $("#nav ul").append(li);
    }
    $("#nav ul li img").hover(function (e) {
        var src = $(this).attr("src");
        $("#small").find("img:eq(0)").attr("src", src);
        var bigSrc = $(this).attr("data-bigSrc");
        $("#big").find("img:eq(0)").attr("src", bigSrc);
    });
    $("#small").mouseover(function () {
        $("#mark").show();
        $("#big").show();
    }).mouseout(function () {
        $("#mark").hide();
        $("#big").hide();
    });
    $("#small").mousemove(function (event) {
        var evt = window.event || event;
        var x = evt.clientX - $(this).offset().left - $("#mark").width() / 2;
        var y = evt.clientY - $(this).offset().top - $("#mark").height() / 2;
        if (x <= 0) {
            x = 0;
        }
        if (x >= $(this).width() - $("#mark").width()) {
            x = $(this).width() - $("#mark").width();
        }
        if (y <= 0) {
            y = 0;
        }
        if (y > $(this).height() - $("#mark").height()) {
            y = $(this).height() - $("#mark").height();
        }
        var bigX = (x / $("#small").width()) * $("#big img").width();
        var bigY = (y / $("#small").height()) * $("#big img").height();
        $("#mark").css({"left": x, "top": y});
        $("#big img").css({"left": -bigX, "top": -bigY});
    });
}