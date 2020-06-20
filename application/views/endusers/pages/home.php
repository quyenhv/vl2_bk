<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
                        <main>
                            <section class="banner">
                                <div id="banner-event" class="banner-event">
                                    <ul class="banner-event__list">
                                        <li><a href="javascript:void(0);" 
                                                onclick="ga('send', 'event', 'Event Header', 'position 2', 'Bi Kip Hanh Tau', 1);"><img
                                                    src="<?php echo base_url('statics/img.zing.vn/upload/vltkm/source/thumb/616c983cfb2f09b03d8ee63218aa52c3-ban-1.jpg') ?>"
                                                    alt="Bi Kip Hanh Tau"></a></li>
                                        <li><a href="javascript:void(0);" 
                                                onclick="ga('send', 'event', 'Event Header', 'position 2', 'Bi Kip Hanh Tau', 1);"><img
                                                    src="<?php echo base_url('statics/img.zing.vn/upload/vltkm/source/thumb/616c983cfb2f09b03d8ee63218aa52c3-ban-1.jpg') ?>"
                                                    alt="Bi Kip Hanh Tau"></a></li>
                                    </ul>
                                    <div class="banner-event__control jcarousel-pagination"></div>
                            </section>
                            <section class="posts">
                                <ul class="posts__tab" id="posts__tab">
                                    <li><a href="javascript:void(0);"
                                            data-block-name="home-news"
                                            class="bai__viet_tin-tuc active">Tin tức</a></li>
                                    <li><a href="javascript:void(0);"
                                            data-block-name="home-event"
                                            class="bai__viet_su-kien "
                                            >Sự kiện</a></li>
                                    
                                </ul><a class="posts__view" id="posts__view-all"
                                    href="javascript:void(0);" title="Xem thêm">&nbsp</a>
                                    <style>
                                        .posts__list .news, .posts__list .event {
                                            display: none;
                                        }
                                        .posts__list .news.active,
                                        .posts__list .event.active
                                        {
                                            display: block;
                                        }
                                    </style>
                                <div id="posts__list">
                                    <ul class="posts__list">
                                        <div class="news active">
                                            
                                            <?php foreach($news as $post): ?>
                                                <li><a class="posts__post-title"
                                                href="<?php echo base_url('bai-viet/'.$post->title.'-'.$post->article_id.'.html') ?>"
                                                title="<?php echo $post->title; ?>"><span><?php echo $post->title; ?> </span><time
                                                datetime="<?php echo $post->created_at; ?>"><?php echo $post->created_at; ?></time></a></li>
                                                <?php endforeach; ?>
                                        </div>
                                        <div class="event">
                                            <?php foreach($event as $post): ?>
                                                <li><a class="posts__post-title"
                                                href="<?php echo base_url('bai-viet/'.$post->title.'-'.$post->article_id.'.html') ?>"
                                                title="<?php echo $post->title; ?>"><span><?php echo $post->title; ?> </span><time
                                                datetime="<?php echo $post->created_at; ?>"><?php echo $post->created_at; ?></time></a></li>
                                                <?php endforeach; ?>
                                        </div>
                                    </ul>
                                </div>
                            </section>
                        </main>