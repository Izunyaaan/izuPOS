<template>
  <div>
    <v-radio-group v-model="chosenMethod">
      <v-radio
        v-for="method in paymentMethods"
        :key="method"
        :label="method"
        :value="method"
      ></v-radio>
    </v-radio-group>
    <v-card v-if="displayPaymentGateway">
      <v-card-title> Stripe </v-card-title>

      <v-text-field v-model="test" label="Card Details"></v-text-field>
      <v-btn>Submit</v-btn>
    </v-card>
    <v-btn @click="submitPayment" v-if="showProceed">Proceed</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    showProceed: true,
    displayPaymentGateway: false,
    chosenMethod: null,
    test: "",
    paymentMethods: ["cash", "quickpay", "progressive pay", "merchant gateway"],
  }),
  methods: {
    submitPayment: function () {
      if (this.chosenMethod == null) {
        alert("Please select a payment method");
      } else if (this.chosenMethod !== "merchant gateway") {
        this.$router.push("/checkout/" + this.location);
      } else {
        this.displayPaymentGateway = !this.displayPaymentGateway;
        this.showProceed = !this.showProceed;
      }
    },
  },
};
</script>

<style>
</style>