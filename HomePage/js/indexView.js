let contentDiv = document.getElementById('content');

const show = () => {
    contentDiv.innerHTML = `
    <div class="gridContent" id="gridContent">
        <div class="header">
            <div class="logoDiv"><span>Eventuell logo her</span></div>
            <div class="listDiv">
                <ul class="headerList">
                <li><a href="pages/Ludo/game.html">Ludo</a></li>
                <li><a href="#">Funker ikke enda</a></li>
                <li><a href="#">Funker ikke enda</a></li>
                </ul>
            </div>
        </div>
        <div class="main" id="main"></div>
        <div class="footer"></div>
    </div>
    `;
}