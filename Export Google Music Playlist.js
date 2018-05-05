javascript: (function () {var allsongs=[],outText="",songsToText=function(t,e,l){if(void 0!==t){e=e||!1,l=l||!1;var o=document.querySelector('.gpm-detail-page-header h2[slot="title"]').innerText;l&&console.log("Only selecting liked songs"),"all"!=t||e||console.log("Duration, ratings, and playcount will only be exported with the CSV flag"),outText="",e&&("all"==t?outText="artist,album,title,duration,playcount,rating,rating_interpretation\n":"artist"==t||"artistsong"==t||"artistalbum"==t||"artistalbumsong"==t||console.log("style not defined"));for(var a=0,n={},i=0;i<allsongs.length;i++){var r="",s=allsongs[i].title.replace(/[\n\r!]/g,"").trim();(!l||l&&allsongs[i].rating>=5)&&(e?"all"==t?(r+='"'+allsongs[i].artist.replace(/"/g,'""').trim()+'",',r+='"'+s.replace(/"/g,'""').trim()+'",',r+='"'+allsongs[i].album.replace(/"/g,'""').trim()+'",',r+='"'+allsongs[i].duration.replace(/"/g,'""').trim()+'",',r+='"'+allsongs[i].playcount.replace(/"/g,'""').trim()+'",',r+='"'+allsongs[i].rating.replace(/"/g,'""').trim()+'",',r+='"'+allsongs[i].rating_interpretation.replace(/"/g,'""').trim()+'"'):"artist"==t?r+='"'+allsongs[i].artist.replace(/"/g,'""').trim()+'"':"artistsong"==t?(r+='"'+allsongs[i].artist.replace(/"/g,'""').trim()+'",',r+='"'+s.replace(/"/g,'""').trim()+'"'):"artistalbum"==t?(r+='"'+allsongs[i].artist.replace(/"/g,'""').trim()+'",',r+='"'+allsongs[i].album.replace(/"/g,'""').trim()+'"'):"artistsongalbum"==t?(r+='"'+allsongs[i].artist.replace(/"/g,'""').trim()+'",',r+='"'+s.replace(/"/g,'""').trim()+'"',r+='"'+allsongs[i].album.replace(/"/g,'""').trim()+'",'):console.log("style not defined"):"all"==t?r=allsongs[i].artist+" - "+allsongs[i].album+" - "+s+" [[playcount: "+allsongs[i].playcount+", rating: "+allsongs[i].rating_interpretation+"]]":"artist"==t?r=allsongs[i].artist:"artistalbum"==t?r=allsongs[i].artist+" - "+allsongs[i].album:"artistsong"==t?r=allsongs[i].artist+" - "+s:"artistalbumsong"==t?r=allsongs[i].artist+" - "+allsongs[i].album+" - "+s:console.log("style not defined"),n.hasOwnProperty(r)||(outText=outText+r+"\n",a++,n[r]=!0))}console.log("============================================================="),console.log(outText),console.log("=============================================================");try{downloadCSVFile(o,"text/csv",outText),console.log("Export to CSV succeeded.")}catch(t){console.log(t),console.log("Export to CSV failed. Please type copy(outText) on the console or copy the log output above.")}console.log("Done! "+a+" lines in output. Used "+a+" unique entries out of "+allsongs.length+".")}else console.log("style is undefined.")},scrapeSongs=function(){var t=3e3,e=[],l={},o="";document.querySelector("#mainContainer").scrollTop=0;var a=setInterval(function(){var n=document.querySelectorAll("table.song-table tbody tr.song-row");if(n.length>0){for(var i={index:-1,title:-1,duration:-1,artist:-1,album:-1,playcount:-1,rating:-1},r=0;r<n[0].childNodes.length;r++)i.index="index"==n[0].childNodes[r].getAttribute("data-col")?r:i.index,i.title="title"==n[0].childNodes[r].getAttribute("data-col")?r:i.title,i.duration="duration"==n[0].childNodes[r].getAttribute("data-col")?r:i.duration,i.artist="artist"==n[0].childNodes[r].getAttribute("data-col")?r:i.artist,i.album="album"==n[0].childNodes[r].getAttribute("data-col")?r:i.album,i.playcount="play-count"==n[0].childNodes[r].getAttribute("data-col")?r:i.playcount,i.rating="rating"==n[0].childNodes[r].getAttribute("data-col")?r:i.rating;var s=n[0].getAttribute("data-id");if(s==o)t--,scrollDiv=document.querySelector("#mainContainer"),isAtBottom=scrollDiv.scrollTop==scrollDiv.scrollHeight-scrollDiv.offsetHeight,(isAtBottom||t<=0)&&(clearInterval(a),allsongs=e,console.log("Got "+e.length+" songs and stored them in the allsongs variable."),console.log('Calling songsToText with style all, csv flag true, likedonly false: songsToText("all", false).'),songsToText("all",!0,!1));else{t=3e3,o=s;for(r=0;r<n.length;r++){var g={dataid:n[r].getAttribute("data-id"),index:-1!=i.index?n[r].childNodes[i.index].textContent:"",title:-1!=i.title?n[r].childNodes[i.title].textContent:"",duration:-1!=i.duration?n[r].childNodes[i.duration].textContent:"",artist:-1!=i.artist?n[r].childNodes[i.artist].textContent:"",album:-1!=i.album?n[r].childNodes[i.album].textContent:"",playcount:-1!=i.playcount?n[r].childNodes[i.playcount].textContent:"",rating:-1!=i.rating?n[r].childNodes[i.rating].getAttribute("data-rating"):"",rating_interpretation:""};"undefined"==g.rating&&(g.rating_interpretation="never-rated"),"0"==g.rating&&(g.rating_interpretation="not-rated"),"1"==g.rating&&(g.rating_interpretation="thumbs-down"),"5"==g.rating&&(g.rating_interpretation="thumbs-up"),l.hasOwnProperty(g.dataid)||(e.push(g),l[g.dataid]=!0)}n[n.length-1].scrollIntoView(!0)}}},1)};function downloadCSVFile(t,e,l){var o=document.createElement("a");o.setAttribute("href","data:"+e+";charset=utf-8,"+encodeURIComponent(l)),o.setAttribute("download",t),document.body.appendChild(o),o.click(),document.body.removeChild(o)}var urlcheck="https://play.google.com/music/listen#/pl/";urlcheck=urlcheck.replace(/([\/])/g,"\\$1"),(urlcheck=RegExp(urlcheck)).test(window.location.href)&&scrapeSongs();
})();