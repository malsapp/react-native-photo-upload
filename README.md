# react-native-photo-upload

![screenshot](http://g.recordit.co/egzm6lL96l.gif)

This component handles all the hassle in dealing with photos in react native, it's built on top of `react-native-image-picker`, `react-native-image-resizer` and `react-native-fs`
it takes an image component and upon click, you get the image picker prompt, get the base64 string of the image and the image source changes to whatever image was picked.

## Installing

npm or yarn install

```
npm install react-native-photo-upload --save
```
or
```
yarn add react-native-photo-upload
```
## Automatic Installation

link `react-native-image-picker`, `react-native-image-resizer` and `react-native-fs` which the component depends on
```
react-native link react-native-image-picker
react-native link react-native-image-resizer
react-native link react-native-fs
```
#### The following steps are required by `react-native-image-picker` for both Android and IOS even with automatic linking

### Android

* Update the android build tools version to `2.2.+` in `android/build.gradle` (required step by `react-native-image-picker):
```gradle
buildscript {
    ...
    dependencies {
        classpath 'com.android.tools.build:gradle:2.2.+' // <- USE 2.2.+ version
    }
    ...
}
...
```

* Update the gradle version to `2.14.1` in `android/gradle/wrapper/gradle-wrapper.properties`:
```
 ...
 distributionUrl=https\://services.gradle.org/distributions/gradle-2.14.1-all.zip
```

* Add the required permissions in `AndroidManifest.xml`:
```xml
 <uses-permission android:name="android.permission.CAMERA" />
 <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

### IOS
For iOS 10+, Add the `NSPhotoLibraryUsageDescription`, `NSCameraUsageDescription`, and `NSMicrophoneUsageDescription` (if allowing video) keys to your `Info.plist` with strings describing why your app needs these permissions. **Note: You will get a SIGABRT crash if you don't complete this step**
```
<plist version="1.0">
  <dict>
    ...
    <key>NSPhotoLibraryUsageDescription</key>
    <string>YOUR_REASON_FOR_USING_USER_PHOTOS_HERE</string>
    <key>NSCameraUsageDescription</key>
    <string>YOUR_REASON_FOR_USING_USER_CAMERA_HERE</string>
  </dict>
</plist>
```

## Manual Installation

check the docs of each library on how to link manually.

* [react-native-image-picker](https://github.com/react-community/react-native-image-picker)
* [react-native-image-resizer](https://github.com/bamlab/react-native-image-resizer)
* [react-native-fs](https://github.com/itinance/react-native-fs)

 ## Usage

 Wrap your default image inside the PhotoUpload component, the component wraps the image with TouchableOpacity, on press it will trigger the image picker prompt. after selecting a new image from the picker, the image source will get replaced with the new image base64 string as uri

 ```
  <PhotoUpload>
    <Image
      source={{
        uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
      }}
    />
  </PhotoUpload>
 ```

 ## Example

 ```
  import { Image } from 'react-native'
  import PhotoUpload from 'react-native-photo-upload'

  <PhotoUpload
    onPhotoSelect={avatar => {
      if (avatar) {
        console.log('Image base64 string: ', avatar)
      }
    }}
  >
    <Image
      style={{
        paddingVertical: 30,
        width: 150,
        height: 150,
        borderRadius: 75
      }}
      resizeMode='cover'
      source={{
        uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
      }}
    />
  </PhotoUpload>
 ```

 ## Props

 Prop | Type | Description
 -----|------|------------
 containerStyle | Object | Style object for the image container
 photoPickerTitle | String | Title for the image picker prompt, default is 'Select Photo'
 maxHeight | Number | the resized image max height, maintains aspect ratio, default is 600
 maxWidth | Number | the resized image max width, maintains aspect ratio default is 600
 format | String | The format desired of the resized image, 'JPEG' or 'PNG' default is 'JPEG'
 quality | Number | The quality of the resized image indicated by a number between 1 and 100, default is 100
 onPhotoSelect | Function | function which takes the base64 string of the new image as parameter
 onError | Function | fires if any error occur with response
 onTapCustomButton | Function | fires on tap custom button
 onStart | Function | fires when user starts (useful for loading, etc)
 onCancel | Function | fires when user cancel
 onResponse | Function | fires on response exists
 onRender | Function | fires after render
 onResizedImageUri | Function | fires when image resized is ready
 imagePickerProps | Object | Other props for react-native-image-picker 

