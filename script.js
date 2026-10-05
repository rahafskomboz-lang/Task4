let count = Number(prompt("كم عدد المنتجات؟"));
let total = 0;
let discountedCount = 0;

let items = new Array(count).fill(0);

items.forEach(function () {
    let name = prompt("اسم المنتج:");
    let price = Number(prompt("سعر المنتج:"));
    let quantity = Number(prompt("كمية المنتج:"));

    let itemTotal = price * quantity;

    if (quantity > 10) {
        itemTotal = itemTotal * 0.9;
        discountedCount++;
    }

    total = total + itemTotal;
});

if (total > 500 && discountedCount < 2) {
    total = total * 0.8;
}

alert("الإجمالي النهائي: " + total);