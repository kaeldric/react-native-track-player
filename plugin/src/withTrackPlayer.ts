import {
  // AndroidConfig,
  ConfigPlugin,
  createRunOncePlugin,
  withInfoPlist,
} from '@expo/config-plugins'

const pkg = require('react-native-track-player/player/package.json')

export interface Props {}

/**
 * Adds to the `Info.plist`.
 *
 * @returns
 */
const withIosPermissions: ConfigPlugin<Props> = (c, {} = {}) => {
  return withInfoPlist(c, config => {
    // config.modResults.KeyName =
    //     config.modResults.KeyName ||
    //     'default-value';

    return config
  })
}

/**
 * Adds permissions to the `AndroidManifest.xml`
 */
const withAndroidPermissions: ConfigPlugin = config => {
  // return AndroidConfig.Permissions.withPermissions(config, [
  // ]);
  return config
}

const withTrackPlayer: ConfigPlugin<Props | void> = (config, props = {}) => {
  const _props = props ? props : {}
  config = withIosPermissions(config, _props)
  config = withAndroidPermissions(config)
  return config
}

export default createRunOncePlugin(withTrackPlayer, pkg.name, pkg.version)
