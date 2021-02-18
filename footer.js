
var app = new Vue ({
    el: '#footer',
    data: {
        yo: 'stranger',
    }, 
    methods: {
        changeTitel: function(event) {
            this.yo = event.target.value
        }
    }
})