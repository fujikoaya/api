$(function () {
    $('button').on('click', function () {
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
                var paragraph = $('<img>');
                console.log(paragraph);
                paragraph.attr('src',response.file);
                $('.result').append(paragraph)
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
    })
})