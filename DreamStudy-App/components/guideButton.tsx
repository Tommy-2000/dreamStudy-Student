import { buttonStyles } from '@/utils/appStyles';
import Ionicons from '@react-native-vector-icons/ionicons';
import { createAnimatedPressable } from 'pressto';
import { Card } from './card';

const PressableRipple = createAnimatedPressable(progress => {
  'worklet';
  return {
    transform: [{ skewY: `${progress * 10}deg` }]
  };
});

export function GuideButton() {
  return (
    <PressableRipple style={buttonStyles.guideButton}>
      <Card>
        <Ionicons name="help" size={50} />
      </Card>
    </PressableRipple>
  );
}
