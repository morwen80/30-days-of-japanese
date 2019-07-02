// converts Nodelist to a true array
const articles = Array.prototype.slice.call(document.querySelectorAll("article"));
const pages = Array.prototype.slice.call(document.querySelectorAll(".page"));

for (let i = 0; i < pages.length; i++) {
  pages[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

const last5 = articles.slice(0,6)
