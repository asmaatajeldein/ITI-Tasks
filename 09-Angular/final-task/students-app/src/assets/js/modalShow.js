var observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    // console.log(mutation.addedNodes[0].firstChild.classList.contains('modal'));
    if (mutation.addedNodes.length && mutation.addedNodes[0].firstChild && mutation.addedNodes[0].firstChild.classList.contains('modal')) {
        const myModal = bootstrap.Modal.getOrCreateInstance(mutation.addedNodes[0].firstChild);
        myModal.show();
      // const myModal = new bootstrap.Modal(mutation.addedNodes[0].firstChild);
      // console.log(myModal)
    }
  })
});
// console.log("I'm running");
document.addEventListener('DOMContentLoaded', ()=> {
  let body = document.querySelector('body');
  console.log(body);
  if(body) {
    observer.observe(body, {subtree: true, childList: true});
  }
})
