function showChangePass() {
    document.getElementById('sub_change_pass').style.display = 'block';
    document.getElementById('sub_change_infor').style.display = 'none';
    document.getElementById('change_in4_main_body_sub_2').style.right = '0';
}
function showChangeInfor() {
    // document.getElementById('sub_change_infor').style.display = 'block';
    document.getElementById('sub_change_pass').style.display = 'none';
}
showChangeInfor();
function change_pass() {
    showChangePass();
    let element = document.getElementById('row5');
    element.style.display = 'block';
    element.innerHTML = `
    
    <div id="row6">
    <label for="pass_o">Nhập mật khẩu cũ :</label>
    <input type="password" name="Old Password" id="pass_o" class = "form_pass" required />
    <br/><br/>
    <div class = "error-message"></div>
    </div>
    <div id="row7">
    <label for="pass_n">Nhập mật khẩu mới :</label>
    <input type="password" name="New password" id="pass_n" class = "form_pass" required /> <br /><br />
    <div class = "error-message"></div>
    </div>
    <div id="row8">
    <label for="pass_again">Nhập lại mật khẩu :</label>
    <input type="password" id="pass_again" class = "form_pass" required /><br /><br />
    </div>
    <div class = "error-message"></div>`;
}

const userAccounts = JSON.parse(localStorage.getItem('user'));
const adminAccounts = JSON.parse(localStorage.getItem('admin'));
const check_admin = JSON.parse(localStorage.getItem('check_admin'));
const vitri = JSON.parse(localStorage.getItem('index_login'));
///Đổ dữ liệu vào thẻ input
function getInForMation() {
    const myName = document.getElementById('hoten');
    const myNumberPhone = document.getElementById('sdt');
    const myAddress = document.getElementById('address');
    const myEmail = document.getElementById('email');
    if (check_admin) {
        document.getElementById('name_account').textContent = adminAccounts[vitri].name;
        myName.value = adminAccounts[vitri].name;
        myNumberPhone.value = adminAccounts[vitri].phone;
        myAddress.value = adminAccounts[vitri].address;
        myEmail.value = adminAccounts[vitri].email;
    } else {
        document.getElementById('name_account').textContent = userAccounts[vitri].name;
        myName.value = userAccounts[vitri].name;
        myNumberPhone.value = userAccounts[vitri].phone;
        myAddress.value = userAccounts[vitri].address;
        myEmail.value = userAccounts[vitri].email;
    }
}
getInForMation();

