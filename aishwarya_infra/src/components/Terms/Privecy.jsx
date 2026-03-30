import '../Terms/Privecy.css'

function Privecy() {
    return (
        <>
            <div className='pri-main-cont'>
                
                <h1>Privacy Policy</h1>
                <div className='pri-sec'>

                    <p className='pri-effective'>Effective Date: [Insert Date]</p>
                    <p className='pri-intro'>
                        Welcome to <strong>Aiswarya Laksmi Infra</strong>. We value your privacy and are committed to
                        protecting your personal information. This Privacy Policy outlines how we collect, use, and
                        safeguard your data when you visit our website or interact with our services.
                    </p>

                    <hr className='pri-divider' />

                    {/* Section 1 */}
                    <div className='pri-section'>
                        <h2>1. Information We Collect</h2>
                        <p>We may collect the following information when you use our website:</p>

                        <h3>Personal Information</h3>
                        <ul>
                            <li>Name</li>
                            <li>Phone Number</li>
                            <li>Email Address</li>
                            <li>Property Preferences or Inquiry Details</li>
                        </ul>

                        <h3>Non-Personal Information</h3>
                        <ul>
                            <li>IP Address</li>
                            <li>Browser Type</li>
                            <li>Device Information</li>
                            <li>Pages Visited and Time Spent</li>
                        </ul>
                    </div>

                    <hr className='pri-divider' />

                    {/* Section 2 */}
                    <div className='pri-section'>
                        <h2>2. How We Use Your Information</h2>
                        <p>Your information is used to:</p>
                        <ul>
                            <li>Respond to your inquiries and provide requested information</li>
                            <li>Share project details and updates</li>
                            <li>Improve our website and customer experience</li>
                            <li>Send promotional communications (only with your consent)</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </div>

                    <hr className='pri-divider' />

                    {/* Section 3 */}
                    <div className='pri-section'>
                        <h2>3. Sharing of Information</h2>
                        <p>We respect your privacy and do not sell your personal data.</p>
                        <p>Your information may be shared with:</p>
                        <ul>
                            <li>Trusted service providers (website hosting, CRM tools)</li>
                            <li>Legal authorities when required by law</li>
                        </ul>
                    </div>

                    <hr className='pri-divider' />

                    {/* Section 4 */}
                    <div className='pri-section'>
                        <h2>4. Cookies Policy</h2>
                        <p>Our website uses cookies to enhance your browsing experience. Cookies help us:</p>
                        <ul>
                            <li>Understand user behavior</li>
                            <li>Improve website performance</li>
                            <li>Deliver relevant content</li>
                        </ul>
                        <p>You can disable cookies through your browser settings.</p>
                    </div>

                    <hr className='pri-divider' />

                    {/* Section 5 */}
                    <div className='pri-section'>
                        <h2>5. Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your information from unauthorized
                            access, misuse, or disclosure.
                        </p>
                        <p>However, no method of transmission over the internet is completely secure.</p>
                    </div>

                    <hr className='pri-divider' />

                    {/* Section 6 */}
                    <div className='pri-section'>
                        <h2>6. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access your personal data</li>
                            <li>Request correction or deletion</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>
                    </div>

                    <hr className='pri-divider' />

                    {/* Section 7 */}
                    <div className='pri-section'>
                        <h2>7. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites. We are not responsible for their
                            privacy practices.
                        </p>
                    </div>

                    <hr className='pri-divider' />

                    {/* Section 8 */}
                    <div className='pri-section'>
                        <h2>8. Updates to This Policy</h2>
                        <p>
                            We may update this Privacy Policy periodically. Changes will be posted on this page with
                            an updated effective date.
                        </p>
                    </div>

                    <hr className='pri-divider' />

                    {/* Section 9 */}
                    <div className='pri-section pri-contact'>
                        <h2>9. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
                        <p><strong>Aiswarya Laksmi Infra</strong></p>
                        <p> Email: info@aiswaryalakshmiinfra.com</p>
                        <p> Phone: +91 90000 12345</p>
                        <p> Address:Aiswarya Laksmi Infra,
                            Plot No. 12, 2nd Floor,
                            Madhapur, Hyderabad, Telangana – 500081, India.</p>
                    </div>

                    <hr className='pri-divider' />

                </div>
            </div>
        </>
    )
}

export default Privecy