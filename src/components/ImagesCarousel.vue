<template>
  <ClientOnly>
    <div class="fixed inset-0 z-2000 bg-black flex items-center"
         v-show="visible">
      <div class="absolute inset-0 flex flex-col">
        <div class="flex justify-between text-white">
          <button class="header-button"
                  @click="$emit('close')">
            <FontAwesome :icon="['fal', 'times']"
                         size="2x" />
          </button>
          <button class="header-button"
                  @click="$emit('download')">
            <FontAwesome :icon="['fal', 'save']"
                         size="2x" />
          </button>
        </div>
        <div class="flex flex-1 justify-between">
          <div class="nav-area"
               @click="onNavButtonClick(-1)">
            <FontAwesome :class="['nav-button left-8', { 'nav-button--disabled': isFirst }]"
                         icon="chevron-circle-left"
                         size="2x" />
          </div>
          <div class="nav-area"
               @click="onNavButtonClick(1)">
            <FontAwesome :class="['nav-button right-8', { 'nav-button--disabled': isLast }]"
                         icon="chevron-circle-right"
                         size="2x" />
          </div>
        </div>
      </div>
      <Carousel class="z-10"
                :navigateTo="[value, isAnimated]"
                :paginationEnabled="false"
                :per-page="1"
                :speed="300"
                @pageChange="handleChange($event)">
        <Slide class="flex items-center"
               v-for="image of images" :key="image.id">
          <g-image class="max-h-screen max-w-screen object-contain"
                   :src="image.medium" />
        </Slide>
      </Carousel>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  components: {
    Carousel: () =>
        import ('vue-carousel')
            .then(m => m.Carousel)
            .catch(),
    Slide: () =>
        import ('vue-carousel')
            .then(m => m.Slide)
            .catch()
  },
  props: {
    images: Array,
    value: Number,
    visible: Boolean,
  },
  data() {
    return {
      isAnimated: false,
    }
  },
  computed: {
    isFirst() {
      return this.value === 0
    },
    isLast() {
      return this.value === this.images.length - 1
    }
  },
  watch: {
    visible(current, prev) {
      if (prev) {
        this.isAnimated = false
      }
    }
  },
  methods: {
    handleChange(page) {
      if (0 <= page && page <= this.images.length - 1) {
        this.$emit('input', page)
      }
    },
    onNavButtonClick(value) {
      if (!this.isAnimated) {
        this.isAnimated = true
      }

      this.handleChange(this.value + value)
    }
  }
}
</script>

<style scoped>
.header-button {
  @apply p-3 sm:p-6 z-20
}

.nav-area {
  @apply h-full cursor-pointer hidden md:block opacity-0 md:hover:opacity-100 z-20;
  width: 200px;
}

.nav-button {
  @apply absolute top-1/2 transform -translate-y-1/2 text-white;
}

.nav-button--disabled {
  @apply text-grey-light;
}
</style>
