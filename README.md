# Ember CLI Torri Azure Provider (ECTAP) [![Code Climate](https://codeclimate.com/github/ghurlman/torii-azure-provider/badges/gpa.svg)](https://codeclimate.com/github/ghurlman/torii-azure-provider)

### TLDR

ECTAP is an Azure authentication provider for Torii, rolled up as an EmberCLI addon.

### Usage

In order to use ECTAP, you'll need an Ember CLI app (if you already have one, skip this):

```
$ ember new my-new-app
```

Then, add Torii and ECTAP to your project:

```
$ ember install:addon torii
$ ember install:addon ember-cli-torii-azure-provider
```

Now, edit `/config/environment.js` to add your Torii provider configuration, placing your Azure Client ID in the designated spot. If you need help creating an Azure app and getting that ID, [follow MSDN guidance](https://msdn.microsoft.com/library/azure/dn132599.aspx#BKMK_Adding):

```
module.exports = function(environment) {
  var ENV = {

  // ... other ENV config stuff here

   ENV['torii'] = {
      providers: {
        'azure-oauth2': {
          apiKey: 'AZURE APP CLIENT ID GOES HERE',
          redirect_uri: "APP URI GOES HERE",
          state: "STATE" // For CSRF, should be random & unguessable
        }
      }
    }

  return ENV;
};
```

With that, you *should* be good to go. For an example of how to use this with [Ember Simple Auth](http://ember-simple-auth.com/), check out [the sample app for ECTAP](https://github.com/ghurlman/torii-azure-auth-sample).

### License

The MIT License (MIT)

Copyright (c) 2015 Greg Hurlman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
