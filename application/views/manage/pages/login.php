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
        <meta content="" name="description"/>
        <meta content="" name="author"/>
        <!-- BEGIN GLOBAL MANDATORY STYLES -->
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css"/>
        <link href="<?php echo base_url('statics/manage/assets/global/plugins/font-awesome/css/font-awesome.min.css'); ?>" rel="stylesheet" type="text/css"/>
        <link href="<?php echo base_url('statics/manage/assets/global/plugins/simple-line-icons/simple-line-icons.min.css'); ?>" rel="stylesheet" type="text/css"/>
        <link href="<?php echo base_url('statics/manage/assets/global/plugins/bootstrap/css/bootstrap.min.css'); ?>" rel="stylesheet" type="text/css"/>
        <link href="<?php echo base_url('statics/manage/assets/global/plugins/uniform/css/uniform.default.css'); ?>" rel="stylesheet" type="text/css"/>
        <!-- END GLOBAL MANDATORY STYLES -->
        <!-- BEGIN PAGE LEVEL STYLES -->
        <link href="<?php echo base_url('statics/manage/assets/admin/pages/css/login.css'); ?>" rel="stylesheet" type="text/css"/>
        <!-- END PAGE LEVEL SCRIPTS -->
        <!-- BEGIN THEME STYLES -->
        <link href="<?php echo base_url('statics/manage/assets/global/css/components-rounded.css'); ?>" id="style_components" rel="stylesheet" type="text/css"/>
        <link href="<?php echo base_url('statics/manage/assets/global/css/plugins.css'); ?>" rel="stylesheet" type="text/css"/>
        <link href="<?php echo base_url('statics/manage/assets/admin/layout/css/layout.css'); ?>" rel="stylesheet" type="text/css"/>
        <link href="<?php echo base_url('statics/manage/assets/admin/layout/css/themes/default.css" rel="stylesheet" type="text.css'); ?>" id="style_color"/>
        <link href="<?php echo base_url('statics/manage/assets/admin/layout/css/custom.css'); ?>" rel="stylesheet" type="text/css"/>
        <!-- END THEME STYLES -->
        <link rel="shortcut icon" href="favicon.ico"/>
    </head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="login">
<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
<div class="menu-toggler sidebar-toggler">
</div>
<!-- END SIDEBAR TOGGLER BUTTON -->
<!-- BEGIN LOGO -->
<div class="logo">
	<a href="index.html">
	<img src="<?php echo base_url('statics/manage/assets/admin/layout4/img/logo-big.png'); ?>" alt=""/>
	</a>
</div>
<!-- END LOGO -->
<!-- BEGIN LOGIN -->
<div class="content">
	<!-- BEGIN LOGIN FORM -->
	<form class="login-form" action="" method="post">
		<h3 class="form-title">Login AdminCP</h3>
		<div class="alert alert-danger <?php echo (empty($err)) ? 'display-hide' : ''; ?>">
			<button class="close" data-close="alert"></button>
			<span><?php echo $err; ?></span>
		</div>
		<div class="form-group">
			<label class="control-label visible-ie8 visible-ie9">Email</label>
			<input class="form-control form-control-solid placeholder-no-fix" type="email" autocomplete="off" placeholder="Email" name="email" value="<?php echo $this->input->post('email'); ?>"/>
		</div>
		<div class="form-group">
			<label class="control-label visible-ie8 visible-ie9">Password</label>
			<input class="form-control form-control-solid placeholder-no-fix" type="password" autocomplete="off" placeholder="Password" name="password"/>
		</div>
		<div class="form-actions">
			<button type="submit" class="btn btn-success uppercase" name="submit">Login</button>
			<a href="javascript:;" id="forget-password" class="forget-password">Forgot Password?</a>
		</div>
		<div class="login-options">
			<h4>Or login with</h4>
			<ul class="social-icons">
				<li>
					<a class="social-icon-color facebook" data-original-title="facebook" href="javascript:;"></a>
				</li>
				<li>
					<a class="social-icon-color twitter" data-original-title="Twitter" href="javascript:;"></a>
				</li>
				<li>
					<a class="social-icon-color googleplus" data-original-title="Goole Plus" href="javascript:;"></a>
				</li>
				<li>
					<a class="social-icon-color linkedin" data-original-title="Linkedin" href="javascript:;"></a>
				</li>
			</ul>
		</div>
	</form>
	<!-- END LOGIN FORM -->
</div>
<div class="copyright">
	 2019 © MasonMy. Admin Dashboard Template.
</div>
</body>
</html>
