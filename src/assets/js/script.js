window.addEventListener('load', function () {
    AOS.init({
        disable: function () {
            return window.innerWidth < 1024;
        }
    });
});
