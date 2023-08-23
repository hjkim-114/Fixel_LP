'use strict';
{
    // アコーディオン
    // DOM取得
    const parent = document.querySelectorAll('.faq-box-q');
    console.log(parent);

    // イベント
    for (let i = 0; i < parent.length; i++) {
        // clickイベントを付加
        parent[i].addEventListener('click', accodionToggle);
    }

    // 処理
    function accodionToggle(e) {
        // クリックした要素にクラスを付加
        e.currentTarget.classList.toggle('is-open');
        // クリックした要素の兄弟要素を取得
        const child = e.currentTarget.nextElementSibling;
        //　兄弟要素にクラスを付加
        child.classList.toggle('is-open');
    }

    document.addEventListener("DOMContentLoaded", () => {
        const spanopen = document.getElementById("openspan");
        const dialog = document.getElementById("privacy-policy");
        const closeBtn = dialog.querySelector("#close");
      
        spanopen.addEventListener("click", () => {
          dialog.showModal();
        });
      
        closeBtn.addEventListener("click", (event) => {
          event.preventDefault();
          dialog.close();
        });
      });
}