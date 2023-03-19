/**
Check if the process is running as superuser
@returns Whether the current process is a superuser
@example
```js
import isSuper from 'is-super'
// or
const isSuper = require('is-super')

console.log(isSuper());
//=> false
```
*/
export default function isSuper(): boolean;