function Modal(movie) {
  this.element = undefined;
  this.movieData = movie;

  this.render = function () {
    this.element = document.createElement("div");
    this.element.classList.add("modal");
    this.element.id = "modal";

    let modalContent = document.createElement("div");
    modalContent.classList.add("modal__content");

    let modalImage = document.createElement("img");
    modalImage.classList.add("modal__backdrop");
    modalImage.setAttribute("src", `https://image.tmdb.org/t/p/original${this.movieData.backdrop}`);

    let modalInformations = document.createElement("div");
    modalInformations.classList.add("modal__informations");

    let modalHeader = document.createElement("div");
    modalHeader.classList.add("modal__header");

    let modalTitle = document.createElement("h2");
    modalTitle.appendChild(document.createTextNode(this.movieData.title));
    modalTitle.classList.add("modal__title");

    let modalDirector = document.createElement("h3");
    modalDirector.appendChild(
      document.createTextNode(
        this.movieData.releaseYear +
          (this.movieData.type == "movies" ? ` - ${this.movieData.directorName}` : "")
      )
    );
    modalDirector.classList.add("modal__director");

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(modalDirector);

    let modalDivider = document.createElement("div");
    modalDivider.classList.add("modal__divider");

    let modalOverview = document.createElement("p");
    modalOverview.classList.add("modal__overview");
    modalOverview.appendChild(document.createTextNode(this.movieData.overview));

    let modalFooter = document.createElement("div");
    modalFooter.classList.add("modal__footer");

    let modalDuration = document.createElement("span");
    modalDuration.classList.add("movie__duration");

    let modalDurationIcon = document.createElement("span");
    modalDurationIcon.classList.add("material-symbols-outlined");
    modalDurationIcon.classList.add("movie__duration-icon");
    modalDurationIcon.innerText = "schedule";

    modalDuration.appendChild(modalDurationIcon);
    modalDuration.appendChild(
      document.createTextNode(
        this.movieData.runtime + (this.movieData.type == "movies" ? "min" : " EPs")
      )
    );

    let modalCategories = document.createElement("div");
    modalCategories.classList.add("modal__categories");

    this.movieData.genres.forEach((genre) => {
      let modalCategory = document.createElement("span");
      modalCategory.classList.add("modal__category");
      modalCategory.appendChild(document.createTextNode(genre));

      modalCategories.appendChild(modalCategory);
    });

    modalFooter.appendChild(modalDuration);
    modalFooter.appendChild(modalCategories);

    modalInformations.appendChild(modalHeader);
    modalInformations.appendChild(modalDivider);
    modalInformations.appendChild(modalOverview);
    modalInformations.appendChild(modalFooter);

    let modalClose = document.createElement("a");
    modalClose.id = "modal__close";
    modalClose.classList.add("modal__close");

    let iconClose = document.createElement("span");
    iconClose.classList.add("material-symbols-outlined");
    iconClose.classList.add("modal__close-icon");
    iconClose.appendChild(document.createTextNode("close"));

    modalClose.appendChild(iconClose);

    modalClose.addEventListener("click", this.closeModal);

    modalContent.appendChild(modalImage);
    modalContent.appendChild(modalInformations);
    modalContent.appendChild(modalClose);
    this.element.appendChild(modalContent);

    document.body.appendChild(this.element);

    document.body.classList.toggle("body__modal-opened");
    this.element.style.top = document.body.scrollTop;
  };

  this.closeModal = () => {
    document.body.removeChild(this.element);
    document.body.classList.toggle("body__modal-opened");
  };
}
