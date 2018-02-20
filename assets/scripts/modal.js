(function (document) {
    document.addEventListener('DOMContentLoaded', function(e) {
        const modalLink = document.getElementsByClassName('modal-link');
        const modal = document.getElementById('modal');
        const modalClose = document.getElementById('modalClose');
        const modalContent = document.getElementById('modalContent');
        const modalContentOuter = document.getElementById('modalContentOuter');

        for (let m in modalLink) {
            if (typeof(modalLink[m]) !== 'object') continue;

            modalLink[m].addEventListener('click', function(e) {
                e.preventDefault();
                let link = this.getAttribute('href');

                modal.style.display = 'block';

                modalContent.innerHTML = `<img src="${link}" />`;
                let newModalWidth = modalContent.getElementsByTagName('img')[0].width;
                modalContentOuter.style.width = `${newModalWidth}px`
            });
        }

        modal.addEventListener('click', close);
        modalClose.addEventListener('click', close);

        function close() {
            modal.style.display = 'none';
            modalContentOuter.style = false;
        }
    });
})(document);