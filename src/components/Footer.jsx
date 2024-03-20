import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="container-fluid bg-primary-subtle ">
        <div className="container">
            <div className="row px-3 d-flex justify-content-between">
                <div className="col-md-3 boxs box1 mt-3 text-center">
                    <h6>אתרי טיבוע וצפרות מובילים בעולם</h6>
                    <a className="text-decoration-none"
                        href="https://birdlife.se/ottenby-fagelstation/ringmarkning-observationer/ringersdigiguide/">מגדיר
                        גיול וחילוף נוצות</a>
                    <br/><a className="text-decoration-none" href="https://www.birds.org.il/he">אתר הצפרות הישראלי</a>
                    <br/><a className="text-decoration-none" href="https://ebird.org/home">ebird</a>
                    <br/><a className="text-decoration-none" href=" https://euring.org/">euring</a>
                    <br/> <a className="text-decoration-none" href="https://cr-birding.org/">European colour-ring Birding</a>
                    <br/> <a className="text-decoration-none" href="https://www.varanger.net/bird-ringing">bird-ringing</a>
                    <br/> <a className="text-decoration-none" href="https://www.usgs.gov/labs/bird-banding-laboratory">Bird
                        Banding Laboratory</a>
                    <br/> <a className="text-decoration-none"
                        href=" https://www.heferbirds.org.il/%D7%A8%D7%90%D7%A9%D7%99">התחנה
                        לחקר ציפורי עמק חפר</a>
                </div>

                <div className="col-md-3 boxs box1 mt-3 text-center">
                    <h6>תחנות טיבוע בישראל</h6>
                    <ul>
                        <li>אגמון החולה</li>
                        <li>ראש ציפור</li>
                        <li>מעגן מיכאל</li>
                        <li><a href="https://m.facebook.com/p/%D7%94%D7%9E%D7%98%D7%A9%D7%99%D7%94-100032362194694/"
                                className="text-decoration-none">המטשיה בכפר מנחם</a></li>
                        <li><a href="https://www.birds.org.il/he/birding-center/%D7%94%D7%AA%D7%97%D7%A0%D7%94-%D7%9C%D7%97%D7%A7%D7%A8-%D7%A6%D7%99%D7%A4%D7%95%D7%A8%D7%99-%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D-%D7%A2-%D7%A9-%D7%A0%D7%99%D7%9C%D7%99-%D7%95%D7%93%D7%95%D7%93"
                                className="text-decoration-none">התחנה לחקר ציפורי ירושלים</a></li>
                        <li><a href="https://eilatbirds.com/" className="text-decoration-none">פארק הצפרות אילת</a></li>
                        <li><a href="https://www.facebook.com/PolegMarsh.Birds/" className="text-decoration-none">תחנת
                                הטיבוע ביצת פולג</a></li>
                        <li> <a href=" https://www.heferbirds.org.il/%D7%A8%D7%90%D7%A9%D7%99"
                                className="text-decoration-none">התחנה לחקר ציפורי עמק חפר</a></li>
                    </ul>
                </div>
                <div className="col-md-3 boxs text-center box2 mt-3">
                    <h6>עקבו אחרינו</h6>
                    <a href="https://youtube.com/@yosefkiat5275?si=PcgO6vG9CSWuN1z9"><i
                            className="fa fa-youtube-play text-danger mx-2" aria-hidden="true"></i></a>
                    <a href="https://www.facebook.com/groups/842571022546000/?locale=he_IL"><i
                            className="fa fa-facebook-square text-primary" aria-hidden="true"></i></a>
                    <br/><br/>
                    האתר נבנה ועוצב ע''י: goldcrast (c)
                    <br/> <br/>
                    <a href="about.html" className="text-decoration-none">אודות </a>|
                    <a href="contact_us.html" className="text-decoration-none"> צור קשר</a>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer