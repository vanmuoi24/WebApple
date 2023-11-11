create_products();
// Khởi tạo các sản phẩm
function create_products() {
  if (localStorage.getItem("products") == null) {
    const chitietip15 = `Màn hình: OLED6.1" Super Retina XDR.
        Hệ điều hành: iOS 17.
        Camera sau: Chính 48 MP & Phụ 12 MP.
        Camera trước: 12 MP.
        Chip: Apple A16 Bionic.
        RAM: 6 GB.
        Dung lượng lưu trữ: 128GB, 256GB, 512GB.
        SIM: 1 Nano SIM & 1 eSIM Hỗ trợ 5G.
        Pin, Sạc: 3349mAh 20W.`;
    const chitietip15pro = `Màn hình: OLED6.1" Super Retina XDR.
        Hệ điều hành: iOS 17.
        Camera sau: Chính 48 MP & Phụ 12 MP, 12 MP.
        Camera trước: 12 MP.
        Chip: Apple A17 Pro 6 nhân.
        RAM: 8 GB.
        Dung lượng: 128GB, 256GB, 512GB.
        SIM: 1 Nano SIM & 1 eSIM Hỗ trợ 5G.
        Pin, Sạc: 3274mAh 20W.`;
    const chitietip14 = `Màn hình: Super Retina XDR OLED, 6.1 inch (iPhone 14) và 6.7 inch (iPhone 14 Plus), độ phân giải 2556 x 1179 pixel, tần số quét 120Hz.
        CPU: A15 Bionic.
        GPU: Apple GPU.
        RAM: 6GB.
        Bộ nhớ trong: 128GB, 256GB, 512GB, 1TB.
        Camera sau:
        *Camera chính 48MP, khẩu độ f/1.78, chống rung quang học dịch chuyển cảm biến thế hệ thứ hai, Focus Pixels 100%.
        *Camera góc siêu rộng 12MP, khẩu độ f/2.2 và trường ảnh 120°, Focus Pixels 100%.
        *Camera tele 12MP, khẩu độ f/2.8, zoom quang học 3x.
        Camera trước: 12MP, khẩu độ f/2.2.
        Pin: 3.095mAh (iPhone 14) và 4.352mAh (iPhone 14 Plus).
        Hệ điều hành: iOS 16.`;
    const chitietip14pro = `Màn hình: Super Retina XDR OLED, 6.1 inch (iPhone 14 Pro) và 6.7 inch (iPhone 14 Pro Max), độ phân giải 2778 x 1284 pixel, tần số quét 120Hz.
        CPU: A16 Bionic.
        GPU: Apple GPU.
        RAM: 6GB.
        Camera sau:
        *Camera chính 48MP, khẩu độ f/1.5, chống rung quang học dịch chuyển cảm biến thế hệ thứ hai, Focus Pixels 100%.
        *Camera góc siêu rộng 12MP, khẩu độ f/2.4 và trường ảnh 120°, Focus Pixels 100%.
        *Camera tele 12MP, khẩu độ f/2.8, zoom quang học 3x, tele 12MP, khẩu độ f/6.3, zoom quang học 5x.
        Camera trước: 12MP, khẩu độ f/2.2.
        Pin: 3.195mAh (iPhone 14 Pro) và 4.452mAh (iPhone 14 Pro Max).
        Hệ điều hành: iOS 16.`;
    const chitietip13 = `Màn hình: OLED 6.1" Super Retina XDR, độ phân giải 2532 x 1170 pixels, 60 Hz.
        Hệ điều hành: iOS 16.
        Camera sau: 
        Chính: 12 MP, khẩu độ f/1.6, chống rung quang học OIS.
        Phụ: 12 MP, khẩu độ f/2.4, góc nhìn 120 độ.
        Camera trước: 12 MP, khẩu độ f/2.2.
        Chip: Apple A15 Bionic.
        RAM: 4 GB.
        SIM: 1 Nano SIM & 1 eSIM Hỗ trợ 5G.
        Pin, Sạc: 3240 mAh 20W.`;
    const chitietip13pro = `Màn hình: OLED 6.1" Super Retina XDR, độ phân giải 2532 x 1170 pixels, 120 Hz.
        Hệ điều hành: iOS 16.
        Camera sau:
        *Chính: 12 MP, khẩu độ f/1.5, chống rung quang học OIS.
        *Phụ: 12 MP, khẩu độ f/1.8, góc nhìn 120 độ.
        *Tele: 12 MP, khẩu độ f/2.8, zoom quang 3x, chống rung quang học OIS.
        Camera trước: 12 MP, khẩu độ f/2.2.
        Chip: Apple A15 Bionic.
        RAM: 6 GB.
        SIM: 1 Nano SIM & 1 eSIM Hỗ trợ 5G.
        Pin, Sạc: 3095 mAh 20W.`;
    const chitietip12 = `Màn hình: OLED 6.1" Super Retina XDR, độ phân giải 2532 x 1170 pixels, 60 Hz.
        Hệ điều hành: iOS 14.
        Camera sau:
        * Chính: 12 MP, khẩu độ f/1.6, chống rung quang học OIS.
        * Phụ: 12 MP, khẩu độ f/2.4, góc nhìn 120 độ.
        Camera trước: 12 MP, khẩu độ f/2.2.
        Chip: Apple A14 Bionic.
        RAM: 4 GB.
        SIM: 1 Nano SIM & 1 eSIM Hỗ trợ 5G.
        Pin, Sạc: 2815 mAh 20W.`;
    const chitietip12mini = `Màn hình: OLED 5.4" Super Retina XDR, độ phân giải 2340 x 1080 pixels, 60 Hz.
        Hệ điều hành: iOS 14.
        Camera sau:
        * Chính: 12 MP, khẩu độ f/1.6, chống rung quang học OIS.
        * Phụ: 12 MP, khẩu độ f/2.4, góc nhìn 120 độ.
        Camera trước: 12 MP, khẩu độ f/2.2.
        Chip: Apple A14 Bionic.
        RAM: 4 GB.
        SIM: 1 Nano SIM & 1 eSIM Hỗ trợ 5G.
        Pin, Sạc: 2227 mAh 20W.`;
    const chitietip12pro = `Màn hình: OLED 6.1" Super Retina XDR, độ phân giải 2532 x 1170 pixels, 60 Hz.
        Hệ điều hành: iOS 14.
        Camera sau:
        * Chính: 12 MP, khẩu độ f/1.6, chống rung quang học OIS.
        * Phụ: 12 MP, khẩu độ f/2.4, góc nhìn 120 độ.
        * Tele: 12 MP, khẩu độ f/2.0, chống rung quang học OIS, zoom quang 2x.
        Camera trước: 12 MP, khẩu độ f/2.2.
        Chip: Apple A14 Bionic.
        RAM: 6 GB.
        SIM: 1 Nano SIM & 1 eSIM Hỗ trợ 5G.
        Pin, Sạc: 2815 mAh 20W.`;
    const chitietip11 = `Màn hình: LCD 6.1" Liquid Retina HD, độ phân giải 1792 x 828 pixels, 60 Hz.
        Hệ điều hành: iOS 13.
        Camera sau:
        * Chính: 12 MP, khẩu độ f/1.8, chống rung quang học OIS.
        * Phụ: 12 MP, khẩu độ f/2.4, góc nhìn 120 độ.
        Camera trước: 12 MP, khẩu độ f/2.2.
        Chip: Apple A13 Bionic.
        RAM: 4 GB.
        SIM: 1 Nano SIM & 1 eSIM Hỗ trợ 4G.
        Pin, Sạc: 3110 mAh 18W.`;
    const chitietip11pro = `Màn hình: OLED 5.8" Super Retina XDR, độ phân giải 2436 x 1125 pixels, 60 Hz.
        Hệ điều hành: iOS 13.
        Camera sau:
        * Chính: 12 MP, khẩu độ f/1.8, chống rung quang học OIS.
        * Phụ: 12 MP, khẩu độ f/2.4, góc nhìn 120 độ.
        * Tele: 12 MP, khẩu độ f/2.0, chống rung quang học OIS, zoom quang 2x.
        Camera trước: 12 MP, khẩu độ f/2.2.
        Chip: Apple A13 Bionic.
        RAM: 4 GB.
        SIM: 1 Nano SIM & 1 eSIM Hỗ trợ 4G.
        Pin, Sạc: 3046 mAh 18W.`;
    const chitietipse = `Màn hình: LCD 4.7" Retina HD, độ phân giải 1334 x 750 pixels,60 Hz.
        Hệ điều hành: iOS 15.
        Camera sau:
        * Chính: 12 MP, khẩu độ f/1.8, chống rung quang học OIS.
        Camera trước: 7 MP, khẩu độ f/2.2.
        Chip: Apple A15 Bionic.
        RAM: 4 G.
        SIM: 1 Nano SIM.
        Pin, Sạc: 1821 mAh 20W.`;
    const list_product = [
      {
        id: 1,
        masp: "#ip15",
        tensp: "iPhone 15",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone15-item.jpeg",
        hinhanhMoTa: "/img/iphone/iPhone15-color.jpeg",
        mau: ["Black", "Blue", "Green", "Yellow", "Pink"],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 25890000,
        chitiet: chitietip15,
      },
      {
        id: 2,
        masp: "#ip15plus",
        tensp: "iPhone 15 Plus",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone15-item.jpeg",
        hinhanhMoTa: "/img/iphone/iPhone15-color.jpeg",
        mau: ["Black", "Blue", "Green", "Yellow", "Pink"],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 26290000,
        chitiet: chitietip15,
      },
      {
        id: 3,
        masp: "#ip15pro",
        tensp: "iPhone 15 Pro",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone15Pro-item.jpeg",
        hinhanhMoTa: "/img/iphone/iPhone15Pro-color.jpeg",
        mau: ["White", "Blue", "Black", "Natural"],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 28890000,
        chitiet: chitietip15pro,
      },
      {
        id: 4,
        masp: "#ip15promax",
        tensp: "iPhone 15 Pro Max",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone15Pro-item.jpeg",
        hinhanhMoTa: "/img/iphone/iPhone15Pro-color.jpeg",
        mau: ["White", "Blue", "Black", "Natural"],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 30290000,
        chitiet: chitietip15pro,
      },
      {
        id: 5,
        masp: "#ip14",
        tensp: "iPhone 14",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone14-item.jpeg",
        hinhanhMoTa: "/img/iphone/iPhone14-color.webp",
        mau: [
          "Midnight",
          "Starlight",
          "Product Red",
          "Blue",
          "Purple",
          "Yellow",
        ],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 21190000,
        chitiet: chitietip14,
      },
      {
        id: 6,
        masp: "#ip14plus",
        tensp: "iPhone 14 Plus",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone14-item.jpeg",
        hinhanhMoTa: "/img/iphone/iPhone14-color.webp",
        mau: [
          "Midnight",
          "Starlight",
          "Product Red",
          "Blue",
          "Purple",
          "Yellow",
        ],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 22990000,
        chitiet: chitietip14,
      },
      {
        id: 7,
        masp: "#ip14pro",
        tensp: "iPhone 14 Pro",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone14Pro-item.jpeg",
        hinhanhMoTa: "/img/iphone/iPhone14Pro-color.webp",
        mau: ["Deep Purple", "Sliver", "Gold", "Space Black"],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 23990000,
        chitiet: chitietip14pro,
      },
      {
        id: 8,
        masp: "#ip14promax",
        tensp: "iPhone 14 Pro Max",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone14Pro-item.jpeg",
        hinhanhMoTa: "/img/iphone/iPhone14Pro-color.webp",
        mau: ["Deep Purple", "Sliver", "Gold", "Space Black"],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 24990000,
        chitiet: chitietip14pro,
      },
      {
        id: 9,
        masp: "#ip13",
        tensp: "iPhone 13",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone13-item.webp",
        hinhanhMoTa: "/img/iphone/iPhone13-color.webp",
        mau: [
          "Midnight Black",
          "Starlight",
          "Sierra Blue",
          "Pink",
          "Alphine Green",
          "Product Red",
        ],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 17990000,
        chitiet: chitietip13,
      },
      {
        id: 10,
        masp: "#ip13pro",
        tensp: "iPhone 13 Pro",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone13Pro-item.webp",
        hinhanhMoTa: "/img/iphone/iPhone13Pro-color.jpg",
        mau: [
          "Graphite Black",
          "Silver",
          "Sierra Blue",
          "Gold",
          "Alphine Green",
        ],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 19990000,
        chitiet: chitietip13pro,
      },
      {
        id: 11,
        masp: "#ip13promax",
        tensp: "iPhone 13 Pro Max",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone13Pro-item.webp",
        hinhanhMoTa: "/img/iphone/iPhone13Pro-color.jpg",
        mau: [
          "Graphite Black",
          "Silver",
          "Sierra Blue",
          "Gold",
          "Alphine Green",
        ],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 2099000,
        chitiet: chitietip13pro,
      },

      {
        id: 12,
        masp: "#ip12",
        tensp: "iPhone 12",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone12-item.webp",
        hinhanhMoTa: "/img/iphone/iPhone12-color.webp",
        mau: [
          "Midnight Black",
          "Starlight",
          "Sierra Blue",
          "Alphine Green",
          "Product Red",
        ],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 20190000,
        chitiet: chitietip12,
      },
      {
        id: 13,
        masp: "#ip12mini",
        tensp: "iPhone 12 Mini",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone12Mini-item.webp",
        hinhanhMoTa: "/img/iphone/iPhone12Mini-color.jpg",
        mau: [
          "Midnight Black",
          "Starlight",
          "Sierra Blue",
          "Pink",
          "Alphine Green",
          "Product Red",
        ],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 20890000,
        chitiet: chitietip12mini,
      },
      {
        id: 14,
        masp: "#ip12pro",
        tensp: "iPhone 12 Pro",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone12Pro-item.webp",
        hinhanhMoTa: "/img/iphone/iPhone12Pro-color.jpg",
        mau: ["Silver", "Graphite", "Gold", "Pacific Blue"],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 21000000,
        chitiet: chitietip12pro,
      },
      {
        id: 15,
        masp: "#ip12promax",
        tensp: "iPhone 12 Pro Max ",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone12Pro-item.webp",
        hinhanhMoTa: "/img/iphone/iPhone12Pro-color.jpg",
        mau: ["Silver", "Graphite", "Gold", "Pacific Blue"],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 21490000,
        chitiet: chitietip12pro,
      },

      {
        id: 16,
        masp: "#ip11",
        tensp: "iPhone 11 ",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone11-item.webp",
        hinhanhMoTa: "/img/iphone/iPhone11-color.webp",
        mau: ["Black", "White", "Green", "Yellow", "Purple", "Product Red"],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 12590000,
        chitiet: chitietip11,
      },
      {
        id: 17,
        masp: "#ip11plus",
        tensp: "iPhone 11 Plus",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone11-item.webp",
        hinhanhMoTa: "/img/iphone/iPhone11-color.webp",
        mau: ["Black", "White", "Green", "Yellow", "Purple", "Product Red"],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 12890000,
        chitiet: chitietip11,
      },
      {
        id: 18,
        masp: "#ip11pro",
        tensp: "iPhone 11 Pro",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone11Pro-item.webp",
        hinhanhMoTa: "/img/iphone/iPhone11Pro-color.jpg",
        mau: ["Space Gray", "Silver", "Gold", " Midnight Green"],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 14990000,
        chitiet: chitietip11pro,
      },
      {
        id: 19,
        masp: "#ip11promax",
        tensp: "iPhone 11 Pro Max",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhone11Pro-item.webp",
        hinhanhMoTa: "/img/iphone/iPhone11Pro-color.jpg",
        mau: ["Space Gray", "Silver", "Gold", " Midnight Green"],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 16490000,
        chitiet: chitietip11pro,
      },
      {
        id: 20,
        masp: "#ipse",
        tensp: "iPhone SE 2022",
        danhmuc: "iPhone",
        hinhanhitem: "/img/iphone/iPhoneSE-item.webp",
        hinhanhMoTa: "/img/iphone/iPhoneSE-color.webp",
        mau: ["Black", "White", "Red"],
        luutru: ["128GB", "256GB", "512GB"],
        gia: 9890000,
        chitiet: chitietipse,
      },
    ];
    localStorage.setItem("products", JSON.stringify(list_product));
  }
}
// Biến số thành chuỗi có phân đơn vị
function formatNumberWithCommas(number) {
  // Chuyển số thành chuỗi
  var numberString = number.toString();
  // Tìm vị trí của dấu chấm thập phân (nếu có)
  var decimalIndex = numberString.indexOf(".");
  // Nếu không có dấu chấm thập phân, thì mặc định là cuối chuỗi
  if (decimalIndex === -1) {
    decimalIndex = numberString.length;
  }
  // Thêm dấu chấm vào mỗi 3 chữ số từ cuối lên đầu
  for (var i = decimalIndex - 3; i > 0; i -= 3) {
    numberString = numberString.slice(0, i) + "." + numberString.slice(i);
  }
  // Hiển thị chuỗi đã được định dạng
  return numberString;
}
var index_products = 0;
var products_search_number = 0;
// Tạo list
function create_list_right(list_products) {
  var check = 0;
  var list = "";
  // Hiển thị sản phẩm vào list
  while (index_products < list_products.length && check < 4) {
    list += `<div class="div_products_item" onclick="open_product_display('${
      list_products[index_products].tensp
    }')">
        <img src="${list_products[index_products].hinhanhitem}" alt="${
      list_products[index_products].tensp
    }"/>
        <p class="phone_name">${list_products[index_products].tensp}</p>
        <p class="phone_price">${formatNumberWithCommas(
          list_products[index_products].gia
        )}VND</p>
    </div>`;
    check++;
    index_products++;
  }
  return list;
}
function create_list_left(list_products) {
  // Kiểm tra xem sản phẩm còn lại bao nhiêu để fill vào cho hợp lý
  if (index_products == list_products.length && index_products % 4 != 0)
    index_products = index_products - 4 - (index_products % 4);
  else index_products = index_products - 8;
  var count = index_products + 4;
  var list = "";
  // Hiển thị sản phẩm vào list
  while (index_products < count) {
    list += `<div class="div_products_item" onclick="open_product_display('${
      list_products[index_products].tensp
    }')">
          <img src="${list_products[index_products].hinhanhitem}" alt="${
      list_products[index_products].tensp
    }"/>
          <p class="phone_name">${list_products[index_products].tensp}</p>
          <p class="phone_price">${formatNumberWithCommas(
            list_products[index_products].gia
          )}VND</p>
      </div>`;
    index_products++;
  }
  return list;
}
// Tạo list theo ô 8
function create_list_left_8(list_products) {
  // Kiểm tra điều kiện và khởi tạo
  if (index_products == list_products.length && index_products % 8 != 0)
    index_products = index_products - 8 - (index_products % 8);
  else index_products = index_products - 16;
  var count = index_products + 8;
  var list = [];
  list[0] = "";
  list[1] = "";
  // Hiện thị sản phẩm theo ô 8
  while (index_products < count) {
    if (count - index_products > 4) {
      list[0] += `<div class="div_products_item" onclick="open_product_display('${
        list_products[index_products].tensp
      }')">
          <img src="${list_products[index_products].hinhanhitem}" alt="${
        list_products[index_products].tensp
      }"/>
          <p class="phone_name">${list_products[index_products].tensp}</p>
          <p class="phone_price">${formatNumberWithCommas(
            list_products[index_products].gia
          )}VND</p>
      </div>`;
    } else {
      list[1] += `<div class="div_products_item" onclick="open_product_display('${
        list_products[index_products].tensp
      }')">
          <img src="${list_products[index_products].hinhanhitem}" alt="${
        list_products[index_products].tensp
      }"/>
          <p class="phone_name">${list_products[index_products].tensp}</p>
          <p class="phone_price">${formatNumberWithCommas(
            list_products[index_products].gia
          )}VND</p>
      </div>`;
    }
    index_products++;
  }
  return list;
}
// Hiển thị sản phẩm khi tien toi
function fill_products_right() {
  // Khởi tạo
  var div_products_view = document.getElementsByClassName("div_products_view");
  var list_products = JSON.parse(localStorage.getItem("products"));
  var list = create_list_right(list_products);
  // Hiển thị
  if (index_products <= list_products.length && list !== "") {
    products_search_number++;
    document.getElementById("div_search_products_number").textContent =
      products_search_number;
    div_products_view[0].innerHTML = list;
  }
}
// Hien thi san pham khi lui ve
function fill_products_left() {
  // Khởi tạo
  var div_products_view = document.getElementsByClassName("div_products_view");
  var list_products = JSON.parse(localStorage.getItem("products"));
  // Sàn lọc
  if (
    (index_products >= 8 || index_products == list_products.length) &&
    index_products <= list_products.length
  ) {
    var list = create_list_left(list_products);
    // Hiển thị
    products_search_number--;
    document.getElementById("div_search_products_number").textContent =
      products_search_number;
    div_products_view[0].innerHTML = list;
  }
}
// Lấy mảng sản phẩm cùng 1 type
function filterByType(obj) {
  return obj.hasOwnProperty("danhmuc") && obj.danhmuc === type_product;
}
// Phân loại sản phẩm
var type_product = null;
function products_type(type) {
  // Xóa banner
  if (type_product == null) {
    var divToRemove = document.getElementById("container");
    divToRemove.parentNode.removeChild(divToRemove);
    // Tạo thẻ thêm 1 hàng cho sản phẩm
    var parentDiv = document.getElementById("div_products_total");
    var newDiv = document.createElement("div");
    newDiv.classList.add("div_products_view");
    parentDiv.appendChild(newDiv);
  }
  // Reset lại tất cả số liệu
  type_product = type;
  index_products = 0;
  products_search_number = 0;
  document.getElementById("div_search_products_number").textContent =
    products_search_number;
  document.getElementById("p_products").textContent = type_product;
  // Xóa hết sản phẩm đã trình bày từ trước
  var div_products_view = document.getElementsByClassName("div_products_view");
  div_products_view[0].innerHTML = "";
  div_products_view[1].innerHTML = "";
  // fill sản phẩm cùng loại vào
  fill_products_type_right();
  document.getElementById("div_search_products_left").onclick = function () {
    fill_products_type_left();
  };
  document.getElementById("div_search_products_right").onclick = function () {
    fill_products_type_right();
  };
}
// Hiển thị sản phẩm theo phân loại
function fill_products_type_right() {
  // Khởi tạo các số liệu cần thiết
  var div_products_view = document.getElementsByClassName("div_products_view");
  var list_products = JSON.parse(localStorage.getItem("products"));
  var list_products_type = list_products.filter(filterByType);
  var list_1 = create_list_right(list_products_type);
  var list_2 = create_list_right(list_products_type);
  // Hiển thị ra
  if (index_products <= list_products_type.length && list_1 !== "") {
    products_search_number++;
    document.getElementById("div_search_products_number").textContent =
      products_search_number;
    div_products_view[0].innerHTML = list_1;
    div_products_view[1].innerHTML = list_2;
  }
}
function fill_products_type_left() {
  // Khởi tạo các số liệu cần thiết
  var div_products_view = document.getElementsByClassName("div_products_view");
  var list_products = JSON.parse(localStorage.getItem("products"));
  var list_products_type = list_products.filter(filterByType);
  // Kiểm tra sàn lọc
  if (
    (index_products >= 16 || index_products == list_products_type.length) &&
    index_products <= list_products_type.length
  ) {
    var list = [];
    list = create_list_left_8(list_products_type);
    // Hiển thị ra
    products_search_number--;
    document.getElementById("div_search_products_number").textContent =
      products_search_number;
    div_products_view[0].innerHTML = list[0];
    div_products_view[1].innerHTML = list[1];
  }
}
// Hiển thị sản phẩm
function open_product_display(product_name) {
  document.getElementById("div_product_display_total").style.display = "flex";
  var list_products = JSON.parse(localStorage.getItem("products"));
  var index_save;
  list_products.forEach(function (list_products, i) {
    if (list_products.tensp === product_name) {
      index_save = i;
    }
  });
  document.getElementById("div_product_display_header_img").src =
    list_products[index_save].hinhanhMoTa;
  document.getElementById("div_product_display_name").innerText =
    list_products[index_save].tensp;
  document.getElementById("div_product_display_price").textContent =
    "Giá: " + formatNumberWithCommas(list_products[index_save].gia) + "VND";
  var list = `<option value="">Chọn màu</option>`;
  for (var i = 0; i < list_products[index_save].mau.length; i++) {
    list += `<option value="${list_products[index_save].mau[i]}">${list_products[index_save].mau[i]}</option>`;
  }
  document.getElementById("color").innerHTML = list;
  list = `<option value="">Chọn dung lượng</option>`;
  for (var i = 0; i < list_products[index_save].luutru.length; i++) {
    list += `<option value="${list_products[index_save].luutru[i]}">${list_products[index_save].luutru[i]}</option>`;
  }
  document.getElementById("ROM").innerHTML = list;
  document.getElementById("div_product_display_information_p").innerText =
    list_products[index_save].chitiet;
}
// Tắt hiển thị sản phẩm
function close_product_display() {
  document.getElementById("div_product_display_total").style.display = "none";
}
