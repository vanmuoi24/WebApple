function statistical() {
    let dataproduct = JSON.parse(localStorage.getItem('products')) || [];
    const orders = JSON.parse(localStorage.getItem('orders'));
    console.log(dataproduct);
    document.getElementById('sum_product').innerHTML = dataproduct.length;

    const totalPrice = dataproduct.reduce((total, currentProduct) => {
        return total + parseFloat(currentProduct.gia);
    }, 0);

    const giaTienChinhThuc = totalPrice.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    document.getElementById('sum_invest').innerHTML = giaTienChinhThuc;

    let tongIndex = 0;
    let tongIndex1 = 0;
    let tongIndex2 = 0;

    dataproduct.forEach((list) => {
        if (list.danhmuc === 'iPhone') {
            tongIndex++;
        }
        if (list.danhmuc === 'Macbook') {
            tongIndex1++;
        }
        if (list.danhmuc === 'iPad') {
            tongIndex2++;
        }
    });
    var tong = 0;
    var sum_product = document.getElementById('sum_product_buy');
    orders.map((list) => {
        list.Sanpham.map((sp) => {
            tong += sp.soluong;
        });
        if (list.Trangthai === 'Đã xử lý') {
            sum_product.innerHTML = tong;
        }
    });
    var tong_all_cart = 0;
    for (var i = 0; i < orders.length; i++) {
        tong_all_cart += orders[i].Tongtien;
        const giaTienChinhThuc = tong_all_cart.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        if (orders[i].Trangthai === 'Đã xử lý') {
            document.getElementById('sum_all_cart').innerHTML = giaTienChinhThuc;
        }
    }

    document.getElementById('iPhone').innerHTML = tongIndex;
    document.getElementById('MacBook').innerHTML = tongIndex1;
    document.getElementById('iPad').innerHTML = tongIndex2;
}
statistical();

document.getElementById('home').addEventListener('click', () => {
    const right_header = document.getElementsByClassName('right_header')[0];

    var statis = `
    <div class="statistical">
        <div class="table_all">
            <div class="warehouse">
                <h3>Thống Kê Sản Phẩm</h3>
                <table>
                    <thead>
                        <tr>
                            <td>Apple</td>
                            <td>Số Lượng</td>
                            <td>Tổng Sản Phẩm</td>
                            <td>Tổng Tiền Đầu Tư</td>
                        </tr>
                        <tr>
                            <td>iPhone</td>
                            <td id="iPhone">10</td>
                            <td rowspan="4" id="sum_product">10000</td>
                            <td rowspan="4" id="sum_invest">10000</td>
                        </tr>

                        <tr>
                            <td>iPad</td>
                            <td id="iPad">10</td>
                        </tr>
                        <tr>
                            <td>MacBook</td>
                            <td id="MacBook">10</td>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="Revenue">
                <div class="text"><h4>Thống Kê Doanh Thu</h4></div>
                <table>
                    <thead>
                        <tr>
                            <td style="width: 200px">Số Sản Phẩm Đã Bán</td>
                            <td>Doanh Thu</td>
                        </tr>
                        <tr>
                            <td id='sum_product_buy'>0</td>
                            <td id="sum_all_cart">0VND</td>
                        </tr>
                    </thead>
                </table>
            </div>
            
            <div class="revenue">
            <div class="text"><h2>Lợi Nhuận Ngày</h2></div>
            <table>
                <thead>
                    
                   
                    
                </thead>
            </table>
        </div>
        </div>
    </div>
    `;
    right_header.innerHTML = statis;
    statistical();
    revenue_date();
});

function revenue_date() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    const thred = document.getElementsByTagName('thead')[2];
    const dateInfo = {};
    orders.forEach((order) => {
        const orderDate = order.Ngaydat;

        if (!dateInfo[orderDate]) {
            dateInfo[orderDate] = { count: 0, revenue: 0 };
        }
        if (order.Trangthai == 'Đã xử lý') {
            dateInfo[orderDate].count++;
            dateInfo[orderDate].revenue += order.Tongtien;
        }
    });

    let sum_date = `
        <tr>
            <td>Ngày Bán</td>
            <td style="width: 200px">Số Đơn Trong Ngày</td>
            <td>Doanh Thu</td>
        </tr>
    `;
    var object_key = Object.keys(dateInfo);
    object_key.forEach((date) => {
        sum_date += `
            <tr>
                <td style="width: 200px">${date}</td>
                <td>${dateInfo[date].count}</td>
                <td>${dateInfo[date].revenue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
            </tr>
        `;
    });

    thred.innerHTML = sum_date;
}

revenue_date();
