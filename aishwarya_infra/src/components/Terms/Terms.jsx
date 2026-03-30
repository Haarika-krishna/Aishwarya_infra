import './Terms.css'

function Terms() {
    return (
        <>
            <div className='terms-main-cont'>
                
                <h1>Terms & Conditions</h1>
                <div className='terms-sec'>

                    <p className='terms-effective'>Effective Date: [Insert Date]</p>
                    <p className='terms-intro'>
                        Welcome to <strong>Aiswarya Laksmi Infra</strong>. By accessing or using our website and
                        services, you agree to be bound by the following Terms and Conditions. Please read them
                        carefully before proceeding.
                    </p>

                    <hr className='terms-divider' />

                    {/* Section 1 */}
                    <div className='terms-section'>
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By visiting our website or contacting us through any medium, you acknowledge that you
                            have read, understood, and agree to these Terms and Conditions. If you do not agree,
                            please discontinue use of our website and services.
                        </p>
                    </div>

                    <hr className='terms-divider' />

                    {/* Section 2 */}
                    <div className='terms-section'>
                        <h2>2. About Us</h2>
                        <p>
                            <strong>Aiswarya Laksmi Infra</strong> is a real estate and infrastructure company
                            offering residential and commercial property solutions. Our services include property
                            sales, project development, and customer consultation.
                        </p>
                    </div>

                    <hr className='terms-divider' />

                    {/* Section 3 */}
                    <div className='terms-section'>
                        <h2>3. Use of Website</h2>
                        <p>You agree to use this website only for lawful purposes. You must not:</p>
                        <ul>
                            <li>Use the site in any way that violates applicable laws or regulations</li>
                            <li>Copy, reproduce, or distribute any content without our written permission</li>
                            <li>Attempt to gain unauthorized access to any part of the website</li>
                            <li>Post or transmit harmful, offensive, or misleading content</li>
                            <li>Use any automated tools to scrape or extract data from the website</li>
                        </ul>
                    </div>

                    <hr className='terms-divider' />

                    {/* Section 4 */}
                    <div className='terms-section'>
                        <h2>4. Property Information & Accuracy</h2>
                        <p>
                            All property details, pricing, specifications, and availability displayed on our website
                            are for informational purposes only and are subject to change without prior notice.
                        </p>
                        <p>
                            We strive to ensure accuracy, but we do not guarantee that all information is complete,
                            current, or error-free. Please contact us directly to confirm current details before
                            making any decisions.
                        </p>
                    </div>

                    <hr className='terms-divider' />

                    {/* Section 5 */}
                    <div className='terms-section'>
                        <h2>5. No Guarantee of Availability</h2>
                        <p>
                            Listing a property on our website does not guarantee its availability. All properties
                            are subject to prior sale or reservation. Aiswarya Laksmi Infra reserves the right to
                            withdraw or modify listings at any time.
                        </p>
                    </div>

                    <hr className='terms-divider' />

                    {/* Section 6 */}
                    <div className='terms-section'>
                        <h2>6. Inquiry & Communication</h2>
                        <p>
                            When you submit an inquiry through our website or contact us via phone or email, you
                            consent to being contacted by our team for follow-up and assistance.
                        </p>
                        <p>
                            We will handle your contact information in accordance with our{' '}
                            <strong>Privacy Policy</strong>.
                        </p>
                    </div>

                    <hr className='terms-divider' />

                    {/* Section 7 */}
                    <div className='terms-section'>
                        <h2>7. Intellectual Property</h2>
                        <p>
                            All content on this website — including text, images, logos, graphics, and project
                            details — is the property of <strong>Aiswarya Laksmi Infra</strong> and is protected
                            under applicable intellectual property laws.
                        </p>
                        <p>
                            Unauthorized use, reproduction, or distribution of our content is strictly prohibited.
                        </p>
                    </div>

                    <hr className='terms-divider' />

                    {/* Section 8 */}
                    <div className='terms-section'>
                        <h2>8. Limitation of Liability</h2>
                        <p>
                            Aiswarya Laksmi Infra shall not be held liable for any direct, indirect, incidental,
                            or consequential damages arising from:
                        </p>
                        <ul>
                            <li>Use or inability to use our website</li>
                            <li>Reliance on information provided on the website</li>
                            <li>Unauthorized access to your data</li>
                            <li>Any errors or omissions in content</li>
                        </ul>
                    </div>

                    <hr className='terms-divider' />

                    {/* Section 9 */}
                    <div className='terms-section'>
                        <h2>9. Third-Party Links</h2>
                        <p>
                            Our website may contain links to external websites for your convenience. We do not
                            endorse or take responsibility for the content, privacy practices, or services of
                            any third-party websites.
                        </p>
                    </div>

                    <hr className='terms-divider' />

                    {/* Section 10 */}
                    <div className='terms-section'>
                        <h2>10. Governing Law</h2>
                        <p>
                            These Terms and Conditions shall be governed by and construed in accordance with the
                            laws of <strong>India</strong>. Any disputes arising from the use of our website or
                            services shall be subject to the jurisdiction of courts located in{' '}
                            <strong>[Insert City], India</strong>.
                        </p>
                    </div>

                    <hr className='terms-divider' />

                    {/* Section 11 */}
                    <div className='terms-section'>
                        <h2>11. Amendments</h2>
                        <p>
                            We reserve the right to update or modify these Terms and Conditions at any time without
                            prior notice. Continued use of the website after changes are posted constitutes your
                            acceptance of the revised terms.
                        </p>
                    </div>

                    <hr className='terms-divider' />

                    {/* Section 12 */}
                    <div className='terms-section terms-contact'>
                        <h2>12. Contact Us</h2>
                        <p>For any questions or concerns regarding these Terms and Conditions, please reach out:</p>
                        <p><strong>Aiswarya Laksmi Infra</strong></p>
                        <p> Email: info@aiswaryalakshmiinfra.com</p>
                        <p> Phone: +91 90000 12345</p>
                        <p> Address:Aiswarya Laksmi Infra,
                            Plot No. 12, 2nd Floor,
                            Madhapur, Hyderabad, Telangana – 500081, India.</p>
                    </div>

                    <hr className='terms-divider' />

                </div>
            </div>
        </>
    )
}

export default Terms