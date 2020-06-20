<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<div class="page-head">
    <!-- BEGIN PAGE TITLE -->
    <div class="page-title">
        <h1>Sửa bài viết <small>Chỉnh sửa bài viết</small></h1>
    </div>
    <!-- END PAGE TITLE -->
</div>
<!-- END PAGE HEAD -->
<!-- BEGIN PAGE BREADCRUMB -->
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
        Chỉnh sửa
    </li>
</ul>
<!-- END PAGE BREADCRUMB -->
<!-- END PAGE HEADER-->
<?php if(!empty($err)): ?>
    <div class="row">
    	<div class="col-md-12">
    		<div class="note note-danger note-shadow">
    			<h4 class="block">Có lỗi xảy ra</h4>
    			<p><?php echo $err; ?></p>
    		</div>
    	</div>
    </div>
<?php endif; ?>
<?php if(!empty($success)): ?>
    <div class="row">
    	<div class="col-md-12">
    		<div class="note note-success note-shadow">
    			<h4 class="block">Cập nhật thành công</h4>
    			<p><?php echo $success; ?></p>
    		</div>
    	</div>
    </div>
<?php endif; ?>
<!-- BEGIN PAGE CONTENT-->
<div class="row">
    <div class="col-md-12">
        <div class="portlet box green">
           <div class="portlet-title">
               <div class="caption">
                   <i class="icon-settings"></i>Thông tin bài viết
               </div>
           </div>
           <div class="portlet-body form">
               <!-- BEGIN FORM-->
               <form action="" class="form-horizontal" method="POST" enctype="multipart/form-data">
                   <div class="form-body">
                       <h3 class="form-section">Thông tin chính</h3>
                       <div class="form-group">
                           <label class="col-md-2 control-label">Bài viết hot</label>
                           <div class="col-md-4" style="margin-top:8px;">
                               <input type="checkbox" name="is_hot" value="1" class="form-control checkboxes" <?php echo ($data->is_hot == 1) ? 'checked' : ''; ?>>
                           </div>
                       </div>
                       <div class="form-group">
                            <label class="col-md-2 control-label">Danh mục</label>
                            <div class="col-md-4">
                                <select name="box" class="form-control input-circle">
                                    <option value="news" <?php echo ($data->box == 'news') ? 'selected' : ''; ?>>Tin tức</option>
                                    <option value="noti" <?php echo ($data->box == 'noti') ? 'selected' : ''; ?>>Thông báo</option>
                                    <option value="event" <?php echo ($data->box == 'event') ? 'selected' : ''; ?>>Sự kiện</option>
                                    <option value="tut" <?php echo ($data->box == 'tut') ? 'selected' : ''; ?>>Hướng dẫn</option>
                                </select>
                            </div>
                       </div>
                       <div class="form-group">
                           <label class="col-md-2 control-label">Tiêu đề bài viết</label>
                           <div class="col-md-4">
                               <input type="text" name="title" value="<?php echo ($this->input->post('title')) ? $this->input->post('title') : $data->title; ?>" class="form-control input-circle" placeholder="Nhập nội dung..." >
                           </div>
                       </div>
                       <div class="form-group">
                           <label class="col-md-2 control-label">Link facebook</label>
                           <div class="col-md-4">
                               <input type="text" name="link_fb" value="<?php echo ($this->input->post('link_fb')) ? $this->input->post('link_fb') : $data->link_fb; ?>" class="form-control input-circle" placeholder="Nhập nội dung..." >
                           </div>
                       </div>
                       <div class="form-group">
                           <label class="col-md-2 control-label">Mô tả bài viết</label>
                           <div class="col-md-4">
                               <textarea rows="3" name="desc" class="form-control input-circle" placeholder="Nhập nội dung..."><?php echo ($this->input->post('desc')) ? $this->input->post('desc') : $data->desc; ?></textarea>
                           </div>
                       </div>
                       <div class="form-group">
                            <label class="col-md-2 control-label">Trạng thái bài viết</label>
                            <div class="col-md-4">
                                <select name="showing" class="form-control input-circle">
                                    <option value="1" <?php echo ($data->showing == 1) ? 'selected' : ''; ?>>Hiển thị</option>
                                    <option value="0" <?php echo ($data->showing != 1) ? 'selected' : ''; ?>>Tạm ẩn</option>
                                </select>
                            </div>
                       </div>
                       <div class="form-group">
                           <label class="col-md-2 control-label">Hình đại diện (220x140)</label>
                           <div class="col-md-4">
                               <div class="col-md-6">
                                   <img src="<?php echo base_url($data->thumb); ?>" alt="Chưa cập nhật">
                               </div>
                               <div class="col-md-6">
                                   <input type="file" name="thumb" class="form-control input-circle">
                               </div>
                           </div>
                       </div>
                       <div class="form-group">
                           <label class="col-md-2 control-label">Nội dung bài viết</label>
                           <div class="col-md-9">
                               <textarea name="content" id="summernote_1"><?php echo ($this->input->post('content')) ? $this->input->post('content') : $data->content; ?></textarea>
                           </div>
                       </div>
                   </div>
                   <div class="form-actions">
                       <div class="row">
                           <div class="col-md-offset-3 col-md-9">
                               <button type="submit" class="btn btn-circle blue">Hoàn thành chỉnh sửa</button>
                               <a class="btn btn-circle default" href="<?php echo base_url('article_manager/'); ?>">Hủy bỏ</a>
                           </div>
                       </div>
                   </div>
               </form>
           </div>
       </div>
    </div>
</div>
<!-- END PAGE CONTENT-->
<script>
    $(function() {
        $('#summernote_1').summernote({height: 300});
    });
</script>
