import { MediaType, InputForm } from './component/input/motion_element.js';
const input = new InputForm();
// 버튼 리스트에 이벤트 추가
const insertBtnList = document.querySelectorAll('.insert_btn');

insertBtnList.forEach((btn) => {
  btn.addEventListener('click', () => {
    const media = btn.textContent;
    media && input.create(media as MediaType);
  });
});
