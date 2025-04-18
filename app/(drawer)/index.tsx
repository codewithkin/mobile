import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { Text } from '~/components/nativewindui/Text';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Text>Hi</Text>
      </Container>
    </>
  );
}
