create_products();
// Khởi tạo các sản phẩm
function create_products() {
    if (localStorage.getItem("products") == null) {
      const list_product = [
        {
          id: 3,
          masp: "#125",
          name: "iPhone 13",
          img: "/img/iphone/ip13.webp",
          type: "iPhone",
          price: "8.500.000",
        },
        {
          id: 4,
          masp: "#126",
          name: "iPhone 12 Pro",
          img: "/img/iphone/ip12.webp",
          type: "iPhone",
          price: "9.200.000",
        },
        {
          id: 5,
          masp: "#127",
          name: "iPhone SE",
          img: "/img/iphone/se.webp",
          type: "iPhone",
          price: "6.500.000",
        },
        {
          id: 6,
          masp: "#128",
          name: "iPhone 14",
          img: "/img/iphone/ip14.webp",
          type: "iPhone",
          price: "7.800.000",
        },
        {
          id: 7,
          masp: "#129",
          name: "iPhone XR",
          img: "/img/iphone/ipxr.webp",
          type: "iPhone",
          price: "5.000.000",
        },
        {
          id: 7,
          masp: "#1254",
          name: "iPhone 15",
          img: "/img/iphone/ip15.webp",
          type: "iPhone",
          price: "5.000.000",
        },
        {
          id: 7,
          masp: "#12945",
          name: "iPhone 8",
          img: "/img/iphone/ip8.webp",
          type: "iPhone",
          price: "5.000.000",
        },
        {
          id: 7,
          masp: "#12945",
          name: "iPhone X",
          img: "/img/iphone/ip x.webp",
          type: "iPhone",
          price: "5.000.000",
        },
        {
          id: 8,
          masp: "#130",
          name: "AirPods Pro",
          img: "/img/earphone/air pro.webp",
          type: "Tai nghe",
          price: "2.500.000",
        },
        {
          id: 9,
          masp: "#131",
          name: "AirPods 2nd Gen",
          img: "/img/earphone/air pro1.webp",
          type: "Tai nghe",
          price: "1.800.000",
        },
        {
          id: 10,
          masp: "#132",
          name: "AirPods Max",
          img: "/img/earphone/air max 1.webp",
          type: "Tai nghe",
          price: "5.000.000",
        },
        {
          id: 11,
          masp: "#133",
          name: "AirPods 3rd Gen",
          img: "/img/earphone/airpodd max.webp",
          type: "Tai nghe",
          price: "2.200.000",
        },
  
        {
          id: 13,
          masp: "#135",
          name: "Apple Watch Series 7",
          img: "/img/appwatch/3.webp",
          type: "Đồng hồ thông minh",
          price: "9.000.000",
        },
        {
          id: 14,
          masp: "#136",
          name: "Apple Watch SE",
          img:
            "/img/appwatch/GUEST_28e63099-0ead-4415-a442-9c69139d3867.webp",
          type: "Đồng hồ thông minh",
          price: "6.500.000",
        },
        {
          id: 15,
          masp: "#137",
          name: "Apple Watch Series 6",
          img:
            "/img/appwatch/GUEST_a843b285-4980-4c95-946d-fec46edf9c62.webp",
          type: "Đồng hồ thông minh",
          price: "7.800.000",
        },
        {
          id: 16,
          masp: "#138",
          name: "Apple Watch Series 5",
          img: "/img/appwatch/wt 2.webp",
          type: "Đồng hồ thông minh",
          price: "7.200.000",
        },
        {
          id: 17,
          masp: "#139",
          name: "Apple Watch Series 4",
          img: "/img/appwatch/wt 3.webp",
          type: "Đồng hồ thông minh",
          price: "6.000.000",
        },
        {
          id: 18,
          masp: "#140",
          name: "iPad 8th Gen",
          img: "/img/ipad/apple ipad.webp",
          type: 'iPad',
          price: "7.000.000",
        },
        {
          id: 19,
          masp: "#141",
          name: "iPad Air 4th Gen",
          img: "/img/ipad/ip air.webp",
          type: 'iPad',
          price: "8.500.000",
        },
        {
          id: 20,
          masp: "#142",
          name: "iPad Mini 6th Gen",
          img: "/img/ipad/ip mini.webp",
          type: 'iPad',
          price: "6.200.000",
        },
        {
          id: 21,
          masp: "#143",
          name: "iPad Pro 11-inch",
          img: "/img/ipad/ipad air 1.webp",
          type: 'iPad',
          price: "10.800.000",
        },
        {
          id: 22,
          masp: "#144",
          name: "iPad Pro 12.9-inch",
          img: "/img/ipad/ipad mini.webp",
          type: 'iPad',
          price: "13.000.000",
        },
        {
          id: 23,
          masp: "#145",
          name: "iPad 10th Gen",
          img: "/img/ipad/ipad pro.webp",
          type: 'iPad',
          price: "8.000.000",
        },
        {
          id: 24,
          masp: "#146",
          name: "iPad Pro 12.9-inch 5th Gen",
          img: "/img/ipad/ipad smart.webp",
          type: 'iPad',
          price: "15.500.000",
        },
      ];
  
      localStorage.setItem("products", JSON.stringify(list_product));
    }
  }
