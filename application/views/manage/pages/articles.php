<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<div class="page-head">
    <div class="page-title">
        <h1>Bài viết <small>Danh sách bài viết</small></h1>
    </div>
</div>
<ul class="page-breadcrumb breadcrumb">
    <li>
        <a href="<?php echo base_url('/'); ?>" target="_blank">Website</a>
        <i class="fa fa-circle"></i>
    </li>
    <li>
        <a href="<?php echo base_url('admin/'); ?>">Quản trị</a>
        <i class="fa fa-circle"></i>
    </li>
    <li>
        <a href="<?php echo base_url('article_manager/'); ?>">Bài viết</a>
        <i class="fa fa-circle"></i>
    </li>
    <li>
        Quản lý bài viết
    </li>
</ul>
<div class="row">
    <div class="col-md-12">
        <div class="portlet box grey-cascade">
           <div class="portlet-title">
               <div class="caption">
                   <i class="icon-list"></i>Danh sách bài viết
               </div>
           </div>
           <div class="portlet-body">
               <div class="table-toolbar">
                   <div class="row">
                       <div class="col-md-6">
                           <div class="btn-group">
                               <a class="btn green" href="<?php echo base_url('article_manager/add'); ?>">
                                   Thêm mới <i class="fa fa-plus"></i>
                                </a>
                           </div>
                       </div>
                   </div>
               </div>
               <table class="table table-striped table-bordered table-hover" id="sample_1">
                   <thead>
                       <tr>
                           <th class="table-checkbox">
                               <input type="checkbox" class="group-checkable" data-set="#sample_1 .checkboxes"/>
                           </th>
                           <th>
                                Tiêu đề
                           </th>
                           <th>
                                Mô tả
                           </th>
                           <th>
                                Danh mục
                           </th>
                           <th>
                                Trạng thái
                           </th>
                           <th>
                                Hot
                           </th>
                           <th>
                                Ngày đăng
                           </th>
                           <th style="text-align:center;">
                                Hành động
                           </th>
                       </tr>
                   </thead>
                   <tbody>
                        <?php
                            foreach($articles as $v):
                                $url = base_url('bai-viet/'.utf8tourl($v->title).'-'.$v->article_id.'.html');
                        ?>
                           <tr class="odd gradeX">
                               <td>
                                   <input type="checkbox" class="checkboxes" value="1"/>
                               </td>
                               <td>
                                   <a href="<?php echo base_url('article_manager/edit/'.$v->article_id); ?>"><?php echo _subword($v->title); ?></a>
                               </td>
                               <td>
                                   <?php echo _subword($v->desc); ?>
                               </td>
                               <td>
                                   <?php
                                        switch ($v->box) {
                                            case 'news':
                                                echo '<span class="label label-sm label-success">Tin tức</span>';
                                                break;
                                            case 'event':
                                                echo '<span class="label label-sm label-warning">Sự kiện</span>';
                                                break;
                                            case 'noti':
                                                echo '<span class="label label-sm label-danger">Thông báo</span>';
                                                break;
                                            case 'tut':
                                                echo '<span class="label label-sm label-info">Hướng dẫn</span>';
                                                break;
                                        }
                                   ?>
                               </td>
                               <td>
                                   <?php echo ($v->showing == 1) ? '<span class="label label-sm label-success">Hiển thị</span>' : '<span class="label label-sm label-warning">Tạm ẩn</span>'; ?>
                               </td>
                               <td>
                                   <input type="checkbox" class="checkboxes" <?php echo ($v->is_hot == 1) ? 'checked' : ''; ?> disabled>
                               </td>
                               <td class="center">
                                    <i><?php echo date('Y-m-d H:i:s', $v->create_at); ?></i>
                               </td>
                               <td align="center">
                                   <a href="<?php echo $url; ?>" target="_blank" class="label label-xs label-info"><i class="fa fa-check-square-o"></i> xem</a>
                                   <a href="<?php echo base_url('article_manager/edit/'.$v->article_id); ?>" class="label label-xs label-warning"><i class="fa fa-edit"></i> sửa</a>
                                   <a onclick="if(confirm('Bạn có chắc chắn?')) return; else return false;" href="<?php echo base_url('article_manager/del/'.$v->article_id); ?>" class="label label-xs label-danger"><i class="fa fa-times"></i> xóa</a>
                               </td>
                           </tr>
                       <?php endforeach; ?>
                   </tbody>
               </table>
           </div>
       </div>
    </div>
</div>
<script>
    var initTable1 = function () {
        var table = $('#sample_1');
        table.dataTable({
            "language": {
                "aria": {
                    "sortAscending": ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                },
                "emptyTable": "Không có dữ liệu nào",
                "info": "Hiển thị _START_ đến _END_ của _TOTAL_ hàng",
                "infoEmpty": "Không tìm thấy dữ liệu",
                "infoFiltered": "(được lọc trong tổng số _MAX_ dữ liệu)",
                "lengthMenu": "Hiển thị _MENU_ dữ liệu",
                "search": "Tìm kiếm:",
                "zeroRecords": "Không tìm thấy kết quả"
            },
            "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

            "columns": [{
                "orderable": false
            }, {
                "orderable": false
            }, {
                "orderable": false
            }, {
                "orderable": true
            }, {
                "orderable": true
            }, {
                "orderable": true
            }, {
                "orderable": true
            }, {
                "orderable": false
            }],
            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 20,
            "pagingType": "bootstrap_full_number",
            "language": {
                "search": "Tìm kiếm: ",
                "lengthMenu": "  _MENU_ dữ liệu",
                "paginate": {
                    "previous":"Prev",
                    "next": "Next",
                    "last": "Last",
                    "first": "First"
                }
            },
            "columnDefs": [{  // set default column settings
                'orderable': false,
                'targets': [0]
            }, {
                "searchable": false,
                "targets": [0]
            }]
        });

        table.find('.group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).attr("checked", true);
                    $(this).parents('tr').addClass("active");
                } else {
                    $(this).attr("checked", false);
                    $(this).parents('tr').removeClass("active");
                }
            });
            jQuery.uniform.update(set);
        });

        table.on('change', 'tbody tr .checkboxes', function () {
            $(this).parents('tr').toggleClass("active");
        });
    }

    initTable1();
</script>
