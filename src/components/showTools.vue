<template>
   <div>
       <table>
           <tr>
               <th>编号</th>
               <th>文章名称</th>
               <th>创建时间</th>
               <th>权重值</th>
               <th>操作</th>
           </tr>
           <tr v-for="(item, index) in list">
               <td>{{index}}</td>
               <td>{{item.title}}</td>
               <td><div class="time">{{item.time.toLocaleString()}}</div></td>
               <td>{{item.weight}}</td>
               <td>
                   <span @click="changeList(item)">修改</span>
                   <span @click="delList(item.time)">删除</span> 
               </td>
           </tr>
       </table>
       <div class="tc" v-show="show">
            <div class="bg"></div>
            <div class="bg-content">
                文章标题：<input type="text" :value="anList.title" @input ="e => (anTitle = e.target.value) "> 
                <br> 
                权重值：<input type="text" :value="anList.weight" @input="e => (anWeight = e.target.value)">
                <br>
                文章内容: 
                <textarea :value="anList.content" @input="e => anContent = e.target.value"></textarea>
                <br>
                <span @click="show=false">取消</span>
                <span @click="changeOk">确定</span>
            </div>
       </div>
      
   </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    data() {
       return {
           show: false,
           anList: {},
           anTitle : '',
           anContent: '',
           anWeight: ''
       }
    },
    computed: {
        ...mapState({
           list: state => state.articleList 
        })
    },
    methods: {
        ...mapMutations({
          changeArt: 'changeArticle',
          del: 'delArticle'
        }),
        changeList(item) {
            this.show = true
            this.anList = item
            this.anTitle = item.title
            this.anContent = item.content
            this.anWeight = item.weight
        },
        delList(time) {
        console.log(time)
          this.del(time)
        },
        changeOk() {
            this.changeArt({
               time: this.anList.time,
               title: this.anTitle,
               content: this.anContent,
               weight: this.anWeight
            })
            this.show = false
        }
    }

}
</script>

<style scope>
    td, th {
        text-align: center;
        width: 150px;
    }
    .time {
         overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 150px;
    }
    .tc {
        z-index: 100;
       
    }
    .bg {
         background: black;
         opacity: .3;
         position: absolute;
         left: 0;
         top: 0;
         right: 0;
         bottom: 0;

    }
    .bg-content {
        width: 50%;
        height: 30%;
        position: absolute;
        background: white;
        z-index: 999;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%)
    }
</style>

