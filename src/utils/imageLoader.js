const IMAGE_SIZES = {
  full: 'full',
  medium: 'medium',
  thumbnail: 'thumbnail',
}

const IMAGE_SIZE = Object.freeze(IMAGE_SIZES)

function imageLoader(path, size) {
  if (!IMAGE_SIZE[size]) {
    return require(`!!assets-loader!@images/${path}`)
  }

  if (size === IMAGE_SIZE.thumbnail) {
    return require(`!!assets-loader?width=400&height=400!@images/${path}`)
  } else if (size === IMAGE_SIZE.medium) {
    return require(`!!assets-loader?width=2500!@images/${path}`)
  } else if (size === IMAGE_SIZE.full) {
    return require(`!!assets-loader?width=10000&height=10000!@images/${path}`)
  }
}

export {
  imageLoader,
  IMAGE_SIZE,
}
