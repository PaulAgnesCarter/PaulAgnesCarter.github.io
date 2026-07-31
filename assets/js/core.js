//-----------------------------------------------------------------------------

const { createApp, ref, computed } = Vue
createApp({
    setup() {
        const isMenuOpened = ref(false)
        const headerColor = ref("black")
        const logoSrc = computed(() => {
            return headerColor.value === "black" ?
            "../assets/images/ui/logo-junesaturn-white.svg"
            : "../assets/images/ui/logo-junesaturn-black.svg"
        })

        return { isMenuOpened, headerColor, logoSrc }
    }
}).mount('#app')

//-----------------------------------------------------------------------------

function goToMain() {
    const page = getCurrentPage();
    if (page === "index") {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }
    else {
        window.location.href = "/index.html";
    }
}

function goTo(page) {
    if (page === "home") {
        page = "index";
    }
    
    if (getCurrentPage() == "index") {
        window.location.href = "./pages/"+page+".html";
    }
    else {
        window.location.href = "./"+page+".html";
    }
}

function getCurrentPage() {
    const pathname = window.location.pathname;
    const segments = pathname.split("/").filter(Boolean);
    let page = segments[segments.length-1] || "index";
    page = page.replace(/\.html$/, "");
    return page;
}