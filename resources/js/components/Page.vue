<template>
    <div class="container">
        <img :src="image_url" alt="background image" class="page_img">
        
        <page-panel class="page_panel"
            :twitter_link= twitter_link
            :github_link= github_link
            :website_link= website_link
            :email_link= email_link
        >
            <template #_title>
                <slot name="title"></slot>
            </template>
            <template>
                <slot></slot>
            </template>
        </page-panel>
    </div>
</template>

<script>
    import pagePanel from './Page_panel';
    export default {
        props: {
            image_url: '',
            twitter_link: '',
            github_link: '',
            website_link: '',
            email_link: '',
        },
        components: {
            pagePanel
        }
}
</script>

<style lang="scss" scoped>
    .container {
        position: relative;
        overflow: hidden;
    }
    .page_img {
        width: 100%;
        object-fit: cover;
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transform: scale(1.1);
        filter: blur(8px);
        -webkit-filter: blur(8px);
    }
</style>