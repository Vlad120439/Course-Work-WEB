// Задання вихідних параметрів (title, [x], content) конфігурації модалки 

const modal = $.modal({
    title: 'Portable speaker options',
    closable: true,
    content: `
        <div class="modal-form">
            <label for="name">Portable speaker name:</label><br>
            <input type="text" id="name" name="name" class="modal-form-field" placeholder="Input portable speakers name..."/><br><br>
            <label for="channels">Portable speaker number of channels :</label><br>
            <input type="number" id="channels" name="channels" class="modal-form-field" placeholder="Input portable speakers number of channels..."/><br><br>
            <label for="power">Portable speaker power, V :</label><br>
            <input type="number" id="power" name="power" min="1" max="1000" class="modal-form-field" placeholder="Input portable speakers power (V) between 1 & 1000"/><br><br>
            <label for="connection">Portable speaker connection (wired/wireless) :</label><br>
            <select id="connection" name="connection" class="modal-form-field">
            <option value="Wired">Wired</option>
            <option value="Wireless">Wireless</option>
            </select><br><br>
            <label for="color">Portable speaker color:</label><br>
            <input type="text" id="color" name="color" class="modal-form-field" placeholder="Input portable speakers color..."/><br><br>
            <div id= "img-prev-section">
                <img id="imgprev" src="" >
            </div>   
                <label for="file" id="label-select-img">Select image file:</label><br>
                <input type="file" id="imgfile" name="imgfile"><br><br>
            
            <button id="submitbtn" class="blue-button" onclick="myFunction()">Click me</button>
        </div> 
    `,
    width: '500px'
})

// Вибірка всіх "Power" та обчислення "Total power"
function countTotalPower(){
    let powArr = document.getElementsByClassName("element-power")
    let totalPower = 0
    for (let i=0; i<powArr.length; i++) {
        totalPower+= Number(powArr[i].outerText)
    }
    document.getElementById("countresult").innerHTML = `Total power:  <b>${totalPower} V</b>`
}



countbtn.addEventListener('click', countTotalPower)