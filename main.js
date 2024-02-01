// 模拟数据收集函数
function collectWatchData(title, timestamp) {
    // 在这里，你可以将数据发送到服务器或存储在本地。
    // 这个函数只是简单地将数据添加到DOM中。
    const log = document.getElementById('watch-log');
    log.innerHTML += `<p>${title} - ${timestamp}</p>`;
}

// 模拟与视频的交互事件
document.querySelector('iframe').contentWindow.addEventListener('play', function(e) {
    collectWatchData('Movie Title', new Date().toISOString());
});
