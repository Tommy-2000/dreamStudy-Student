import { IoniconsIconName } from '@react-native-vector-icons/ionicons';
import { AnimatedPressableOptions } from 'pressto';
import {
  AccessibilityProps,
  ColorValue,
  StyleProp,
  ViewStyle
} from 'react-native';
import { AnimatedStyle } from 'react-native-reanimated';

export interface MaterialButtonProps extends AccessibilityProps {
  onPress?: ((options: AnimatedPressableOptions) => void) | undefined;
  style: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
  title?: string | undefined;
  color?: ColorValue | undefined;
}

export interface MaterialIconButtonProps extends MaterialButtonProps {
  iconName: IoniconsIconName;
  iconSize: number;
}

export interface ToolbarButtonProps extends MaterialIconButtonProps {
  selected?: boolean;
}
