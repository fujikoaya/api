$(function () {
    let list = ['「大吉」 <p>非常に良い一日でしょう</p>',
                '「中吉」 <p>素敵な一日でしょう</p>',
                 '「小吉」　<p>良い一日でしょう</p>',
                  '「吉」 <p>平凡な一日でしょう</p>',
                   '「区」 <p>猫と戯れましょう</p>'];
    $('button').on('click', function () {
        let random = Math.floor(Math.random() * list.length);
        $('.result').append(list[random]);
        $('.result')

        // console.log('tete');
        // AJAXの書き方
        $.ajax({
            url: 'https://aws.random.cat/meow', //アクセスするURL
            type: 'get', //post or get
            cache: false,        //cacheを使うか使わないかを設定
            dataType: 'json',     //data type script・xmlDocument・jsonなど
            // data: data,           //アクセスするときに必要なデータを記載      
        })
            .done(function (response) {
                console.log(response);
                console.log(response.file);
                //通信成功時の処理
                // var paragraph = $('<img>');
                // console.log(paragraph);
                // paragraph.attr('src', response.file);
                var template = `<p>${list[random]}</p>
                <img src="${response.file}" alt="">`
                $('.result').html(template);
                $(window).scrollTop(600);

                //成功したとき実行したいスクリプトを記載
            })
            .fail(function (xhr) {
                //通信失敗時の処理
                //失敗したときに実行したいスクリプトを記載
            })
            .always(function (xhr, msg) {
                //通信完了時の処理
                //結果に関わらず実行したいスクリプトを記載
            });
    });



})

