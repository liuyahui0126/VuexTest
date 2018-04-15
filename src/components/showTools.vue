<template>
  <div>
      <table>
          <tr>
              <td>编号</td>
              <td>文章名称</td>
              <td>创建时间</td>
              <td>权重</td>
              <td>操作</td>
          </tr>
          <tr v-for="(item,index) in list">
              <td>{{index}}</td>
              <td>{{item.title}}</td>
              <td>{{item.time}}</td>
              <td>{{item.weight}}</td>
              <td>
                  <span>修改</span>
                  <span>删除</span>
                </td>
          </tr>
      </table>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      list: state => state.articleList
    })
  },
  methods: {
    ...mapMutations({

    })
  }
};
</script>
<style scope>
    
</style>
