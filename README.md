# tkirby.org

目前 host 在 github.com:

 - https://github.com/zbryikt/tkirby.org
 - 使用 gh-pages, 讓 tkirby.org 指過來.
 - 過去的舊連結 ( `https://tkirby.org/blog/?p=<id>` ) 會透過 [https://tkirby.org/blog](https://tkirby.org/blog/) 中的 javascript 重新導向至 `https://tkirby.org/blog/<id>/`, 以移除不必要的動態頁面與渲染程式
 - 舊貼文從 bluehost 爬取, 以 html 形式保存在 src/pug/html; 新貼文則使用 pug 撰寫, 置於 src/pug/p/.
 - 使用 `npm run static` 來啟動簡易的本地靜態網頁存取伺服器, 或使用 `npm run dynamic` 啟用舊式即時渲染模式.

這是我個人的部落格, 往日使用 Wordpress 運作在 bluehost 上, 後來全移植回本地自行管理. 可以考慮繼續更新, 不過時間大致停在 2014 ~ 2016 年以前. 做為一個回憶用的站台也無不可.
