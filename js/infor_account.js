function change_pass() {
    let element_1 = document.getElementById('row5');
    element_1.style.display = 'block';
    element_1.innerHTML = `  
    <div id="row6">
    <label for="pass_o">Nhập mật khẩu cũ:</label>
    <input type="password" name="Old Password" id="pass_o" class = "form_pass" required /><br/><br/>
    </div>
    <div id="row7">
    <label for="pass_n">Nhập mật khẩu mới:</label>
    <input type="password" name="New password" id="pass_n" class = "form_pass" required /> <br /><br />
    </div>
    <div id="row8">
    <label for="pass_again">Nhập lại mật khẩu:</label>
    <input type="password" id="pass_again" class = "form_pass" required /><br /><br />
    </div>`;
}

const check_admin = JSON.parse(localStorage.getItem('check_admin'));
if (check_admin) var userAccounts = JSON.parse(localStorage.getItem('admin'));
else var userAccounts = JSON.parse(localStorage.getItem('user'));
const vitri = JSON.parse(localStorage.getItem('index_login'));
///Đổ dữ liệu vào thẻ input
function getInForMation() {
    const myName = document.getElementById('change_name');
    const myNumberPhone = document.getElementById('change_phone');
    const myAddress = document.getElementById('change_address');
    const myEmail = document.getElementById('change_email');
    document.getElementById('name_account').textContent = userAccounts[vitri].name;
    myName.value = userAccounts[vitri].name;
    myNumberPhone.value = userAccounts[vitri].phone;
    myAddress.value = userAccounts[vitri].address;
    myEmail.value = userAccounts[vitri].email;
}

