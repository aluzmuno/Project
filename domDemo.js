const node = document.getElementById("deposit_savings");
console.log(node);

document.addEventListener("DOMContentLoaded",()=> {
    const savingsButton = document.getElementById("deposit_savings");
    savingsButton.addEventListener("click", ()=> {
        var savingsNode = document.getElementById("savingsBalance");
        var savingsValue = parseInt(savingsNode.textContent,10);
        savingsValue += 100;
        savingsNode.textContent = savingsValue;
    })
    const depositButton = document.getElementById("deposit_checking");
    depositButton.addEventListener("click",()=> {
        var depositNode = document.getElementById("checkingBalance");
        var depositValue = parseInt(depositNode.textContent,10);
        depositValue += 100;
        depositNode.textContent = depositValue;
    })
    

})