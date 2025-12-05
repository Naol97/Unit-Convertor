let fromLenSelector = document.getElementById('fromLengthSelector')
let toLenSelector = document.getElementById('toLengthSelector')

let fromWeightSelector = document.getElementById('fromWeightSelector')
let toWeightSelector = document.getElementById('toWeightSelector')

let fromTempSelector = document.getElementById('fromTemperatureSelector')
let toTempSelector = document.getElementById('toTemperatureSelector')

const lenRes = document.getElementById('lenRes');
const weightRes = document.getElementById('weightRes');
const tempRes = document.getElementById("tempRes");
const result = document.querySelector(".result");
const inputValue = document.querySelector(".inputt");

const menu = document.getElementById("menu");
const drop = document.querySelector(".dropDown");
const clear = document.querySelector(".clear");
const Tselect = document.querySelectorAll(".Tsele");
const Lselect = document.querySelectorAll(".Lsele");
const Wselect = document.querySelectorAll(".Wsele");
const calc = document.getElementById("calc");
const tra = document.querySelector(".tra");

    // FOR FORMATTING

       function formatNumber(num, decimals = 4) {
    if (!Number.isFinite(num)) return "Error";
    return parseFloat(num.toFixed(decimals)).toLocaleString();
}


        // READS THE INPUT VALUE

       function getLengthValue(){
        return Number(document.getElementById("lenInput").value);
       }

       function getWeightValue(){
        return Number(document.getElementById("weightInput").value);
       }

       function getTemperatureValue(){
        return Number(document.getElementById("tempInput").value);
       }


    // READS THE FROM-TO OF LENGTH

        function lenFrom(){
            return fromLenSelector.value;
            
        }

        function lenTo(){
            return toLenSelector.value;
        }

        const lenFactors = {
            M: 1,
            km: 1000,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            ft: 0.3048,
            in: 0.0254
        }

        const lenCalc =  (value, from, to)=>{
            const inMeter = value * lenFactors[from];
            const result = inMeter / lenFactors[to];
            lenRes.innerText = formatNumber(result);

        }
            // END OF LENGTH CALCULATION

            // WEIGHT CALCULATION

        function weightFrom(){
            return fromWeightSelector.value; 
        }

        function weightTo(){
            return toWeightSelector.value;
        }

        const weightFactors = {
        KG: 1,
        g: 0.001,
        mg: 0.000001,
        lb: 0.453592,
        oz: 0.0283495
        };

        const weightCalc =  (value, from, to)=>{
            const inKG = value * weightFactors[from];
            const result = inKG / weightFactors[to];
            weightRes.innerText = formatNumber(result);
            
        }

        // END OF WEIGHT CALCULATION

        // TEMPERATURE CALCULATOR

        function tempFrom(){
            return fromTempSelector.value;
            
        }

        function tempTo(){
            return toTempSelector.value;
        }

        function convertTemp(value, from, to) {

            if (!Number.isFinite(value)) {
            tempRes.innerText = "Error";
            return;
        }
        if (from === to) { 
            tempRes.innerText = formatNumber(value);
            return;
        }

        // First convert from "from" to Celsius
        let c;
        if (from === "C") c = value;
        else if (from === "F") c = (value - 32) * 5/9;
        else if (from === "K") c = value - 273.15;

        // Convert Celsius → target
        let result;
        if (to === "C") result = c;
        else if (to === "F") result = (c * 9/5) + 32;
        else if (to === "K") result = c + 273.15;

        tempRes.innerText = formatNumber(result);
        }

        
        menu.addEventListener("click",()=>{
            drop.classList.toggle("active");
            menu.classList.toggle("rot");
            if(menu.src.includes("menu-icon.png")){
                menu.src = "Assets/image.png";
            }else{
                menu.src = "Assets/menu-icon.png";
            }
        })

        clear.addEventListener("click", ()=>{
            inputValue.value = "";
            result.innerText = "";
            Tselect.forEach(Tsele=>{
                Tsele.value = "C";
            })
            Lselect.forEach(Lsele=>{
                Lsele.value = "M";
            })
            Wselect.forEach(Wsele =>{
                Wsele.value = "KG"
            })
            clear.classList.toggle("rot");
        })

        // calc.addEventListener("mousedown", ()=>{
        //       tra.classList.add("zoom");
        // })

        // calc.addEventListener("mouseup", ()=>{
        //       tra.classList.remove("zoom");
        // })

        if(window.innerWidth <= 797){
            tra.classList.add("traf");
            tra.src = "Assets/transfer-icon-flipped.png";
        }else{
            tra.classList.remove("traf");
            tra.src = "Assets/transfer-icon.png";
        }

        window.addEventListener("resize", ()=>{
            if(window.innerWidth <= 797){
            tra.classList.add("traf");
            tra.src = "Assets/transfer-icon-flipped.png";
        }else{
            tra.classList.remove("traf");
            tra.src = "Assets/transfer-icon.png";
        }
        })

        