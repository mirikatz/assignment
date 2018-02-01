$.get('/data')
    .then(function(res) {
        console.log(res)

        var images = res.data;

        images.forEach(function(element, index) {
            var img = element.image_url;
            var item = `
                        <div class="item ${ index === 0 ? 'active' : ''}">
                            <img src=` + img + `>
                        </div>`;
            $('#img-container').append(item);
        })
    })