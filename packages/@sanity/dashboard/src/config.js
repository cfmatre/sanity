// import sanityConfig from 'config:sanity'
import customConfig from 'part:@sanity/dashboard/config'
import defaultConfig from './defaultConfig'

const config = Object.assign({}, customConfig)

config.title = config.title || defaultConfig.title

// eslint-disable-next-line no-process-env
config.mode = process.env.NODE_ENV || 'development'

if (!config.sections) {
  config.sections = defaultConfig.defaultSections
}

export default config
