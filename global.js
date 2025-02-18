fetch(`https://home.calschwick.net/analytics/submit?type=sreekar-website&url=${encodeURIComponent(window.location)}`, {
    method: "POST",
}).then(res => {
    console.log("Request complete! response:", res);
});