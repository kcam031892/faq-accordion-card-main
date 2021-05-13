const accordion = document.querySelector('.accordion');

const toggleAccordion = (e) => {
 if(e.target.classList.contains('accordion__button')) {
   const target = e.target;
   const liEl = target.parentElement.parentElement;
   const icon = target.nextElementSibling;
   liEl.classList.toggle('active');



 }
 
}

accordion.addEventListener('click', toggleAccordion)



