<template>
    <div class="parent">
        <h1>
            <slot name="_title"></slot>
        </h1>
        <p>
            <slot></slot>
        </p>
        <div class="links_div">
            <span class="links">
                <a v-if="twitter_link" :href="twitter_link" target="_blank" rel="noopener noreferrer">
                    <img :src="domain_url + '/images/icons/twitter.svg'" alt="twitter link" class="img">
                </a>
                <a v-if="github_link" :href="github_link" target="_blank" rel="noopener noreferrer">
                    <img :src="domain_url + '/images/icons/github.svg'" alt="website link" class="img">
                </a>
                <a v-if="website_link" :href="website_link" target="_blank" rel="noopener noreferrer" >
                    <img :src="domain_url + '/images/icons/website.svg'" alt="website link" class="img">
                </a>
                <a v-if="email_link" :href="'mailto:' + email_link" target="_blank" rel="noopener noreferrer" >
                    <img :src="domain_url + '/images/icons/email.svg'" alt="email link" class="img">
                </a>
            </span>
        </div>
        
    </div>
</template>

<script>
    export default {
        props: {
            twitter_link: '',
            github_link: '',
            website_link: '',
            email_link: '',
        },
        computed: {
            domain_url() {
                return window.domain_url;
            }
        }
    }
</script>


<style lang="scss" scoped>
    .parent > h1 {
        font-size: 40px;
        font-family: 'Merriweather', sans-serif;
        font-weight: 700;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .parent > p {
        font-size: 15px;
        font-family: 'Merriweather', sans-serif;
        font-weight: 200;
    }
    .parent {
        color: white;
        position: absolute;
        top: 30%;
        left: 25%;
        background-color: rgba(0, 0, 0, 0.4);;
        padding-left: 20px;
        padding-right: 20px;
        max-width: 30%;
    }
    ul {
        padding-inline-start: 10px;
    }
    .links_div {
        padding-top: 5px;
        widows: 100%;
        height: 30px;
    }
    .links {
        position: absolute;
        left: 50%; 
        transform: translate(-50%, 0)
    }
    
    span > a {
        padding-left: 4px;
        padding-right: 4px;
    }
    @media (max-width: 768px) {
        .parent {
            padding-top: 30%;
            max-width: 100%;
            height: 100%;
            top: 0%;
            left: 0%;
        }
        .img {
            height: 25px;
            width: auto;   
        }
    }
</style>