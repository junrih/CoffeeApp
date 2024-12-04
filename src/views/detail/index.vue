<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home"></ion-back-button>
        </ion-buttons>

        <ion-title>{{ coffeeName }}</ion-title>

        <ion-buttons slot="end">
          <ion-icon name="heart-outline" size="large" class="wishlist-icon"></ion-icon>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <img
        src="file:///C:/Users/Book%20n%20Print/Downloads/Coffee%20Shop%20Mobile%20App%20Design%20(Community)%20(1)/bf.png"
        alt="Product"
        class="hero-image"
      />

      <div class="product-details">
        <h1 class="product-name">{{ coffeeName }}</h1>
        <p class="product-description">
          A delicious blend of coffee and rich chocolate.
        </p>

        <div class="ratings">
          <span class="badge bg-success">4.8 ★</span>
          <small>(230 reviews)</small>
        </div>

        <h3><b>Size</b></h3>
        <div class="size-options">
          <ion-segment value="medium" color="warning" class="size-segment">
            <ion-segment-button value="small">
              <ion-label>S</ion-label>
            </ion-segment-button>
            <ion-segment-button value="medium">
              <ion-label>M</ion-label>
            </ion-segment-button>
            <ion-segment-button value="large">
              <ion-label>L</ion-label>
            </ion-segment-button>
          </ion-segment>
        </div>

        <ion-button
          @click="orderScreen"
          expand="clear"
          class="btn-buy"
        >
          Buy Now - ${{ coffeePrice }}
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
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
  name: "Detail",
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
  props: {
    coffeeName: {
      type: String,
      required: true,
    },
    coffeePrice: {
      type: String,
      required: true,
    },
  },
  methods: {
    async orderScreen() {
      this.$router.push("/order"); 
    },
  },
});
</script>


<style scoped>
.hero-image {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.product-details {
  padding: 20px;
}

.product-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-description {
  color: #6c757d;
  margin-bottom: 10px;
}

.ratings {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

.badge.bg-success {
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 12px;
  background-color: #28a745; 
  color: #fff;
}

.size-options {
  margin: 20px 0;
}

.size-segment {
  display: flex;
  justify-content: space-around;
}

.btn-buy {
  background-color: #b5723a; 
  color: #fff;
  border-radius: 25px;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
}

.btn-buy:hover {
  background-color: #a1622d; 
}

.wishlist-icon {
  font-size: 1.5rem;
  color: #6c757d; 
  transition: color 0.3s ease;
}

.wishlist-icon:hover {
  color: #b5723a;
}
</style>
