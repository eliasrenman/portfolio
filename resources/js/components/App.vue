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
            I am a recently graduated Gymnasieengineer currently looking for a web development job. Some of my skills include frontend and backend development, general programming and working with excel and google sheets. These are some of the technologies i've worked with in the past.        
            <ul>
                <li v-for="item in skill_list" :key="item">{{item}}</li>
            </ul>
        </page>
        <page id="page_1" 
            :image_url="domain_url + '/images/page1.webp'"
            twitter_link=''
            github_link='https://github.com/eliasrenman/Makerspace_booking'
            website_link=''
            email_link=''
        >
            <template #title>Makerspace bookingsystem</template>
            This is a booking system that was created for my school to make it possible to book certain machinery and tools in their makerspace. It was created in collaboration with Malte Külft and Marcus Billman.
        </page>
        <page id="page_2" 
            :image_url="domain_url + '/images/page2.webp'"
            twitter_link=''
            github_link='https://github.com/TE4-Umea/lan-frontend'
            website_link='https://lan.umea-ntig.se/'
            email_link=''
        >
            <template #title>Ntig Umeå Lan booking system</template>
             A booking system built for the Lan event that occurs twice a year at Nti Gymnasiet in umeå, This enables the participants to get live info and easily register via the website. It also removes the pain of working with spreadsheets for the organizers to handle the organizing of events.      
        </page>
        <page id="page_3" 
            :image_url="domain_url + '/images/page3.webp'"
            twitter_link=''
            github_link='https://github.com/eliasrenman/Slutprojekt_programmering_2'
            website_link=''
            email_link=''
        >
            <template #title>MYSQL Database handler</template>
            The graduation project in my programming course i created a Database handler in Java for interfacing with different databases much like MYSQL workbench or Sequel pro, please check it out on Github.        
        </page>
        <page id="page_4" 
            :image_url="domain_url + '/images/page4.webp'"
            twitter_link=''
            github_link='https://github.com/eliasrenman/Bildterapihuset'
            website_link='https://bildterapihusetshowcase.herokuapp.com/'
            email_link=''
        >
            <template #title>Bildterapihuset</template>
            Bildterapihuset was a renovation of a website that was written in a web dev course on the request of company that owned the old website. This was written in Nodejs and express, Check out the source code on Github or check the website on the right button below.
        </page>
        <page id="page_5" 
            :image_url="domain_url + '/images/page5.webp'"
            twitter_link=''
            github_link=''
            website_link=''
            email_link=''
        >
            <template #title>Google sheet solutions</template>
            In the past I have worked on google sheet automation. One of the projects I have worked on was a spreadsheet that World best Gaming uses to track their streamers growth and follower numbers on a monthly basis.
        </page>
        <arrows pages_length=6 v-bind:pages_id="pages_id"></arrows>
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
                    "page_5",
                ],
                skill_list:  [
                    "Angular",
                    "Laravel (PHP)",
                    "Type(java)-script",
                    "NodeJS (Express)",
                    "Vue",
                    "Java",
                    "Python",
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