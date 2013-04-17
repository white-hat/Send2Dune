// Saves options to localStorage.
function save_options() {

    //localStorage["ip"] = document.getElementById("ip").value;

    // Update status to let user know options were saved.
    chrome.storage.sync.set({'dune_ip': document.getElementById("ip").value}, function() {
        // Notify that we saved.
        var status = document.getElementById("status");
        status.innerHTML = "Options Saved!";
        setTimeout(function () {
            status.innerHTML = "";
        }, 1000);
    });


}

// Restores select box state to saved value from localStorage.
function restore_options() {
    chrome.storage.sync.get('dune_ip', function(data) {
        if (data){
            var ip = document.getElementById("ip");
            ip.value = data.dune_ip
        }
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);

