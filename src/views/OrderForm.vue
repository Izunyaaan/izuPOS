<template>
  <div class="pa-3">
    <v-container fluid>
      <h1>Menu</h1>
      <v-row dense>
        <v-card
          v-for="(menu, index) in sampleMenu"
          :key="index"
          width="25rem"
          class="ma-3"
          outlined
          tile
        >
          <v-row>
            <v-col width="50%">
              <img :src="menu.url" class="thumbnail ma-2" />
            </v-col>
            <v-col width="50%">
              <v-card-title style="word-break: break-word">
                {{ menu.name }}
              </v-card-title>
              <v-card-subtitle> ${{ menu.price }} </v-card-subtitle>
              <v-card-text>
                {{ menu.description }}
                <v-sheet v-if="menu.options">
                  <details open>
                    <summary>Options</summary>
                    <v-radio-group>
                      <v-radio
                        v-for="(option, indexoption) in menu.options"
                        :key="indexoption"
                        :label="option.name"
                        :value="option.name"
                      ></v-radio>
                    </v-radio-group>
                  </details>
                </v-sheet>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="mr-5 mb-2" v-if="menu.options"
                  >Show Details</v-btn
                >
                <v-btn
                  class="mr-5 mb-2"
                  @click="placeOrder(menu.id)"
                  v-else-if="!menu.isInStock"
                  >Order</v-btn
                >
                <v-btn class="mr-5 mb-2" v-else disabled>Out Of Stock</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
      <v-row>
        <v-card width="100%">
          <v-card-title>Your order</v-card-title>
          <v-list v-for="(item, index) in order" :key="index">
            <v-list-item>
              {{ item.itemName }} $ {{ item.itemPrice }}
            </v-list-item>
          </v-list>
        </v-card>
      </v-row>
      <v-row class="justify-center">
        <v-btn @click="checkout">Pay Now</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["location"],
  created() {
    fetch(
      "https://mocha-pos-default-rtdb.asia-southeast1.firebasedatabase.app/0123.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.sampleMenu = data["menu-list"][0].menu;
      });
  },
  data: () => ({
    sampleMenu: null,
    // sampleMenu: [
    //   {
    //     id: 0,
    //     name: "Coffee",
    //     price: 4,
    //     description: "Soup of the devil.",
    //     isInStock: true,
    //     imgURL:
    //       "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg",
    //   },
    //   {
    //     id: 1,
    //     name: "Tea",
    //     price: 1.99,
    //     description: "The beverage of the civilized",
    //     isInStock: true,
    //     imgURL:
    //       "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/22/different-types-of-tea-FT-BLOG0621.jpg",
    //   },
    //   {
    //     id: 2,
    //     name: "Scones",
    //     price: 5.99,
    //     description: "Sinful delights",
    //     isInStock: true,
    //     imgURL:
    //       "https://www.christinascucina.com/wp-content/uploads/2012/05/fullsizeoutput_7cc2-735x513.jpeg",
    //   },
    //   {
    //     id: 3,
    //     name: "Beer",
    //     price: 0.99,
    //     description: "Haram",
    //     isInStock: false,
    //     imgURL: "https://brouwland.com/img/cms/Cat_Beer.jpg",
    //   },
    // ],
    menuDetails: [],
    order: [],
  }),
  methods: {
    placeOrder: function (id) {
      this.order.push({
        itemName: this.sampleMenu[id].name,
        itemPrice: this.sampleMenu[id].price,
      });
    },
    checkout: function () {
      this.$router.push("/paymentMethod/" + this.location);
    },
  },
};
</script>

<style scoped>
.thumbnail {
  width: 100%;
  aspect-ratio: 1;
}
</style>