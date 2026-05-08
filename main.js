const linectx = document.getElementById("line-chart");
const piectx = document.getElementById("pie-chart").getContext("2d");


const addbtn = document.getElementById("btn");
const modal= document.querySelector(".modal");
const cancel = document.getElementById("close");
addbtn.addEventListener("click",()=>{
   modal.style.display ="flex";
})
cancel.addEventListener("click",()=>{
  modal.style.display ="none";
})

const addexpense= document.getElementById("addexpen");
const tablebody =document.getElementById("tabbody");
const expense = document.getElementById("expen");
const amount = document.getElementById("amt");
const expensetype = document.getElementById("expentype");
const totalexpense= document.getElementById("totalexpen");
const monthlyincome= document.getElementById("monthincom");
let total = Number(totalexpense.innerText.replace("$",""));

addexpense.addEventListener("submit", (event) => {

    event.preventDefault();

    const expensename = expense.value;
    const expenseamount = amount.value;
    const category = expensetype.value;
    const date = document.getElementById("expendate").value;

    const newrow = document.createElement("tr");

    newrow.innerHTML = `
        <td>${expensename}</td>
        <td>${category}</td>
        <td>$${expenseamount}</td>
        <td>${date}</td>
        <td><button> DELETE </button></td>
    `;

    tablebody.appendChild(newrow);
    const deletebtn = newrow.querySelector("button");
    deletebtn.addEventListener("click",()=>{
      newrow.remove();
    });

    addexpense.reset();

    modal.style.display = "none";
    total = total+ Number(expenseamount);
    totalexpense.innerText = "$" + total;


});


new Chart(linectx,{
    type: "line",
    data:{
        labels : ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct"],
        datasets:[{
            label:"Expenses",
            data:[4000,5000,6000,9000,7000 , 5500,8000,11000,10000,6000],
            borderColor: "#3b82f6",
            tension:0.3
         }]
        
    }
})
new Chart(piectx, {
  type: "pie",
  data: {
    labels: ["Food", "Travel", "Shopping", "Bills", "Entertainment", "Health", "Travel", "Education", "other"],
    datasets: [{
      data: [3000, 2000, 4000, 2500, 1800, 2200, 3500, 1500, 1200],
      backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#14b8a6", "#f97316", "#ec4899", "#6b7280"]
    }]
  }
});
