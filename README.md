Simple JavaScript Modal
=======================
A simple script for loading images into a modal view.

### Files
* assets/scripts/modal.js
* assets/styles/modal.css
* assets/images/spinner.gif

### Usage
Include `<script src="dist/assets/scripts/modal.js"></script>` or `<script src="dist/assets/scripts/modal.min.js"></script>`
in your document. Add `modal-link` class to links that you would like to open in a modal. Right now, this script only supports
images. Future support will include ajax loading of external page content.
#### Example:
```html
    <a class="modal-link" href="assets/images/placeimg_640_480_animals.jpg">
        <img src="assets/images/placeimg_640_480_animals.jpg" width="25%" height="25%" alt="">
    </a>
```

#### Data attributes:
`data-modal-content-width` Sets the width of the modal content area.
#### Example:
```html
    <a class="modal-link" data-modal-content-width="640" href="assets/images/placeimg_640_480_animals.jpg">
        <img src="assets/images/placeimg_640_480_animals.jpg" width="25%" height="25%" alt="">
    </a>
```

Modal markup. Place this at the bottom of your page.

```html
    <div class="modal" id="modal">
        <div id="modalContentOuter" class="modal__content">
            <span class="modal__content__close" id="modalClose">&times;</span>
            <div id="modalContent" class="modal__content__ajax"><img width="100" height="100" class="modal__content__spinner" src="assets/images/spinner.gif" alt=""></div>
        </div>
    </div>
```

Styling

* `.modal` controls the appearance of the overlay
* `.modal__content` controls the appearance of the content area
* `.modal__content__close` controls the appearance of the close button
* `.modal__content__spinner` controls the positioning of the ajax spinner

A `modal.scss` file is included for use in other projects.