var index_products = 0;
var products_search_number = 0;
// Tạo list
function create_list_right(list_products) {
  var check = 0;
  var list = '';
  // Hiển thị sản phẩm vào list
  while(index_products < list_products.length && check < 4) {
    list += `<div class="div_products_item">
        <img src="${list_products[index_products].img}" alt="${list_products[index_products].name}"/>
        <p class="phone_name">${list_products[index_products].name}</p>
        <p class="phone_price">${list_products[index_products].price}₫</p>
    </div>`
    check++;
    index_products++;
  }
  return list;
}
function create_list_left(list_products) {
  // Kiểm tra xem sản phẩm còn lại bao nhiêu để fill vào cho hợp lý
  if(index_products == list_products.length && index_products%4 != 0) index_products = index_products - 4 - index_products%4;
  else index_products = index_products - 8;
  var count = index_products + 4;
  var list = '';
  // Hiển thị sản phẩm vào list
  while(index_products < count) {
    list += `<div class="div_products_item">
         <img src="${list_products[index_products].img}" alt="${list_products[index_products].name}"/>
         <p class="phone_name">${list_products[index_products].name}</p>
         <p class="phone_price">${list_products[index_products].price}₫</p>
    </div>`
    index_products++;
  }
  return list;
}
// Hiển thị sản phẩm khi tien toi
function fill_products_right() {
  // Khởi tạo
  var div_products_view = document.getElementsByClassName('div_products_view');
  var list_products = JSON.parse(localStorage.getItem('products'));
  var list = create_list_right(list_products);
  // Hiển thị
  if(index_products <= list_products.length && list !== '') {
      products_search_number++;
      document.getElementById('div_search_products_number').textContent = products_search_number;
      div_products_view[0].innerHTML = list;
  } 
}
// Hien thi san pham khi lui ve
function fill_products_left() {
  // Khởi tạo
  var div_products_view = document.getElementsByClassName('div_products_view');
  var list_products = JSON.parse(localStorage.getItem('products'));
  // Sàn lọc
  if((index_products >= 8 || index_products == list_products.length) && index_products <= list_products.length) {
      var list = create_list_left(list_products);
      // Hiển thị
      products_search_number--;
      document.getElementById('div_search_products_number').textContent = products_search_number;
      div_products_view[0].innerHTML = list;
  }
}
// Lấy mảng sản phẩm cùng 1 type
function filterByType(obj) {
  return obj.hasOwnProperty('type') && obj.type === type_product;
}
// Phân loại sản phẩm
var type_product = null;
function products_type(type) {
  // Xóa banner
  if(type_product == null) {
    var divToRemove = document.getElementById('container'); 
    divToRemove.parentNode.removeChild(divToRemove);
    // Tạo thẻ thêm 1 hàng cho sản phẩm
    var parentDiv = document.getElementById('div_products_total');
    var newDiv = document.createElement('div');
    newDiv.classList.add('div_products_view');
    parentDiv.appendChild(newDiv);
  }
  // Reset lại tất cả số liệu
  type_product = type;
  index_products = 0;
  products_search_number = 0;
  document.getElementById('div_search_products_number').textContent = products_search_number;
  document.getElementById('p_products').textContent = type_product;
  // Xóa hết sản phẩm đã trình bày từ trước
  var div_products_view = document.getElementsByClassName('div_products_view');
  div_products_view[0].innerHTML = '';
  div_products_view[1].innerHTML = '';
  // fill sản phẩm cùng loại vào
  fill_products_type_right();
  document.getElementById('div_search_products_left').onclick = function() {
    fill_products_type_left();
  }
  document.getElementById('div_search_products_right').onclick = function() {
    fill_products_type_right();
  }
}
// Hiển thị sản phẩm theo phân loại
function fill_products_type_right() {
  // Khởi tạo các số liệu cần thiết
  var div_products_view = document.getElementsByClassName('div_products_view');
  var list_products = JSON.parse(localStorage.getItem('products'));
  var list_products_type = list_products.filter(filterByType);
  var list_1 = create_list_right(list_products_type);
  var list_2 = create_list_right(list_products_type);
  // Hiển thị ra
  if(index_products <= list_products_type.length && list_1 !== '' && list_2 !== '') {
      products_search_number++;
      document.getElementById('div_search_products_number').textContent = products_search_number;
      div_products_view[0].innerHTML = list_1;
      div_products_view[1].innerHTML = list_2;
  } 
}
function fill_products_type_left() {
  // Khởi tạo các số liệu cần thiết
  var div_products_view = document.getElementsByClassName('div_products_view');
  var list_products = JSON.parse(localStorage.getItem('products'));
  var list_products_type = list_products.filter(filterByType);
  // Kiểm tra sàn lọc
  if((index_products >= 16 || index_products == list_products_type.length) && index_products <= list_products_type.length) {
      var list_1 = create_list_left(list_products_type);
      var list_2 = create_list_left(list_products_type);
      // Hiển thị ra
      products_search_number--;
      document.getElementById('div_search_products_number').textContent = products_search_number;
      div_products_view[0].innerHTML = list_1;
      div_products_view[1].innerHTML = list_2;
    }
}
