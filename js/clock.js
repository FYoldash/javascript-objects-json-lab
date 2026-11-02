(function() {
    console.info("Hello js");
    {}
})();

const myNode = document.createElement("div");
digitalClock.appendChild(myNode);
myNode.innerHTML = "Birnasa";


const secondHand = document.getElementById("secondHand");
const minHand = document.getElementById("minHand");
const hrHand = document.getElementById("hrHand");

hrHand.style.backgroundColor =  '#0f0';

const updateTime = function() {
    console.info("tick-tock");
    const myDate = new Date();

    myNode.innerHTML = myDate.toLocaleTimeString("en-GB", {hour: '2-digit', second: '2-digit', minute: '2-digit'});

    //ANALOGUE 
    const seconds = myDate.getSeconds();
    const rotSeconds = seconds * 6 - 90;
    secondHand.style.transform = `rotate(${rotSeconds}deg)`;

    const minutes = myDate.getMinutes();
    const rotMinutes = minutes * 6 - 90;
    minHand.style.transform = `rotate(${rotMinutes}deg)`;

    const hours = myDate.getHours();
    const rotHours = hours * 30 - 90;
    hrHand.style.transform = `rotate(${rotHours}deg)`;
}
setInterval(updateTime, 1000);
updateTime();


