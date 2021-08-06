import { InputForm } from './component/input/motion_element.js';
var input = new InputForm();
// 버튼 리스트에 이벤트 추가
var insertBtnList = document.querySelectorAll('.insert_btn');
insertBtnList.forEach(function (btn) {
    btn.addEventListener('click', function () {
        var media = btn.textContent;
        media && input.create(media);
    });
});
