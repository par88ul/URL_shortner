import React from 'react'

const home = () => {
  return (
    <div>
        <h1>URL SHORTENER</h1>
        <form action="/shortUrls" method="POST" class="my-4 form-inline">
            <label for="fullUrl" class="sr-only">Url</label>
            <input required placeholder="Url" type="url" name="fullUrl" id="fullUrl" class="form-control col mr-2"/>
            <button class="btn btn-success" type="submit">Short</button>
        </form>

        <table class="table table-striped table-responsive">
            <thead>
                <tr>
                    <th>Full URL</th>
                    <th>Short URL</th>
                    <th>Clicks</th>
                </tr>
            </thead>
            <tbody>

                {shortUrls.forEach(shortUrl=> { 
                    <tr>
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
                     }) }
            </tbody>
        </table>
    </div>
  )
}

export default home