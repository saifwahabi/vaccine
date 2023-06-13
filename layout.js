let vaccine = ['BCG','HVB','Penta','Polioinj','poliooral','pneumosil','RR','HVB','PCV'];
let months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'];

let layout = "day"

if (layout == 'years'){
    document.write(`<div class="main">`)
    for (let i = 0; i < vaccine.length; i++){   
        document.write(`<h2 class="title red">nombre de ${vaccine[i]}</h2>`);
        for(let j = 0; j < months.length; j++){
            document.write(`
                <h2 class="title">${months[j]}</h2>
                <div class="input-field">
                    <i class="fa-solid fa-child-dress"></i>
                    <input type="text" placeholder="fille" id="${vaccine[i]}_${months[j]}_fille" />
                </div>
                <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="garcon" id="${vaccine[i]}_${months[j]}_garcon"/>
                </div>
            `)
            
        }
    }
    document.write(`</div>`)
}else if(layout == 'day') {
    document.write(`<div class="main">`)  
        document.write(`<h2 class="title">enter les donnee</h2>`);
            document.write(`
                <div class="input-field">
                    <i class="fa-solid fa-child-dress"></i>
                    <input type="text" placeholder="nom et prenom" id="nom" />
                </div>
                <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="gendre" id="gendre"/>
                </div>
                <div class="input-field">
                    <i class="fa-solid fa-syringe"></i>
                    <input type="text" placeholder="type de vaccine" id="type_de_vaccine"/>
                </div>
                <div class="button">
                    <button class="btn" onclick="myFunction()">Click me</button>
                </div>
            `)
    document.write(`</div>`)

}
