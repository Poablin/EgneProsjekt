let brettDiv = document.getElementById('brett');
let selectedPiece = null;
let diceNumber = null;
let savedGame = null;
let savedDice = null;


let pieces = [
    { name: "yellow1", cx: "21.2", cy: "111.2", selected: 'pieces' },
    { name: 'yellow2', cx: '39.1', cy: '111.2', selected: 'pieces' },
    { name: 'yellow3', cx: '21.2', cy: '128.2', selected: 'pieces' },
    { name: 'yellow4', cx: '39.2', cy: '128.2', selected: 'pieces' },
    { name: 'red1', cx: '111.2', cy: '111.2', selected: 'pieces' },
    { name: 'red2', cx: '129.2', cy: '111.2', selected: 'pieces' },
    { name: 'red3', cx: '111.2', cy: '128.2', selected: 'pieces' },
    { name: 'red4', cx: '129.2', cy: '128.2', selected: 'pieces' },
    { name: 'blue1', cx: '111.2', cy: '21.2', selected: 'pieces' },
    { name: 'blue2', cx: '129.2', cy: '21.2', selected: 'pieces' },
    { name: 'blue3', cx: '111.2', cy: '38.2', selected: 'pieces' },
    { name: 'blue4', cx: '129.2', cy: '38.2', selected: 'pieces' },
    { name: 'green1', cx: '21.2', cy: '21.2', selected: 'pieces' },
    { name: 'green2', cx: '39.2', cy: '21.2', selected: 'pieces' },
    { name: 'green3', cx: '21.2', cy: '38.2', selected: 'pieces' },
    { name: 'green4', cx: '39.2', cy: '38.2', selected: 'pieces' },
];

let previousPieces = [
    { name: "yellow1", cx: "21.2", cy: "111.2", selected: 'pieces' },
    { name: 'yellow2', cx: '39.1', cy: '111.2', selected: 'pieces' },
    { name: 'yellow3', cx: '21.2', cy: '128.2', selected: 'pieces' },
    { name: 'yellow4', cx: '39.2', cy: '128.2', selected: 'pieces' },
    { name: 'red1', cx: '111.2', cy: '111.2', selected: 'pieces' },
    { name: 'red2', cx: '129.2', cy: '111.2', selected: 'pieces' },
    { name: 'red3', cx: '111.2', cy: '128.2', selected: 'pieces' },
    { name: 'red4', cx: '129.2', cy: '128.2', selected: 'pieces' },
    { name: 'blue1', cx: '111.2', cy: '21.2', selected: 'pieces' },
    { name: 'blue2', cx: '129.2', cy: '21.2', selected: 'pieces' },
    { name: 'blue3', cx: '111.2', cy: '38.2', selected: 'pieces' },
    { name: 'blue4', cx: '129.2', cy: '38.2', selected: 'pieces' },
    { name: 'green1', cx: '21.2', cy: '21.2', selected: 'pieces' },
    { name: 'green2', cx: '39.2', cy: '21.2', selected: 'pieces' },
    { name: 'green3', cx: '21.2', cy: '38.2', selected: 'pieces' },
    { name: 'green4', cx: '39.2', cy: '38.2', selected: 'pieces' },
];