<template>
  <div class="container">
      <img src="/images/icons/arrow_up.svg" v-on:click="scrollUp" class="d-block">
      <img src="/images/icons/arrow_down.svg" v-on:click="scrollDown">
  </div>
</template>

<script>
    export default {
            props: [
                "pages_length",
                "pages_id"
            ],
            data() {
                return {
                    current_page_index: 0,
                    pages_pos: []
                }
            },
            methods: {
                scrollUp() {
                    this.scrollPage(true);
                },
                scrollDown() {
                    this.scrollPage(false);
                },
                scrollPage(direction_up) {
                    let index = this.current_page_index;
                    if (direction_up) {
                        index--;
                    } else
                        index++;
                    if (index >= this.pages_length || index < 0) {
                        return;
                    }
                    this.current_page_index = index;
                    console.log("#page_" + index);
                    var rect = document.querySelector("#page_" + index);
                    window.scrollTo(0, rect.offsetTop);
                },
                check_current_page() {
                    
                    for (const [i, val] of this.pages_pos.entries()) {
                        let current_y = window.pageYOffset+100;
                        console.log(this.current_page_index == this.pages_length);
                        let next_val = (this.current_page_index == this.pages_length ? this.pages_pos[i] * 2: this.pages_pos[i+1]);
                        // console.log(val, ">", current_y, "<", next_val);
                        if (current_y > val && current_y < next_val) {
                            this.current_page_index = i;
                            console.log("current index: ", i)    
                            break;
                        }
                        // let index = this.pages_pos.findIndex(i);
                    }
                },
                throttle(fn, wait) {
                    var time = Date.now();
                    return function() {
                        if ((time + wait - Date.now()) < 0) {
                            fn();
                            time = Date.now();
                        }
                    }
                },
                
            },
            created() {
                window.addEventListener('scroll', this.throttle(this.check_current_page, 500));
                this.$nextTick(function () {
                    this.pages_id.forEach(element => {
                        this.pages_pos.push(document.getElementById(element).offsetTop)
                    });
                })
            },
    }
</script>
<style lang="scss" scoped>
    .container {
        position: fixed;
        bottom: 5%;
        left: 50%;
        transform: translate(-50%, 0)
    }
    .d-block {
        display: block;
        margin-bottom: 10px;
    }
</style>