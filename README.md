## 簡介
- [Demo Link](https://tamytsai.github.io/chakra-game/)
- 本專案為一個透過快速點擊按鈕以施放絕招的遊戲
- 以HTML、CSS及JavaScript撰寫，為一頁式靜態網頁
- CSS中盡量將元素大小以相對單位設定，以達RWD效果
- 使用ES6、jQuery使JavaScript語法變得簡潔（箭頭函式、簡化DOM控制等）
- 採用UJS寫法，維持HTML簡潔
- 運用AJAX promise設計遊戲機制

## 功能
- 點擊「凝聚查克拉」按鈕可凝聚查克拉
- 3秒內點擊按鈕達5次以上，即可成功使出螺旋丸招數
- 未於3秒內點擊按鈕達5次以上，則無法使出螺旋丸招數
- 一進入遊戲頁面即開始倒數3秒
- 已點擊次數將顯示於按鈕上

## 畫面
### 初始畫面
<img width="828" alt="截圖 2024-05-16 初始畫面" src="https://github.com/TamyTsai/chakra-game/assets/97825677/55d3e3d7-8d32-4a23-826b-71d9e2ea4e91">


### 3秒內點擊按鈕達5次以上，成功施放招數
<img width="820" alt="截圖 2024-05-16 凝聚成功" src="https://github.com/TamyTsai/chakra-game/assets/97825677/c29fda69-ccfd-4e12-ac89-923142f59f58">


### 未於3秒內點擊按鈕達5次以上，無法使出招數
<img width="823" alt="截圖 2024-05-16 凝聚失敗" src="https://github.com/TamyTsai/chakra-game/assets/97825677/3e95e76a-c086-46d8-a582-099836146f2e">



## 安裝
### 取得專案
```bash
git clone https://github.com/TamyTsai/chakra-game.git
```
### 移動到專案內
```bash
cd chakra-game
```

## 資料夾及檔案說明
- scripts - JS檔案放置處
  - jquery-3.3.1.min.js - jQuery檔案
  - script.js - 頁面JS檔案，負責網頁功能
- styles - 樣式放置處
  - style.css - 頁面樣式檔案
- index.html - 頁面HTML檔

## 專案技術
- HTML
- CSS
  - RWD
- JavaScript
  - jQuery v3.3.1
  - ES6
  - AJAX
