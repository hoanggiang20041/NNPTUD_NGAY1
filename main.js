

// --- CÂU 1: Khai báo constructor function Product ---
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// --- CÂU 2: Khởi tạo mảng products (ít nhất 6 sp, 2 danh mục) ---
const products = [
    new Product(1, "iPhone 15 Pro", 28000000, 10, "Smartphone", true),
    new Product(2, "MacBook M3", 45000000, 5, "Laptop", true),
    new Product(3, "AirPods Pro", 5500000, 0, "Accessories", true),
    new Product(4, "Samsung S24 Ultra", 31000000, 8, "Smartphone", true),
    new Product(5, "Magic Mouse", 2000000, 15, "Accessories", false),
    new Product(6, "Ốp lưng Silicone", 500000, 20, "Accessories", true)
];

console.log("--- DANH SÁCH SẢN PHẨM ---");
console.table(products);

// --- CÂU 3: Tạo mảng mới chỉ chứa name và price ---
const nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));
console.log("Câu 3 - Chỉ lấy tên và giá:", nameAndPrice);

// --- CÂU 4: Lọc các sản phẩm còn hàng (quantity > 0) ---
const availableItems = products.filter(p => p.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng:", availableItems);

// --- CÂU 5: Kiểm tra có sản phẩm nào giá trên 30.000.000 không? ---
const hasExpensive = products.some(p => p.price > 30000000);
console.log("Câu 5 - Có sản phẩm nào > 30tr không?:", hasExpensive);

// --- CÂU 6: Kiểm tra tất cả "Accessories" có đang bán không? ---
const allAccAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);
console.log("Câu 6 - Tất cả phụ kiện đều đang bán?:", allAccAvailable);

// --- CÂU 7: Tính tổng giá trị kho hàng (price * quantity) ---
const totalValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("Câu 7 - Tổng giá trị kho hàng:", totalValue.toLocaleString(), "VND");

// --- CÂU 8: Dùng for...of in ra: Tên - Danh mục - Trạng thái ---
console.log("Câu 8 - Duyệt bằng for...of:");
for (const p of products) {
    const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${p.name} - ${p.category} - ${status}`);
}

// --- CÂU 9: Dùng for...in in ra thuộc tính và giá trị sản phẩm đầu tiên ---
console.log("Câu 9 - Duyệt thuộc tính bằng for...in:");
const firstItem = products[0];
for (const key in firstItem) {
    console.log(`${key}: ${firstItem[key]}`);
}

// --- CÂU 10: Tên các sản phẩm đang bán và còn hàng ---
const listReadyToSell = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log("Câu 10 - Tên các SP sẵn sàng bán:", listReadyToSell);