#!/bin/bash

# Usage: ./build-release.sh v1.2.0
# OR:    npm run build:release v1.2.0

VERSION=$1

if [ -z "$VERSION" ]; then
  echo "❌ Please provide a version number (e.g., ./build-release.sh v1.2.0)"
  exit 1
fi

# Remove "v" prefix for package.json compatibility
CLEAN_VERSION=${VERSION#v}
ZIP_NAME="ClarityBots-$VERSION.zip"

echo "🔄 Updating version in package.json to $CLEAN_VERSION..."
# Use Node to update package.json
node -e "
let pkg = require('./package.json');
pkg.version = '$CLEAN_VERSION';
require('fs').writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

echo "📦 Creating release archive: $ZIP_NAME"
zip -r "$ZIP_NAME" . \
  -x "*.git*" \
  -x "*.DS_Store" \
  -x "ClarityBots-*.zip" \
  -x "node_modules/*"

echo "🏷️ Tagging commit with $VERSION..."
git add package.json
git commit -m "Release $VERSION"
git tag -a $VERSION -m "ClarityBots release $VERSION"
git push
git push origin $VERSION

echo "✅ All done! Created $ZIP_NAME, updated package.json, and pushed tag $VERSION."