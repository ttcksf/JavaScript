//長方形
const rectangle = document.querySelector('.rectangle');

//ボタンをクリックしたらonClickButton()を発動
document.querySelector('.button').addEventListener('click',onClickButton);

//ボタンをクリックするたびに長方形のグラデーション色を変える
function onClickButton(){
    //0-359のランダムな数を取得
    const randomHue = Math.trunc(Math.random() * 360);
    //グラデーションの開始色と終了色を設定
    const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;
    const randomColorEnd = `hsl(${randomHue + 40}, 100%, 50%)`;
    //長方形のグラデーションのための変数を変更
    rectangle.style.setProperty('--start', randomColorStart);
    rectangle.style.setProperty('--end', randomColorEnd);
}

//ランダムな数字を生成
const randomArray1 = crypto.getRandomValues(new Uint16Array(10)).join('');
console.log(randomArray1);
