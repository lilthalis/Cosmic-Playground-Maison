<script>

/* entrada luxo */
window.addEventListener("load",()=>{
document.body.classList.add("loaded");
});

/* menu */
const menu=document.getElementById("menu");
const open=document.getElementById("openMenu");

open.addEventListener("click",()=>{
menu.classList.toggle("active");
});

</script>