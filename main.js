const BASE_URL = "https://open.er-api.com/v6/latest/USD"

const dropdrowns = document.querySelectorAll(".dropdown select");

for(let select of dropdrowns)
{
    for( currCode in countryList)
    {
        let newOpt = document.createElement("option");
        newOpt.innerText = currCode;
        newOpt.value = currCode;
        select.append(newOpt);
        if( select.name === "from" && currCode === "USD") {
            newOpt.selected = "selected";
        } else  if( select.name === "to" && currCode === "INR") {
            newOpt.selected = "selected";
        }
    }
    select.addEventListener("change", (evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element) =>{

    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img")
    img.src = newSrc;
}