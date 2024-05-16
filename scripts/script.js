let chakra = 0; //初始點擊「查克拉」的次數為0

$(document).ready(() => { //jQuery寫法，等DOM元素都載入完成，再啟動js  //ES6箭頭函式寫法，不寫function，直接寫參數名 並用箭頭接著大括弧（沒名字的function為匿名函數 要注意放的位置）
    // 抓出id為hitButton之html元素，監聽click事件
    $('#hitButton').click(evt => { //ES6箭頭函式寫法 參數名為evt
        evt.preventDefault(); //檔下預設動作
        chakra += 1; //每次點擊按鈕，變數chakra的值就加1
        // 抓出id為hitButton之html元素，修改其內容（使用ES6 字串與變數串接寫法）
        $('#hitButton').text(`${chakra}次`) // innerHTML指的是從物件的 起始位置到終止位置 的 全部內容,包括 Html標籤。innerText 指的是從起始位置到終止位置的內容,但它會 移除Html標籤。
    });
});

// 做一個承諾「物件」 指定 給變數 bigTrick
let bigTrick = new Promise((resolve, reject) => { //ES6箭頭函式寫法 參數名為resolve及reject
    setTimeout(()=>{
        if (chakra>=5) {
            resolve('螺旋丸');
        } else {
            reject('螺旋丸');
        }
    }, 3000)
});
// Promise物件中 有一個 參數名為resolve及reject的函數（成功失敗參數不一定要叫resolve及reject）
// 參數名為resolve及reject的函數中 又有一個 setTimeout函數
// setTimeout函數 中有兩個參數 第一個參數為沒有參數的函數 第二個參數為3000
// 把函數當參數用 為 CallBack Function，1、讓函式成為另一個函式的參數 2、讓函式控制參數函式的執行時機

bigTrick //可以跟then寫在同一行，也可以換行
    // Promise成功的話 會做的事（resolve的內容 會被傳入 then中 函數的參數trick 中）
    .then(trick => {
        $('#result').html(`查克拉凝聚成功，使出${trick}`)
        //如果有在三秒內點擊五下的話，result內容會被替換成「查克拉凝聚成功，使出螺旋丸」
        //resolve中的內容 會被傳到 trick中
    }) //寫成一行的話是 bigTrick.then.catch 所以中間不能有分號
    // Promise失敗的話 會做的事（reject的內容 會被傳入 catch中 函數的參數err 中）
    .catch(err => {
        $('#result').html(`查克拉凝聚太慢，無法使出${err}`)
        //未在三秒內點擊五下的話，result內容會被替換成「查克拉凝聚太慢，無法使出螺旋丸」
        //reject中的內容 會被傳到 err中
    });

//箭頭函式只有一行的話 可以省略大括弧
// bigTrick
//     .then(trick => $('#result').html(`查克拉凝聚成功，使出${trick}`))
//     .catch(err =>  $('#result').html(`查克拉凝聚太慢，無法使出${err}`))
