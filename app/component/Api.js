
export async function Api(walletAddress, communityCode) {
    const form = new FormData();
    form.append("WalletAddress", "kjhkhkkjhkhk");
    form.append("CommunityCode", "kj9999hkhk");

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001' }
    };

    options.body = form;

    fetch('https://script.google.com/macros/s/AKfycbzWZ3V5LNLgROJJoVsgTkD0VXOBfY88YodogxJrQtO4IUKQikm1c7ueh7ezRZIDiWk3/exec', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return 0
}
