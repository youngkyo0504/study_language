let dragged;

document.addEventListener("drag", function(event){},false);

// dragstart 이벤트는 사용자가 요소나 선택한 텍스트를 드래그하기 시작할 때 발생합니다.
document.addEventListener("dragstart", function( event ) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5; // 원래 요소의 opacitiy가줄어든다. 
}, false);

// dragstart와 dragend는 이어진다. 그 target이 ... 
document.addEventListener("dragend", function( event ) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

///* events fired on the drop targets */ 드롭가능한 타겟을 들고 있을 때 계속 발생 
document.addEventListener("dragover", function( event ) {
    console.log('dragover')
    // prevent default to allow drop
    event.preventDefault();
}, false);

//드롭가능한 구역을 들어왔을 때
document.addEventListener("dragenter", function( event ) {
    // highlight potential drop target when the draggable element enters it
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "purple";
    }

}, false);

// drop가능한 구역을 벗어났을 때
document.addEventListener("dragleave", function( event ) {
    // reset background of potential drop target when the draggable element leaves it
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
    }

}, false);
//드롭을 했을때!!! 
document.addEventListener("drop", function( event ) {
    // prevent def존ault action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }
  
}, false);
