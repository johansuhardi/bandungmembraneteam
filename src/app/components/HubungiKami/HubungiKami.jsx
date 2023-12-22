"use client"

import React, { useState } from 'react';

const HubungiKami = () => {

  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://bmtbandung-membrane-team-id.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();


    return (
        <div className="map">
        
          <center >
            <div  className="text-white text-3xl font-bold">Tempat kami dan informasi kontak</div>
          </center>
          <br />
          <div className="text-white font-bold">Our Location</div>
<div className="aliu">
            <div className="map-responsive">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.589667552925!2d107.49545557499565!3d-6.819657093178082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDknMTAuOCJTIDEwN8KwMjknNTIuOSJF!5e0!3m2!1sid!2sid!4v1700399818329!5m2!1sid!2sid" width="300" height="200" loading="lazy" className="googlemaps"></iframe>
            </div>
<p className="text-white font-bold kontakinfo flex flex-col text-xl">Informasi Kontak
<br />
<br />
<p>Bandung Membrane team</p>
<p className="smsuper">Kp. bobojo rt003 rw.002

<p>DS.cimanggu</p>
<p>kec.ngamprah</p>
<p>kab.bandung barat</p>
</p>
<br />
<br />
<p>Nomor HP</p>
<a className="textsm"  href="https://wa.me/+6281320818830">+6281320818830</a>
<br />
<p>Email</p>
 <a className="textsm" href="mailto:taufikhid28117@gmail.com">taufikhid28117@gmail.com</a>
 
 </p>

</div>
 <div id="disqus_thread"></div>

        </div>

    )
}

export default HubungiKami