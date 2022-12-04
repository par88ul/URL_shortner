import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';


const home = () => {

 

 const [shortUrls, setShortUrls] = useState([]);

 const getData = () => {
      
  };

useEffect(()=>{
    // getData();
    axios
      .get(`http://localhost:5000/getData`)
      .then((res) => {
        if (res.status === 200) {
          //  console.log(res.data.shortUrls);
          // save the data to array
          setShortUrls(res.data.shortUrls);
        }
      })
      .catch((err) => console.log(err));

},[])

   

return (
    <div>
        <h1>URL SHORTENER</h1>
        <form action="http://localhost:5000/shortUrls" method="POST" className="my-4 form-inline">
            <label  className="sr-only">Url</label>
            <input required placeholder="Url" type="url" name="fullUrl" id="fullUrl" className="form-control col mr-2"/>
            <button className="btn btn-success" type="submit">Short</button>
        </form>

        <table className="table table-striped table-responsive">
            <thead>
                <tr>
                    <th>Full URL</th>
                    <th>Short URL</th>
                    <th>Clicks</th>
                </tr>
            </thead>
            <tbody>

                {shortUrls && shortUrls.length > 0 ? (shortUrls.map(shortUrl=> { 
                    {console.log(shortUrl)}
                    <tr key = {shortUrl._id}>
                        <td><a href={ shortUrl.full }>
                                {shortUrl.full }
                                
                            </a></td>
                        <td><a href={ shortUrl.short }>
                                { shortUrl.short }
                            </a></td>
                        <td>
                            {shortUrl.clicks }
                        </td>
                    </tr>
                     })): <tr><td>'no data'</td></tr> }
            </tbody>
        </table>
        
    </div>
  )
}

export default home