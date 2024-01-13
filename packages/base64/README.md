# Base64

Base64 is a relatively small package for encoding and decoding base64 to normal strings. This package supports both local and global import.

Base64 comes with two functions: ```stringToBase64()```, which converts a string to base64 encoding, and ```base64ToString()```, which converts a base64 string into a normal string.

```
var b64 = require("base64");
var encoded = b64.stringToBase64("Hello World!"); // "SGVsbG8gV29ybGQh"
var decoded = b64.base64ToString(encoded); // "Hello World!"
```

**Current version:** 1.0.0
