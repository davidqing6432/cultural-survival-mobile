let mongoId = 'cultural-survival-app-ugsqf';
if (!mongoId) {
  console.error('No MongoDB App ID');
  mongoId = mongoId = '';
}
export const SYNC_CONFIG = {
  // Set `enabled` to `true` to enable sync.
  enabled: true,
  // Add your Realm App ID here if sync is enabled.
  appId: mongoId,
};
