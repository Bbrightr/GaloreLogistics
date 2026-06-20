let connectingBand = document.getElementById('connect-band')
let serviceGrid = document.getElementById('service-grid')
let footerAll = document.getElementById('footer-root')



connectingBand.innerHTML = `<div class="hero-container">
                                                        <div class="cta-text">
                                                        <h2>How may we be of service to you?</h2>
                                                        <p>Connect with us.</p>
                                                    </div>
                                                    <a href="contact.html" class="btn-cta btn-animated">Contact us now</a>
                                                    </div>`


serviceGrid.innerHTML = `<div class="container">
                                                    <div class="cards-grid three-col services-cards">

                                                    <div class="srv-card stagger-item" id="imports-exports">
                                                        <div class="srv-img"><img src="img/trailertruck.jpeg"></div>
                                                        <div class="srv-body">
                                                        <h3>Imports and Exports</h3>
                                                        <p>We handle all aspects of international trade. From procuring agro commodities to managing complex multi-modal shipments, our team ensures seamless import and export operations across the globe.</p>
                                                        <a href="contact.html" class="btn-read">Read more</a>
                                                        </div>
                                                    </div>

                                                    <div class="srv-card stagger-item" id="freight">
                                                        <a href="freightforwarding.html">
                                                        <div class="srv-img"><img src="img/trailertruck.jpeg"></div>
                                                        <div class="srv-body">
                                                        <h3>Freight Forwarding</h3>
                                                        <p>We coordinate and arrange the shipment of goods from origin to final destination. Our freight forwarding service covers ocean, air, and land freight for all commodity types.</p>
                                                        <a href="freightforwarding.html" class="btn-read">Read more</a>
                                                        </div></a>
                                                    </div>

                                                    <div class="srv-card stagger-item" id="haulage">
                                                        <div class="srv-img"><img src="img/trailertruck.jpeg"></div>
                                                        <div class="srv-body">
                                                        <h3>Haulage</h3>
                                                        <p>Our haulage services offer dependable road freight transport across Ghana and West Africa. We move your cargo safely from port to warehouse, factory, or final delivery point.</p>
                                                        <a href="contact.html" class="btn-read">Read more</a>
                                                        </div>
                                                    </div>

                                                    <div class="srv-card stagger-item" id="customs-brokerage">
                                                        <div class="srv-img"><img src="img/trailertruck.jpeg"></div>
                                                        <div class="srv-body">
                                                        <h3>Customs Brokerage</h3>
                                                        <p>As licensed Customs House Agents (CHA/839/BOND), we expertly navigate the complex customs clearance process. We handle documentation, duties, and compliance on your behalf.</p>
                                                        <a href="contact.html" class="btn-read">Read more</a>
                                                        </div>
                                                    </div>

                                                    <div class="srv-card stagger-item" id="export-docs">
                                                        <div class="srv-img"><img src="img/trailertruck.jpeg"></div>
                                                        <div class="srv-body">
                                                        <h3>Export Documentation</h3>
                                                        <p>Proper export documentation is critical for smooth international trade. Our team prepares all necessary export documents, certificates of origin, and customs declarations accurately and on time.</p>
                                                        <a href="contact.html" class="btn-read">Read more</a>
                                                        </div>
                                                    </div>

                                                    <div class="srv-card stagger-item" id="transport">
                                                        <div class="srv-img"><img src="img/trailertruck.jpeg"></div>
                                                        <div class="srv-body">
                                                        <h3>Transport (Trailer Trucks)</h3>
                                                        <p>Our fleet of well-maintained trailer trucks provides reliable heavy-duty transport services. Whether bulk commodities or containerized cargo, we deliver anywhere across the region.</p>
                                                        <a href="contact.html" class="btn-read">Read more</a>
                                                        </div>
                                                    </div>

                                                    </div>
                                                </div>`                                                  



