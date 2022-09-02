const Helper = () => {
    return {
        fromTimestampToTime: (timestamp) => {            
            var date = new Date(timestamp * 1000);
            // Hours part from the timestamp
            var hours = date.getHours();
            // Minutes part from the timestamp
            var minutes = "0" + date.getMinutes();
            // Seconds part from the timestamp
            var seconds = "0" + date.getSeconds();

            // Will display time in 10:30:23 format
            return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        }
    }
}

export default Helper