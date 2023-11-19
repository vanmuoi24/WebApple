// Khởi tạo ban đầu
inner_cart();
// Tăng giảm số lượng
function quantitydown(i) {
    var waitting_buy = JSON.parse(localStorage.getItem('waitting_buy'));
    if (waitting_buy[i].soluong > 1) waitting_buy[i].soluong--;
    var inputElement = document.getElementsByClassName('qty-input numeric-input');
    inputElement[i].value = waitting_buy[i].soluong;
    localStorage.setItem('waitting_buy', JSON.stringify(waitting_buy));
    inner_cart();
}

function quantityup(i) {
    var waitting_buy = JSON.parse(localStorage.getItem('waitting_buy'));
    waitting_buy[i].soluong++;
    var inputElement = document.getElementsByClassName('qty-input numeric-input');
    inputElement[i].value = waitting_buy[i].soluong;
    localStorage.setItem('waitting_buy', JSON.stringify(waitting_buy));
    inner_cart();
}

// Biến số thành chuỗi có phân đơn vị
function formatNumberWithCommas(number) {
    // Chuyển số thành chuỗi
    var numberString = number.toString();
    // Tìm vị trí của dấu chấm thập phân (nếu có)
    var decimalIndex = numberString.indexOf('.');
    // Nếu không có dấu chấm thập phân, thì mặc định là cuối chuỗi
    if (decimalIndex === -1) {
        decimalIndex = numberString.length;
    }
    // Thêm dấu chấm vào mỗi 3 chữ số từ cuối lên đầu
    for (var i = decimalIndex - 3; i > 0; i -= 3) {
        numberString = numberString.slice(0, i) + '.' + numberString.slice(i);
    }
    // Hiển thị chuỗi đã được định dạng
    return numberString;
}
// Fill sản phảm đã đặt vào
function inner_cart() {
    var waitting_buy = JSON.parse(localStorage.getItem('waitting_buy'));
    var body_cart = document.getElementById('body-cart');
    var list = '';
    for (var i = 0; i < waitting_buy.length; i++) {
        list += `<tr>
		<td style="color: blue" class="product-info1">
			<img src="${waitting_buy[i].hinhanhitem}" alt="alo" />
			<p>${formatNumberWithCommas(waitting_buy[i].gia)}VND</p>
		</td>
		<td class="product-info2">
			${waitting_buy[i].tensp}
			<br />
			Màu: ${waitting_buy[i].mau}
			<br />
			Dung luong: ${waitting_buy[i].luutru}
		</td>
		<td class="quantity">
			<div class="cart-quantity-input-container">
				<button class="buttom-tru" type="button" onclick="quantitydown(${i})">-</button>
				<input class="qty-input numeric-input"  type="text" value="${waitting_buy[i].soluong}" disabled data-index="${i}"/>
				<button class="buttom-cong" type="button" onclick="quantityup(${i})">+</button>
			</div>
		</td>
		<td class="unit-price">${formatNumberWithCommas(waitting_buy[i].gia * waitting_buy[i].soluong)}VND</td>
		<td class="option" style="cursor: pointer;">
			<i class="fa fa-trash" aria-hidden="true" onclick="trashcart(${i})"></i>
		</td>
	    </tr>`;
    }
    body_cart.innerHTML = list;

    var total_cart = document.getElementById('total-price');
    total_cart.innerHTML = `Tổng tiền: ${formatNumberWithCommas(calculateTotalPrice())}VND`;
}

// Tính tổng tiền cho toàn bộ giỏ hàng
function calculateTotalPrice() {
    var waitting_buy = JSON.parse(localStorage.getItem('waitting_buy'));
    var totalPrice = 0;
    var tempPrice = 0;
    waitting_buy.forEach(function (waitting_buy) {
        tempPrice = waitting_buy.gia * waitting_buy.soluong;
        totalPrice += tempPrice;
    });
    return totalPrice;
}

// Xóa sp đã đặt
function trashcart(index) {
    var waitting_buy = JSON.parse(localStorage.getItem('waitting_buy'));
    waitting_buy.splice(index, 1);
    localStorage.setItem('waitting_buy', JSON.stringify(waitting_buy));
    inner_cart();
}

// Đặt hàng
function createOrder() {
    var waitting_buy = JSON.parse(localStorage.getItem('waitting_buy'));
    var index_login = JSON.parse(localStorage.getItem('index_login'));
    var user = JSON.parse(localStorage.getItem('user'));
    // Kiểm tra đã đăng nhập chưa
    if (index_login != -1) {
        const ngay = new Date(); // lấy ngày hiện tại
        const order = {
            user: user[index_login],
            Ngaydat: ngay.getDate() + '/' + (ngay.getMonth() + 1) + '/' + ngay.getFullYear(),
            Sanpham: waitting_buy, // mảng waitting_buy
            Tongtien: calculateTotalPrice(), //tong tien
            Trangthai: 'Chưa xử lý',
        };
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        if (orders.length === 0) {
            orders = [order]; //mang rong
        } else {
            orders.push(order); //them order moi vao mang da co san
        }
        localStorage.setItem('orders', JSON.stringify(orders)); //// lưu mảng orders vào localStorage
        showMessage('Đặt hàng thành công!');
        // xóa mảng waitting_buy
        waitting_buy.splice(0, waitting_buy.length);
        localStorage.setItem('waitting_buy', JSON.stringify(waitting_buy));
        inner_cart();
    } else {
        showMessage_error('Bạn phải đăng nhập để mua sản phẩm!');
    }
}
