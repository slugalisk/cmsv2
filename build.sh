#! /bin/bash

set -e

cd client
npm install
npm run build
mv build ../