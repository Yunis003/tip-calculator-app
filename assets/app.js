let sendBtn = document.querySelector(".submit");
let customPercentag = document.querySelector(".customPercentage").value;
let obj = {
    tipPercentage: null,
    customPercentage: customPercentag
};

let tips = document.querySelectorAll(".tip");
console.log(tips);
tips.forEach((tip)=>{
    tip.addEventListener("click", ()=>{
        document.querySelector(".salam").classList.remove("salam");
        tip.classList.add("salam");

        let percentage = tip.querySelector(".percentage").textContent;
        obj.tipPercentage = percentage;
    })
})

sendBtn.addEventListener("click", ()=>{
    let bill = document.querySelector(".billInput").value;
    let people = document.querySelector(".peopleInput").value;
    let priceTip = document.querySelector(".priceTip");
    let priceTotal = document.querySelector(".priceTotal");

    
    let result = parseInt(bill * (obj.tipPercentage * people)) / 100; 
    priceTip.textContent = result + "$";
    priceTotal.textContent = parseInt(result) + parseInt(bill) + "$";
});


// let sendBtn = document.querySelector(".submit");
// let customPercentag = document.querySelector(".customPercentage").value;
// let obj = {
//     tipPercentage: null,
//     customPercentage: customPercentag
// };






// let tips = document.querySelectorAll(".tip");
// console.log(tips);
// tips.forEach((tip)=>{
//     tip.addEventListener("click", ()=>{
//         document.querySelector(".salam").classList.remove("salam");
//         tip.classList.add("salam");

//         let percentage = tip.querySelector(".percentage").textContent;
//         obj.tipPercentage = percentage;
//     })
// })

// sendBtn.addEventListener("click", ()=>{
//     let bill = document.querySelector(".billInput").value;
//     let people = document.querySelector(".peopleInput").value;
//     let priceTip = document.querySelector(".priceTip");
//     let priceTotal = document.querySelector(".priceTotal");

//     if (obj.customPercentage){
//         let anotherRes = parseInt(bill * (obj.customPercentage * people)) / 100;
//         priceTip.textContent = anotherRes + "$";
//         priceTotal.textContent = parseInt(anotherRes) + parseInt(bill) + "$";    
//     }
//     else{
//     let result = parseInt(bill * (obj.tipPercentage * people)) / 100; 
//     priceTip.textContent = result + "$";
//     priceTotal.textContent = parseInt(result) + parseInt(bill) + "$";
//     }
// });
// let sendBtn = document.querySelector(".submit");
// let customPercentag = document.querySelector(".customPercentage").value;
// let obj = {
//     tipPercentage: null,
//     customPercentage: customPercentag
// };

// let tips = document.querySelectorAll(".tip");
// console.log(tips);
// tips.forEach((tip)=>{
//     tip.addEventListener("click", ()=>{
//         document.querySelector(".salam").classList.remove("salam");
//         tip.classList.add("salam");

//         let percentage = tip.querySelector(".percentage").textContent;
//         obj.tipPercentage = percentage;
//     })
// })

// sendBtn.addEventListener("click", ()=>{
//     let bill = document.querySelector(".billInput").value;
//     let people = document.querySelector(".peopleInput").value;
//     let priceTip = document.querySelector(".priceTip");
//     let priceTotal = document.querySelector(".priceTotal");

//     if (obj.customPercentage){
//         let anotherRes = parseInt(bill * (obj.customPercentage * people)) / 100;
//         priceTip.textContent = anotherRes + "$";
//         priceTotal.textContent = parseInt(anotherRes) + parseInt(bill) + "$";    
//     }
//     else{
//     let result = parseInt(bill * (obj.tipPercentage * people)) / 100; 
//     priceTip.textContent = result + "$";
//     priceTotal.textContent = parseInt(result) + parseInt(bill) + "$";
//     }
// });
// let sendBtn = document.querySelector(".submit");
// let customPercentag = document.querySelector(".customPercentage").value;
// let obj = {
//     tipPercentage: null,
//     customPercentage: customPercentag
// };

// let tips = document.querySelectorAll(".tip");
// console.log(tips);
// tips.forEach((tip)=>{
//     tip.addEventListener("click", ()=>{
//         document.querySelector(".salam").classList.remove("salam");
//         tip.classList.add("salam");

//         let percentage = tip.querySelector(".percentage").textContent;
//         obj.tipPercentage = percentage;
//     })
// })

// sendBtn.addEventListener("click", ()=>{
//     let bill = document.querySelector(".billInput").value;
//     let people = document.querySelector(".peopleInput").value;
//     let priceTip = document.querySelector(".priceTip");
//     let priceTotal = document.querySelector(".priceTotal");

//     if (obj.customPercentage){
//         let anotherRes = parseInt(bill * (obj.customPercentage * people)) / 100;
//         priceTip.textContent = anotherRes + "$";
//         priceTotal.textContent = parseInt(anotherRes) + parseInt(bill) + "$";    
//     }
//     else{
//     let result = parseInt(bill * (obj.tipPercentage * people)) / 100; 
//     priceTip.textContent = result + "$";
//     priceTotal.textContent = parseInt(result) + parseInt(bill) + "$";
//     }
// });
// let sendBtn = document.querySelector(".submit");
// let customPercentag = document.querySelector(".customPercentage").value;
// let obj = {
//     tipPercentage: null,
//     customPercentage: customPercentag
// };

// let tips = document.querySelectorAll(".tip");
// console.log(tips);
// tips.forEach((tip)=>{
//     tip.addEventListener("click", ()=>{
//         document.querySelector(".salam").classList.remove("salam");
//         tip.classList.add("salam");

