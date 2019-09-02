<template>
  <div class="dash-container">
    <div>
      <img src="@assets/logo.png" alt />
    </div>
    <div>
      Im at
      <span v-colorChange:[styleData]="{ color: 'orange', weight: '900' }">{{ pageName }}</span>
      {{ 100 | toCurrency }}
    </div>
    <div>
      <BusinessTest />
    </div>
    <div v-for="item in dummyData" :key="item.id">{{ item.name }}</div>
  </div>
</template>
<script src="./Dashboard.js"></script>
<style lang="scss">
@import './Dashboard.scss';
</style>
