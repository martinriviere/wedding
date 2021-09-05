<template>
  <div class="mx-auto grid gap-3">
    <ImagesCarousel :visible="isCarouselOpen"
                    :images="images"
                    v-model="carouselCurrentPage"
                    @close="isCarouselOpen = false"
                    @download="downloadCarouselImage" />
    <PhotosHeader :isDownloading="isDownloading" :numberOfSelectedPhotos="selectedPhotos.length"
                  :options="folders"
                  :selected="currentFolder"
                  @download="download"
                  @select="currentFolder = $event" />
    <div v-if="isDownloading">
      <ClipLoader />
      <p>Merci de patienter, le téléchargement est en cours et peut prendre du temps</p>
    </div>
    <Grid>
      <PhotoItem v-for="(item, index) in images"
                 :key="item.id"
                 :image="item"
                 :isSelected="selectedPhotos.some((image) => image.id === item.id)"
                 :isSelecting="isSelecting"
                 @click="handleClickImageItem(item, index)"
                 @select="handleSelect"
                 @unselect="handleUnselect" />
    </Grid>
  </div>
</template>

<script>
import { saveAs } from 'file-saver'
import streamSaver from 'streamsaver'
import { createWriter } from '../utils/createZip'
import { IMAGE_SIZE, imageLoader } from '../utils/imageLoader'
import PhotoItem from '../components/PhotoThumbnailItem.vue'
import PhotosHeader from '../components/PhotosHeader'
import ImagesCarousel from '../components/ImagesCarousel'

const folders = [
  {
    id: 'photobooth',
    name: 'Photobooth',
  },
  {
    id: 'audrey',
    name: 'Photographe',
  },
  {
    id: 'mairie',
    name: 'Mairie',
  },
]

export default {
  components: {
    ImagesCarousel,
    PhotoItem,
    PhotosHeader,
  },
  data() {
    return {
      carouselCurrentPage: 0,
      currentFolder: 'photobooth',
      folders,
      isCarouselOpen: false,
      isDownloading: false,
      isSelecting: false,
      selectedPhotos: [],
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!this.isCarouselOpen) {
      return next()
    }

    this.isCarouselOpen = false
    next(false)
  },
  computed: {
    images() {
      return this.$page[this.currentFolder].edges.map(({ node }) => {
        return {
          name: node.fileInfo.name + node.fileInfo.extension,
          id: node.id,
          full: imageLoader(node.fileInfo.path.replace('src/assets/img/', ''), IMAGE_SIZE.full),
          medium: imageLoader(node.fileInfo.path.replace('src/assets/img/', ''), IMAGE_SIZE.medium),
          thumbnail: imageLoader(node.fileInfo.path.replace('src/assets/img/', ''), IMAGE_SIZE.thumbnail),
        }
      })
    }
  },
  methods: {
    async download() {
      this.isDownloading = true

      if (!this.selectedPhotos.length) {
        await this.generateAndDownloadZip(this.images)
      } else {
        if (this.selectedPhotos.length === 1) {
          this.downloadOneImage(this.selectedPhotos[0])
        } else {
          await this.generateAndDownloadZip(this.selectedPhotos)
        }
        this.selectedPhotos = []
        this.isSelecting = false
      }

      this.isDownloading = false
    },
    downloadCarouselImage() {
      this.downloadOneImage(this.images[this.carouselCurrentPage])
    },
    downloadOneImage(image) {
      saveAs(image.full.src, image.name)
    },
    handleSelect(image) {
      if (!this.isSelecting) {
        this.isSelecting = true
      }
      this.selectedPhotos.push(image)
    },
    handleUnselect(id) {
      this.selectedPhotos = this.selectedPhotos.filter((item) => item.id !== id)
      if (!this.selectedPhotos.length) {
        this.isSelecting = false
      }
    },
    handleClickImageItem(image, index) {
      const selectedPhoto = this.selectedPhotos.find((photo) => photo.id === image.id)
      if (selectedPhoto) {
        return this.handleUnselect(selectedPhoto.id)
      }

      if (this.isSelecting) {
        return this.handleSelect(image)
      }

      this.carouselCurrentPage = index
      this.isCarouselOpen = true
    },
    async generateAndDownloadZip(photos) {
      if (!photos.length) {
        return
      }

      const fileStream = streamSaver.createWriteStream('Photos M&M.zip')
      const files = photos.values()
      createWriter({
        pull(ctrl) {
          const current = files.next()
          if (current.done) {
            ctrl.close()
          } else {
            const { full, name } = current.value
            return fetch(full.src).then(res => {
              ctrl.enqueue({
                name,
                stream: () => res.body
              })
            })
          }
        },
      }).pipeTo(fileStream)
    },
  }
}
</script>

<page-query>
query {
  photobooth: allPhotobooth {
    edges {
      node {
        id
        fileInfo {
          path
          name
          extension
        }
      }
    }
  }
  mairie: allMairie {
    edges {
      node {
        id
        fileInfo {
          path
          name
          extension
        }
      }
    }
  }
  audrey: allAudrey {
    edges {
      node {
        id
        fileInfo {
          path
          name
          extension
        }
      }
    }
  }
}
</page-query>
