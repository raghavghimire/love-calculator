//console.log("hello world"); 
//alert(" k xa tw");
// let response =prompt("what is your name hom");
//alert("hello" +response);

//let output=document.querySelector("#output");
// console.log(output);

let yourName = document.querySelector("#yourName")



let theirName = document.querySelector("#theirName")
let output = document.querySelector("#output")
let singlePeope = ['rupesh', 'shyam', 'hari']

//output.innerText=response;
function calculator() {

    let name1 = yourName.value
    let name2 = theirName.value
    if (name1.length == 0 || name2.length == 0) {
        output.innerText = "you were not in love.please love her and come here to calculate...."
    }
    else {
        if (name1.toLowerCase() == "raghav") {
            output.innerText = "Single life rock"
        }
        else {
            let lovePercent = parseInt(Math.random() * 100)
            output.innerText = name1 + " " + name2 + "are" + lovePercent + "% in love"
            yourName.value = " "
            theirName.value = " "
        }
    }
}