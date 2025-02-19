
// silly analytics
fetch(`https://home.calschwick.net/analytics/submit?type=sreekar-website&url=${encodeURIComponent(window.location)}`, {
    method: "POST",
}).then(res => {
    console.log("Request complete! response:", res);
});

// good analytics frfr
document.getElementsByTagName("body").innerHTML += `<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-L6VPS22YJG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L6VPS22YJG');
</script>`;

