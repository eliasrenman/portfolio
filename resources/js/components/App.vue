<template>
    <div>
        <page id="page_0" 
            image_url='/images/page0.png'
            twitter_link=''
            github_link='https://github.com/Abborren'
            website_link=''
            email_link=''
        >
          <template name="title">Elias Renman</template>
          <template>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minus voluptates ducimus provident nostrum eligendi recusandae iusto ea hic dolores optio laboriosam, omnis tempora corrupti, ex tempore consequuntur nam fuga!
          </template>
        </page>
        <page id="page_1" 
            image_url='/images/page1.png'
            twitter_link=''
            github_link='https://github.com/Abborren'
            website_link=''
            email_link=''
        >
          <template name="title">Bildterapihuset</template>
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