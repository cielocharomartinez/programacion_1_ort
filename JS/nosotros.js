$(document).ready(function () {
    const gallery = $('#gallery');
    const imageUrls = [
        '/Img/harina y huevos.jpg',
        '/Img/fideos largos.jpg',
        '/Img/fideos secos.jpg',
        '/Img/ravioles proceso.jpg',
        '/Img/pastalinda.jpg',
        '/Img/masa seca 2.jpg',
        '/Img/FideosconSalsa.jpg',
        '/Img/FIdeosGaleria.jpg',
        '/Img/Mixfideos.jpg',
        '/Img/FideoscoloresGaleria.jpg',
        '/Img/SorrentinosGaleria.jpg',
        '/Img/nioquisGaleria.jpg',
    ];

    imageUrls.forEach(url => {
        const galleryItem = `
                <div class="gallery-item">
                    <img src="${url}" alt="Placeholder Image" class="img-fluid">
                </div>
        `;
        gallery.append(galleryItem);
    });
});