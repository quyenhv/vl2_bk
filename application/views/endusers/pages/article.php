<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    $type = $data->box == 'news' ? 'Tin Tức' : 'Sự kiện';
    $link = $data->box == 'news' ? 'tin-tuc' : 'su-kien';
?>
    <div class="main-content" id="main-content">
    <div class="main-content--inner">
        <div class="main-content__header">
            <ul id="breadcrumb" class="breadcrumb breadcrumb">
                <li itemprop="url" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a
                        href="<?php echo base_url(''); ?>" rel=""><span itemprop="title">Trang chủ </span></a>
                    &gt;
                </li>
                <li itemprop="url" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
                <a href="<?php echo base_url($link); ?>"
                        rel=""><span itemprop="title"><?php echo $type; ?> </span></a>
                        &gt;
                </li>
                <li itemprop="url" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="<?php echo current_url(); ?>"
                        rel=""><span itemprop="title"><?php echo $data->title; ?> </span></a>
                </li>
            </ul>
            <h1 class="page-title"><?php echo $data->title; ?></h1>
        </div>
        <div class="plugin-social-block-p">
            <div id="popup-social-sub">
            </div>
        </div>
        <article class="article-detail">
        <?php echo $data->content; ?>
            
        </article>
    </div>
    <div style="height: 20px;">
        <img src="<?php echo base_url('statics/footer-content.png') ?>" alt="footer-content.png">
    </div>
    <a href="#topbar" id="scrolltop" class="top" title="Top"
        style="position: absolute; top: 480px; left: 955px;">Top</a>
</div>