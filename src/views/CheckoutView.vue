<template>
  <v-card light>
    <v-card-title> Receipt </v-card-title>
    <v-card-text>
      Thank you for placing the order.<br />
      It will be delivered to {{ deliveryLocation }} ASAP.
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["location"],
  data: () => ({
    listLocation: ["Room 1", "Room 2", "Room 3", "Room 4", "Room 5"],
  }),
  computed: {
    deliveryLocation() {
      return this.listLocation[this.location];
    },
  },
};
</script>

<style>
</style>