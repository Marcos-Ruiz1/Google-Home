const iconSquare = document.getElementById("button2");
const containerAppDiv = document.getElementById("containerApps");
const bodyElement = document.body;

iconSquare.addEventListener("click", function(event){
    showAppsWindow();
    event.stopPropagation();
});
bodyElement.addEventListener("click",closeAppsWindow);

function showAppsWindow(){
    containerAppDiv.style.display = "flex";
}

function closeAppsWindow(){

    let computedStyle = window.getComputedStyle(containerAppDiv);
    let displayValue = computedStyle.getPropertyValue("display");

    if (displayValue === "flex") {
        containerAppDiv.style.display = "none";
    }
}
