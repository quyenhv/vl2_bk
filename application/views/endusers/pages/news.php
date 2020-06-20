<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
    <div class="main-content" id="main-content">
    <div class="main-content--inner">
        <div class="main-content__header">
            <ul id="breadcrumb" class="breadcrumb breadcrumb">
                <li itemprop="url" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a
                        href="<?php echo base_url(''); ?>" rel=""><span itemprop="title">Trang chủ </span></a>
                    &gt;
                </li>
                <li itemprop="url" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="<?php echo current_url(); ?>"
                        rel=""><span itemprop="title"><?php echo $box; ?> </span></a>
                </li>
            </ul>
            <h1 class="page-title"><?php echo $box; ?></h1>
        </div>
        <div class="plugin-social-block-p">
            <div id="popup-social-sub">
            </div>
        </div>
        <article class="article-detail">
            <div class="StaticMain">
                <ul class="Icon">
                <?php foreach($allPosts as $post): ?>
                    <li><a href="<?php echo base_url('bai-viet/'.$post->title.'-'.$post->article_id.'.html') ?>"><?php echo $post->title; ?></a> <span data="time" style="float: right;"><?php echo $post->created_at; ?></span></li>
                <?php endforeach; ?>
                </ul>
            </div>
        </article>
    </div>
    <div style="height: 20px;">
        <img src="<?php echo base_url('statics/footer-content.png') ?>" alt="footer-content.png">
    </div>
    <a href="#topbar" id="scrolltop" class="top" title="Top"
        style="position: absolute; top: 480px; left: 955px;">Top</a>
</div>