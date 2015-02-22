import Oauth2 from 'torii/providers/oauth2-code';
import {configurable} from 'torii/configuration';

/**
 * This class implements authentication against Github
 * using the OAuth2 authorization flow in a popup window.
 * @class
 */
var AzureOauth2 = Oauth2.extend({
  name:       'azure-oauth2',
  baseUrl:    'https://login.windows.net/common/oauth2/authorize',

  // additional url params that this provider requires
  requiredUrlParams: ['state'],

  responseParams: ['code','session_state','state'],

  state: 'STATE',

  response_type: "code",

  redirectUri: configurable('redirectUri', function(){
    // A hack that allows redirectUri to be configurable
    // but default to the superclass
    return this._super();
  })
});

export default AzureOauth2;