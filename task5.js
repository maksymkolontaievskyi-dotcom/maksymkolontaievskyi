let tv = {
    currentChannel: 1,

    nextChannel: function() {
        this.currentChannel++;
    },

    previousChannel: function() {
        this.currentChannel--;
    },

    setChannel: function(number) {
        this.currentChannel = number;
    }
};

tv.nextChannel();
console.log(tv.currentChannel); // 2

tv.previousChannel();
console.log(tv.currentChannel); // 1

tv.setChannel(10);
console.log(tv.currentChannel); // 10
