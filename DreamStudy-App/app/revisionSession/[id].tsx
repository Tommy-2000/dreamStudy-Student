import { Card } from '@/components/card';
import { TextCard } from '@/components/textCard';
import { useLocalSearchParams } from 'expo-router';

export default function RevisionSession() {
  const { id } = useLocalSearchParams();
  return (
    <Card>
      <TextCard>Revision Id: {id}</TextCard>
    </Card>
  );
}
