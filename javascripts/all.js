const aside_bar_toggleBtn = document.querySelector('#toggle_btn');
const body = document.querySelector('body');
const toggle_m_btn = document.querySelectorAll('.toggle_m_btn');
const sidebar_icon = document.querySelectorAll('.bi-caret-right');
const modal = document.querySelector('#del_Modal');
const del_txt = document.querySelector('#del_txt');
const confirm_del = document.querySelector('#confirm_del');

aside_bar_toggleBtn.addEventListener('click', (event) => {
    event.preventDefault();
    body.classList.toggle('aside-bar-toggle');
})

for (i = 0; i < toggle_m_btn.length; i++) {
    toggle_m_btn[i].addEventListener('click', (event) => {
        event.preventDefault();
        toggle_aside(this.document.activeElement);
        console.log(this.document.activeElement);
    })
}

function toggle_aside(item) {
    const index = item.dataset.btnindex;
    item.classList.toggle('active');
    if (sidebar_icon[index].classList.contains('bi-caret-right')) {
        sidebar_icon[index].classList.replace('bi-caret-right', 'bi-caret-down');
    } else {
        sidebar_icon[index].classList.replace('bi-caret-down', 'bi-caret-right');
    }
}


(() => {
    const chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    };
    var randomScalingFactor = function () {
        return Math.round(Math.random() * 2000000);
    };

    const pieCtx = document.getElementById('pie-chart').getContext('2d');
    const barCtx = document.getElementById('bar-chart').getContext('2d');

    const config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    chartColors.red,
                    chartColors.orange,
                    chartColors.yellow,
                    chartColors.green,
                    chartColors.blue,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                '照燒牛肉串',
                '燒烤肥腸',
                '七里香',
                '唐揚雞肉串',
                '香蔥豬肉捲',
            ]
        },
        options: {
            responsive: true
        }
    };
    const barConfig = {
        type: 'bar',
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    chartColors.red,
                    chartColors.orange,
                    chartColors.yellow,
                    chartColors.green,
                    chartColors.blue,
                    chartColors.purple,
                ],
                label: 'Dataset 1'
            }],
            labels: [
                '一月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月',
            ]
        },
        options: {
            responsive: true
        }
    };
    const pieChart = new Chart(pieCtx, config);
    const barChart = new Chart(barCtx, barConfig);
})();

modal.addEventListener('show.bs.modal', (e) => {
    const target_btn = e.relatedTarget;
    const order_id = target_btn.dataset.orderId;
    del_txt.textContent = order_id;
})



