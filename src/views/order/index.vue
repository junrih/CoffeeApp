<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/home"></ion-back-button>
          </ion-buttons>
          <ion-title>Order</ion-title>
        </ion-toolbar>
        <div class="refresh-container" @click="refreshPage">
    <div class="coffee-cup">
      <div class="steam steam1"></div>
      <div class="steam steam2"></div>
      <div class="steam steam3"></div>
      <ion-icon name="cafe-outline" class="coffee-icon"></ion-icon>
    </div>
  </div>
      </ion-header>
  
      <ion-content>
        <ion-segment value="delivery" class="order-toggle" @ionChange="toggleDeliveryType">
          <ion-segment-button value="delivery">
            <ion-label>Deliver</ion-label>
          </ion-segment-button>
          <ion-segment-button value="pickup">
            <ion-label>Pick Up</ion-label>
          </ion-segment-button>
        </ion-segment>

        <div class="delivery-address-section" v-if="deliveryType === 'delivery'">
          <h4 class="section-title">Delivery Address</h4>
          <p>
            <strong>Jl. Kpg Sutoyo</strong><br />
            Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai
          </p>
          <ion-button expand="clear" size="small" class="coffee-btn-outline" @click="editAddress()">Edit Address</ion-button>
          <ion-button expand="clear" size="small" class="coffee-btn-outline" @click="addNote">Add Note</ion-button>
        </div>

        <ion-item class="order-item">
          <ion-thumbnail slot="start">
            <img
              src="file:///C:/Users/Book%20n%20Print/Downloads/Coffee%20Shop%20Mobile%20App%20Design%20(Community)%20(1)/coffee.png"
              alt="Caffe Mocha"
            />
          </ion-thumbnail>
          <ion-label>
            <h3>Caffe Mocha</h3>
            <p>Deep Foam</p>
          </ion-label>
          <div class="quantity">
            <ion-button expand="clear" @click="decreaseQuantity" class="coffee-btn-outline" size="small">-</ion-button>
            <span class="mx-2">{{ quantity }}</span>
            <ion-button expand="clear" @click="increaseQuantity" class="coffee-btn-outline" size="small">+</ion-button>
          </div>
        </ion-item>
  
       
        <div class="discount-section">
          <ion-icon name="pricetag-outline"></ion-icon>
          <p>{{ discountApplied ? '1 Discount is Applied' : 'No Discounts Applied' }}</p>
        </div>
  
     
        <div class="payment-summary">
          <h4>Payment Summary</h4>
          <div class="payment-detail">
            <p>Price</p>
            <p><strong>${{ (price * quantity).toFixed(2) }}</strong></p>
          </div>
          <div class="payment-detail">
            <p>Delivery Fee</p>
            <p>
              <s v-if="deliveryType === 'delivery'">$2.00</s>
              <strong v-if="deliveryType === 'delivery'">${{ deliveryFee.toFixed(2) }}</strong>
            </p>
            <p v-if="deliveryType === 'pickup'"><strong>Free</strong></p>
          </div>
        </div>
      </ion-content>
 
      <ion-footer>
        <ion-toolbar>
          <div class="footer-content">
            <div class="wallet-info">
              <h5>Cash/Wallet</h5>
              <p><strong>${{ walletBalance.toFixed(2) }}</strong></p>
            </div>
            <ion-button
              :disabled="grandTotal > walletBalance"
              class="coffee-btn-primary"
              expand="clear"
              @click="placeOrder"
            >
              Order
            </ion-button>
          </div>
        </ion-toolbar>
      </ion-footer>
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
    name: "order",
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
    data() {
      return {
        quantity: 1,
        price: 4.53,
        deliveryFee: 1.0,
        walletBalance: 1000,
        discountApplied: true,
        deliveryType: "delivery",
      };
    },
    computed: {
      grandTotal() {
        let total = this.price * this.quantity;
        if (this.deliveryType === "delivery") {
          total += this.deliveryFee;
        }
        return total;
      },
    },
    methods: {
      decreaseQuantity() {
        if (this.quantity > 1) {
          this.quantity -= 1;
        }
      },
      increaseQuantity() {
        this.quantity += 1;
      },
      toggleDeliveryType(event: CustomEvent) {
        this.deliveryType = event.detail.value;
      },
      placeOrder() {
        if (this.grandTotal <= this.walletBalance) {
          alert("Order placed successfully!");
        } else {
          alert("Insufficient wallet balance.");
        }
      },
      async editAddress() {
            this.$router.push('/deliver')
        },
      addNote() {
        console.log("Add Note Clicked");
      },
      refreshPage() {
    console.log("Refreshing content...");
    location.reload(); 
  },
    },
  });
  </script>
  
  <style scoped>
  
  .coffee-btn-outline {
    border: 2px solid #b5723a;
    color: #b5723a;
    font-weight: bold;
    border-radius: 20px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .coffee-btn-outline:hover {
    background-color: #b5723a;
    color: #fff;
  }
  
  .coffee-btn-primary {
    background-color: #b5723a; 
    color: #fff;
    font-weight: bold;
    border-radius: 25px;
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .coffee-btn-primary:disabled {
    background-color: #d3d3d3; 
    color: #ffffff;
  }
  
  .coffee-btn-primary:hover:not(:disabled) {
    background-color: #a1622d; 
    transform: scale(1.05);
  }

  .order-toggle {
    margin: 16px 0;
  }
  
  .delivery-address-section {
    padding: 16px;
  }
  
  .section-title {
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .order-item {
    padding: 8px 16px;
    display: flex;
    align-items: center;
  }
  
  .quantity {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .discount-section {
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .payment-summary {
    padding: 16px;
  }
  
  .payment-detail {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
  }
  
  .wallet-info {
    text-align: left;
  }
  .refresh-container {
  position: absolute;
  top: 5px; 
  left: 90%;
  transform: translateX(-50%);
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.coffee-cup {
  position: relative;
  background-color: #6f4e37; 
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  font-size: 1.5rem;
  color: #fff;
}

.steam {
  position: absolute;
  width: 8px;
  height: 20px;
  background: rgba(255, 255, 255, 0.6);
  top: -15px;
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
    transform: translateX(-50%) translateY(-30px);
  }
}
  </style>
  