function change_error(error) {
    change_notify.style.backgroundColor = '#ffe6e6';
    change_notify.style.border = '2px solid red';
    change_notify.textContent = error;
    setTimeout(function () {
        change_notify.style.backgroundColor = 'transparent';
        change_notify.style.border = 'none';
        change_notify.textContent = '';
    }, 2000);
}
function check_change(event) {
    event.preventDefault();
    ///////check name
    let name = document.getElementById('hoten').value;
    if (!isNaN(Number(name))) {
        change_error('Họ tên không hợp lệ !');
        return false;
    }
    if (name.length < 8) {
        change_error('Họ tên phải từ 8 chữ cái trở lên');
        return false;
    }
    //check phone number
    let sdt = document.getElementById('sdt').value;
    if (isNaN(Number(sdt)) || Number(sdt) < 100000000 || Number(sdt) > 999999999) {
        change_error('Số điện thoại không hợp lệ');
        return false;
    }
    //check địa chỉ
    let address = document.getElementById('address').value;
    if (address.length < 8) {
        register_error('Địa chỉ phải từ 8 chữ cái trở lên');
        return false;
    }
    //check email
    let email = document.getElementById('email').value;
    function isValidEmail(email) {
        // Biểu thức chính quy để kiểm tra địa chỉ email
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    // Sử dụng hàm isValidEmail để kiểm tra địa chỉ email
    if (!isValidEmail(email)) {
        change_error('Địa chỉ email không hợp lệ');
        return false;
    }
    //checkk pass
    let pass_o = document.getElementById('pass_o').value;
    if (check_admin) {
        if (pass_o !== adminAccounts[vitri].password) {
            change_error('Không giống mật khẩu cũ !');
            return false;
        }
    } else if (pass_o !== userAccounts[vitri].password) {
        change_error('Không giống mật khẩu cũ');
        return false;
    }
    //check nhập lại password
    let pass_n = document.getElementById('pass_n').value;
    function validPassword(password) {
        let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordPattern.test(password);
    }
    if (!validPassword(pass_n)) {
        change_error('Mật khẩu mới phải từ 8 kí tự trở lên, có ít nhất một chữ hoa, chữ thường, chữ số');
        return false;
    }
    if (pass_n === pass_o) {
        change_error('Mật khẩu mới trùng mật khẩu cũ');
        return false;
    }
    //check nhập lại mật khẩu
    let pass_a = document.getElementById('pass_again').value;
    if (pass_a !== pass_n) {
        change_error('Nhập lại mật khẩu không trùng mật khẩu mới');
        return false;
    }
    //Đổi dự liệu mới vào local
    if (check_admin) {
        adminAccounts[vitri].name = name;
        localStorage.setItem('admin', JSON.stringify(adminAccounts));
        adminAccounts[vitri].phone = sdt;
        localStorage.setItem('admin', JSON.stringify(adminAccounts));
        adminAccounts[vitri].address = address;
        localStorage.setItem('admin', JSON.stringify(adminAccounts));
        adminAccounts[vitri].email = email;
        localStorage.setItem('admin', JSON.stringify(adminAccounts));
        adminAccounts[vitri].password = pass_n;
        localStorage.setItem('admin', JSON.stringify(adminAccounts));
    } else {
        userAccounts[vitri].name = name;
        localStorage.setItem('user', JSON.stringify(userAccounts));
        userAccounts[vitri].phone = sdt;
        localStorage.setItem('user', JSON.stringify(userAccounts));
        userAccounts[vitri].address = address;
        localStorage.setItem('user', JSON.stringify(userAccounts));
        userAccounts[vitri].email = email;
        localStorage.setItem('user', JSON.stringify(userAccounts));
        userAccounts[vitri].password = pass_n;
        localStorage.setItem('user', JSON.stringify(userAccounts));
    }
    showMessage('Thay đổi thông tin thành công');
    window.location.reload();
    return true;
}
function change_canhann(event) {
    event.preventDefault();
    ///////check name
    let name = document.getElementById('hoten').value;
    if (!isNaN(Number(name))) {
        change_error('Họ tên không hợp lệ !');
        return false;
    }
    if (name.length < 8) {
        change_error('Họ tên phải từ 8 chữ cái trở lên');
        return false;
    }
    //check phone number
    let sdt = document.getElementById('sdt').value;
    if (isNaN(Number(sdt)) || Number(sdt) < 100000000 || Number(sdt) > 999999999) {
        change_error('Số điện thoại không hợp lệ');
        return false;
    }
    //check địa chỉ
    let address = document.getElementById('address').value;
    if (address.length < 8) {
        register_error('Địa chỉ phải từ 8 chữ cái trở lên');
        return false;
    }
    //check email
    let email = document.getElementById('email').value;
    function isValidEmail(email) {
        // Biểu thức chính quy để kiểm tra địa chỉ email
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    // Sử dụng hàm isValidEmail để kiểm tra địa chỉ email
    if (!isValidEmail(email)) {
        change_error('Địa chỉ email không hợp lệ');
        return false;
    }
    //checkk pass
    //Đổi dự liệu mới vào local
    if (check_admin) {
        adminAccounts[vitri].name = name;
        localStorage.setItem('admin', JSON.stringify(adminAccounts));
        adminAccounts[vitri].phone = sdt;
        localStorage.setItem('admin', JSON.stringify(adminAccounts));
        adminAccounts[vitri].address = address;
        localStorage.setItem('admin', JSON.stringify(adminAccounts));
        adminAccounts[vitri].email = email;
        localStorage.setItem('admin', JSON.stringify(adminAccounts));
    } else {
        userAccounts[vitri].name = name;
        localStorage.setItem('user', JSON.stringify(userAccounts));
        userAccounts[vitri].phone = sdt;
        localStorage.setItem('user', JSON.stringify(userAccounts));
        userAccounts[vitri].address = address;
        localStorage.setItem('user', JSON.stringify(userAccounts));
        userAccounts[vitri].email = email;
        localStorage.setItem('user', JSON.stringify(userAccounts));
    }
    showMessage('Thay đổi thông tin thành công');
    window.location.reload();
    return true;
}