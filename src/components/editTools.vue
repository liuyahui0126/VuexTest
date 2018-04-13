<template>
  <div class="edit">
      <div class="title">
          <div class="title-tit">
                <span>文章标题</span>
                <input type="text">
          </div>
            <div class="title-wei">
                <span>权重值</span>
                <input type="text">
            </div>
      </div>
      <div class="content">
          <div>文章内容</div>
          <textarea v-model='content'></textarea>
      </div>
      <div class="bottom">
          <button class="confirm" @click="confirm">确定</button>
          <button class="cancel" @click="cancel">取消</button>
      </div>
  </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data(){
      return {
        title:'',
        weight:'',
        content:''
      }
  },
  methods:{
      confirm(){
          if(this.content && this.title && this.weight){
              var obj = {
                  content:this.content,
                  title:this.title,
                  weight:this.weight
              }
              this.addArt(obj);
          }
      },
      cancel(){},
      clear(){
          this.title = '',
          this.content = '',
          this.weight = ''
      },
      ...mapMutations({
          addArt: 'addArticle'
      })
  }
}
</script>
<style scoped>
    .title{
        display: flex;
    }
    .title-tit,
    .title-wei{
        height: 30px;
        margin-right: 30px;
    }
</style>

