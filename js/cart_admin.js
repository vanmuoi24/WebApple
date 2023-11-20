function cart_admin() {
    const right_header = document.getElementsByClassName('right_header')[0];
    const left_list = document.querySelectorAll('.left_list li');

    left_list[3].addEventListener('click', () => {
        var cart_list = `
        <div class="cart_header">
                <div class="header_cart_table">
                    <div class="header_select">
                        <select name="" id="select_userall">
                            <option value="Tất cả">Tất cả</option>
                            <option value="Đã xử lý" >Xử Lí</option>
                            <option value="Chưa xử lý">Chưa Xử Lý</option>
                        </select>
                    </div>
                    <div class="header_seach">
                        <input type="text" name="" id="" placeholder="Tìm Kiếm Đơn Hàng"/>
                    </div>
                    <div class="date_1">
                        <label for="startDate">Từ</label>
                        <input type="date" id="startDate" />
                    </div>
                    <div class="date_1">
                        <label for="endDate">Đến</label>
                        <input type="date" id="endDate" />
                    </div>
                    <button onclick="searchByDate()">Tìm kiếm</button>
                    <div class="reset">
                        <button>Reset</button>
                    </div>
                </div>
                <div class="table_cart">
                    <table style="width: 75%">
                        <thead>
                            <tr>
                                <td>Mã Đơn Hàng</td>
                                <td>KHÁCH HÀNG</td>
                                <td>NGÀY ĐẶT</td>
                                <td>TỔNG TIỀN</td>
                                <td>TRANG THAI</td>
                                <td>THAO TÁC</td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="cart_order">
                            <div class="product_order">
                                <div class="ptoduct_title">
                                    <h1>Chi Tiết Đơn Hàng</h1>
                                </div>
                                <div class="closs_order" onclick="closs_order()" ><i class="fa-regular fa-circle-xmark"></i></div>
                                <div class="item_product">
                                    <div class="cart_product">
                                        <div class="cart_item">
                                            
                                        </div>
                                        
                                    </div>

                                    <div class="user_product">
                                        <table>
                                            <thead id="thead">
                                            
                                            </thead>
                                        </table>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
        `;

        right_header.innerHTML = cart_list;
        oder_user();
        pregnancy_status();
    });
}
cart_admin();

function oder_user() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    let tbody = document.getElementsByTagName('tbody')[0];
    console.log(tbody);
    var table_user = '';
    var giaTienChinhThuc = '';
    orders.forEach((list, index) => {
        giaTienChinhThuc = list.Tongtien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

        var indexall = index;
        index++;
        table_user += `
        <tr>
            <td>${list.madon}</td>
            <td>${list.user.name}</td>
            <td>${list.Ngaydat}</td>
            <td>${giaTienChinhThuc}</td>
            <td><button class=" btn_user">${list.Trangthai}</button></td>
            <td><button  class="btn_view" onclick="order_view(${indexall})">Xem</button></td>
        </tr>
        `;
        tbody.innerHTML = table_user;

        let btn_users = document.getElementsByClassName('btn_user');
        Array.from(btn_users).forEach((btn_user) => {
            if (btn_user.textContent === 'Đã xử lý') {
                btn_user.style.background = '#0083d6';
                btn_user.style.color = 'white';
            }
        });
    });
}
function order_view(id) {
    view();
    const orders = JSON.parse(localStorage.getItem('orders'));
    let cart_item = document.getElementsByClassName('cart_item')[0];
    var id_user = orders[id].Trangthai;
    console.log(orders[id].Sanpham);

    var list_product_cart = '';
    var giaTienChinhThuc = '';
    for (var i = 0; i < orders[id].Sanpham.length; i++) {
        var giaTienChinhThuc = orders[id].Sanpham[i].gia.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        list_product_cart += `
       <div class="class_cart">
       <div class="img"><img src="${orders[id].Sanpham[i].hinhanhitem}" alt="" /></div>
       <div class="content_product_all">
           <h4>${orders[id].Sanpham[i].tensp}</h4>
           <p>Không có ghi chú</p>
           <h4>SL:${orders[id].Sanpham[i].soluong}</h4>
       </div>
       <div class="product_total">
           <h4>${giaTienChinhThuc}</h4>
       </div>
       </div>
       `;
        cart_item.innerHTML = list_product_cart;
    }

    var table_threed = document.getElementById('thead');
    var giaTienChinhThuc = orders[id].Tongtien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

    var user_table = `
        <tr>
            <td>Người Nhận</td>
            <td>${orders[id].user.name}</td>
        </tr>
        <tr>
            <td>Số Điện Thoại</td>
            <td>${orders[id].user.phone}</td>
        </tr>
        <tr>
            <td>Thời Gian đặt</td>
            <td>${orders[id].user.date}</td>
        </tr>
        <tr>
            <td>Địa Chỉ Nhận</td>
            <td>${orders[id].user.address}</td>
        </tr>
        <tr>
            <td>Tổng Đơn Hàng</td>
            <td>${giaTienChinhThuc}</td>
        </tr>
        <button id="btn_handle">${orders[id].Trangthai}</button>
        `;
    table_threed.innerHTML = user_table;
    document.getElementById('btn_handle').addEventListener('click', () => {
        var btn_handle = document.getElementById('btn_handle');
        btn_handle.textContent = 'Đã xử lý';
        orders[id].Trangthai = btn_handle.textContent;
        btn_handle.style.background = '#0083d6';
        btn_handle.style.color = 'white';
        localStorage.setItem('orders', JSON.stringify(orders));
        oder_user();
    });
    if (orders[id].Trangthai === 'Đã xử lý') {
        btn_handle.style.background = '#0083d6';
        btn_handle.style.color = 'white';
    }
}

