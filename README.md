# web_scrolltoelement
網頁 捲動至指定元素 套件

# 範例
https://maryowo.github.io/web_scrolltoelement/.

# 使用方式
## 連結 CDN
將 CDN 放在 body 結束標籤前
https://maryowo.github.io/web_scrolltoelement/main.js

範例
````
<script src="https://maryowo.github.io/web_scrolltoelement/main.js"></script>
````

## 捲動說明
屬性名稱 | 屬性說明
--------------- | -----------------
data-st-tagrget | 要前往元素的ID名稱
data-st-duration | 捲動所花的時間(毫秒)
data-st-offset | 位移的大小

範例
````
<a href="" data-st-tagrget="area2" data-st-duration="2000" data-st-offset="100">連結2</a>
````

## 箭頭說明
屬性名稱 | 屬性說明
--------------- | -----------------
data-st-top | 箭頭要出現的高度
data-st-time | 特效持續的時間

範例
````
<a id="arrow" data-st-tagrget="top" data-st-duration="800" data-st-top="300" data-st-time="1000"></a>
````