// const clsbtn = document.querySelector('.');
const directinput = document.querySelectorAll(".transbb");
const checkdlinput = document.querySelectorAll(".mailbb");
const nextbtn = document.querySelector(".nextbt");
const confirmbtn = document.querySelector(".kfmbt");
const xicon = document.querySelector(".clsx");
const useicon = document.querySelector(".usclx");
const amount = document.querySelector(".amoun");
const deptype = document.querySelector(".seldeptype");
const droppop = document.querySelector(".widraw-popp")
const dropuser = document.querySelector(".userpoup")
const btntransfer = document.querySelector(".btn-transfer");
const btnrequest = document.querySelector(".btn-request")
const popuserprofile = document.querySelector(".clcuser");
const loader = document.querySelector(".box-loader");


const formbox1 = document.querySelector(".form1-box");
const formbox2 = document.querySelector(".form2-box");
const error  = document.querySelector(".errmsg");


btntransfer.addEventListener("click", ()=>{
    droppop.style.display = "block"
})
btnrequest.addEventListener("click", ()=>{
  document.getElementById("whole-loan").style.display = "block"
})
const closeme = document.querySelector(".clsloan");
closeme.addEventListener("click", ()=>{
  document.getElementById("whole-loan").style.display = "none"
})


// useicon.addEventListener("click", ()=>{
//     dropuser.style.display = "none"
// })
popuserprofile.addEventListener("click", ()=>{
    dropuser.classList.toggle("openclass");
})

// nextbtn.addEventListener("click", () => {
//     if (amount.value === "") {
//       error.textContent = "All fields must be provided";
//     } else if (deptype.value === "direcdeposit") {
//       formbox1.classList.add("openclass");
//       confirmbtn.classList.add("openclass");
//       nextbtn.classList.add("closeclass");
//       if (formbox2.classList.contains("openclass")) {
//         formbox2.classList.remove("openclass")
//         nextbtn.classList.add("closeclass");
//       }
//     } else if (deptype.value === "cheque") {
//       formbox2.classList.add("openclass");
//       if (formbox1.classList.contains("openclass")) { 
//         formbox1.classList.remove("openclass")
//       }
//       confirmbtn.classList.add("openclass");
//       nextbtn.classList.add("closeclass");
//     } else {
//       error.textContent = "somethign is wrong"
//     }
//   });
function fsRequired() {
  directinput.forEach(ment => {
    ment.removeAttribute('required');
  });
}
function secondRequired() {
  checkdlinput.forEach(cment => {
    cment.removeAttribute('required');
  });
}
  const selectElement = document.getElementById("mySelect"); 
  selectElement.addEventListener("change", function() {
    if (amount.value === "") {
      error.textContent = "All fields must be provided";
    } else if (deptype.value === "direcdeposit") {
      secondRequired()
      formbox1.classList.add("openclass");
      // confirmbtn.classList.add("openclass");
      // nextbtn.classList.add("closeclass");
      if (formbox2.classList.contains("openclass")) {
        formbox2.classList.remove("openclass")
        nextbtn.classList.add("closeclass");
      }
    } else if (deptype.value === "cheque") {
      formbox2.classList.add("openclass");
      fsRequired()
      if (formbox1.classList.contains("openclass")) { 
        formbox1.classList.remove("openclass")
      }
      // nextbtn.classList.add("closeclass");
    } else {
      error.textContent = "somethign is wrong"
    }
  });

  xicon.addEventListener("click", ()=> {
    droppop.style.display = "none"
  })
  useicon.addEventListener("click", ()=> {
    if (dropuser.classList.contains("openclass")) {
      dropuser.classList.remove("openclass")
    }
  })

  const resetall = document.querySelector(".resetbtn");
  resetall.addEventListener("click", ()=>{

    if (formbox1.classList.contains("openclass") || formbox2.classList.contains("openclass")){
      formbox1.classList.remove("openclass")
      formbox2.classList.remove("openclass") 
    }else {
    }
  })

  // form validation 
const redirectloan = document.querySelector(".smit");
redirectloan.addEventListener("click", ()=>{
  directinput.forEach(vl => {
    if (vl.value === ""){
      error.textContent = "All fields must be provided";
    }else {
      redirectloan.textContent = "Submitting..."
      loader.style.display = "block"
      setInterval(() => {
        window.location.href = "sucess.html"
      }, 5000);
    }
  })  
}) 

const loanerror = document.querySelector(".loanerro")
const btnloaner = document.querySelector(".smitt");
const loaninput = document.querySelectorAll(".inploan");

btnloaner.addEventListener("click", ()=>{
  loaninput.forEach(li => {
    if (li.value === ""){
      loanerror.textContent = "All field must not be empty";
    }else {
      redirectloan.textContent = "Submitting..."
      loader.style.display = "block"
      setInterval(() => {
        window.location.href = "loan.html"
      }, 5000);
    }
  })
})


const currentDate = new Date();

const currentMonth = currentDate.getMonth() + 1; // Adding 1 because months are zero-based
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();

const result = `As of: ${currentMonth}/${currentDay}/${currentYear}`;
const datein = document.querySelector(".date");
datein.textContent = result;


console.log(result); // You can replace this with any other method to display the result, such as updating an HTML element.
