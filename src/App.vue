<template>
  <el-container>
      <el-aside>
          <Sidebar />
      </el-aside>
      <el-main>
      <NavTop/>
         <div class="pt-30px">
          <router-view v-slot:default="{Component}">
            <keep-alive>
                <component
                    :is="Component"
                    v-if="$route.meta.keepAlive"
                    :key="$route.name"
                />
            </keep-alive>
            <component
                :is="Component"
                v-if="!$route.meta.keepAlive"
                :key="$route.name"
            />
        </router-view>
         </div>
      </el-main>
      <!-- <Login v-show="loginDialogVisible" />
      <play-bar></play-bar> -->
      <PlayBar/>
  </el-container>
</template>
<script setup>


</script>
<style>

</style>
