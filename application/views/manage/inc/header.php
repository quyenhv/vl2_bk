<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="vi">
    <head>
        <meta charset="utf-8"/>
        <title><?php echo $this->meta->Get('_TITLE'); ?></title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta http-equiv="Content-type" content="text/html; charset=utf-8">

        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css">
        <?php $this->stml->RenderCSS(); ?>
        <script>
            var BASE_URL = '<?php echo base_url(); ?>';
        </script>
        <?php $this->stml->RenderJS(); ?>
    </head>
    <body class="page-header-fixed page-sidebar-closed-hide-logo">
    <!-- BEGIN HEADER -->
    <div class="page-header navbar navbar-fixed-top">
    	<!-- BEGIN HEADER INNER -->
    	<div class="page-header-inner">
    		<!-- BEGIN LOGO -->
    		<div class="page-logo">
    			<a href="<?php echo base_url('admin/'); ?>">
                   <img src="<?php echo base_url('statics/manage/assets/admin/layout4/img/logo-light.png'); ?>" alt="logo" class="logo-default"/>
    			</a>
    			<div class="menu-toggler sidebar-toggler">
    			</div>
    		</div>
    		<!-- END LOGO -->
    		<!-- BEGIN RESPONSIVE MENU TOGGLER -->
    		<a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
    		</a>
    		<!-- END RESPONSIVE MENU TOGGLER -->
    		<!-- BEGIN PAGE ACTIONS -->
    		<!-- DOC: Remove "hide" class to enable the page header actions -->
    		<!--<div class="page-actions">
    			<div class="btn-group">
    				<button type="button" class="btn red-haze btn-sm dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
    				<span class="hidden-sm hidden-xs">Actions&nbsp;</span><i class="fa fa-angle-down"></i>
    				</button>
    				<ul class="dropdown-menu" role="menu">
    					<li>
    						<a href="javascript:;">
    						<i class="icon-docs"></i> New Post </a>
    					</li>
    					<li>
    						<a href="javascript:;">
    						<i class="icon-tag"></i> New Comment </a>
    					</li>
    					<li>
    						<a href="javascript:;">
    						<i class="icon-share"></i> Share </a>
    					</li>
    					<li class="divider">
    					</li>
    					<li>
    						<a href="javascript:;">
    						<i class="icon-flag"></i> Comments <span class="badge badge-success">4</span>
    						</a>
    					</li>
    					<li>
    						<a href="javascript:;">
    						<i class="icon-users"></i> Feedbacks <span class="badge badge-danger">2</span>
    						</a>
    					</li>
    				</ul>
    			</div>
    		</div>-->
    		<!-- END PAGE ACTIONS -->
    		<!-- BEGIN PAGE TOP -->
    		<div class="page-top">
    			<div class="top-menu">
    				<ul class="nav navbar-nav pull-right">
    					<li class="separator hide">
    					</li>
    					<li class="dropdown dropdown-user dropdown-dark">
    						<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
    						<span class="username username-hide-on-mobile"><?php echo $user->full_name; ?></span>
    						<!-- DOC: Do not remove below empty space(&nbsp;) as its purposely used -->
    						<img class="img-circle" src="<?php echo base_url('statics/manage/assets/admin/layout4/img/avatar9.jpg'); ?>"/>
    						</a>
    						<ul class="dropdown-menu dropdown-menu-default">
    							<li>
    								<a href="#">
    								<i class="icon-user"></i> Thông tin cá nhân </a>
    							</li>
    							<li class="divider">
    							</li>
    							<li>
    								<a href="<?php echo base_url(); ?>" target="_blank">
    								<i class="icon-lock"></i> Xem website </a>
    							</li>
    							<li>
    								<a href="<?php echo base_url('auth/logout'); ?>">
    								<i class="icon-key"></i> Đăng xuất </a>
    							</li>
    						</ul>
    					</li>
    					<!-- END USER LOGIN DROPDOWN -->
    				</ul>
    			</div>
    			<!-- END TOP NAVIGATION MENU -->
    		</div>
    		<!-- END PAGE TOP -->
    	</div>
    	<!-- END HEADER INNER -->
    </div>
    <!-- END HEADER -->
    <div class="clearfix">
    </div>
    <!-- BEGIN CONTAINER -->
    <div class="page-container">
    	<!-- BEGIN SIDEBAR -->
    	<div class="page-sidebar-wrapper">
    		<div class="page-sidebar navbar-collapse collapse">
    			<ul class="page-sidebar-menu " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style="min-height: 750px;">
    				<li <?php echo ($class == 'admin' && $method == 'index') ? 'class="active"' : ''; ?>>
    					<a href="<?php echo base_url('admin/'); ?>">
                            <i class="icon-home"></i>
                            <span class="title">Bảng điều khiển</span>
    					</a>
    				</li>
    				<li <?php echo ($class == 'article_manager') ? 'class="active"' : ''; ?>>
    					<a href="javascript:;">
        					<i class="icon-docs"></i>
        					<span class="title">Bài viết</span>
        					<span class="arrow "></span>
    					</a>
    					<ul class="sub-menu">
    						<li <?php echo ($class == 'article_manager' && $method == 'index') ? 'class="active"' : ''; ?>>
    							<a href="<?php echo base_url('article_manager/'); ?>">
    							<i class="icon-list"></i> Danh sách</a>
    						</li>
    						<li <?php echo ($class == 'article_manager' && $method == 'add') ? 'class="active"' : ''; ?>>
    							<a href="<?php echo base_url('article_manager/add'); ?>">
    							<i class="icon-plus"></i> Thêm mới</a>
    						</li>
    					</ul>
    				</li>
    				<!--<li <?php echo ($class == 'user_manager') ? 'class="active"' : ''; ?>>
    					<a href="javascript:;">
        					<i class="icon-users"></i>
        					<span class="title">Thành viên</span>
        					<span class="arrow "></span>
    					</a>
    					<ul class="sub-menu">
    						<li <?php echo ($class == 'user_manager' && $method == 'index') ? 'class="active"' : ''; ?>>
    							<a href="#">
    							<i class="icon-list"></i> Danh sách</a>
    						</li>
    						<li <?php echo ($class == 'user_manager' && $method == 'add') ? 'class="active"' : ''; ?>>
    							<a href="#">
    							<i class="icon-plus"></i> Thêm mới</a>
    						</li>
    					</ul>
    				</li>-->
    				<li <?php echo ($class == 'admin' && $method == 'sys') ? 'class="active"' : ''; ?>>
    					<a href="<?php echo base_url('admin/sys'); ?>">
                            <i class="icon-settings"></i>
                            <span class="title">Cấu hình hệ thống</span>
    					</a>
    				</li>
    			</ul>
    		</div>
    	</div>
    	<div class="page-content-wrapper">
    		<div class="page-content">
    			<div class="modal fade" id="portlet-config" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    				<div class="modal-dialog">
    					<div class="modal-content">
    						<div class="modal-header">
    							<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>
    							<h4 class="modal-title">Modal title</h4>
    						</div>
    						<div class="modal-body">
    							 Widget settings form goes here
    						</div>
    						<div class="modal-footer">
    							<button type="button" class="btn blue">Save changes</button>
    							<button type="button" class="btn default" data-dismiss="modal">Close</button>
    						</div>
    					</div>
    					<!-- /.modal-content -->
    				</div>
    				<!-- /.modal-dialog -->
    			</div>
    			<!-- /.modal -->
