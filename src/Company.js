import React from 'react';
import {Link} from 'react-router-dom'
import "./Company.css";

const Company= () => {
    return(
     
     <div className="row Company">
        <h4>Company page</h4>
        <div className="column">
        <Link to="/students"><img src='https://scontent-cdt1-1.cdninstagram.com/vp/12313c27f698256c7745f2d4919127f0/5DB50918/t51.2885-15/e35/s320x320/45430653_171807433763548_6517852917987779529_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&ig_cache_key=MTkwNTI4OTU1Mjg5NDI5NjY5NA%3D%3D.2'width="100%"/></Link>
        <h4>WDI</h4>
        </div>

        <div className="column">
        <Link to="/students"><img src='https://scontent-cdt1-1.cdninstagram.com/vp/a873e29324c42972d80f40b1e0935132/5DE78A3A/t51.2885-15/e35/s320x320/46669326_283934808873245_7158691850572287692_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&ig_cache_key=MTkzNTA3MTM5ODA3MDY0MTQ3NA%3D%3D.2'width="100%"/></Link>
        <h4>Data Analytics</h4>
        </div>

        <div className="column">
        <Link to="/students"><img src='https://scontent-cdt1-1.cdninstagram.com/vp/1c95b033d71dd8e730514d560009f89e/5DEC8ABB/t51.2885-15/e35/s320x320/47275703_474138466444267_3552409469106813310_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&ig_cache_key=MTkyNzA4OTg2ODYyMjgwOTY1OQ%3D%3D.2'width="100%"/></Link>
        <h4>Front End Web Development</h4>
        </div>

        <div className="column">
        <Link to="/students"><img src='https://scontent-cdt1-1.cdninstagram.com/vp/a7d64e17d36302b59394ffca9d08778c/5DEC73CD/t51.2885-15/e35/s320x320/46141871_333387484121046_275449471660513401_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&ig_cache_key=MTkyMTk2NTIyNjgwNzY0ODQzMg%3D%3D.2'width="100%"/></Link>
        <h4>Data Science</h4>
        </div>

        <div className="column">
        <Link to="/students"><img src='https://scontent-cdt1-1.cdninstagram.com/vp/b18f811061872beb6b216ac23218dfd9/5DE06F97/t51.2885-15/e35/s320x320/44747237_184470652502367_6471472242336789748_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&ig_cache_key=MTkyMTE3NDA5MDU5Mzc1MjE2OA%3D%3D.2'width="100%"/></Link>
        <h4>Digital Marketing</h4>
        </div>

     </div>
     
    )
}

export default Company; 