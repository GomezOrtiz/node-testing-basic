npm init -y

npm install --save-dev jest

"scripts": {
"test": "jest -i",
"test:watch": "jest -i --watchAll",
"coverage": "jest -i --coverage",
"coverage:coveralls": "jest -i --coverage --coverageReporters=text-lcov | coveralls"
},