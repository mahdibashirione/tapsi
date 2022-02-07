const toggler = document.querySelector('.nav__toggler')
const nav = document.querySelector('.nav')
toggler.addEventListener("click", e => {
  nav.classList.toggle('nav__expanded')
})

const tabs = document.querySelectorAll('.nav__tab')
const tabContents = document.querySelectorAll('.tab__content')
tabs.forEach(tab => {
  tab.addEventListener('click', e => {
    const targetTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    tabs.forEach(tab => tab.classList.remove('active'))
    tabContents.forEach(tabContents => tabContents.classList.remove('active'))

    tab.classList.add('active')
    targetTabContent.classList.add('active')
  })
});

const accordionTab = document.querySelectorAll('.acordian__header')
accordionTab.forEach(tach => {
  tach.addEventListener("click", e => {
    e.target.parentElement.classList.toggle('acordian-expanded')
  })
})