document.getElementById("support-system").innerHTML = `<div class="container">
                                                        <div>
                                                        <h2 class="section-title fade-in-on-scroll">Services that support your logistics</h2>
                                                        <p class="section-sub">There are three most essential services that we consider in order to bring you the best and seamless services.</p>
                                                        </div>
                                                        
                                                        <div class="cards-grid three-col">
                                                        <div class="consider-card stagger-item">
                                                            <div class="consider-icon"><span class="material-symbols-outlined">directions_boat</span></div>
                                                            <div>
                                                            <h3>Carnet</h3>
                                                            <p>A Carnet is an international customs document that provides duty free customs clearance for temporary imports into foreign countries and can simplify and expedite the customs entry.</p>
                                                            </div>
                                                        </div>
                                                        <div class="consider-card highlighted stagger-item">
                                                            <div class="consider-icon"><span class="material-symbols-outlined">package_2</span></div>
                                                            <div>
                                                            <h3>Imports Services</h3>
                                                            <p>Wherever you send your cargo in West Africa and you choose Ghana as your entry port, Galore Logistics has the capability and infrastructure to ensure that your product is delivered.</p>
                                                            </div>
                                                        </div>
                                                        <div class="consider-card stagger-item">
                                                            <div class="consider-icon"><span class="material-symbols-outlined">warehouse</span></div>
                                                            <div>
                                                            <h3>Export Services</h3>
                                                            <p>When you make use of Galore Logistics and export services, you can be assured that we will provide you with quality services. We export cargo of all types.</p>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>`



footerAll.innerHTML = `<div class="footer-container">
                            <div class="footer-brand">
                            <div class="logo">
                                <div class="logo-icon">
                                <img src="img/galore_white.svg" alt="galore logistics logo" onerror="this.style.display='none'"/>
                                </div>
                            </div>
                            <p class="tagline">"Together We Grow"</p>
                            <p class="footer-desc">Experienced with well trained staff in the supply chain management approach to international trade, bringing you the very best of services tailored to meet the specific needs of our clientele.</p>
                            <p class="license">Customs House Agent License: CHA/839/BOND</p>
                            <div class="social-icons">
                                <a href="https://www.facebook.com/galorelogistics" aria-label="Facebook" class="social-link">f</a>
                                <a href="https://x.com/GALORELOGISTICS" aria-label="Twitter" class="social-link">t</a>
                                <a href="https://instagram.com/galorelogistics" aria-label="Instagram" class="social-link">in</a>
                            </div>
                            </div>
                            <div class="footer-col">
                            <h4>NAVIGATE</h4>
                            <ul>
                                <li><a href="index.html" class="footer-link">Home</a></li>
                                <li><a href="services.html" class="footer-link">Services</a></li>
                                <li><a href="about.html" class="footer-link">About</a></li>
                                <li><a href="contact.html" class="footer-link">Contact</a></li>
                            </ul>
                            </div>
                            <div class="footer-col">
                            <h4>OUR SERVICES</h4>
                            <ul>
                                <li><a href="services.html" class="footer-link">Import and Export</a></li>
                                <li><a href="services.html" class="footer-link">Freight Forwarding</a></li>
                                <li><a href="services.html" class="footer-link">Haulage</a></li>
                                <li><a href="services.html" class="footer-link">Customs Brokerage</a></li>
                                <li><a href="services.html" class="footer-link">Export Documentations</a></li>
                                <li><a href="services.html" class="footer-link">Transports (Trailer trucks)</a></li>
                            </ul>
                            </div>
                            <div class="footer-col">
                            <h4>REACH US</h4>
                            <address>
                                <p>Office Address<br/>G7, Community 3<br/>Near Int. Maritime Hospital, Tema</p>
                                <p>GQ-178-8009<br/>P.O. Box CS 8932 Tema, Ghana</p>
                                <p><strong>Tel:</strong> <a href="tel:+233577707077">+233 (0)57 770 7077</a></p>
                                <p><strong>Email:</strong> <a href="mailto:info@galorelogistics.com">info@galorelogistics.com</a></p>
                            </address>
                            </div>
                        </div>
                        <div class="footer-bottom">
                            <p>© 2026 Galore Logistics. All rights reserved.</p>
                        </div>`
