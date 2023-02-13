import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {
  Appbar,
  Avatar,
  Button,
  Card,
  FAB,
  Paragraph,
  Provider as PaperProvider,
  Title,
} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <AwesomeIcon {...props} />,
      }}>
      <SafeAreaView style={styles.mainContainer}>
        <Appbar.Header
          style={{
            backgroundColor: '#0017ff',
          }}>
          <Appbar.BackAction />
          <Appbar.Content title={'Title'} subtitle={'Subtitle'} />
          <Appbar.Action icon={'search'} />
        </Appbar.Header>

        <PostCard />
      </SafeAreaView>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  mainContainer: {
    flex: 1,
  },
  outer: {
    flex: 1,
  },
  inner: {
    flex: 1,
  },
});
const LeftContent = (props: any) => <Avatar.Icon icon={'folder'} {...props} />;
const PostCard = () => (
  <Card
    style={{
      margin: 10,
    }}>
    <Card.Title title={'Title'} subtitle={'Subtitle'} left={LeftContent} />
    <Card.Content>
      <Title>Title</Title>
      <Paragraph>Description</Paragraph>
    </Card.Content>
    <Card.Cover
      style={{
        margin: 10,
      }}
      source={{
        uri: 'https://fastly.picsum.photos/id/923/536/354.jpg?hmac=N40itV6JyPJOXi8egJdNP0fXRteuorTKOitNJ2hfVxw',
      }}
    />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default App;
