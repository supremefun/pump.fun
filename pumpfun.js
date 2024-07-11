function updateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true, 
        timeZone: 'America/New_York' 
    };
    const timeString = now.toLocaleString('en-GB', options).replace(',', '').replace(' AM', 'am').replace(' PM', 'pm') + ' EST';
    document.getElementById('time').innerText = timeString;
}
setInterval(updateTime, 1000);
updateTime();