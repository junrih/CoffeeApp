<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-select aria-label="Fruit" placeholder="Location">
          <ion-select-option value="Philippines">Philippines</ion-select-option>
          <ion-select-option value="Canada">Canada</ion-select-option>
          <ion-select-option value="USA">USA</ion-select-option>
        </ion-select>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-searchbar color="dark" show-cancel-button="focus" placeholder="Search"></ion-searchbar>

      <div class="promo-banner">
        <ion-button expand="clear" class="text-danger ml-1">PROMO</ion-button>
        <ion-button color="medium" fill="clear">
          <h2>Buy One Get One FREE</h2>
        </ion-button>
      </div>

      <ion-grid>
        <ion-row>
          <ion-segment color="danger" value="danger">
            <ion-segment-button value="first">
              <ion-label>All Coffee</ion-label>
            </ion-segment-button>
            <ion-segment-button value="second">
              <ion-label>Macchiato</ion-label>
            </ion-segment-button>
            <ion-segment-button value="third">
              <ion-label>Latte</ion-label>
            </ion-segment-button>
            <ion-segment-button value="fourth">
              <ion-label>Flat White</ion-label>
            </ion-segment-button>
          </ion-segment>
          <ion-col size="6" v-for="(item, index) in coffeeList" :key="index">
            <ion-button
              expand="block"
              fill="clear"
              class="card-button"
              @click="goToDetail(item)"
            >
              <div class="card">
                <img src="file:///C:/Users/Book%20n%20Print/Downloads/Coffee%20Shop%20Mobile%20App%20Design%20(Community)%20(1)/coffee2.png" alt="Coffee Image" class="card-img" />
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="card-price">${{ item.price }}</p>
                </div>
              </div>
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      coffeeList: [
        { name: "Caffe Mocha", price: "4.53", image: "coffee.png" },
        { name: "Flat White", price: "3.53", image: "flat-white.jpg" },
        { name: "Cappuccino", price: "4.00", image: "cappuccino.jpg" },
        { name: "Espresso", price: "2.50", image: "espresso.jpg" },
      ],
    };
  },
  methods: {
    goToDetail(coffee: { name: string; price: string }) {
      this.$router.push({
        name: "Detail",
        params: {
          coffeeName: coffee.name,
          coffeePrice: coffee.price,
        },
      });
    },
  },
});
</script>

<style scoped>
.text-danger {
  color: white;
  background-color: red;
}

.text-danger:hover {
  background-color: darkred;
  color: white;
}


.promo-banner {
  background-color: #b5723a;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 15px;
  margin: 15px;
}
.card {
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.card-img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}
.card-body {
  padding: 10px;
}
.card-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
}
.card-price {
  color: #b5723a;
  font-weight: bold;
}
</style>
