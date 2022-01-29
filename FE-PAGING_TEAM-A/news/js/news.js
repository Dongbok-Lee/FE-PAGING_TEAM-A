let datas = JSON.parse(JSON.stringify(data));
console.log(datas)

const newMyArr = datas.articles.forEach((cur, index) => {
    console.log(index);
    if(index == 0){
        $(".main_article").attr("OnClick","location.href ='news_detail.html?data:0'")
        $(".main_card img").attr("src",cur.image)
        $(".main_news_text").append(cur.title)
    }else{
        var article_card =  '<div class = "sub_card"  id = ' + index + ' OnClick = "location.href = \'news_detail.html?data:'+ index +'\'"><img alt="기사이미지"><h2 class = sub_news_text></h2></div>'
        $(".sub_article").append($(article_card))
        
        $("#" +index+" img").attr("src",cur.image)
        $("#" +index + " .sub_news_text").text(cur.title)
    }
});