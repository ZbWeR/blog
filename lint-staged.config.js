export default {
  '*.md': (stagedFiles) => `node ./scripts/time.js ${stagedFiles.join(' ')}`,
  '*.{js,jsx,ts,tsx,vue}': ['prettier --write']
}
