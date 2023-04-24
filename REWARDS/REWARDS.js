let Rating = document.querySelector(".Rating");
let _25_stars = Rating.querySelector("._25_star");
let _100_stars = Rating.querySelector("._100_star");
let _200_stars = Rating.querySelector("._200_star");
let _300_stars = Rating.querySelector("._300_star");
let _400_stars = Rating.querySelector("._400_star");
//
let image_show = Rating.querySelector(".image_for_illustrate img");
let h4_header = Rating.querySelector(".image_for_illustrate h4");
let span_content = Rating.querySelector(".image_for_illustrate span");


addEventListener("DOMContentLoaded", (event) => {
    _25_stars.style.borderBottom = "5px solid var(--color-greenStarbuck)";
    image_show.src = "../image/025.webp";
    h4_header.textContent = "Customize your drink";
    span_content.textContent = "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.";
});


function hide_borderbottom(object){
    if(object !== _25_stars){
        _25_stars.style.borderBottom ="none"
    }
    if(object !== _100_stars){
        _100_stars.style.borderBottom ="none";
    }
    if(object !== _200_stars){
        _200_stars.style.borderBottom ="none";
    }
    if(object !== _300_stars){
        _300_stars.style.borderBottom ="none";
    }
    if(object !== _400_stars){
        _400_stars.style.borderBottom ="none";
    }
}
_25_stars.addEventListener("click",()=>{
    _25_stars.style.borderBottom = "5px solid var(--color-greenStarbuck)";
    hide_borderbottom(_25_stars);
    image_show.src = "../image/025.webp";
    h4_header.textContent = "Customize your drink";
    span_content.textContent = "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.";
})

_100_stars.addEventListener("click",()=>{
    _100_stars.style.borderBottom = "5px solid var(--color-greenStarbuck)";
    hide_borderbottom(_100_stars);
    image_show.src = "../image/100.webp";
    h4_header.textContent = "Brewed hot or iced coffee or tea, bakery item, packaged snack and more";
    span_content.textContent = "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.";
})

_200_stars.addEventListener("click",()=>{
    _200_stars.style.borderBottom = "5px solid var(--color-greenStarbuck)";
    hide_borderbottom(_200_stars);
    image_show.src = "../image/200.webp";
    h4_header.textContent = "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast";
    span_content.textContent = "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.";
})

_300_stars.addEventListener("click",()=>{
    _300_stars.style.borderBottom = "5px solid var(--color-greenStarbuck)";
    hide_borderbottom(_300_stars);
    image_show.src = "../image/300.webp";
    h4_header.textContent = "Sandwich, protein box or at-home coffee";
    span_content.innerHTML = '<span className="mt-3">Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant<sup>®</sup>.<span>';
})

_400_stars.addEventListener("click",()=>{
    _400_stars.style.borderBottom = "5px solid var(--color-greenStarbuck)";
    hide_borderbottom(_400_stars);
    image_show.src = "../image/400.webp";
    h4_header.innerHTML = '<h4>Select Starbucks<sup>®</sup> merchandise</h4>';
    span_content.textContent = "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.";
})






