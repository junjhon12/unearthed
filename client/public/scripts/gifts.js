const requestedURL = window.location.href.split('/').pop()

if (requestedURL) {
  window.location.href = '../404.html'
}
else {
  renderGifts()
}