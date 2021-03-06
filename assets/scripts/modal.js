(function () {
    const Modal = (e) => {
        let closeModal = function(e) {
            e.preventDefault();
            modal.style.display = 'none';
            modalContentOuter.style = null;
        };

        let openModal = function(e) {
            e.preventDefault();
            let link = this.getAttribute('href');
            let width = this.dataset.modalContentWidth
                ? `${this.dataset.modalContentWidth}px` : false;

            modal.style.display = 'block';

            modalContent.innerHTML = `<img src="${link}" />`;
            if (width) {
                modalContentOuter.style.width = width;
            }
        };

        const modal = document.getElementById('modal');
        if (!modal) {
            throw 'Missing modal element!';
        }

        const modalLink = document.getElementsByClassName('modal-link');
        const modalClose = document.getElementById('modalClose');
        const modalContent = document.getElementById('modalContent');
        const modalContentOuter = document.getElementById('modalContentOuter');

        for (let m in modalLink) {
            if (typeof(modalLink[m]) !== 'object') continue;

            modalLink[m].addEventListener('click', openModal);
        }

        modal.addEventListener('click', closeModal);
        modalClose.addEventListener('click', closeModal);
    };

    document.addEventListener('DOMContentLoaded', Modal);
})();