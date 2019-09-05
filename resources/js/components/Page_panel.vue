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
                    <img src="/images/icons/twitter.svg" alt="twitter link">
                </a>
                <a v-if="github_link" :href="github_link" target="_blank" rel="noopener noreferrer">
                    <img src="/images/icons/github.svg" alt="website link">
                </a>
                <a v-if="website_link" :href="website_link" target="_blank" rel="noopener noreferrer">
                    <img src="/images/icons/website.svg" alt="website link">
                </a>
                <a v-if="email_link" :href="'mailto:' + email_link" target="_blank" rel="noopener noreferrer">
                    <img src="/images/icons/email.svg" alt="email link">
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
    }
</script>


<style lang="scss" scoped>
    .parent > h1 {
        font-size: 40px;
        font-family: 'Merriweather', sans-serif;
        font-weight: 400;
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
    }
    .links_div {
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
</style>