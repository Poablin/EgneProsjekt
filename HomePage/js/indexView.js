let contentDiv = document.getElementById('content');

const show = () => {
    contentDiv.innerHTML = `
    <div class="gridContent" id="gridContent">
        <div class="header">
            <ul style="margin-right:50px;">
                <li class="headerList"><a href="">Andre ting</a></li>
                <li class="headerList"><a href="#">Andre ting</a></li>
                <li class="headerList"><a href="pages/Ludo/game.html">Ludo</a></li>
            </ul>
        </div>
        <div class="main" id="main"></div>
        <div class="footer"></div>
    </div>
    `;
}