let datas = JSON.parse(JSON.stringify(data));
console.log(datas)

const getParam = () =>{
    temp = location.href.split("?"); data=temp[1].split(":"); 
    va = data[1];
    return va;
}

const newMyArr = () => {
    
    cur = datas.articles[getParam()];
    $(".news_title").append(cur.title)
    $(".article_info .date").append(cur.date);
    $(".article_info .reporter").append(cur.press + "  " + cur.reporter + " 기자");
    $(".article_image").attr("src",cur.image)
    $(".article_text").append(cur.contents)
}

newMyArr();