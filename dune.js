chrome.contextMenus.create({
    "title": "Send to Dune",
    "contexts": ["link"],
    "onclick": function (e) {
        var url = e.pageUrl;
        chrome.storage.sync.get('dune_ip', function(data) {
            if (data){
                var address = data.dune_ip;
                PostUrl = "http://" + address + "/cgi-bin/do?cmd=start_file_playback&media_url=" + encodeURI(e.linkUrl);
                chrome.tabs.create({"url": PostUrl });
            }
        });
    }
});
