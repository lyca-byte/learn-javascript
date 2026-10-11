let c = 0;
let ci = 0;
let cd = 0;

// Ambil elemen HTML
const count = document.getElementById("count");
const incCount = document.getElementById("incCount");
const decCount = document.getElementById("decCount");

const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");

// Tombol Increment
function inc() {
    c = c >= 10 ? 0 : c + 1;
    ci++;
    update();
}

// Tombol Decrement
function dec() {
    c = c > 0 ? c - 1 : 0;
    cd++;
    update();
}

// Perbarui tampilan
function update() {
    count.textContent = c;
    incCount.textContent = ci;
    decCount.textContent = cd;
}

// Hubungkan tombol dengan fungsi
incBtn.addEventListener("click", inc);
decBtn.addEventListener("click", dec);