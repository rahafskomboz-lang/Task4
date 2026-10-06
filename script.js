
let count = Number(prompt("كم عدد المنتجات؟"));
let total = 0;
let discountedCount = 0;
let list = ""; // هنا بنجمع المنتجات اللي بيدخلها المستخدم

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

    // نضيف سطر جديد للقائمة
    list = list + name + " | السعر: " + price + " | الكمية: " + quantity + " | المجموع: " + itemTotal + "\n";
});

if (total > 500 && discountedCount < 2) {
    total = total * 0.8;
}

console.log(list);
alert("المنتجات:\n" + list + "\nالإجمالي النهائي: " + total);