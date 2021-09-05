<template>
  <div :class="['relative group cursor-pointer transition-spacing transition-colors duration-200 bg-grey-dark', isSelected && 'p-3 md:p-4']"
       @click="$emit('click')">
    <g-image ref="imageRef"
             :src="image.thumbnail"  />
    <FontAwesome :class="['absolute right-2 top-2 md:right-3 md:top-3 cursor-pointer text-gray-400', { 'text-blue-500': isSelected, 'invisible md:group-hover:visible': !isSelected && !isSelecting }]"
                 :icon="isSelecting && !isSelected ? ['fal', 'circle'] : ['fas', 'check-circle']"
                 @click.stop="toggleSelect"
                 size="lg" />
  </div>
</template>

<script>
export default {
  props: {
    image: Object,
    isSelected: Boolean,
    isSelecting: Boolean,
  },
  computed: {
    selectedClass() {
      return 'text-blue-500'
    }
  },
  methods: {
    toggleSelect() {
      if (this.isSelected) {
        return this.$emit('unselect', this.image.id)
      }

      this.$emit('select', this.image)
    },
    onTouchStart(e) {
      this.timer = setTimeout(() => {
        this.toggleSelect()
        this.timer = null
      }, 750)
    },
    onTouchEnd() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    }
  },
  mounted() {
    this.$refs.imageRef.addEventListener('touchstart', this.onTouchStart)
    this.$refs.imageRef.addEventListener('touchend', this.onTouchEnd)
    this.$refs.imageRef.addEventListener('contextmenu', (e) => e.preventDefault())
  }
}
</script>
