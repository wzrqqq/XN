'use strict';

$(function () {
    var tbody = $('#tbody');
    $.ajax({
        url: '/teadao/index.php/hthome/queryUsers',
        method: 'post',
        dataType: 'json',
        success: function success(data) {
            render(tbody, data);
        }
    });
    function render(obj, data) {
        obj.empty();

        var _loop = function _loop(i) {
            var str = '\n                <tr id="' + data[i]['uid'] + '">\n                    <td type="uid">\n                        ' + data[i]['uid'] + '\n                    <td type="uname">\n                        <input type="text" value="' + data[i]['uname'] + '"></td></td>\n                    <td type="upass">\n                        <input type="text" value="' + data[i]['upass'] + '"></td>\n                    </td>\n                    <td width="10%" type="uimg"><img src="' + data[i]['uimg'] + '" alt="" width="70" height="50" /></td>\n                    <td>\n                        <div class="button-group">\n                            <a class="button border-red" href="javascript:void(0)" id="del"><span\n                            class="icon-trash-o"></span> \u5220\u9664</a>\n                        </div>\n                    </td>\n                </tr>\n            ';
            obj.html(function (i, value) {
                return value + str;
            });
        };

        for (var i = 0; i < data.length; i++) {
            _loop(i);
        }
    }
    tbody.on('click', '#del', function () {
        var tr = $(this).closest('tr');
        var ids = tr.attr('id');
        $.ajax({
            url: '/teadao/index.php/hthome/deleteUsers',
            data: { id: ids },
            success: function success(data) {
                if (data == 'ok') {
                    tr.remove();
                } else if (data == 'error') {
                    alert('fail');
                }
            }
        });
    });
    //////////////////////////修改///////////////////////////
    tbody.on('blur', 'input', function () {
        var value = $(this).val();
        var type = $(this).closest('td').attr('type');
        var ids = $(this).closest('tr').attr('id');
        $.ajax({
            url: '/teadao/index.php/hthome/updateUsers',
            data: { id: ids, type: type, value: value },
            success: function success(data) {
                if (data == 'ok') {
                    alert('修改成功');
                } else if (data == 'error') {
                    alert('修改失败');
                }
            }
        });
    });
});