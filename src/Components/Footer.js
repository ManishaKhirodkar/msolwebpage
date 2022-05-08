import React from 'react';

export default function Footer() {
    return (
        <div className="last">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-4">
                        <div className="footeri"> <i className="footerinfo-icn fa fa-map-marker fa-2x icon5" />
                            <p>Shivaji Chauk, Shakti Nagar Jabalpur (M.P.) India 482001</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                        <div className="footeri"> <i className="footerinfo-icn fa fa-user fa-2x icon5" />
                            <p>Mobile - (+91) 9926897955 (+91) 6353045839</p>
                            <p>Email - <a href="mailto:info@msoltechnology.com">info@msoltechnology.com</a></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                        <div className="footeri">
                            <i className="footerinfo-icn fa fa-share-alt fa-2x icon5" />
                            <div className="icn-social">
                                <a href="https://www.facebook.com/MSolTechnologiesltd/"><i className="bi bi-facebook icon6" /></a>
                                <a href="https://twitter.com/MSolTechnologi2"><i className="bi bi-twitter icon6" /></a>
                                <a href="https://www.linkedin.com/company/msol-technologies-pvt-ltd"><i className="bi bi-linkedin icon6" /></a>
                                <a href="https://join.skype.com/XjFcO7sxi4LV"><i className="bi bi-skype icon6" /></a>
                                <a href="https://www.instagram.com/msoltechnologiespvt.ltd/?igshid=5fv8qat9b7iu"><i className="bi bi-instagram icon6" /></a>
                                <a href="https://wa.me/919926897955"><i className="bi bi-whatsapp icon6" /></a>
                            </div>
                        </div>
                        <footer className="footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <p>© MSol Technologies Pvt. Ltd. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

