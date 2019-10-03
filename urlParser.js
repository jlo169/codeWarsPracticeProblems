// https://mail.google.com:443/inbox/58347/?logged-in=true#content

const urlParser = url => {
    const parsedUrl = new URL(url);
    return parsedUrl;
}

console.log(urlParser('https://mail.google.com:443/inbox/58347/?logged-in=true#content'));