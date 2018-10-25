rm -rf dist
rm -rf build/dist
mkdir -p dist
mkdir -p build/dist/node_modules

cp package.json build/dist
cp index.js build/dist

babel app -d build/dist/app
cp -r app/assets build/dist/app

npm ls --production --parseable | node build/filter-node-modules.js | while read x; do echo node_modules/$x; cp -r node_modules/$x build/dist/node_modules; done

node build/create-zip.js
mv build/dist/patch.zip dist

build --tasks mac-x64,win-x64 --mirror https://npm.taobao.org/mirrors/nwjs/ build/dist