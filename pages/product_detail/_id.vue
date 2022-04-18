<template>
  <div class="section">
    <div class="card is-clearfix columns">
      <figure class="card-image is-480x480 column is-one-thirds">
        <img :src="product.src" alt="Placeholder image" />
      </figure>
      <div class="card-content column is-two-thirds">
        <div class="card-content__title">
          <h2 class="title is-4">
            {{ product.title }}
            <button
              class="button is-small"
              :title="removeFromFavouriteLabel"
              v-show="product.isFavourite"
              @click="removeFromFavourite(product.id)"
            >
              <span class="icon is-small">
                <i class="fa fa-heart"></i>
              </span>
            </button>
            <button
              class="button is-small"
              :title="addToFavouriteLabel"
              v-show="!product.isFavourite"
              @click="saveToFavorite(product.id)"
            >
              <span class="icon is-small">
                <i class="far fa-heart"></i>
              </span>
            </button>
          </h2>
        </div>
        <div class="card-content__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>
        </div>
        <div class="card-content__ratings">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div>
        <div class="card-content__reviews">
          <div class="is-pulled-left">
            <p>
              <strong>{{
                product.reviews > 0
                  ? `${product.reviews} Reviews`
                  : "No reviews"
              }}</strong>
            </p>
          </div>
          <div class=" is-rounded is-small is-pulled-right">
            <button
              :disabled="product.quantity <= 1 ? true : false"
              class="button is-small"
              @click="decreaseItem(product)"
            >
              -
            </button>
            <input
              class="input is-outlined"
              type="text"
              :value="product.quantity"
              style="width: 40px ;height: 30px"
            />
            <button class="button is-small" @click="increaseItem(product)">
              +
            </button>
          </div>
        </div>
        <div class="card-content__price is-pulled-left">
          <span class="title is-3"
            ><strong>{{ product.price }}&euro;</strong></span
          >
        </div>
        <div class="card-content__btn is-pulled-right">
          <button
            class="button is-primary"
            v-if="!isAddedBtn"
            @click="addToCart(product.id)"
          >
            {{ addToCartLabel }}
          </button>
          <button
            class="button is-text"
            v-if="isAddedBtn"
            @click="removeFromCart(product.id)"
          >
            {{ removeFromCartLabel }}
          </button>
        </div>
        <div class="control has-icons-left has-icons-right cmt-input">
          <input class="input" type="text" placeholder="Comment here..." />
          <span class="icon is-small is-left">
            <i class="fa fa-commenting" aria-hidden="true"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product_detail-id",

  validate({ params }) {
    return /^\d+$/.test(params.id);
  },

  data() {
    return {
      addToCartLabel: "Add to cart",
      removeFromCartLabel: "Remove from cart",
      addToFavouriteLabel: "Add to favourite",
      removeFromFavouriteLabel: "Remove from favourite",
      product: {},
      selected: 1,
      quantityArray: []
    };
  },

  mounted() {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
    this.selected = this.product.quantity;

    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }
  },

  computed: {
    isAddedBtn() {
      return this.product.isAddedBtn;
    }
  },

  methods: {
    increaseItem(item) {
      let data = {
        id: item.id,
        quantity: item.quantity + 1
      };
      this.$store.commit("quantity", data);
    },
    decreaseItem(item) {
      let data = {
        id: item.id,
        quantity: item.quantity - 1
      };
      this.$store.commit("quantity", data);
    },
    addToCart(id) {
      let data = {
        id: id,
        status: true
      };
      this.$store.commit("addToCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    removeFromCart(id) {
      let data = {
        id: id,
        status: false
      };
      this.$store.commit("removeFromCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    onSelectQuantity(id) {
      let data = {
        id: id,
        quantity: this.selected
      };
      this.$store.commit("quantity", data);
    },
    saveToFavorite(id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit("addToFavourite", id);
      } else {
        this.$store.commit("showLoginModal", true);
      }
    },
    removeFromFavourite(id) {
      this.$store.commit("removeFromFavourite", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.cmt-input {
  width: 300px;
}
.card-content {
  padding: 15px 10px 15px 0;

  &__text {
    margin: 15px 0;
  }
  &__reviews {
    display: inline-block;
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
