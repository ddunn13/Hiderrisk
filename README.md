# Hiderrisk

Hiderrisk is a library which allows you to obfuscate strings to keep sensitive information secure

## Installation


```bash
npm install hiderrisk
```

## Usage

```javascript
import hiderrisk from 'hiderrisk';

//default use
const word = hiderrisk('word');
//output w*r*

//use of custom character
const word = hiderrisk('word', '%%');
//output w%%r%%

//use of setting percentage coverage of word
const word = hiderrisk('word', '%%', 100);
//output %%%%%%%%
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)