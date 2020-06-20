<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<div class="page-head">
    <!-- BEGIN PAGE TITLE -->
    <div class="page-title">
        <h1>Cấu hình <small>Cấu hình website</small></h1>
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
        Cấu hình
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
                   <i class="icon-settings"></i>Thông tin cấu hình
               </div>
               <!--<div class="tools">
                   <a href="javascript:;" class="collapse">
                   </a>
                   <a href="#portlet-config" data-toggle="modal" class="config">
                   </a>
                   <a href="javascript:;" class="reload">
                   </a>
                   <a href="javascript:;" class="remove">
                   </a>
               </div>-->
           </div>
           <div class="portlet-body form">
               <!-- BEGIN FORM-->
               <form action="" class="form-horizontal" method="POST" enctype="multipart/form-data">
                   <div class="form-body">
                       <h3 class="form-section">Thông tin chính</h3>
                       <div class="form-group">
                           <label class="col-md-3 control-label">Tiêu đề trang web</label>
                           <div class="col-md-4">
                               <input type="text" name="title" value="<?php echo $sys->title; ?>" class="form-control input-circle" placeholder="Nhập nội dung..." >
                           </div>
                       </div>
                       <div class="form-group">
                           <label class="col-md-3 control-label">Từ khóa trang web</label>
                           <div class="col-md-4">
                               <input type="text" name="keywords" value="<?php echo $sys->keywords; ?>" class="form-control input-circle" placeholder="Nhập nội dung...">
                           </div>
                       </div>
                       <div class="form-group">
                           <label class="col-md-3 control-label">Mô tả trang web</label>
                           <div class="col-md-4">
                               <textarea rows="3" name="desc" class="form-control input-circle" placeholder="Nhập nội dung..."><?php echo $sys->desc; ?></textarea>
                           </div>
                       </div>
                       <div class="form-group">
                            <label class="col-md-3 control-label">Trạng thái hệ thống</label>
                            <div class="col-md-4">
                                <select name="is_online" class="form-control input-circle">
                                    <option value="1" <?php echo ($sys->is_online == 1) ? 'selected' : ''; ?>>Hoạt động</option>
                                    <option value="0" <?php echo ($sys->is_online != 1) ? 'selected' : ''; ?>>Bảo trì</option>
                                </select>
                            </div>
                       </div>
                       <div class="form-group">
                           <label class="col-md-3 control-label">Logo trang web</label>
                           <div class="col-md-4">
                               <div class="col-md-6">
                                   <img src="<?php echo base_url($sys->logo); ?>" alt="Chưa cập nhật">
                               </div>
                               <div class="col-md-6">
                                   <input type="file" name="logo" class="form-control input-circle">
                               </div>
                           </div>
                       </div>
                       <div class="form-group">
                           <label class="col-md-3 control-label">Favicon trang web</label>
                           <div class="col-md-4">
                               <div class="col-md-1">
                                   <img src="<?php echo base_url($sys->favicon); ?>" alt="Chưa cập nhật">
                               </div>
                               <div class="col-md-8">
                                   <input type="file" name="favicon" class="form-control input-circle">
                               </div>
                           </div>
                       </div>

                       <h3 class="form-section">Thông tin social</h3>
                       <div class="form-group">
                           <label class="col-md-3 control-label">Link fanpage</label>
                           <div class="col-md-4">
                               <input type="text" name="link_fanpage" value="<?php echo $sys->link_fanpage; ?>" class="form-control input-circle" placeholder="Nhập liên kết..." >
                           </div>
                       </div>
                       <div class="form-group">
                           <label class="col-md-3 control-label">Mô tả Facebook</label>
                           <div class="col-md-4">
                               <textarea rows="3" name="desc_fb" class="form-control input-circle" placeholder="Nhập nội dung..."><?php echo $sys->desc_fb; ?></textarea>
                           </div>
                       </div>
                       <div class="form-group">
                           <label class="col-md-3 control-label">Hình đại diện Facebook</label>
                           <div class="col-md-4">
                               <div class="col-md-6">
                                   <img src="<?php echo base_url($sys->thumb_fb); ?>" alt="Chưa cập nhật">
                               </div>
                               <div class="col-md-6">
                                   <input type="file" name="thumb_fb" class="form-control input-circle">
                               </div>
                           </div>
                       </div>

                      <h3 class="form-section">Thông tin liên kết</h3>
                      <div class="form-group">
                          <label class="col-md-3 control-label">Link tải game</label>
                          <div class="col-md-4">
                              <input type="text" name="link_download" value="<?php echo $sys->link_download; ?>" class="form-control input-circle" placeholder="Nhập liên kết..." >
                          </div>
                      </div>
                      <div class="form-group">
                          <label class="col-md-3 control-label">Link đăng ký</label>
                          <div class="col-md-4">
                              <input type="text" name="link_reg" value="<?php echo $sys->link_reg; ?>" class="form-control input-circle" placeholder="Nhập liên kết..." >
                          </div>
                      </div>
                      <div class="form-group">
                          <label class="col-md-3 control-label">Link nạp thẻ</label>
                          <div class="col-md-4">
                              <input type="text" name="link_charge" value="<?php echo $sys->link_charge; ?>" class="form-control input-circle" placeholder="Nhập liên kết..." >
                          </div>
                      </div>
                   </div>
                   <div class="form-actions">
                       <div class="row">
                           <div class="col-md-offset-3 col-md-9">
                               <button type="submit" class="btn btn-circle blue">Hoàn thành cập nhật</button>
                               <a class="btn btn-circle default" href="<?php echo base_url('admin'); ?>">Hủy bỏ</a>
                           </div>
                       </div>
                   </div>
               </form>
           </div>
       </div>
    </div>
</div>
<!-- END PAGE CONTENT-->
