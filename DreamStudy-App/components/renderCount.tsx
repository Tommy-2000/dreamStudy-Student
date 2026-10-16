import { useRef } from 'react';
import { TextCard } from './textCard';

export default function RenderCount({ componentName = '' }) {
  const renderCount = useRef(0);

  renderCount.current = renderCount.current + 1;

  return (
    <TextCard>
      Component - {componentName} has rendered {renderCount.current} times
    </TextCard>
  );
}
