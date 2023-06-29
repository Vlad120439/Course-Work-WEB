 // Неважлива фенкція. Служить для полегшеного запуску процесу демонстрації проекту
function prepare(){
    let startArray = [
        {name: "JBL GO", channels: 1, power: 3, connection: 'Wireless', color: 'Blue', pictname: "2410972135.jpg"},
        {name: "Anker SoundCore Select Pro", channels: 2, power: 30, connection: 'Wireless', color: 'Black', pictname: "Anker SoundCore Select Pro.jpg"},
        {name: "Samsung Sound Tower MX-ST50B", channels: 2, power: 240, connection: 'Wireless', color: 'Black', pictname: "Samsung Sound Tower MX-ST50B.jpg"},
    ]
    
    localStorage.clear() //Очищуємо LocalStorage
    
    //Додаємо нові елементи в LocalStorage
    for (let i=0; i<startArray.length; i++) {   
        let row = startArray[i]
        let rowSt = JSON.stringify(row)
        localStorage.setItem(`${i}`, rowSt)
    }

    location.reload();  //Перезавантажуємо вікно
}