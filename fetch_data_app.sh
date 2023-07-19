# bin/bash

rm hsl-app-traktat-only.zip
rm -rf hsl-app-traktat-only
wget https://github.com/Hanslick-Online/hsl-app/archive/refs/heads/traktat-only.zip
unzip traktat-only
mv hsl-app-traktat-only/*.* ./
mv hsl-app-traktat-only/xslt/ ./xslt
mv hsl-app-traktat-only/html/ ./html
mv hsl-app-traktat-only/build_app/ ./build_app
rm -rf hsl-app-traktat-only
rm traktat-only.zip