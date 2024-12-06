<template>
  <ion-content>
    <ion-page class="text-center">
 
      <div class="refresh-container" @click="refreshPage">
        <div class="coffee-cup">
          <div class="steam steam1"></div>
          <div class="steam steam2"></div>
          <div class="steam steam3"></div>
          <ion-icon name="cafe-outline" class="coffee-icon"></ion-icon>
        </div>
      </div>

      <div class="onboarding d-flex flex-column justify-content-between text-center">
        <img
          src="file:///C:/Users/Book%20n%20Print/Downloads/Coffee%20Shop%20Mobile%20App%20Design%20(Community)/Image%20Onboarding.png"
          alt="Splash Image"
          class="splash-image"
        />

        <div class="content px-4">
          <h1 class="title">Fall in Love with Coffee</h1>
          <p class="subtitle">
            Discover the blissful taste of coffee, crafted just for you.
          </p>
          <ion-button
            expand="clear"
            class="btn-get-started"
            @click="homeScreen"
          >
            Get Started
          </ion-button>
        </div>
      </div>
    </ion-page>
  </ion-content>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOptions,
  IonItemOption,
  IonItemSliding,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonPage,
  IonFooter,
} from "@ionic/vue";

export default defineComponent({
  name: "Onboarding",
  components: {
    IonAvatar,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonItemOptions,
    IonItemOption,
    IonItemSliding,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonPage,
    IonFooter,
  },
  methods: {
    async homeScreen() {
      this.$router.push("/home"); 
    },
    refreshPage() {
    console.log("Refreshing content...");
    location.reload();
  },
  },
});
</script>


<style scoped>
.onboarding {
  background: linear-gradient(to bottom, #b5723a, #2c1e12); 
  height: 100vh;
  color: #fff; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

.splash-image {
  width: 100%; 
  height: 60vh; 
  object-fit: cover; 
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.content {
  padding: 1.5rem; 
}

.title {
  font-size: 1.8rem; 
  font-weight: bold;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: #f8f4f0; 
}

.btn-get-started {
  background-color: #b5723a; 
  color: #fff;
  font-weight: bold;
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  transition: background-color 0.3s ease; 
}

.btn-get-started:hover {
  background-color: #a1622d; 
}

.refresh-container {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  cursor: pointer;
}

.coffee-cup {
  position: relative;
  background-color: #6f4e37;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.coffee-cup:hover {
  background-color: #5a3d2c;
  transform: scale(1.1);
}


.coffee-icon {
  font-size: 1.8rem;
  color: #fff;
}


.steam {
  position: absolute;
  width: 8px;
  height: 20px;
  background: rgba(255, 255, 255, 0.6);
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  animation: rise 2s infinite ease-in-out;
}

.steam1 {
  animation-delay: 0s;
}

.steam2 {
  animation-delay: 0.2s;
  left: 40%;
}

.steam3 {
  animation-delay: 0.4s;
  left: 60%;
}


@keyframes rise {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-40px);
  }
}


</style>
