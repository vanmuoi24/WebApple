inner_cart();

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

// Ko cho nhập chữ vào input và giữ giá trị là số nguyên
// document.addEventListener('input', function (event) {
//     if (event.target.classList.contains('numeric-input')) {
//         var inputElement = event.target;
//         inputElement.value = parseInt(inputElement.value);
//         inputElement.value = isNaN(inputElement.value) ? 1 : inputElement.value;

//         var waitting_buy = JSON.parse(localStorage.getItem('waitting_buy'));

//         localStorage.setItem('waitting_buy', JSON.stringify(waitting_buy));
//         inner_cart();
//     }
// });
// Ko cho nhập chữ vào input và giữ giá trị là số nguyên
document.addEventListener('input', function (event) {
    if (event.target.classList.contains('numeric-input')) {
        var inputElement = event.target;
        var index = inputElement.dataset.index;

        // kiểm tra xem ký tự được nhập vào có phải là chữ hay không
        var isLetter = /[a-zA-Z]/g.test(event.key);

        // nếu là chữ, thì ngăn chặn ký tự đó được nhập vào
        if (isLetter) {
            event.preventDefault();
            return;
        }

        // lấy index của input số lượng
        // inputElement.value = parseInt(inputElement.value);
        // inputElement.value = isNaN(inputElement.value) ? 1 : inputElement.value;

        // lưu thay đổi vào mảng waitting_buy
        var waitting_buy = JSON.parse(localStorage.getItem('waitting_buy'));
        waitting_buy[index].soluong = parseInt(inputElement.value);
        localStorage.setItem('waitting_buy', JSON.stringify(waitting_buy));

        // gọi hàm để cập nhật giao diện
        inner_cart();
    }
});

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
				<input class="qty-input numeric-input"  type="text" value="${waitting_buy[i].soluong}" data-index="${i}"/>
				<button class="buttom-cong" type="button" onclick="quantityup(${i})">+</button>
			</div>
		</td>
		<td class="unit-price">${formatNumberWithCommas(waitting_buy[i].gia * waitting_buy[i].soluong)}VND</td>
		<td class="option">
			<i class="fa fa-trash" aria-hidden="true" onclick="trashcart(${i})"></i>
		</td>
	    </tr>`;
    }
    body_cart.innerHTML = list;

    var total_cart = document.getElementById('total-price');
    total_cart.innerHTML = `Tổng tiền: ${calculateTotalPrice(waitting_buy)}`;
}

function trashcart(index) {
    var waitting_buy = JSON.parse(localStorage.getItem('waitting_buy'));
    waitting_buy.splice(index, 1);
    localStorage.setItem('waitting_buy', JSON.stringify(waitting_buy));
    inner_cart();
}

// tính tổng tiền cho toàn bộ giỏ hàng
function calculateTotalPrice(waitting_buy) {
    var totalPrice = 0;
    waitting_buy.forEach(function (item) {
        totalPrice += item.tongtien;
    });
    return totalPrice;
}
