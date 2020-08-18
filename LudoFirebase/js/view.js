function show() {
   let x = 'this.x.baseVal.value';
   let y = 'this.y.baseVal.value';
   let brettDiv = document.getElementById('app');
   document.getElementById('diceP').innerHTML = model.diceNumber;
   brettDiv.innerHTML = `<svg viewBox="0 0 315 151" width="100%" height="100%">
   <path onclick="movePiece(61, 70)" class="polygon green" d="M 60.2,60.2 75.2,75.2 60.2,90.2 Z" id="gW" />
   <path onclick="movePiece(70, 79)" class="polygon yellow" d="M 60.2,90.2 75.2,75.2 90.21,90.2 Z" id="yW" />
   <path onclick="movePiece(79, 70)" class="polygon red" d="M 90.21,60.2 75.2,75.2 90.2,90.2 Z" id="rW" />
   <path onclick="movePiece(70, 61)" class="polygon blue"  d="m 60.2,60.2 15,15 15,-15 -30,2e-6" id="bW" />
   <rect class="rect red" id="rect3115-6" width="60" height="60" x="90.2" y="90.2" />
   <rect class="rect green" id="rect3090" width="60" height="60" x="0.2" y="0.2" />
   <rect class="rect yellow" id="rect3123" width="60" height="60" x="0.2" y="90.2" />
   <rect class="rect blue" id="rect3115" width="60" height="60"x="90.2" y="0.2" />
   <rect onclick="movePiece(${x}, ${y}, rect3152)" class="rect white" id="rect3152" width="10" height="10" y="140.2" x="70.2" />
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
   <circle onclick="selectPiece(modelPieces[0], '${modelPieces[0].name}')" class="pieces yellow" id="${modelPieces[0].name}" cx="${modelPieces[0].cx}" cy="${modelPieces[0].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[1], '${modelPieces[1].name}')" class="pieces yellow" id="${modelPieces[1].name}" cx="${modelPieces[1].cx}" cy="${modelPieces[1].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[2], '${modelPieces[2].name}')" class="pieces yellow" id="${modelPieces[2].name}" cx="${modelPieces[2].cx}" cy="${modelPieces[2].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[3], '${modelPieces[3].name}')" class="pieces yellow" id="${modelPieces[3].name}" cx="${modelPieces[3].cx}" cy="${modelPieces[3].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[4], '${modelPieces[4].name}')" class="pieces red" id="${modelPieces[4].name}" cx="${modelPieces[4].cx}" cy="${modelPieces[4].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[5], '${modelPieces[5].name}')" class="pieces red" id="${modelPieces[5].name}" cx="${modelPieces[5].cx}" cy="${modelPieces[5].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[6], '${modelPieces[6].name}')" class="pieces red" id="${modelPieces[6].name}" cx="${modelPieces[6].cx}" cy="${modelPieces[6].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[7], '${modelPieces[7].name}')" class="pieces red" id="${modelPieces[7].name}" cx="${modelPieces[7].cx}" cy="${modelPieces[7].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[8], '${modelPieces[8].name}')" class="pieces blue" id="${modelPieces[8].name}" cx="${modelPieces[8].cx}" cy="${modelPieces[8].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[9], '${modelPieces[9].name}')" class="pieces blue" id="${modelPieces[9].name}" cx="${modelPieces[9].cx}" cy="${modelPieces[9].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[10], '${modelPieces[10].name}')" class="pieces blue" id="${modelPieces[10].name}" cx="${modelPieces[10].cx}" cy="${modelPieces[10].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[11], '${modelPieces[11].name}')" class="pieces blue" id="${modelPieces[11].name}" cx="${modelPieces[11].cx}" cy="${modelPieces[11].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[12], '${modelPieces[12].name}')" class="pieces green" id="${modelPieces[12].name}" cx="${modelPieces[12].cx}" cy="${modelPieces[12].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[13], '${modelPieces[13].name}')" class="pieces green" id="${modelPieces[13].name}" cx="${modelPieces[13].cx}" cy="${modelPieces[13].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[14], '${modelPieces[14].name}')" class="pieces green" id="${modelPieces[14].name}" cx="${modelPieces[14].cx}" cy="${modelPieces[14].cy}" r="3" />
   <circle onclick="selectPiece(modelPieces[15], '${modelPieces[15].name}')" class="pieces green" id="${modelPieces[15].name}" cx="${modelPieces[15].cx}" cy="${modelPieces[15].cy}" r="3" />
   </svg>`;
   console.log('Show function has run')
}

// function show2() {
//    brettDiv.innerHTML = `<object id="brettObject" type="image/svg+xml" data="drawing.svg">
//                                   <img src="drawing.svg" />
//                                   </object>`;
//    console.log('Show function has run')
// }