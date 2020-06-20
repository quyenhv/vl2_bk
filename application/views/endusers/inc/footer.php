<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
?>
                        <style type="text/css">
                            .char .char-cont li a {
                               display: none;
                           }

                           .char .char-tab .swiper-slide.tab-19 {
                               height: 41px;
                               width: 32px;
                               background-image: url(//img.zing.vn/upload/vltkm/source/class/2019_06/icon-doanthi-off.png);
                               background-repeat: no-repeat;
                           }

                           .char .char-tab .swiper-slide.tab-19:hover,
                           .char .char-tab .swiper-slide.tab-19.swiper-slide-duplicate-active,
                           .char .char-tab .swiper-slide.tab-19.swiper-slide-active {
                               height: 41px;
                               width: 32px;
                               background-image: url(//img.zing.vn/upload/vltkm/source/class/2019_06/icon-doanthi.png);
                               background-repeat: no-repeat;
                           }

                           .char .char-tab .swiper-slide.tab-20 {
                               height: 41px;
                               width: 32px;
                               background-image: url(//img.zing.vn/upload/vltkm/source/class/2019_06/icon-20_off.png);
                               background-repeat: no-repeat;
                           }

                           .char .char-tab .swiper-slide.tab-20:hover,
                           .char .char-tab .swiper-slide.tab-20.swiper-slide-duplicate-active,
                           .char .char-tab .swiper-slide.tab-20.swiper-slide-active {
                               height: 41px;
                               width: 32px;
                               background-image: url(//img.zing.vn/upload/vltkm/source/class/2019_06/icon-20_on.png);
                               background-repeat: no-repeat;
                           }

                           .char .char-tab .swiper-slide.tab-21 {
                               height: 41px;
                               width: 32px;
                               background-image: url(//img.zing.vn/upload/vltkm/source/News/News/Block-Char/icon-21-off.png);
                               background-repeat: no-repeat;
                           }

                           .char .char-tab .swiper-slide.tab-21:hover,
                           .char .char-tab .swiper-slide.tab-21.swiper-slide-duplicate-active,
                           .char .char-tab .swiper-slide.tab-21.swiper-slide-active {
                               height: 41px;
                               width: 32px;
                               background-image: url(//img.zing.vn/upload/vltkm/source/News/News/Block-Char/icon-21.png);
                               background-repeat: no-repeat;
                           }

                          
                       </style>
                    </div>
                </div>
                
            </div>
            <footer>
                <div class="copyright"><a href="#" class="logo-vng"></a><a href="#" class="logo-ksoft"></a><a href="#"
                        class="logo-seasun"></a>
                    <p class="text">Bản quyền trò chơi thuộc công ty Kingsoft. 
                            <br />
                            VTK2.VN Miễn phí  <br /> </p>
                </div>
            </footer>
        </div>
    </div>
    
    <div id="thewindowbackground"></div>
    
    <script type="text/javascript">
        var domain = "//vltkm.zing.vn";
    </script>
    <script type="text/javascript" src="<?php echo base_url('statics/img.zing.vn/products/vltkm/skin-2016/js/skin-homepage-v9.js'); ?>"></script>
    <script type="text/javascript" src="//img.zing.vn/products/vltkm/skin-2016/js-full/swiper.js"></script>
    <script type="text/javascript" src="//img.zing.vn/products/vltkm/skin-2016/js-full/common.js"></script>
    <script>
        $(document).ready(function () {

            $('.toggle').click(function () {
                if ($(this).hasClass('close')) {
                    //$(this).attr('onclick',trackClose);
                    ga('send', 'event', 'Sidebar Right New', 'Close', 'Mainsite', 1);
                } else {
                    ga('send', 'event', 'Sidebar Right New', 'Open', 'Mainsite', 1);
                    //$(this).attr('onclick',trackOpen);
                }
            });
        });
    </script>
    <!-- Google Code for Remarketing Tag -->
    <script type="text/javascript">
        /* <![CDATA[ */
        var google_conversion_id = 871341485;
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
            /* ]]> */
    </script>
    <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script><noscript>
        <div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt=""
                src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/871341485/?guid=ON&amp;script=0" />
        </div>
    </noscript>

    <script>
        $(document).ready(() => {
            $.get("<?php echo base_url('statics/social.txt'); ?>", function(data) {
                renderSocialLink(data);
            }, 'text');
            $('.bai__viet_su-kien').click(() => {
                if($('.bai__viet_su-kien').hasClass('active')) {
                    return;
                }
                $('.posts__tab li a.active').removeClass('active');
                $('.bai__viet_su-kien').addClass('active');
                $('.posts__list .active').removeClass('active');
                $('.posts__list .event').addClass('active');
            });
            $('.bai__viet_tin-tuc').click(() => {
                
                if($('.bai__viet_tin-tuc').hasClass('active')) {
                    return;
                }
                $('.posts__tab li a.active').removeClass('active');
                $('.bai__viet_tin-tuc').addClass('active');
                $('.posts__list .active').removeClass('active');
                $('.posts__list .news').addClass('active');
            });
            jQuery("#popup-social-home").remove();

            // $('.main-post').load('./content.html');
            $('#posts__view-all').click(() => {
              let news = '<?php echo base_url('tin-tuc'); ?>';
              let event = '<?php echo base_url('su-kien'); ?>';
              if($('.bai__viet_tin-tuc').hasClass('active')) {
                window.location.href = news;
              } else {
                window.location.href = event;
              }
            })
        })
        function callDataPost(nameFile) {
            $.get(nameFile, function(data) {
                $('.posts__list').empty();
                $('.posts__list').append(renderTinTuc(data));
            }, 'text');
        }
        function renderTinTuc(data) {
            var lines = data.split('\n');
            lines.shift()
            let fivePostNew = '';
            for(let line = (lines.length -1); line > (lines.length - 6); line--){
                let link = lines[line].split('->');
                fivePostNew += oneLinePost(link[0], link[1], link[2]);
            }
            return fivePostNew;
        }
        function oneLinePost(title, link, time) {
            return `<li><a class="posts__post-title"
                    href="${link}"
                    title="${title}"><span>${title} </span><time
                    datetime="${time}">${time}</time></a></li>`;
        }
        function renderSocialLink(data) {
            var lines = data.split('\n');
            for(var line = 1; line < lines.length; line++){
                let link = lines[line].split('->')[1];
                switch(line) {
                    case 1://Trang Chủ
                        $('.page-header__logo').attr('href', link)
                        $('.main-nav__home').attr('href', link)
                        
                        break;
                    case 2://Cài đặt ngay
                        $('.game-info__napthe').attr('href', link)
                        break;
                    case 3://Nạp thẻ
                        $('.game-info__tai_ios').attr('href', link)
                        break;
                    case 4://Đăng ký
                        $('.game-info__tai_android').attr('href', link)
                        break;
                    case 5://Quản lí tài khoản
                        $('.game-info__tai_apk').attr('href', link)
                        break;
                    case 6://Facebook Group
                        $('.btn-sub a').eq(1).attr('href', link)
                        break;
                    case 7://Fanpage
                        // $('.page-header__logo').attr('href', link)
                        break;
                }
            }
        }

    </script>
</body>

</html>
