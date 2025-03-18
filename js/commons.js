/*-----------------------------------------------------------------------------------*/
/*  Page Header
/*-----------------------------------------------------------------------------------*/
const headerNav = document.getElementById('header')
headerNav.innerHTML = `
            <header id="header" class="clearfix">
                <div class="site-header">
                    <div class="container">
                        <div class="row">
                            <div class="top-header clearfix">
                                <div class="logo col-md-4">
                                    <a href="index.html">
                                        <img src="img/lg_new.jpg" alt="Galore Logistics" height="70" width="235" />
                                    </a>
                                </div>

                                <div class="info col-md-8">
                                    <ul>
                                        <li>
                                            <i class="fa fa-clock-o"></i>
                                            <p>
                                                <span class="heading">Opening Hours</span>
                                                <span>Mon - Fri: 8am - 5pm</span>
                                            </p>
                                        </li>
                                        <li>
                                            <i class="fa fa-phone"></i>
                                            <p>
                                                <span class="heading">Call Us</span>
                                                <span>+233 (0)57 770 7080</span>
                                            </p>
                                        </li>
                                        <li class="last">
                                            <i class="fa fa-envelope"></i>
                                            <p>
                                                <span class="heading">email</span>
                                                <span>info@galorelogistics.com</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>

                                <div class="slide-buttons">
                                    <button id="slide-buttons" class="slide-button icon icon-navicon"></button>
                                </div>
                            </div>

                            <div class="navigation">
                                <div class="main-menu">
                                    <ul class="menu">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li class="has-sub"><a href="services.html">Services</a>
                                            <ul>
                                               <li><a href="cbrokerage.html">Customs Brokerage</a></li>
                                               <li><a href="exportdoc.html">Export Documentation</a></li>
                                               <li><a href="fclcl.html">Confirming House </a></li>
                                               <li><a href="projectcargo.html">Project Cargo</a></li>
                                               <li><a href="prefinance.html">Pre - finance of export</a></li>
											   <li><a href="fnegociation.html">Freight negotiation</a></li>
                                               <li class="last"><a href="advice.html">Cargo insurance advice</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="tracking.html">Tracking</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                  </ul>

                                    <div class="right-section">
                                        <div class="search">
                                            <i class="fa fa-search"></i>
                                        </div>
                                        <div class="quote-link">
                                            <a href="contact.html">Request a Quote</a>
                                        </div>
                                        <div class="search-input">
                                            <input type="text" name="s" placeholder="Type some text in here..." class="untouched">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Menu Mobile
                ============================================= -->
                <nav id="c-menu--slide-right" class="c-menu c-menu--slide-right">
                    <button class="c-menu__close icon icon-close"></button>

                    <div class="search-input">
                        <input type="text" name="s" placeholder="Type some text in here..." class="untouched">
                        <button><i class="fa fa-search"></i></button>
                    </div>

                    <ul class="slide-menu-items">
                        		<li><a href="index.html">Home</a></li>
                                        <li><a href="about.html">About Us</a></li>
                                        <li class="has-sub"><a href="services.html">Services</a>
                                            <ul>
                                               <li><a href="cbrokerage.html">Customs Brokerage</a></li>
                                               <li><a href="exportdoc.html">Export Documentation</a></li>
                                               <li><a href="fclcl.html">Confirming House </a></li>
                                               <li><a href="projectcargo.html">Project Cargo</a></li>
                                               <li><a href="prefinance.html">Pre - finance of export</a></li>
											   <li><a href="fnegociation.html">Freight negotiation</a></li>
                                               <li class="last"><a href="advice.html">Cargo insurance advice</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="tracking.html">Tracking</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                  </ul>

                    <div class="info">
                        <ul>
                            <li>
                                <p>
                                    <span class="heading">Opening Hours</span>
                                    <span>Mon - Sat: 8am - 5pm</span>                                </p>
                            </li>
                            <li>
                                <p>
                                    <span class="heading">Call Us</span>
                                    <span>+233 (0)303 9330 70</span>                                </p>
                            </li>
                            <li class="last">
                                <p>
                                    <span class="heading">email</span>
                                    <span>info@galorelogistics.com</span>                                </p>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div id="slide-overlay" class="slide-overlay"></div>
                <!-- Menu Mobile End -->
            </header>

`

