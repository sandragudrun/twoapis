const scopes = ['user-read-private', 'user-read-email'],
  redirectUri = 'https://example.com/callback',
  clientId = '369e2a1bfccc4d1fb0332f94cdc38d2b',
  state = 'some-state-of-my-choice';

const SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: '369e2a1bfccc4d1fb0332f94cdc38d2b',
  clientSecret: '601ceb4c8e02431393cdd87ff3fd23fc',
  redirectUri: 'https://example.com/callback'
});

// Create the authorization URL
// var authorizeURL = spotifyApi.createAuthorizeURL(scopes,state);
// console.log(authorizeURL);
const code= "AQBOVH8J_OIeI3sZv1PfVS10SzlZevqi1K9i0mL0eMxcImfEW_Z8IS9M4lkFwDOf50lpZAUrT4SddkJP-2vpe4Vxgg9Xqzgz_Lbv9_xSb7fe2a1ZVmLWGjDVw3QhzZXviPNvk8bFytVSULYXCSwtWXyuAHMOOdt7AlGslk9Rpd3LmJOtMGQaX0g5V6PB3AC2416RPGn-MiqHNyHddK1FpcXz0tNYzKJqyqmeO9ZRbMRolJPEL8lFAw";

Retrieve an access token and a refresh token
spotifyApi.authorizationCodeGrant(code).then(
    function(data) {
      console.log('The token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
      console.log('The refresh token is ' + data.body['refresh_token']);
  
      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(data.body['access_token']);
      spotifyApi.setRefreshToken(data.body['refresh_token']);
    },
    function(err) {
      console.log('Something went wrong!', err);
    }
  );
  
/// Search tracks whose name, album or artist contains 'Love'
spotifyApi.searchTracks('Love')
.then(function(data) {
  console.log('Search by "Love"', data.body);
}, function(err) {
  console.error(err);
});