<template>
  <div class="container">
      <img :src="domain_url + '/images/icons/arrow_up.svg'" v-on:click="scrollUp" class="d-block">
      <img :src="domain_url + '/images/icons/arrow_down.svg'" v-on:click="scrollDown">
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
                    // console.log("#page_" + index);
                    var element = document.querySelector("#page_" + index);
                    window.scrollTo({top: element.offsetTop, behavior: 'smooth'});
                },
                check_current_page() {
                    for (const [i, val] of this.pages_pos.entries()) {
                        let current_y = window.pageYOffset+10;
                        let next_val = this.pages_pos[i+1];
                        if (current_y >= val && (!next_val || current_y < next_val)) {
                            this.current_page_index = i;   
                            break;
                        }
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
                window.addEventListener('scroll', this.throttle(this.check_current_page, 50));
                this.$nextTick(function () {
                    this.pages_id.forEach(element => {
                        this.pages_pos.push(document.getElementById(element).offsetTop)
                    });
                })
            },
            computed: {
                domain_url() {
                    return window.domain_url;
                }
            }
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