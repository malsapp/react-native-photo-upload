declare module "react-native-photo-upload" {
  import { StyleProp, ViewStyle } from "react-native";

  interface ImagePickerResponse {
    customButton: string;
    didCancel: boolean;
    error: string;
    data: string;
    uri: string;
    origURL?: string;
    isVertical: boolean;
    width: number;
    height: number;
    fileSize: number;
    type?: string;
    fileName?: string;
    path?: string;
    latitude?: number;
    longitude?: number;
    timestamp?: string;
  }

  interface ImageResizerResponse {
    path: string;
    uri: string;
    size?: number;
    name?: string;
  }

  interface PhotoUploadProps {
    /** Style object for the image container */
    containerStyle?: StyleProp<ViewStyle>;
    /** Title for the image picker prompt, default is 'Select Photo' */
    photoPickerTitle?: string;
    /** the resized image height, default is 300 */
    height?: number;
    /** the resized image width, default is 300 */
    width?: number;
    /** The format desired of the resized image, 'JPEG' or 'PNG' default is 'JPEG' */
    format?: "JPEG" | "PNG";
    /** The quality of the resized image indicated by a number between 1 and 100, default is 80 */
    quality?: number;
    /** function which takes the base64 string of the new image as parameter */
    onPhotoSelect?: (base64: string) => void;
    /** fires if any error occur with response */
    onError?: (err: Error) => void;
    /** fires on tap custom button */
    onTapCustomButton?: (customButton: string) => void;
    /** fires when user starts (useful for loading, etc) */
    onStart?: () => void;
    /** fires when user cancel */
    onCancel?: (reason: string) => void;
    /** fires on response exists */
    onResponse?: (response: ImagePickerResponse) => void;
    /** fires after render */
    onRender?: () => void;
    /** fires when image resized is ready */
    onResizedImageUri?: (response: ImageResizerResponse) => void;
    /** react-native-image-picker props */
    imagePickerProps?: object;

  }
  
  export default class PhotoUpload extends React.Component<PhotoUploadProps> {}
}
