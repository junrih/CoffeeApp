<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <button class="back-button" @click="goBack">
            <ion-icon name="arrow-back-outline" class="back-icon"></ion-icon>
            Back
          </button>
        </ion-buttons>
        <ion-title>Delivery Tracker</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="container p-3">
        <div class="map-section mb-4 position-relative">
          <div class="path"></div>
        </div>

        <div class="delivery-info text-center mb-4">
          <h4 class="mb-2">10 minutes left</h4>
          <p class="text-muted">Delivery to Jl. Kpg Sutoyo</p>
        </div>

        <div class="progress mb-4">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            :style="{ width: progress + '%' }"
            aria-valuenow="66"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div class="courier-info d-flex align-items-center">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.pkZGhbuEAHOqCbDWvGQCbwHaHa&pid=Api&P=0&h=220"
            alt="Courier"
            class="rounded-circle me-3"
          />
          <div>
            <h5 class="mb-0">Brooklyn Simmons</h5>
            <p class="text-muted mb-0">Personal Courier</p>
          </div>
          <button class="coffee-button ms-auto" @click="makeCall">
            <ion-icon name="call-outline" style="margin-right: 5px;"></ion-icon>
            Call
          </button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: "DeliveryTracker",
  data() {
    return {
      progress: 66,
    };
  },
  methods: {
    goBack() {
      console.log("Navigating back...");
      this.$router.back(); 
    },
    makeCall() {
      console.log("Calling the courier...");
    },
  },
};
</script>

  
  <style scoped>
  .map-section {
    width: 100%;
    height: 300px;
    background-image: url('src/views/resources/Maps.png');
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    position: relative;
  }
  
  .path {
    position: absolute;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 60%;
    border: 4px solid orange;
    border-radius: 10px;
    background: transparent;
  }
  
  .delivery-info {
    text-align: center;
  }
  
  .delivery-info h4 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  
  .delivery-info p {
    font-size: 0.875rem;
    color: #6c757d;
  }
  
  .progress {
    height: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .progress-bar {
    height: 100%;
  }

  .courier-info {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  
  .courier-info img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
  
  .courier-info div {
    flex: 1;
  }
  
  .courier-info h5 {
    margin: 0;
    font-size: 1rem;
  }
  
  .courier-info p {
    font-size: 0.875rem;
    color: #6c757d;
  }
  
  .coffee-button {
    background-color: #6f4e37;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.2s;
  }
  
  .coffee-button:hover {
    background-color: #5a3927;
    transform: scale(1.05);
  }
  
  .coffee-button ion-icon {
    font-size: 20px;
  }
  
  ion-button {
    --background: #6f4e37;
    --color: white;
    --border-radius: 8px;
    --box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  ion-button:hover {
    --background: #5a3927;
    transform: scale(1.05);
  }
  .back-button {
  background-color: #6f4e37; /* Coffee color */
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;
}

.back-button:hover {
  background-color: #5a3927; /* Darker coffee color on hover */
  transform: scale(1.05); /* Slight enlargement on hover */
}

.back-icon {
  font-size: 18px;
  margin-right: 5px;
}

ion-toolbar {
  --background: #6f4e37; /* Dark coffee background */
  --color: white; /* Text color */
}

ion-title {
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
}
  </style>
  