
new Vue ({
        el: '#app',
        data: {
            output: '',
            output2:''
        },
        methods: {
            getFormValues () {
                this.output = this.$refs.my_input.value
                this.output2 = this.$refs.my_input2.value
            }
        }
    })

