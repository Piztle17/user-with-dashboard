// const clsbtn = document.querySelector('.');
const directinput = document.querySelectorAll(".transbb");
const checkdlinput = document.querySelector(".mailbb");
const nextbtn = document.querySelector(".nextbt");
const confirmbtn = document.querySelector(".smit");
const xicon = document.querySelector(".clsx");
const useicon = document.querySelector(".usclx");
const amount = document.querySelector(".amoun");
const deptype = document.querySelector(".seldeptype");
const droppop = document.querySelector(".widraw-popp")
const dropuser = document.querySelector(".userpoup")
const btntransfer = document.querySelector(".btn-transfer");
const popuserprofile = document.querySelector(".clcuser")

const formbox1 = document.querySelector(".form1-box");
const formbox2 = document.querySelector(".form2-box");
const error  = document.querySelector(".errmsg");


btntransfer.addEventListener("click", ()=>{
    droppop.style.display = "block"
})
// useicon.addEventListener("click", ()=>{
//     dropuser.style.display = "none"
// })
popuserprofile.addEventListener("click", ()=>{
    dropuser.classList.toggle("openclass");
})

nextbtn.addEventListener("click", () => {
    if (amount.value === "") {
      error.textContent = "All fields must be provided";
    } else if (deptype.value === "direcdeposit") {
      formbox1.classList.add("openclass");
      confirmbtn.classList.add("openclass");
      nextbtn.classList.add("closeclass");
      if (formbox2.classList.contains("openclass")) {
        formbox2.classList.remove("openclass")
        nextbtn.classList.add("closeclass");
      }
    } else if (deptype.value === "cheque") {
      formbox2.classList.add("openclass");
      if (formbox1.classList.contains("openclass")) { 
        formbox1.classList.remove("openclass")
      }
      confirmbtn.classList.add("openclass");
      nextbtn.classList.add("closeclass");
    } else {
      error.textContent = "somethign is wrong"
    }
  });
  xicon.addEventListener("click", ()=> {
    droppop.style.display = "none"
  })

  const resetall = document.querySelector(".resetbtn");
  resetall.addEventListener("click", ()=>{

    if (formbox1.classList.contains("openclass") || formbox2.classList.contains("openclass")){
      formbox1.classList.remove("openclass")
      formbox2.classList.remove("openclass")
    }else {
    }
  })

const currentDate = new Date();

const currentMonth = currentDate.getMonth() + 1; // Adding 1 because months are zero-based
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();

const result = `As of: ${currentMonth}/${currentDay}/${currentYear}`;
const datein = document.querySelector(".date");
datein.textContent = result;


console.log(result); // You can replace this with any other method to display the result, such as updating an HTML element.
