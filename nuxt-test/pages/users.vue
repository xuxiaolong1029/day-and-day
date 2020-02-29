<template>
  <div>
      用户导航
       <nuxt-child></nuxt-child>
      <ul>
        <li v-for="item in user" :key='item.id'>
          {{item.name}}
        </li>
      </ul>
    </div>
</template>

<script>
function getUsers(){
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve([{name:'tom',id:1},{name:'jerry',id:2}])
    },1500)
  })
}
export default {
  async asyncData(){
    //process.server  判断asyncData是在服务执行还在客户端执行的、
    const user = await getUsers();
    return {user}
  }
}
</script>

