import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StatusBar, FlatList, Text} from 'react-native';
import styles from './styles';
import {DeveloperCard} from '../../components';
import {getTopUsers} from '../../services';
import axios from 'axios';

const mock = [
  {
    login: 'octocat',
    id: 1,
    node_id: 'MDQ6VXNlcjE=',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
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
  {
    login: 'octocat',
    id: 1,
    node_id: 'MDQ6VXNlcjE=',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
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

export const Home = ({navigation}) => {
  const [githubUsers, setGithubUsers] = useState([]);
  const [loading, setLoading] = useState([]);

  // useEffect(() => {
  //   setLoading(false);
  // }, [githubUsers]);

  useEffect(() => {
    const subscribe = navigation.addListener('focus', async () => {
      axios
        .get('https://api.github.com/users?page=0&per_page=5', {
          Accept: 'application/vnd.github.v3+json',
        })
        .then(topUsers => {
          console.log('topUsers.data', topUsers.data);

          setGithubUsers(topUsers.data);
        })
        .catch(error => {
          console.log('error', error);
        });
    });
    return subscribe;
  });

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.backgroundStyle}>
        <Text>Top 5 Github users</Text>
        <Text>Tap the user name for more information</Text>

        <FlatList
          style={styles.list}
          extraData={githubUsers}
          data={githubUsers}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}) => {
            return (
              <DeveloperCard
                name={item.login}
                onPress={() => navigation.navigate('UserDetails', {user: item})}
              />
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};
