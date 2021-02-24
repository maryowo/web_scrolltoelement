$("a").each(function (index, element) {
    
    console.log("編號:" + index);

    var target =$(this).attr("data-st-tagrget");
    var duration =$(this).attr("data-st-duration");

    console.log("目標:" + target);
    console.log("時間:" + duration);
    
    var offset = $("#" + target).offset();
    var top = offset.top;

    console.log("上方:" + top);

    // parseInt() 將文字轉化為數值
    // stop() 停止當前動作
    
    $(this).click(function (e) { 
        e.preventDefault();

        $("html").stop().animate({
            scrollTop: top
        },parseInt(duration));
        
    });
    
});