const temp_box =document.getElementById("temp_box")
const to_F =document.getElementById("to_F")
const to_C =document.getElementById("to_C")
const result =document.getElementById("result")
const submit_btn =document.getElementById("submit_btn")
let temp
function convert(){
    
    temp=Number(temp_box.value)

    if(to_F.checked){
        temp= ((9/5)*temp)+32
        result.textContent=temp.toFixed(1)+"°F"
    }
    else if(to_C.checked){
        temp= (5/9)*(temp-32)
        result.textContent=temp.toFixed(1)+"°C"
    }
    else{
        result.textContent="select a unit"
    }
}