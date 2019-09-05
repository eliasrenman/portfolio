<template>
    <div>
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
            github_link='https://github.com/Abborren'
            website_link=''
            email_link=''
        >
            <template #title>Bildterapihuset</template>
            This is a booking system that was created for my school to make it possible to book certain machinery and tools in their makerspace. It was created in collaboration with Malte Külft and Marcus Billman.
        </page>
    </div>
</template>

<script>
    import page from './Page.vue';
    export default {
        components: {
            page
        }
    };
</script>

<style lang="scss">
</style>