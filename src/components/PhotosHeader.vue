<template>
  <div class="flex text-white w-full items-center">
    <div class="flex flex-1">
      <p v-for="option in options"
         :class="['text-white mx-3 py-2 cursor-pointer', { 'border-b-2 border-juniper': selected === option.id }]"
         :key="option.id"
         @click="$emit('select', option.id)">{{ option.name }}</p>
    </div>
    <button :class="['fixed md:static p-3 bg-grey-dark rounded md:px-3 md:py-O left-5 bottom-5 z-10', { 'text-gray-500': isDownloading }]"
            :disabled="isDownloading"
            @click="$emit('download')">
      {{
        numberOfSelectedPhotos ?
          `Télécharger ${numberOfSelectedPhotos} photo${numberOfSelectedPhotos > 1 ? 's' : ''}` :
          'Télécharger tout'
      }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isDownloading: Boolean,
    numberOfSelectedPhotos: Number,
    options: Array,
    selected: String,
  }
}
</script>
