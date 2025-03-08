
function rollDice(){

    const input= document.getElementById("input").value
    const diceImages= document.getElementById("diceImg")
    const diceResult= document.getElementById("diceRes")
    const values= []
    const images=[]

    for(let i=0; i<input; i++){
        const rand=Math.floor(Math.random()*6)+1
        values.push(rand)
        images.push(`<img src="matriales/Dice-${rand}.png" alt="dice${rand}">`)        
    }

    diceResult.textContent= `Dice: ${values.join(", ")}`
    diceImages.innerHTML= images.join(" ")
}