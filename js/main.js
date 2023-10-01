document.addEventListener("DOMContentLoaded", function() {


  let data = {
    "name" : "crong",
    "imageUrl" : "/images/profile.jpg",
    "advantage" : "끈기" ,
    "personality" : "좋음",
    "mbtiImageUrl" : "/images/MBTU.jpg"
};

makeTemplate(data);

});

function makeTemplate(data) {
  let template = document.getElementById('contentTemplate').innerText;
  let bindTemplate = Handlebars.compile(template);
  let resultHtml = bindTemplate(data);
  let profileSection = document.querySelector(".profile-section");
  profileSection.innerHTML = resultHtml;
}
