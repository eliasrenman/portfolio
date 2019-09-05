<template>
    <div v-on:scroll.passive="handleScroll()">
        <page id="page_0" 
            image_url='/images/page0.png'
            twitter_link=''
            github_link='https://github.com/Abborren'
            website_link=''
            email_link=''
        >
            <template #title>Elias Renman</template>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minus voluptates ducimus provident nostrum eligendi recusandae iusto ea hic dolores optio laboriosam, omnis tempora corrupti, ex tempore consequuntur nam fuga!
        </page>
        <page id="page_1" 
            image_url='/images/page1.png'
            twitter_link=''
            github_link='https://github.com/Abborren/Makerspace_booking'
            website_link='http://makerspace.umea-ntig.se/'
            email_link=''
        >
            <template #title>Makerspace bookingsystem</template>
            This is a booking system that was created for my school to make it possible to book certain machinery and tools in their makerspace. It was created in collaboration with Malte Külft and Marcus Billman.
        </page>
        <page id="page_2" 
            image_url='/images/page2.png'
            twitter_link=''
            github_link='https://github.com/Abborren/Slutprojekt_programmering_2'
            website_link=''
            email_link=''
        >
            <template #title>MYSQL Database handler</template>
            The graduation project in my programming course i created a Database handler in Java for interfacing with different databases much like MYSQL workbench or Sequel pro, please check it out on Github.        
        </page>
        <page id="page_3" 
            image_url='/images/page3.png'
            twitter_link=''
            github_link='https://github.com/Abborren/Bildterapihuset'
            website_link='https://bildterapihusetshowcase.herokuapp.com/'
            email_link=''
        >
            <template #title>Bildterapihuset</template>
            Bildterapihuset was a renovation of a website that was written in a web dev course on the request of company that owned the old website. This was written in Nodejs and express, Check out the source code on Github or check the website on the right button below.
        </page>
        <page id="page_4" 
            image_url='/images/page4.png'
            twitter_link=''
            github_link=''
            website_link=''
            email_link=''
        >
            <template #title>Bildterapihuset</template>
            I offer a variety of Google sheets solutions. One of the projects I have worked on was a spreadsheet that World best Gaming uses to track their streamers growth and follower numbers on a monthly basis. Contact me if you are in need of some kind of spreadsheet!
        </page>
    </div>
</template>

<script>
    import page from './Page.vue';
    import _ from 'lodash';
    export default {
        components: {
            page
        },
        data() {
            return {
                old_pos: 0,
            }
        },
        methods: {
        
            handleScroll(event) {
                // TODO CODE HERE ALSO FIGURE OUT WHATS UP AND WHATS DOWN.
            },
            throttle(callback, time) { 
                return _.throttle(callback, time)
            },
        },
        created () {
            window.addEventListener('scroll', this.throttle(this.handleScroll, 400));
        },
        destroyed () {
            window.removeEventListener('scroll', this.throttle(this.handleScroll, 400));
        }
    };
</script>

<style lang="scss">
</style>