//         let percentage = tip.querySelector(".percentage").textContent;
//         obj.tipPercentage = percentage;
//     })
// })

// sendBtn.addEventListener("click", ()=>{
//     let bill = document.querySelector(".billInput").value;
//     let people = document.querySelector(".peopleInput").value;
//     let priceTip = document.querySelector(".priceTip");
//     let priceTotal = document.querySelector(".priceTotal");

//     if (obj.customPercentage){
//         let anotherRes = parseInt(bill * (obj.customPercentage * people)) / 100;
//         priceTip.textContent = anotherRes + "$";
//         priceTotal.textContent = parseInt(anotherRes) + parseInt(bill) + "$";    
//     }
//     else{
//     let result = parseInt(bill * (obj.tipPercentage * people)) / 100; 
//     priceTip.textContent = result + "$";
//     priceTotal.textContent = parseInt(result) + parseInt(bill) + "$";
//     }
// });
// let sendBtn = document.querySelector(".submit");
// let customPercentag = document.querySelector(".customPercentage").value;
// let obj = {
//     tipPercentage: null,
//     customPercentage: customPercentag
// };

// let tips = document.querySelectorAll(".tip");
// console.log(tips);
// tips.forEach((tip)=>{
//     tip.addEventListener("click", ()=>{
//         document.querySelector(".salam").classList.remove("salam");
//         tip.classList.add("salam");

//         let percentage = tip.querySelector(".percentage").textContent;
//         obj.tipPercentage = percentage;
//     })
// })

// sendBtn.addEventListener("click", ()=>{
//     let bill = document.querySelector(".billInput").value;
//     let people = document.querySelector(".peopleInput").value;
//     let priceTip = document.querySelector(".priceTip");
//     let priceTotal = document.querySelector(".priceTotal");

//     if (obj.customPercentage){
//         let anotherRes = parseInt(bill * (obj.customPercentage * people)) / 100;
//         priceTip.textContent = anotherRes + "$";
//         priceTotal.textContent = parseInt(anotherRes) + parseInt(bill) + "$";    
//     }
//     else{
//     let result = parseInt(bill * (obj.tipPercentage * people)) / 100; 
//     priceTip.textContent = result + "$";
//     priceTotal.textContent = parseInt(result) + parseInt(bill) + "$";
//     }
// });
// let sendBtn = document.querySelector(".submit");
// let customPercentag = document.querySelector(".customPercentage").value;
// let obj = {
//     tipPercentage: null,
//     customPercentage: customPercentag
// };

// let tips = document.querySelectorAll(".tip");
// console.log(tips);
// tips.forEach((tip)=>{
//     tip.addEventListener("click", ()=>{
//         document.querySelector(".salam").classList.remove("salam");
//         tip.classList.add("salam");

//         let percentage = tip.querySelector(".percentage").textContent;
//         obj.tipPercentage = percentage;
//     })
// })

// sendBtn.addEventListener("click", ()=>{
//     let bill = document.querySelector(".billInput").value;
//     let people = document.querySelector(".peopleInput").value;
//     let priceTip = document.querySelector(".priceTip");
//     let priceTotal = document.querySelector(".priceTotal");

//     if (obj.customPercentage){
//         let anotherRes = parseInt(bill * (obj.customPercentage * people)) / 100;
//         priceTip.textContent = anotherRes + "$";
//         priceTotal.textContent = parseInt(anotherRes) + parseInt(bill) + "$";    
//     }
//     else{
//     let result = parseInt(bill * (obj.tipPercentage * people)) / 100; 
//     priceTip.textContent = result + "$";
//     priceTotal.textContent = parseInt(result) + parseInt(bill) + "$";
//     }
// });
// let sendBtn = document.querySelector(".submit");
// let customPercentag = document.querySelector(".customPercentage").value;
// let obj = {
//     tipPercentage: null,
//     customPercentage: customPercentag
// };

// let tips = document.querySelectorAll(".tip");
// console.log(tips);
// tips.forEach((tip)=>{
//     tip.addEventListener("click", ()=>{
//         document.querySelector(".salam").classList.remove("salam");
//         tip.classList.add("salam");

//         let percentage = tip.querySelector(".percentage").textContent;
//         obj.tipPercentage = percentage;
//     })
// })

// sendBtn.addEventListener("click", ()=>{
//     let bill = document.querySelector(".billInput").value;
//     let people = document.querySelector(".peopleInput").value;
//     let priceTip = document.querySelector(".priceTip");
//     let priceTotal = document.querySelector(".priceTotal");

//     if (obj.customPercentage){
//         let anotherRes = parseInt(bill * (obj.customPercentage * people)) / 100;
//         priceTip.textContent = anotherRes + "$";
//         priceTotal.textContent = parseInt(anotherRes) + parseInt(bill) + "$";    
//     }
//     else{
//     let result = parseInt(bill * (obj.tipPercentage * people)) / 100; 
//     priceTip.textContent = result + "$";
//     priceTotal.textContent = parseInt(result) + parseInt(bill) + "$";
//     }
// });
// let sendBtn = document.querySelector(".submit");
// let customPercentag = document.querySelector(".customPercentage").value;
// let obj = {
//     tipPercentage: null,
//     customPercentage: customPercentag
// };

// let tips = document.querySelectorAll(".tip");
// console.log(tips);
// tips.forEach((tip)=>{
//     tip.addEventListener("click", ()=>{
//         document.querySelector(".salam").classList.remove("salam");
