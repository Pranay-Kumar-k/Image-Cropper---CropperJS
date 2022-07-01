let result = document.querySelector(".result");
cropped = document.querySelector(".cropped");
upload = document.querySelector("#file-input");
save = document.querySelector(".save");

upload.addEventListener("change", (e) => {
    if (e.target.files.length) {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target.result) {
                let img = document.createElement("img");
                img.src = e.target.result;
                result.innerHTML = "";
                result.appendChild(img);
                console.log(result)
                cropper = new Cropper(img, {
                    aspectRatio: 1,
                    viewMode: 0,
                    autoCropArea: 1
                });
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    }
});

save.addEventListener("click", (e) => {
    e.preventDefault();
    let imgSrc = cropper.getCroppedCanvas({}).toDataURL();
    cropped.src = imgSrc;
})