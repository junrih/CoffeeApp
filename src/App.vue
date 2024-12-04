<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
import { IonApp, IonRouterOutlet } from '@ionic/vue';
export default defineComponent ({
  name: "App",
  components: { IonApp, IonRouterOutlet }
});
</script>
<style>
.container {
  max-width: 600px;
  margin: auto;
}

.order-card,
.payment-summary,
.delivery-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

button.active {
  background-color: #007bff;
  color: #fff;
}

</style>