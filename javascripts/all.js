const aside_bar_toggleBtn = document.querySelector('#toggle_btn');
const body = document.querySelector('body');
const toggle_m_btn = document.querySelectorAll('.toggle_m_btn');
const sidebar_icon = document.querySelectorAll('.bi-caret-right');

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