/*-----------------------------------------------------------------------------------*/
/*  Page Footer
/*-----------------------------------------------------------------------------------*/

const footerItem = document.getElementById('footer')

footerItem.innerHTML = `
<footer id="footer" class="wrapper clearfix">

                <div class="container">
                    <div class="row">
                        <div class="footer-wrap row">
                            <!-- WIDGET FOOTER 1 START
                            ============================================= -->
                            <div class="widget-footer col-md-3">
                                <div class="short-desc">
                                    <div class="logo-footer">
                                        <img src="img/intro_lg.png" alt="" />                                    </div>
                                    <p>&quot;Together We Grow&quot; </p>
                                    <p><strong>Customs House Agent License: CHA/839/BOND</strong></p>
                                </div>
                            </div>
                            <!-- WIDGET FOOTER 1 END -->

                            <!-- WIDGET FOOTER 2 START
                            ============================================= -->
                            <div class="widget-footer col-md-3">
                                <div class="recent-post">
                                    <h4 class="title">Tracking</h4>
                                    <div class="footer-content">
                                        <div class="post-item">
                                            <a href="tracking.html">
                                                <div class="post-thumb">
                                                    <img src="img/content/recent-post-thumb-1.jpg" alt="" />
                                                    <div class="overlay"></div>
                                                </div>
                                            </a>
                                            <div class="post-content">
                                                <a href="tracking.html">
                                                    <h4>Track Shipment </h4>
                                                </a>
                                                <p>We always keep you updated. Get updates.</p>
                                                <div class="meta">                                                </div>
                                            </div>
                                        </div>

                                        <div class="post-item">
                                          <a href="tracking.html">
                                          <div class="post-thumb">
                                                  <div class="overlay"></div>
                                                </div>
                                            </a></div>
                                    </div>
                                </div>
                            </div>
                            <!-- WIDGET FOOTER 2 END -->

                            <!-- WIDGET FOOTER 3 START
                            ============================================= -->
                            <div class="widget-footer col-md-3">
                                <div class="contact-footer">
                                    <h4 class="title">Contact Us</h4>
                                    <div class="footer-content">
                                        <div class="contact-section">
                                            <h4>Our Office Address</h4>
                                            <p>G7, Community 3</p>
                                            <p>Near Int. Maritime Hospital, Tema</p>
                                            <p>GQ-178-8009</p>
                                            <p>P.O. Box CS 8932 Tema, Ghana</p>
                                            <p>Tel: +233 (0)57 770 7080</p>
                                            <p>emaiil : info@galorelogistics.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- WIDGET FOOTER 3 END -->

                            <!-- WIDGET FOOTER 4 START
                            ============================================= -->
                            <!-- <div class="widget-footer col-md-3">
                                <div class="buy-now">
                                    <h4 class="title">Mobile App</h4>
                                  <div class="footer-content">
                                    <p>Download our Mobile Applications<img src="img/icon-googleplay.png" width="146" height="53"><img src="img/icon-appstore.png" width="146" height="53"><br>
                                        </p>
                            </div> -->
                            <!-- WIDGET FOOTER 4 END -->
                        </div>
                    </div>
                </div>

                <!-- COPYRIGHT START
                ============================================= -->
                <!-- <div class="copyright text-center">
                    <div class="container">
                        <div class="social-icon">
                            <ul>
                                <li><a href="http://facebook.com/"target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="http://twitter.com/"target="_blank"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="http://instagram.com/"target="_blank"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <p>Copyright 2016. Galore Logistics. Designed by <a href="http://appsolute.pw" target="_blank">appsolute</a></p>
                    </div>
                </div> -->
                <!-- COPYRIGHT END -->

            </footer>
`