function check_change(event) {
    event.preventDefault();
    //check name
    let name = document.getElementById('change_name').value;
    if (!isNaN(Number(name))) {
        showMessage_error('Họ tên không hợp lệ !');
        return false;
    }
    if (name.length < 8) {
        showMessage_error('Họ tên phải từ 8 chữ cái trở lên');
        return false;
    }
    //check phone number
    let sdt = document.getElementById('change_phone').value;
    //check địa chỉ
    let address = document.getElementById('change_address').value;
    if (address.length < 8) {
        showMessage_error('Địa chỉ phải từ 8 chữ cái trở lên');
        return false;
    }
    //check email
    let email = document.getElementById('change_email').value;
    function isValidEmail(email) {
        // Biểu thức chính quy để kiểm tra địa chỉ email
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    // Sử dụng hàm isValidEmail để kiểm tra địa chỉ email
    if (!isValidEmail(email)) {
        showMessage_error('Địa chỉ email không hợp lệ');
        return false;
    }
    //checkk pass
    let pass = document.getElementById('pass_o');
    let pass_n = '';
    let pass_a = '';
    let pass_o = '';
    if (pass !== null && pass_n !== '' && pass_a !== '' && pass_o !== '') {
        pass_o = document.getElementById('pass_o').value;
        if (pass_o !== userAccounts[vitri].password) {
            showMessage_error('Nhập không đúng mật khẩu cũ');
            return false;
        }
        //check nhập lại password
        function validPassword(password) {
            let passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
            return passwordPattern.test(password);
        }
        pass_n = document.getElementById('pass_n').value;
        if (!validPassword(pass_n)) {
            showMessage_error('Mật khẩu phải từ 8 kí tự trở lên, có ít nhất một chữ hoa, kí tự đặc biệt, chữ số');
            return false;
        }
        if (pass_n === pass_o) {
            showMessage_error('Mật khẩu mới trùng mật khẩu cũ');
            return false;
        }
        //check nhập lại mật khẩu
        pass_a = document.getElementById('pass_again').value;
        if (pass_a !== pass_n) {
            showMessage_error('Nhập lại mật khẩu không trùng mật khẩu mới');
            return false;
        }
    }
    if (
        name === userAccounts[vitri].name &&
        sdt === userAccounts[vitri].phone &&
        address === userAccounts[vitri].address &&
        email === userAccounts[vitri].email
    ) {
        showMessage_error('Bạn chưa nhập gì để thay đổi');
        return false;
    }
    //Đổi dự liệu mới vào local
    let alert_accept = confirm('Xác nhận đổi thông tin!');
    if (alert_accept === true) {
        if (name !== userAccounts[vitri].name) {
            userAccounts[vitri].name = name;
        }
        if (sdt !== userAccounts[vitri].phone) {
            userAccounts[vitri].phone = sdt;
        }
        if (address !== userAccounts[vitri].address) {
            userAccounts[vitri].address = address;
        }
        if (email !== userAccounts[vitri].email) {
            userAccounts[vitri].email = email;
        }
        if (pass_n !== '') userAccounts[vitri].password = pass_n;
        localStorage.setItem('user', JSON.stringify(userAccounts));
        getInForMation();
        showMessage('Thay đổi thông tin thành công');
    } else if (alert_accept === false) {
        alert('Dừng việc thay đổi thông tin thành công');
    }
    return true;
}
//Hiển thị thông tin tài khoản
function clickTTTK() {
    document.getElementById('in4_donhang').style.display = 'none';
    document.getElementById('in4_caNhan').style.display = 'flex';
}
// Hiển thị đơn hàng
function clickQLDH() {
    document.getElementById('in4_donhang').style.display = 'flex';
    document.getElementById('in4_caNhan').style.display = 'none';
    Fillbill();
}
function Fillbill() {
    var check_admin = localStorage.getItem('check_admin');
    if (check_admin) var user = JSON.parse(localStorage.getItem('admin'));
    else var user = JSON.parse(localStorage.getItem('user'));
    var index_U = localStorage.getItem('index_login');
    var orders = JSON.parse(localStorage.getItem('orders'));
    var body_order = document.getElementById('body-order');
    var list = ' ';
    for (var i = 0; i < orders.length; i++) {
        if (user[index_U].phone === orders[i].user.phone) {
            list += `<tr>
                        <td class="order-info1">
                            <p>${orders[i].madon}</p>
                        </td>
                        <td class="order-info2">
                            <p>${formatNumberWithCommas(orders[i].Tongtien)}đ</p>
                        </td>
                        <td class="order-info3">
                            <!-- <p>iPhone 15 Pro - Black - 256GB - SL: 2</p> -->
                            ${getProductHTML(orders[i].Sanpham)}
                        </td>
                        <td class="order-info4">${orders[i].Ngaydat}</td>
                        <td class="order-info5">${orders[i].Trangthai}</td>
                    </tr>`;
        }
    }
    if (list === ' ') {
        var noorder = `<p>Không có đơn hàng</p>`;
        document.getElementById('noOrder').innerHTML = noorder;
    }
    body_order.innerHTML = list;
}
function getProductHTML(product) {
    var productListHTML = '';
    product.forEach((productt) => {
        productListHTML += `<p>${productt.tensp} - ${productt.mau} - ${productt.luutru} - SL:${productt.soluong}</p>`;
    });
    return productListHTML;
}

// Save trạng thái thông tin tài khoản
function SaveInforAccount() {
    localStorage.setItem('InforAccount', 'true');
    window.location.href = '../html/homepage.html';
}
// Kiểm tra có chọn thông tin tài khoản chưa
function CheckInforAccount() {
    var InforAccount = localStorage.getItem('InforAccount');
    if (InforAccount !== null) showInforAccount();
    localStorage.removeItem('InforAccount');
}
// Hiển thị thông tin tài khoản
function showInforAccount() {
    // Thay đổi tên trang web
    document.title = 'Thông tin tài khoản';
    // Xóa banner
    document.getElementById('container').remove();
    // Xóa hiển thị sản phẩm
    document.getElementById('div_products').remove();
    document.getElementById('div_product_display_total').remove();
    // Fill chính sách bảo hành vào
    var newElement = document.createElement('div');
    newElement.id = 'in4_account';
    newElement.innerHTML = `
    <!-- ô thông tin bên trái -->
    <div class="option_canhan">
        <div class="option_canhan_main">
            <div class="option_canhan_main_head">
                <h2 id="name_account">User name</h2>
                <i class="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            <div class="option_canhan_main_body">
                <div id="body_1" onclick="SaveInforAccount()">
                    <p>Thông tin tài khoản</p>
                    <i class="fa fa-user user" aria-hidden="true"></i>
                </div>
                <div id="body_2" onclick="clickQLDH()">
                    <p>Quản lí đơn hàng</p>
                    <i class="fa fa-shopping-bag bag" aria-hidden="true"></i>
                </div>
                <div id="body_3" onclick="logout()">
                    <p>Đăng xuất ></p>
                    <i class="fa fa-sign-out exit" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
    <!-- Ô thông tin bên phải -->
    <div id="in4_caNhan">
        <form class="in4_caNhan_main">
            <div class="in4_caNhan_main_head">
                <h1>Thông tin tài khoản</h1>
            </div>
            <div class="in4_caNhan_main_body">
                <div class="in4_caNhan_main_body_data">
                    <div id="row1">
                        <label for="change_name">Họ và tên:</label>
                        <input type="text" id="change_name" name="Name" class="form_input" required /><br /><br />
                    </div>
                    <div id="row2">
                        <label for="change_phone">Số điện thoại:</label>
                        <input type="text" name="Phone-number" id="change_phone" disabled="true" /><br /><br />
                    </div>
                    <div id="row3">
                        <label for="change_address">Địa chỉ:</label>
                        <input type="text" name="Address" id="change_address" required /><br /><br />
                    </div>
                    <div id="row4">
                        <label for="change_email">Email:</label>
                        <input type="text" id="change_email" name="Email" required />
                    </div>
                    <br />
                    <div id="row5">
                        <label>Mật khẩu:</label>
                        <p>********</p>
                        <a herf="#" onclick="change_pass()" style="cursor: pointer; color: blue">Thay đổi</a>
                    </div>
                    <br />
                    <div id="change_in4_main_body_click">
                        <input type="submit" value="Lưu thông tin" id="sub_change_infor" onclick="check_change(event)" />
                    </div>
                </div>
            </div>
        </form>
    </div>
    <!-- Quan li don hang  -->
    <div id="in4_donhang">
        <div class="table_warpper">
            <table class="order">
                <colgroup>
                    <col width="80px" />
                    <col width="150px" />
                    <col width="450px" />
                    <col width="100px" />
                    <col width="100px" />
                </colgroup>
                <thead>
                    <tr>
                        <th class="order-info1">Mã đơn</th>
                        <th class="order-info2">Tổng tiền</th>
                        <th class="order-info3">Sản phẩm</th>
                        <th class="order-info4">Ngày đặt</th>
                        <th class="order-info5">Trạng thái</th>
                    </tr>
                </thead>
                <tbody id="body-order"></tbody>
            </table>
            <div id="noOrder"></div>
        </div>
    </div>`;
    document.body.insertBefore(newElement, document.getElementById('footer'));
    getInForMation();
}
