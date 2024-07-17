function changeImage(mainImgId, clickedThumb) {
    let mainImage = document.getElementById(mainImgId);
    let mainImageSrc = mainImage.src;
    mainImage.src = clickedThumb.src;
    clickedThumb.src = mainImageSrc;
}