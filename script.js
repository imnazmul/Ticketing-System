// btn scroll
document.getElementById("buy-btn").addEventListener("click", function () {
    let des = document.getElementById("select-seat");
    des.scrollIntoView({ behavior: "smooth" });
});




const seats = document.querySelectorAll(".seat");
for (i = 0; i < seats.length; i++) {
    const seat = seats[i];
    seat.addEventListener("click", function () {
        seat.classList.add("bg-green-500");
        













    //     let div = document.getElementById("selected-seat").createElemennt("div");
    //     div.innerHTML = document.getElementById(
    //         "selected-seat"
    //       ).innerHTML = `<div class="flex gap-x-36 mb-4">
    //       <div><p>${seatname}</p></div>
    //       <div><p>Economy</p></div>
    //       <div><p>550</p></div>
    //   </div>`;


    //   document.getElementById("selected-seat").appendChild(div);


    });
}
