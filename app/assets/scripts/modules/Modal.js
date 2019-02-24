import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    // clicking open modal openModalButton

    this.openModalButton.click(this.openModal.bind(this));
    // clicking the x close openModalButton

    this.closeModalButton.click(this.closeModal.bind(this));
    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));

  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }
  closeModal() {
    this.modal.removeClass("modal--is-visible");
    return false;
  }
  keyPressHandler(e) {
    if (e.keyCode == 27 ) {
      this.closeModal();
    }
  }
}

export default Modal;
