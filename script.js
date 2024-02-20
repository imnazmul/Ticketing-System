// btn scroll
document.getElementById("buy-btn").addEventListener("click", function () {
    let des = document.getElementById("select-seat");
    des.scrollIntoView({ behavior: "smooth" });
});

let count = 0;
let AvailableSeat = parseInt(document.getElementById("seatAvailableCount").innerText);
let bookedSeat = [];
let discountedByCoupon = 0;
let grandTotalGlobal;



function couponApply() {
    let code = document.getElementById("coupon").value;
    if (code === "NEW15") {
        
        let final = grandTotalGlobal.innerText * 0.15;
        discountedByCoupon = final;

        // let grandTotalNew = document.getElementById("grandTotal");
        // let out = grandTotalGlobal - discountedByCoupon;
        // grandTotalGlobal.innerText = out;

        
    }
}


const seats = document.querySelectorAll(".seat");
for (i = 0; i < seats.length; i++) {

    const seat = seats[i];
    seat.addEventListener("click", function () {

        if (bookedSeat.includes(seat)) {
            alert("The seat is already booked.")
        }

        else if (count < 4) {
            count += 1;
            document.getElementById("seat-count").innerText = count;
            seat.classList.add("bg-green-500");
            AvailableSeat -= 1;
            document.getElementById("seatAvailableCount").innerText = AvailableSeat;
            bookedSeat.push(seat);

            // showing seat info
            let info = document.getElementById("selected-seat");
            let div = document.createElement("div");
            div.classList.add("flex");
            div.classList.add("gap-x-36");
            div.classList.add("mb-4");

            let seatName = document.createElement("p");
            seatName.innerText = seat.innerText;
            let seatClass = document.createElement("p");
            seatClass.innerText = "Economy";
            let seatPrice = document.createElement("p");
            seatPrice.innerText = 550;

            div.appendChild(seatName);
            div.appendChild(seatClass);
            div.appendChild(seatPrice);

            info.appendChild(div);

            let total = document.getElementById("total");
            let totalPrice = 550 * bookedSeat.length;
            total.innerText = totalPrice;
            grandTotalGlobal = total;


            let grandTotal = document.getElementById("grandTotal");
            let final = totalPrice;
            grandTotal.innerText = final;

            


        }

        else {
            alert("Bro you cannt buy more then 4 tickets.")
        }
    });
}