//selec product
function pregnancy_status() {
    let select_user = document.getElementById('select_userall');

    select_user.addEventListener('change', () => {
        if (select_user.value === 'Tất cả') {
            oder_user();
        } else {
            oder_userByStatus(select_user.value);
            console.log(select_user.value);
        }
    });
}

function oder_userByStatus(status) {
    const orders = JSON.parse(localStorage.getItem('orders'));
    let tbody = document.getElementsByTagName('tbody')[0];
    let table_user = '';

    orders.forEach((list, index) => {
        if (list.Trangthai === status) {
            let row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${list.user.name}</td>
                    <td>${list.Ngaydat}</td>
                    <td>${list.Tongtien}</td>
                    <td><button class="btn_user">${list.Trangthai}</button></td>
                    <td><button class="btn_view" onclick="order_view(${index})">Xem</button></td>
                </tr>
            `;
            table_user += row;
        }
    });
    tbody.innerHTML = table_user;
    let btn_users = document.getElementsByClassName('btn_user');
    Array.from(btn_users).forEach((btn_user) => {
        if (btn_user.textContent === 'Đã xử lý') {
            btn_user.style.background = '#0083d6';
            btn_user.style.color = 'white';
        }
    });
}
function searchByDate() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const orders = JSON.parse(localStorage.getItem('orders'));
    var start = new Date(startDate);
    var end = new Date(endDate);

    // Mảng để lưu trữ các ngày trong khoảng từ startDate đến endDate
    var datesInRange = [];

    // Lặp qua mỗi ngày từ startDate đến endDate và lưu vào mảng datesInRange

    console.log(start);

    if (startDate && endDate) {
        const filteredOrders = orders.filter((order) => {
            const orderDate = new Date(order.Ngaydat).getTime();
            const start = new Date(startDate).getTime();
            const end = new Date(endDate).getTime();

            return orderDate >= start && orderDate <= end;
        });

        // Hiển thị kết quả hoặc thực hiện các thao tác khác với filteredOrders
        console.log(filteredOrders);
    } else {
        console.log('Vui lòng nhập cả hai ngày.');
    }
}

function closs_order() {
    let cart_order = document.getElementsByClassName('cart_order')[0];
    cart_order.classList.remove('top');
    const elements = document.querySelectorAll(
        '.table_cart  , .logo, .left_list, .list_product, .selection_food, .pagination-buttons,.header_cart_table',
    );
    elements.forEach((element) => {
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
    });
}

function view() {
    let cart_order = document.getElementsByClassName('cart_order')[0];
    cart_order.classList.add('top');
    setOpacityAndDisableEvents();
}

function setOpacityAndDisableEvents() {
    const elements = document.querySelectorAll(
        '.table_cart  , .logo, .left_list, .list_product, .selection_food, .pagination-buttons,.header_cart_table',
    );
    elements.forEach((element) => {
        element.style.opacity = '0.5';
        element.style.pointerEvents = 'none';
    });
}
