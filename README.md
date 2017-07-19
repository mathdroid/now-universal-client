# now-universal-client

> 🎁 Promise-based Universal API wrapper for now.sh

## Usage

```sh
$ npm install --save now-universal-client
```

```js
const {getDeployments} = require('now-universal-client')
const TOKEN = 'YOUR TOKEN'

let deployments

try {
  deployments = await getDeployments({token: TOKEN})
} catch (err) {
  console.error(err)
}

console.log(deployments)
```

## API

```js
const now = require('now-universal-client')
```

### now.getDeployments({token}) ⇒ <code>Promise</code>
Returns an array with all deployments.

**Kind**: instance method of <code>[Now](#Now)</code>  
**See**: https://zeit.co/api#list-endpoint  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |

Resolves to an array of deployments.

<a name="Now+getDeployment"></a>

### now.getDeployment({token, id}) ⇒ <code>Promise</code>
Returns an object with deployment data.

**Kind**: instance method of <code>[Now](#Now)</code>  
**See**: https://zeit.co/api#get-endpoint  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| id | <code>String</code> | ID of deployment |

Resolves to the deployment object.

<a name="Now+createDeployment"></a>

### now.createDeployment({token, data}) ⇒ <code>Promise</code>
Creates a new deployment and returns its data.

**Kind**: instance method of <code>[Now](#Now)</code>  
**See**: https://zeit.co/api#instant-endpoint  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| data | <code>Object</code> | The keys should represent a file path, with their respective values containing the file contents. |

Resolves to the deployment object.

<a name="Now+deleteDeployment"></a>

### now.deleteDeployment({token, id}) ⇒ <code>Promise</code>
Deletes a deployment and returns its data.

**Kind**: instance method of <code>[Now](#Now)</code>  
**See**: https://zeit.co/api#rm-endpoint  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| id | <code>String</code> | ID of deployment |

Resolves to the deployment object.

<a name="Now+getFiles"></a>

### now.getFiles({token, id}) ⇒ <code>Promise</code>
Returns an array with the file structure.

**Kind**: instance method of <code>[Now](#Now)</code>  
**See**: https://zeit.co/api#file-structure-endpoint  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| id | <code>String</code> | ID of deployment |

Resolves to an array with the file structure.

<a name="Now+getFile"></a>

### now.getFile({token, id, fileId}) ⇒ <code>Promise</code>
Returns the content of a file either as string or object, depending on the filetype.

**Kind**: instance method of <code>[Now](#Now)</code>  
**See**: https://zeit.co/api#file--endpoint  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| id | <code>String</code> | ID of deployment |
| fileId | <code>String</code> | ID of the file |

Resolves to either a String or an Object of the file's content.

<a name="Now+getDomains"></a>

## now.getDomains({token}) ⇒ <code>Promise</code>
Returns an array with all domain names and related aliases.

**Kind**: instance method of <code>[Now](#Now)</code>
**See**: https://zeit.co/api#get-domains

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |

Resolves to an array with all domain names and related aliases.

<a name="Now+addDomain"></a>

## now.addDomain({token, domain}) ⇒ <code>Promise</code>
Adds a new domain and returns its data.

**Kind**: instance method of <code>[Now](#Now)</code>
**See**: https://zeit.co/api#post.domains

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| domain | <code>object</code> | An object containing a string `name` and a boolean `isExternalDNS` |

Resolves to an object with the domain's data.

<a name="Now+deleteDomain"></a>

## now.deleteDomain({token, name}) ⇒ <code>Promise</code>
Deletes a domain name.

**Kind**: instance method of <code>[Now](#Now)</code>
**See**: https://zeit.co/api#delete-domains

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| name | <code>String</code> | Domain name |

<a name="Now+getDomainRecords"></a>

## now.getDomainRecords({token, domain}) ⇒ <code>Promise</code>
Returns an array with all DNS records configured for a domain name.

**Kind**: instance method of <code>[Now](#Now)</code>
**See**: https://zeit.co/api#get-domain-records

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| name | <code>String</code> | Domain name |

Resolves to an array with all DNS records configured for a domain name.

## now.addDomainRecord({token, domain, recordData}) ⇒ <code>Promise</code>
Adds a new DNS record for a domain.

**Kind**: instance method of <code>[Now](#Now)</code>
**See**: https://zeit.co/api#post-domain-records

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| domain | <code>object</code> | An object containing a string `name` and a boolean `isExternalDNS` |
| recordData | <code>object</code> | An object containing a description of the new record according to the [documentation](https://zeit.co/api#post-domain-records). |

<a name="Now+deleteDomainRecord"></a>

## now.deleteDomainRecord({token, name, recordId}) ⇒ <code>Promise</code>
Deletes a DNS record associated with a domain.

**Kind**: instance method of <code>[Now](#Now)</code>
**See**: https://zeit.co/api#delete-domain-records

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| domain | <code>String</code> | Domain name |
| recordId | <code>String</code> | Record ID |

<a name="Now+getCertificates"></a>

## now.getCertificates({token, [cn]}) ⇒ <code>Promise</code>
Returns an array of all certificates.

**Kind**: instance method of <code>[Now](#Now)</code>
**See**: https://zeit.co/api#get-certs

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| [cn] | <code>String</code> | Common Name |

Resolves to an array of all certificates.

<a name="Now+createCertificate"></a>

## now.createCertificate({token, cn}) ⇒ <code>Promise</code>
Creates a new certificate for a domain registered to the user.

**Kind**: instance method of <code>[Now](#Now)</code>
**See**: https://zeit.co/api#post-certs

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| cn | <code>String</code> | Common Name |

<a name="Now+renewCertificate"></a>

## now.renewCertificate({token, cn}) ⇒ <code>Promise</code>
Renews an existing certificate.

**Kind**: instance method of <code>[Now](#Now)</code>
**See**: https://zeit.co/api#post-certs

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| cn | <code>String</code> | Common Name |

<a name="Now+replaceCertificate"></a>

## now.replaceCertificate({token, cn, cert, key, [ca]}) ⇒ <code>Promise</code>
Replace an existing certificate.

**Kind**: instance method of <code>[Now](#Now)</code>
**See**: https://zeit.co/api#put-certs

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| cn | <code>String</code> | Common Name |
| cert | <code>String</code> | X.509 certificate |
| key | <code>String</code> | Private key for the certificate |
| ca | <code>String</code> | CA certificate chain |

Resolves to an object with the new certificate details.

<a name="Now+deleteCertificate"></a>

## now.deleteCertificate({token, cn}) ⇒ <code>Promise</code>
Deletes a certificate.

**Kind**: instance method of <code>[Now](#Now)</code>
**See**: https://zeit.co/api#delete-certs

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| cn | <code>String</code> | Common Name |

<a name="Now+getAliases"></a>

### now.getAliases({token, [id]}) ⇒ <code>Promise</code>
Returns an array with all aliases.

**Kind**: instance method of <code>[Now](#Now)</code>  
**See**: https://zeit.co/api#user-aliases  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| [id OR callback] | <code>String</code> &#124; <code>function</code> | ID of deployment or callback |

Resolves to an array with all aliases.

<a name="Now+createAlias"></a>

### now.createAlias({token, id, alias}) ⇒ <code>Promise</code>
Creates an alias for the given deployment.

**Kind**: instance method of <code>[Now](#Now)</code>  
**See**: https://zeit.co/api#create-alias  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| id | <code>String</code> | ID of deployment |
| alias | <code>String</code> | Hostname or custom url for the alias |

Resolves to an Object with the alias data

<a name="Now+deleteAlias"></a>

### now.deleteAlias({token, id}) ⇒ <code>Promise</code>
Deletes an alias and returns a status.

**Kind**: instance method of <code>[Now](#Now)</code>  
**See**: https://zeit.co/api#delete-user-aliases  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| id | <code>String</code> | ID of alias |

Resolves to the status

<a name="Now+getSecrets"></a>

### now.getSecrets({token, id}) ⇒ <code>Promise</code>
Returns an array with all secrets.

**Kind**: instance method of <code>[Now](#Now)</code>  
**See**: https://zeit.co/api#get-now-secrets  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| [id OR callback] | <code>String</code> &#124; <code>function</code> | ID of deployment or callback |

Resolves to an array with all secrets.

<a name="Now+createSecret"></a>

### now.createSecret({token, name, value}) ⇒ <code>Promise</code>
Creates a secret and returns its ID.

**Kind**: instance method of <code>[Now](#Now)</code>  
**See**: https://zeit.co/api#post-now-secrets  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| name | <code>String</code> | name for the secret |
| value | <code>String</code> | value for the secret |

Resolves to a secret's ID.

<a name="Now+renameSecret"></a>

### now.renameSecret({token, id, name}) ⇒ <code>Promise</code>
Changes the name of the given secret and returns its ID and name.

**Kind**: instance method of <code>[Now](#Now)</code>  
**See**: https://zeit.co/api#patch-now-secrets  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| id | <code>String</code> | id or name of the secret |
| name | <code>String</code> | new name for the secret |

Resolves to a secret's ID and name.

<a name="Now+deleteSecret"></a>

### now.deleteSecret({token, id}) ⇒ <code>Promise</code>
Deletes a secret and returns its ID.

**Kind**: instance method of <code>[Now](#Now)</code>  
**See**: https://zeit.co/api#delete-now-secrets  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Your ZEIT token |
| id | <code>String</code> | ID or name of the secret |

Resolves to a secret's status.

## License

See [License](./LICENSE).
