# bin/bash

rm hsl-app-main.zip
rm -rf hsl-app-main
wget https://github.com/Hanslick-Online/hsl-app/archive/refs/heads/main.zip
unzip main
mv hsl-app-main/*.* ./
mv hsl-app-main/xslt/ ./xslt
mv hsl-app-main/html/ ./html
mv hsl-app-main/build_app/ ./build_app
rm -rf hsl-app-main
rm main.zip