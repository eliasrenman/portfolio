<template>
    <div id="parent">
        <page id="page_0" 
            :image_url="domain_url + '/images/page0.webp'"
            twitter_link=''
            github_link='https://github.com/Abborren'
            website_link=''
            email_link='elias.renman00@gmail.com'
        >
            <template #title>Elias Renman</template>
            I am a newly graduated high schooler that offers fullstack solutions in web development, programming and google sheets. These are some of the things I work with.        
            <ul>
                <li v-for="item in skill_list" :key="item">{{item}}</li>
            </ul>
        </page>
        <page id="page_1" 
            :image_url="domain_url + '/images/page1.webp'"
            twitter_link=''
            github_link='https://github.com/Abborren/Makerspace_booking'
            website_link='http://makerspace.umea-ntig.se/'
            email_link=''
        >
            <template #title>Makerspace bookingsystem</template>
            This is a booking system that was created for my school to make it possible to book certain machinery and tools in their makerspace. It was created in collaboration with Malte Külft and Marcus Billman.
        </page>
        <page id="page_2" 
            :image_url="domain_url + '/images/page2.webp'"
            twitter_link=''
            github_link='https://github.com/Abborren/Slutprojekt_programmering_2'
            website_link=''
            email_link=''
        >
            <template #title>MYSQL Database handler</template>
            The graduation project in my programming course i created a Database handler in Java for interfacing with different databases much like MYSQL workbench or Sequel pro, please check it out on Github.        
        </page>
        <page id="page_3" 
            :image_url="domain_url + '/images/page3.webp'"
            twitter_link=''
            github_link='https://github.com/Abborren/Bildterapihuset'
            website_link='https://bildterapihusetshowcase.herokuapp.com/'
            email_link=''
        >
            <template #title>Bildterapihuset</template>
            Bildterapihuset was a renovation of a website that was written in a web dev course on the request of company that owned the old website. This was written in Nodejs and express, Check out the source code on Github or check the website on the right button below.
        </page>
        <page id="page_4" 
            :image_url="domain_url + '/images/page4.webp'"
            twitter_link=''
            github_link=''
            website_link=''
            email_link=''
        >
            <template #title>Google sheet solutions</template>
            I offer a variety of Google sheets solutions. One of the projects I have worked on was a spreadsheet that World best Gaming uses to track their streamers growth and follower numbers on a monthly basis. Contact me if you are in need of some kind of spreadsheet!
        </page>
        <arrows pages_length=5 v-bind:pages_id="pages_id"></arrows>
    </div>
</template>

<script>
    import page from './Page.vue';
    import Arrows from './Arrows.vue';
    export default {
        components: {
            page,
            Arrows
        },
        data() {
            return {
                pages_id: [
                    "page_0",
                    "page_1",
                    "page_2",
                    "page_3",
                    "page_4",
                ],
                skill_list:  [
                    "Java",
                    "Laravel (PHP)",
                    "Type(java)-script",
                    "NodeJS (Express)",
                    "Vue",
                    "Google Sheets",
                ]
            }
        },
        computed: {
            domain_url() {
                return window.domain_url;
            }
        }
    };
</script>

<style lang="scss">
</style>