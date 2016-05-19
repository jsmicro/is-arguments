# JSMicro - Is Arguments

### **`isArguments(object)`**

Check does the given Javascript Object (array, object, string, etc) is an arguments.

### **`isNotArguments(object)`**

Check does the given Javascript Arguments (array, object, string, etc) is not an arguments.

## Browser Usage

```bash
bower install --save jsmicro-is-arguments
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-arguments/index.js">
<script type="text/javascript">
    function test() {
        var nbr = 200;
    
        // Available in the window object.
        isArguments(arguments);      // true
        isArguments(nbr);      // false
        isNotArguments(nbr);   // true
    }
    test();
</script>
```

## NodeJS Usage

```bash
npm install --save jsmicro-is-arguments
```

```js
const obj = require('jsmicro-is-arguments');

function test() {
    // Available in the global object.
    isArguments(arguments); // true
    isArguments(23322333); // false
    isNotArguments(23234); // true
    
    // Also available in the export object.
    obj.isArguments(arguments); // true
    obj.isArguments(23322333); // false
    obj.isNotArguments(23333); // true
}
test();
```

## Changelogs

#### **`v1.0.0 - May 19, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)
