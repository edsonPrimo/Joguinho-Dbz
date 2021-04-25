class DBZ {
    nome;
    ki;
    transformação;

}
const goku = new DBZ ()
    goku.nome = 'Goku' ;
    goku.vida = 100;
    goku.transformação = 'normal';
    
const gohan = new DBZ ()
    gohan.nome = 'Gohan' ;
    gohan.vida = 100;
    gohan.ki = 'normal';

const vegeta = new DBZ ()
    vegeta.nome = 'Vegeta' ;
    vegeta.vida = 100;
    vegeta.ki = 'normal';    

const cell = new DBZ ()
    cell.nome = 'Cell' ;
    cell.vida = 100;
    cell.ki = 'normal';    

let botaofight = document.getElementById('fight')

function escolha() {
        let escolhaLista = document.getElementById('escolha').value
        if (escolhaLista == goku.nome) {
            let lutadorFoto = document.getElementById ('lutadorfoto')
            lutadorFoto.src = "https://i.imgur.com/AxOOtEw.gif"
            let playerName = document.getElementById('primeiroLutador')
            playerName.innerHTML = goku.nome
            let escolhido = goku.vida
            botaofight.style.display = 'block'               
        }
        else if (escolhaLista == gohan.nome) {
            let lutadorFoto = document.getElementById ('lutadorfoto')
            lutadorFoto.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddmjuhn-d96f723c-2abf-4a03-ae6d-9f3c034a043c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODRkYzEzYjctYTJlNy00YjQ1LTgzZWMtMzExZTcyZTgyOTAwXC9kZG1qdWhuLWQ5NmY3MjNjLTJhYmYtNGEwMy1hZTZkLTlmM2MwMzRhMDQzYy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.gZi-g8eJWodgpu5c-mjN5i1pns0HUE9vYgO26oZPPjg"    
            let playerName = document.getElementById('primeiroLutador')
            playerName.innerHTML = gohan.nome
            let escolhido = gohan.vida
        }
        else if (escolhaLista == vegeta.nome) {
            let lutadorFoto = document.getElementById ('lutadorfoto')
            lutadorFoto.src = "https://i.pinimg.com/originals/4f/c3/da/4fc3da988947ede800c1790d437a8163.png"    
            let playerName = document.getElementById('primeiroLutador')
            playerName.innerHTML = vegeta.nome
            let escolhido = vegeta.vida
        }
        else if (escolhaLista == ""){
            botaofight.style.display = 'none'
            location.reload()
        }
}    
        
function fight() {
    let resultado = document.getElementById('resultado')
    gokuVence = "Goku venceu <br><a href='' style='font-size:25px;text-decoration:none;color:black;'>Lutar novamente</a>"
    cellVence = "Cell venceu <br><a href='' style='font-size:25px;text-decoration:none;color:black;'>Lutar novamente</a>"
    empate = "Empate <br><a href='' style='font-size:25px;text-decoration:none;color:black;'>Lutar novamente</a>"
    //dano = Math.random() * 25 
    goku.vida -= parseInt(Math.random()*15)
    cell.vida -= parseInt(Math.random()*15)
    var x = document.getElementById('vidaGokuHeader')
        if (goku.vida <= 0) {
            goku.vida = 0.1
            botaofight.style.display = 'none'
            resultado.innerHTML = cellVence
            resultado.style.display = 'block'
        } 
        else if (cell.vida <= 0) {
            cell.vida = 0.1
            botaofight.style.display = 'none'
            resultado.innerHTML = gokuVence
            resultado.style.display = 'block'    
        }
        else if (cell.vida <= 0 && goku.vida <= 0){
            resultado.innerHTML = empate
            resultado.style.display = 'block' 
        }

    x.style.width = `${goku.vida}%`
    var y = document.getElementById("vidaCellHeader")
    y.style.width = `${cell.vida}%`

        if (goku.vida < 45) {
        let lutadorFoto = document.getElementById ('lutadorfoto')
        lutadorFoto.src = "https://i.imgur.com/tJO40WN.gif"
        lutadorFoto.style.width = "16%"        
        } 
}