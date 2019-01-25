'use strict';

$(function () {
    ////////////////添加页面//////////////////////////
    var submit = $('#sub');
    submit.on('click', function () {
        var data = new FormData($('form')[0]);
        $.ajax({
            url: '/teadao/index.php/hthome/addAdresss',
            data: data,
            processData: false,
            contentType: false,
            method: 'post',
            success: function success(data) {
                if (data == 'ok') {
                    location.href = '/teadao/index.php/hthome/adress';
                } else if (data == 'error') {
                    alert('添加失败');
                }
            }
        });
        return false;
    });
});