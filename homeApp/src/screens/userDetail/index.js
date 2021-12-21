import React from 'react';
import {SafeAreaView, View, StatusBar, Image, Text} from 'react-native';
import styles from './styles';

const mock = [
  {
    login: 'octocat',
    id: 1,
    node_id: 'MDQ6VXNlcjE=',
    avatar_url: 'https://reactnative.dev/img/tiny_logo.png',
    gravatar_id: '',
    url: 'https://api.github.com/users/octocat',
    html_url: 'https://github.com/octocat',
    followers_url: 'https://api.github.com/users/octocat/followers',
    following_url:
      'https://api.github.com/users/octocat/following{/other_user}',
    gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url: 'https://api.github.com/users/octocat/events{/privacy}',
    received_events_url: 'https://api.github.com/users/octocat/received_events',
    type: 'User',
    site_admin: false,
  },
];

export const UserDetails = ({navigation, route}) => {
  const {login, avatar_url} = route.params.user;
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.backgroundStyle}>
        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={{
              uri: avatar_url,
            }}
          />
          <View style={styles.description}>
            <Text>{login}</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
