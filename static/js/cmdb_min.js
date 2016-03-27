/**
 * Created by jhwangyl2 on 2016/3/4.
 */
$(function(){
    var td = $('#table_thread tr td');
    var lists= [];
    $.each(td,function(){
        if ($(this).attr('n') == 'sn'){
            lists.push($(this))
        }
    });
    var a = 1;
    $(lists).each(function(i,v){
        v.text(a);
        a += 1;
    });

});

function ChangeAll(th){
    var cb = $('#table_thread tr td :checkbox');
    $(cb).each(function(){
        var status = $(this).prop('checked');
        if( status == false) {
            $(this).prop('checked', true)
        }
    });
}

function ReverserMode(th){
    var cb = $('#table_thread tr td :checkbox');
    $(cb).each(function(){
        var status = $(this).prop('checked');
        if( status == true) {
            $(this).prop('checked', false)
        }else{
            $(this).prop('checked', true)
        }
    });
}

function CancleMode(th){
    EditOut();
    var cb = $('#table_thread tr td :checkbox');
    $(cb).each(function(){
        var status = $(this).prop('checked');
        if( status == true) {
            $(this).prop('checked', false)
        }
    });
}

function EditMode(th){
    EditIn(th)
}

function EditIn(th){
    var cb = $('#table_thread tr td :checkbox');
    $(cb).each(function(){
        var status = $(this).prop('checked');
        if (status == true) {
            var td = $(this).parent().siblings();
            $(td).each(function () {
                if ($(this).attr('edit') == 'true') {
                        $(this).html("<input type='text' value=" + $(this).text() + ">");
                        //将编辑模式设置为false防止重复编辑造成数据丢失
                        $(this).attr('edit',false)
                    }
            })
        }
    });
}

function EditOut(){
    //获取所有的checkbox标签
    var cb = $('#table_thread tr td :checkbox');
    //遍历所有的checkbox标签
    $(cb).each(function(){
        //获取checkbox的标签状态
        var status = $(this).prop('checked');
        //判断状态是否为选中状态
        if (status == true) {
            //如果是选中状态
            var td = $(this).parent().siblings();
            $(td).each(function () {
                if ($(this).attr('edit') == 'false') {
                        $(this).html(
                            $(this).children().val()
                        );
                        $(this).attr('edit',true)
                    }
            })
        }
    });
}