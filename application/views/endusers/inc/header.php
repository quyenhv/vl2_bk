<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="shortcut icon" href="//img.zing.vn/products/vltkm/favicon.ico" />
    <meta name="robots" content="index,follow" />
    <meta name="revisit-after" content="1days" />
    <title><?php echo $this->meta->Get('_TITLE'); ?></title>

    <meta name="keywords" content="<?php echo $sys->keywords; ?>" />
    <meta name="description" content="<?php echo $sys->desc; ?>">

    <link rel="icon" href="<?php echo base_url($sys->favicon); ?>">

    <meta property="og:url" content="<?php echo current_url(); ?>" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="<?php echo $this->meta->Get('_TITLE'); ?>" />
    <meta property="og:description" content="<?php echo $sys->desc_fb; ?>" />
    <meta property="og:image" content="<?php echo base_url($sys->thumb_fb); ?>" />
    <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0012/5588.js" async="async"></script>

    <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=462353994155437&ev=PageView&noscript=1" /></noscript>
    <!-- End Facebook Pixel Code -->
    <link rel="stylesheet" media="screen" href="<?php echo base_url('statics/img.zing.vn/products/vltkm/skin-2016/css/skin-homepage-v21.css'); ?>" />
    <style>
        .wrapper-out .wrapper {
            background: url('<?php echo base_url('statics/img.zing.vn/products/vltkm/skin-2016/images/page-header-qctd.jpg'); ?>') no-repeat center top;
        }

        .wrapper-out .wrapper .page-header__clip {
            top: 330px;
            width: 85px;
            left: 750px;
        }
    </style>
    <!--[if lte IE 9]><script type="text/javascript" src="//img.zing.vn/products/vltkm/skin-2016/js-full/lib/modernizr.js"></script>< ![endif]-->
    <style>
        .main-content {
    float: left;
    width: 710px;
    background: url('<?php echo base_url('statics/bg-content-loop.png'); ?>') top left;
}
        .main-content--inner {
            background: transparent url('<?php echo base_url('statics/bg-top-post.png') ?>') no-repeat;
            padding: 20px;
            width: 670px;
            overflow: hidden;
        }
        .main-content--inner .main-content__header {
            height: 70px;
            display: block;
            padding: 20px 0 0;
        }
        article .ContentH4 {
    margin: 0 0 15px 40px;
}
article table {
    margin: 10px auto;
    border-collapse: collapse;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
article table.MyTable thead tr th {
    border: 1px solid #906946;
    background: #a54100;
    color: #fff;
}
article table thead tr th {
    font-weight: bolder;
    padding: 5px 10px;
    text-align: center;
}
article table tbody tr td {
    padding: 3px 5px;
    text-align: inherit;
}
caption, th, td {
    text-align: left;
    font-weight: normal;
    vertical-align: middle;
}
h4 {
    background: url(//img.zing.vn/products/jxfree/skin-11-2015/images/content/icon_h4.png) no-repeat left center;
    clear: both;
    color: #c30;
    font-size: 20px;
    font-weight: bold;
    font-family: Arial;
    line-height: 33px;
    padding-left: 40px;
    margin: 5px 0;
}
article table .HorzCenter {
    text-align: center!important;
}
article table .EvenRow {
    background: #faf3e5;
}
article table.MyTable tbody tr td {
    border: 1px solid #906946;
    color: #494848;
}
ol, ul {
    list-style: none;
}
article ul.Icon li, article ul.icon li {
    background: url(//img.zing.vn/products/jxfree/skin-11-2015/images/content/icon.gif) left 7px no-repeat;
    padding-left: 20px;
    list-style-type: none;
    margin-bottom: 10px;
}
.main-content .main-content--inner .main-content__header h1 {
    font-size: 22px;
    color: #fff;
    display: block;
    font-weight: bold;
    height: 38px;
    line-height: 40px;
    text-shadow: 1px -1px #1e394d;
    padding-left: 50px;
    background: url(//img.zing.vn/products/jxfree/skin-11-2015/images/subpage/title_page.jpg) no-repeat;
}
.main-content .main-content--inner .main-content__header #breadcrumb {
    text-align: left;
    overflow: hidden;
    margin-bottom: 10px;
}
.main-content .main-content--inner .main-content__header #breadcrumb li:last-child {
    font-weight: bold;
}
.main-content .main-content--inner .main-content__header #breadcrumb li {
    display: inline-block;
    color: #611805;
}
.main-content .main-content--inner .main-content__header #breadcrumb li a {
    font-size: 15px;
    text-decoration: none;
    color: #611805;
}
.main-content__header h1 {
    font-size: 22px;
    color: #fff;
    display: block;
    font-weight: bold;
    height: 38px;
    line-height: 40px;
    text-shadow: 1px -1px #1e394d;
    padding-left: 50px;
    background: url(//img.zing.vn/products/jxfree/skin-11-2015/images/subpage/title_page.jpg) no-repeat;
}
.main-content article {
    background: none !important;
    padding: 40px 30px 100px;
    color: #2c221b;
    width: 630px;
    min-height: 680px;
}
    </style>
</head>

<body>
    
    <div id="topbar" style="display: none; height: 30px"></div>
    <div class="Rating Rating_vng_18"></div>
    <div class="wrapper-out">
        <div class="wrapper random_bg">
            <div class="page-header--outter">
                <header class="page-header">
                    <!--block main navigation --><a class="page-header__logo" href="">Logo
                        trang chủ</a>
                        <a class="page-header__clip fancybox"
                        href="#">clip</a>
                    <nav id="main-nav">
                        <ul id="main-nav__list" class="main-nav__list">
                            <li><a class=main-nav__home href="<?php echo base_url(''); ?>" data-active-path=""
                                    target="_self" title="Trang Chủ">Trang chủ</a></li>
                            <li><a class=main-nav__event href="<?php echo base_url('su-kien'); ?>"
                                    data-active-path="" target="_self" title="Sự kiện">Sự kiện</a></li>
                            <li><a class=main-nav__feature href="<?php echo base_url('tin-tuc'); ?>"
                                    data-active-path="" target="_self" title="Tin tức">Cẩm nang</a></li>
                            <li><a class=main-nav__lib href="#"
                                    data-active-path="" title="">Thư viện</a></li>
                            <li><a class=main-nav__social href="https://www.facebook.com/groups/248617763257982/"
                                    data-active-path="" target="_blank" title="Group Facebook">Cộng đồng</a></li>
                            
                        </ul>
                    </nav>
                    <div class="FormSearch">
                        <form method="get" action="#">
                            <div class="input-append span12"><input type="text" class="search-query"
                                    placeholder="Nhập từ khóa tìm kiếm" name="q"><input type="submit" class="BtnSearch"
                                    value="Tìm"></div>
                        </form>
                    </div>
                </header>
            </div>
            <div class="page-main--bot">
                <div class="page-main--top">
                    <div class="page-main">
                        <aside>
                            <!--<style type="text/css">
                                 .wrapper-out .wrapper {
                                    background: url(//img.zing.vn/upload/vltkm/source/News/headermain_1.jpg) no-repeat center top !important;
                                }

                                .wrapper-out .wrapper .page-header__clip {
                                    top: 320px !important;
                                    width: 85px;
                                    left: 450px !important;
                                    display: none;
                                }

                                .game-info__qr {
                                    background: url(//img.zing.vn/upload/vltkms/source/News/Gameapp.jpg) no-repeat;
                                    width: 290px;
                                    height: 190px;
                                }

                                
                            </style>--> 
                            <div class="game-info"><a href="<?php echo base_url('bai-viet/Tải%20game-1.html') ?>"
                                    class="game-info__napthe" title="Tải Game"
                                    onclick="ga('send', 'event', 'Nap the', 'Button Image', 'Homepage', 1);">Tải Game</a><a href="http://m.onelink.me/a21d0c1a" class="game-info__tai_ios"
                                    title="Nạp Thẻ"
                                    onclick="ga('send', 'event', 'Download IOS', 'Button Image', 'Homepage', 1);">Nạp Thẻ</a><a href="http://m.onelink.me/d41c2e5e" class="game-info__tai_android"
                                    title="Đăng Ký"
                                    onclick="ga('send', 'event', 'Download Android', 'Button Image', 'Homepage', 1);">Đăng Ký</a><a href="http://jxm.vcdn.vn/volamtruyenkymobile_ddth.apk"
                                    class="game-info__tai_apk" title="Quản lí tài khoản"
                                    onclick="ga('send', 'event', 'Download APK', 'Button Image', 'Homepage', 1);">Quản lí tài khoản</a></div>
                            <div class="btn-sub"><a href="#"
                                    class="btn-gifcode"
                                    style="background: url('<?php echo base_url('statics/nuttam3.jpg') ?>');">Gifcode</a><a
                                    href="https://www.facebook.com/V%C3%B5-L%C3%A2m-2-Mi%E1%BB%85n-ph%C3%AD-VLTK2-Mi%E1%BB%85n-Ph%C3%AD-111806493869415/" class="btn-fanpage"
                                    style="background: url('<?php echo base_url('statics/nuttam3.jpg') ?>'); background-position: 0 -96px;">Fanpage</a><a
                                    href="#" class="btn-guide"
                                    style="background: url('<?php echo base_url('statics/nuttam3.jpg') ?>'); background-position: 0 -174px;">Hướng
                                    dẫn</a></div>
                        </aside>
