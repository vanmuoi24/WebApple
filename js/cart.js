inner_cart();

function quantitydown() {
    var inputElement = event.target.parentElement.querySelector('.qty-input');
    if (inputElement.value > 1) inputElement.value--;
}

function quantityup() {
    var inputElement = event.target.parentElement.querySelector('.qty-input');
    inputElement.value++;
}

// Ko cho nhập chữ vào input và giữ giá trị là số nguyên
document.addEventListener('input', function (event) {
    if (event.target.classList.contains('numeric-input')) {
        var inputElement = event.target;
        inputElement.value = parseInt(inputElement.value);
        inputElement.value = isNaN(inputElement.value) ? 1 : inputElement.value;
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
				<button class="buttom-tru " type="button" onclick="quantitydown()">-</button>
				<input class="qty-input numeric-input" name="quantity-input" type="text" value="1" />
				<button class="buttom-cong " type="button" onclick="quantityup()">+</button>
			</div>
		</td>
		<td class="unit-price">999999999d</td>
		<td class="option">
			<i class="fa fa-trash" aria-hidden="true"></i>
		</td>
	</tr>`;
    }
    body_cart.innerHTML = list;
}
