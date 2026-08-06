let toastTimeout;

function dataForm(event) {
   event.preventDefault();

   const form = event.target;
   const nameInput = document.forms["feedback"]["Name"];
   const emailInput = document.forms["feedback"]["Email"];
   const messageInput = document.forms["feedback"]["Message"];

   const name = nameInput.value.trim();
   const email = emailInput.value.trim();
   const message = messageInput.value.trim();

   const error1 = document.getElementsByClassName("error")[0];
   const error2 = document.getElementsByClassName("error")[1];
   const error3 = document.getElementById("Error");

   let valid = true;
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (name === "") {
      error1.innerText = "× Name is required";
      error1.style.color = "rgb(182, 28, 28)";
      valid = false;
   } else {
      error1.innerText = "";
   }

   if (email === "") {
      error2.innerText = "× Email is required";
      error2.style.color = "rgb(182, 28, 28)";
      valid = false;
   } else if (!emailRegex.test(email)) {
      error2.innerText = "× Not valid email address";
      error2.style.color = "rgb(182, 28, 28)";
      valid = false;
   } else {
      error2.innerText = "";
   }

   if (message === "") {
      error3.innerText = "× Message is required";
      error3.style.color = "rgb(182, 28, 28)";
      valid = false;
   } else {
      error3.innerText = "";
   }

   const triggerToast = (id) => {
      const toast = document.getElementById(id);
      if (!toast) return;

      if (toastTimeout) {
         clearTimeout(toastTimeout);
      }

      toast.classList.remove('show');
      void toast.offsetWidth;

      toast.classList.add('show');

      toastTimeout = setTimeout(() => {
         toast.classList.remove('show');
      }, 5000);
   };

   if (valid) {
      if (inquiryInput && inquiryInput.value.trim() === "") {
         inquiryInput.removeAttribute("name");
      }

      const data = Object.fromEntries(new FormData(form));

      fetch("https://formsubmit.co/ajax/johnadel.tech@gmail.com", {
         method: "POST",
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         },
         body: JSON.stringify(data)
      })
         .then(response => response.json())
         .then(resData => {
            if (resData.success === "true" || resData.success === true) {
               form.reset();
               if (inquiryInput) {
                  inquiryInput.value = "";
                  inquiryInput.removeAttribute("name");
               }
               domainDivs.forEach(d => d.classList.remove('active'));

               triggerToast('success');
            } else {
               triggerToast('fail');
            }
         })
         .catch(error => {
            console.error('Error:', error);
            triggerToast('fail');
         });
   } else {
      triggerToast('fail');
   }
}

function clearM(index) {
   let errorM = document.getElementsByClassName("error");
   let input = document.getElementsByTagName("input");
   if (input[index]) input[index].classList.remove("E");
   if (errorM[index]) errorM[index].innerText = "";
}

function clearT() {
   let errorT = document.getElementById("Error");
   let text = document.getElementsByTagName("textarea")[0];
   if (text) text.classList.remove("E");
   if (errorT) errorT.innerText = "";
}

const domainDivs = document.querySelectorAll('#mid div');
const inquiryInput = document.getElementById('inquiryInput');

domainDivs.forEach(div => {
   div.addEventListener('click', () => {
      if (div.classList.contains('active')) {
         div.classList.remove('active');
         if (inquiryInput) {
            inquiryInput.value = "";
            inquiryInput.removeAttribute("name");
         }
      }
      else {
         domainDivs.forEach(d => d.classList.remove('active'));
         div.classList.add('active');

         if (inquiryInput) {
            inquiryInput.setAttribute("name", "inquiry");
            let cleanText = div.innerText || div.textContent;
            inquiryInput.value = cleanText.trim();
         }
      }
   });
});
