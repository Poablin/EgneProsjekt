let x = 'this.x.baseVal.value';
let y = 'this.y.baseVal.value';

function show() {
   document.getElementById('diceP').innerHTML = diceNumber;
   brettDiv.innerHTML = `<svg viewBox="0 0 315 151" width="100%" height="100%">
   <path onclick="movePiece(61, 70)" class="polygon green" d="M 60.2,60.2 75.2,75.2 60.2,90.2 Z" id="gW" />
   <path onclick="movePiece(70, 79)" class="polygon yellow" d="M 60.2,90.2 75.2,75.2 90.21,90.2 Z" id="yW" />
   <path onclick="movePiece(79, 70)" class="polygon red" d="M 90.21,60.2 75.2,75.2 90.2,90.2 Z" id="rW" />
   <path onclick="movePiece(70, 61)" class="polygon blue"  d="m 60.2,60.2 15,15 15,-15 -30,2e-6" id="bW" />
   <rect class="rect red" id="rect3115-6" width="60" height="60" x="90.2" y="90.2" />
   <rect class="rect green" id="rect3090" width="60" height="60" x="0.2" y="0.2" />
   <rect class="rect yellow" id="rect3123" width="60" height="60" x="0.2" y="90.2" />
   <rect class="rect blue" id="rect3115" width="60" height="60"x="90.2" y="0.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="140.2" x="70.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="140.2" x="80.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="80.2" x="140.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="70.2" x="140.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="60.2" x="140.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="80.2" x="10.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="80.2" x="20.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="80.2" x="30.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="80.2" x="40.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="60.2" x="20.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="60.2" x="30.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="60.2" x="40.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="60.2" x="50.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" y="80.2" x="50.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3092" width="10" height="10" x="60.2" y="0.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3111" width="10" height="10" x="70.2" y="0.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3113" width="10" height="10" x="80.2" y="0.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3117" width="10" height="10" x="0.2" y="60.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3119" width="10" height="10" x="0.2" y="70.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121" width="10" height="10" x="0.2" y="80.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3152" width="10" height="10" x="60.2" y="140.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-3" width="10" height="10" x="60.2" y="10.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-33" width="10" height="10" x="60.2" y="20.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-1" width="10" height="10" x="60.2" y="30.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-9" width="10" height="10" x="60.2" y="40.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-35" width="10" height="10" x="60.2" y="50.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-39" width="10" height="10" x="80.2" y="20.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-2" width="10" height="10" x="80.2" y="30.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-29" width="10" height="10" x="80.2" y="40.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-8" width="10" height="10" x="80.2" y="50.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-91" width="10" height="10" x="130.2" y="60.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-26" width="10" height="10" x="120.2" y="60.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-28" width="10" height="10" x="110.2" y="60.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-38" width="10" height="10" x="100.2" y="60.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-0" width="10" height="10" x="90.2" y="60.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-5" width="10" height="10" x="120.2" y="80.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-93" width="10" height="10" x="110.2" y="80.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-82" width="10" height="10" x="100.2" y="80.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-397" width="10" height="10" x="90.2" y="80.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-3971" width="10" height="10" x="80.2" y="90.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-6" width="10" height="10" x="80.2" y="100.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-61" width="10" height="10" x="80.2" y="110.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-84" width="10" height="10" x="80.2" y="120.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-17" width="10" height="10" x="80.2" y="130.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-08" width="10" height="10" x="60.2" y="120.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-06" width="10" height="10" x="60.2" y="110.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-92" width="10" height="10" x="60.2" y="100.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect white" id="rect3121-27-4" width="10" height="10" x="60.2" y="90.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect green" id="rect3119-33" width="10" height="10" x="50.2" y="70.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect green" id="rect3119-33" width="10" height="10" y="70.2" x="10.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect green" id="rect3119-33" width="10" height="10" y="60.2" x="10.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect green" id="rect3119-33" width="10" height="10" y="70.2" x="20.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect green" id="rect3119-33" width="10" height="10" y="70.2" x="30.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect green" id="rect3119-33" width="10" height="10" y="70.2" x="40.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect blue" id="rect3119-33" width="10" height="10" y="10.2" x="80.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect blue" id="rect3119-33" width="10" height="10" y="10.2" x="70.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect blue" id="rect3119-33" width="10" height="10" y="20.2" x="70.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect blue" id="rect3119-33" width="10" height="10" y="50.2" x="70.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect blue" id="rect3119-33" width="10" height="10" y="30.2" x="70.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect blue" id="rect3119-33" width="10" height="10" y="40.2" x="70.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect red" id="rect3121-7-7" width="10" height="10" x="130.2" y="70.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect red" id="rect3121-7-3" width="10" height="10" x="130.2" y="80.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect red" id="rect3121-7-0" width="10" height="10" x="120.2" y="70.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect red" id="rect3121-7-8" width="10" height="10" x="110.2" y="70.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect red" id="rect3121-7-82" width="10" height="10" x="100.2" y="70.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect red" id="rect3121-7-5" width="10" height="10" x="90.2" y="70.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect yellow" id="rect3152-5-4" width="10" height="10" x="60.2" y="130.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect yellow" id="rect3152-5-5" width="10" height="10" x="70.2" y="130.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect yellow" id="rect3152-5-6" width="10" height="10" x="70.2" y="120.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect yellow" id="rect3152-5-7" width="10" height="10" x="70.2" y="110.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect yellow" id="rect3152-5-9" width="10" height="10" x="70.2" y="100.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect yellow" id="rect3152-5-73" width="10" height="10" x="70.2" y="90.2"/>
   <rect y="100.2" x="10.2" height="40" width="40" id="rect1366" class="rect white" />
   <rect y="100.2" x="100.2" height="40" width="40" id="rect1366-0" class="rect white" />
   <rect y="10.2" x="10.2" height="40" width="40" id="rect1366-3" class="rect white" />
   <rect y="10.2" x="100.2" height="40" width="40" id="rect1366-5" class="rect white" />
   <rect onclick="movePiece(${x}, ${y})" y="106.2" x="124.2" height="10" width="10" id="rect3121-7-3-7" class="rect red" />
   <rect onclick="movePiece(${x}, ${y})" y="106.2" x="106.2" height="10" width="10" id="rect3121-7-3-5" class="rect red" />
   <rect onclick="movePiece(${x}, ${y})" y="123.2" x="106.2" height="10" width="10" id="rect3121-7-3-4" class="rect red" />
   <rect onclick="movePiece(${x}, ${y})" y="123.2" x="124.2" height="10" width="10" id="rect3121-7-3-47" class="rect red" />
   <rect onclick="movePiece(${x}, ${y})" y="106.2" x="34.2" height="10" width="10" id="rect3152-5-4-1" class="rect yellow" />
   <rect onclick="movePiece(${x}, ${y})" y="106.2" x="16.2" height="10" width="10" id="rect3152-5-4-4" class="rect yellow" />
   <rect onclick="movePiece(${x}, ${y})" y="123.2" x="16.2" height="10" width="10" id="rect3152-5-4-40" class="rect yellow" />
   <rect onclick="movePiece(${x}, ${y})" y="123.2" x="34.2" height="10" width="10" id="rect3152-5-4-9" class="rect yellow" />
   <rect onclick="movePiece(${x}, ${y})" class="rect green" id="rect3119-7-9" width="10" height="10" x="16.2" y="16.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect green" id="rect3119-7-1" width="10" height="10" x="34.2" y="16.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect green" id="rect3119-7-4" width="10" height="10" x="34.2" y="33.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect green" id="rect3119-7-7" width="10" height="10" x="16.2" y="33.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect blue" id="rect3111-2-0" width="10" height="10" x="106.2" y="16.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect blue" id="rect3111-2-5" width="10" height="10" x="124.2" y="16.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect blue" id="rect3111-2-1" width="10" height="10" x="124.2" y="33.2" />
   <rect onclick="movePiece(${x}, ${y})" class="rect blue" id="rect3111-2-7" width="10" height="10" x="106.2" y="33.2" />
   <circle onclick="selectPiece(pieces[0])" class="${pieces[0].selected} yellow" id="${pieces[0].name}" cx="${pieces[0].cx}" cy="${pieces[0].cy}" r="3" />
   <circle onclick="selectPiece(pieces[1])" class="${pieces[1].selected} yellow" id="${pieces[1].name}" cx="${pieces[1].cx}" cy="${pieces[1].cy}" r="3" />
   <circle onclick="selectPiece(pieces[2])" class="${pieces[2].selected} yellow" id="${pieces[2].name}" cx="${pieces[2].cx}" cy="${pieces[2].cy}" r="3" />
   <circle onclick="selectPiece(pieces[3])" class="${pieces[3].selected} yellow" id="${pieces[3].name}" cx="${pieces[3].cx}" cy="${pieces[3].cy}" r="3" />
   <circle onclick="selectPiece(pieces[4])" class="${pieces[4].selected} red" id="${pieces[4].name}" cx="${pieces[4].cx}" cy="${pieces[4].cy}" r="3" />
   <circle onclick="selectPiece(pieces[5])" class="${pieces[5].selected} red" id="${pieces[5].name}" cx="${pieces[5].cx}" cy="${pieces[5].cy}" r="3" />
   <circle onclick="selectPiece(pieces[6])" class="${pieces[6].selected} red" id="${pieces[6].name}" cx="${pieces[6].cx}" cy="${pieces[6].cy}" r="3" />
   <circle onclick="selectPiece(pieces[7])" class="${pieces[7].selected} red" id="${pieces[7].name}" cx="${pieces[7].cx}" cy="${pieces[7].cy}" r="3" />
   <circle onclick="selectPiece(pieces[8])" class="${pieces[8].selected} blue" id="${pieces[8].name}" cx="${pieces[8].cx}" cy="${pieces[8].cy}" r="3" />
   <circle onclick="selectPiece(pieces[9])" class="${pieces[9].selected} blue" id="${pieces[9].name}" cx="${pieces[9].cx}" cy="${pieces[9].cy}" r="3" />
   <circle onclick="selectPiece(pieces[10])" class="${pieces[10].selected} blue" id="${pieces[10].name}" cx="${pieces[10].cx}" cy="${pieces[10].cy}" r="3" />
   <circle onclick="selectPiece(pieces[11])" class="${pieces[11].selected} blue" id="${pieces[11].name}" cx="${pieces[11].cx}" cy="${pieces[11].cy}" r="3" />
   <circle onclick="selectPiece(pieces[12])" class="${pieces[12].selected} green" id="${pieces[12].name}" cx="${pieces[12].cx}" cy="${pieces[12].cy}" r="3" />
   <circle onclick="selectPiece(pieces[13])" class="${pieces[13].selected} green" id="${pieces[13].name}" cx="${pieces[13].cx}" cy="${pieces[13].cy}" r="3" />
   <circle onclick="selectPiece(pieces[14])" class="${pieces[14].selected} green" id="${pieces[14].name}" cx="${pieces[14].cx}" cy="${pieces[14].cy}" r="3" />
   <circle onclick="selectPiece(pieces[15])" class="${pieces[15].selected} green" id="${pieces[15].name}" cx="${pieces[15].cx}" cy="${pieces[15].cy}" r="3" />
   </svg>`;
   console.log('Show function has run')
}

// function show2() {
//    brettDiv.innerHTML = `<object id="brettObject" type="image/svg+xml" data="drawing.svg">
//                                   <img src="drawing.svg" />
//                                   </object>`;
//    console.log('Show function has run')
// }