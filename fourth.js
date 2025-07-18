// const BASE_url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-12-01/v1/currencies`;
// const dropdowns=document.querySelectorAll(".dropdown select");
// const FromCurr=document.querySelector(".from select");
// const toCurr=document.querySelector(".to select");

// const btn=document.querySelector("form button");
// const msg=document.querySelector(".msg");

// for(let select of dropdowns){
//     for(currCode in countryList){
//         let newOption =document.createElement("option");
//         newOption.innerText=currCode;
       
//         newOption.value=currCode;
       
//         if(select.name==="from"&&currCode==="USD"){
//             newOption.selected="selected";
//         }
//         else if(select.name==="to"&& currCode=="INR"){
//             newOption.selected="selected";
//         }
//          select.append(newOption);
//     }

// select.addEventListener("change",(evt)=>{
//     updateFlag(evt.target);
// });
// }
// const updateExchangeRate=async()=>{
// let amount =document.querySelector(".amount input");
// let amtVal=amount.value;
// if(amtVal===""||amtVal<1){
// amtVal=1;
// amount.value="1";

// }
// console.log(FromCurr.value,toCurr.value);
// const URL=`${BASE_url}/${FromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
// let response =await fetch(URL);
// let data = await response.json();
// let rate =data[toCurr.value.toLowerCase()];
// console.log(rate);
// let finalAmount=amtVal*rate;
// msg.innerText=`${amtVal} ${FromCurr.value}=${finalAmount}${toCurr.value}`;
// }

// const updateFlag=(element)=>{
//    let currCode=element.value;
//    let countryCode=countryList[currCode];
//    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
//    let img=element.parentElement.querySelector("img");
//    img.src=newSrc;

// };

// btn.addEventListener("click",async (evt)=>{
// evt.preventDefault();
// updateExchangeRate();

// });
// window.addEventListener("load",()=>{
//     updateExchangeRate();
// });



const BASE_url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-12-01/v1/currencies`;

const dropdowns = document.querySelectorAll(".dropdown select");
const FromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const btn = document.querySelector("form button");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;

    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    const from = FromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase();
    const URL = `${BASE_url}/${from}.json`;

    try {
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data[from][to];
        let finalAmount = (amtVal * rate).toFixed(2);
        msg.innerText = `${amtVal} ${FromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (err) {
        msg.innerText = "Failed to fetch exchange rate.";
        console.error("Error fetching exchange rate:", err);
    }
};

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
});
