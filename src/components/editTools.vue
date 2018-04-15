<template>
  <div class="edit">
      <div class="title">
          <div class="title-tit">
              <span>文章标题:</span>
              <input type="text" v-model="title">   
          </div>
          <div class="title-we">
              <span>权重值:</span>
              <input type="text" v-model="weight">
          </div>
      </div>
      <div class="content">
          <div>文章内容：</div>
          <textarea v-model="content"></textarea>
      </div>
      <div class="bottom">
          <div class="confirm" @click="confirm">确定</div>
          <div class="cancel" @click="cancel">取消</div>
      </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data() {
        return {
            title: '',
            weight: '',
            content: ''
        }
    },

    methods: {
       confirm() {
        if(this.content && this.title && this.weight) {
            var obj = {
                content: this.content,
                title: this.title,
                weight: this.weight
            }
            this.addArt(obj)
            
        } else {
            this.addArt({
                content: 'xxxxxxxxxxxxxxxxxxx',
                title: 'title' + parseInt(Math.random() * 10000),
                weight: parseInt(Math.random() * 10)
            })
        }
        this.clear()
       },
       cancel() {
         this.clear()
       },
       clear() {
           this.title = ''
           this.content = ''
           this.weight = ''
       },
       ...mapMutations({
          addArt: 'addArticle'   
       })
    }
}
</script>

<style scope>
   
    .title {
        display: flex;
    }
    .title-tit, .title-wei {
         height: 30px;
         margin-right: 30px;
    }
    .content textarea {
        width: 500px;
        height: 300px;
        overflow-y: scroll;
    }
    .bottom {
        display: flex;
    }
    .confirm, .cancel {
        width: 100px;
        height: 40px;
        line-height: 40px;
        font-size: 24px; 
        color: white;
        font-weight: 600;
        margin-right: 40px;
        text-align: center;
        cursor: pointer;
    }

    .confirm {
        background: red;
    }
    .cancel {
        background: lime;
    }
</style>
