import installers from './macos-downloads.json' with { type: 'json' };

export const macosDownloads = installers.flatMap(({ systems, url, version }) =>
  systems.map(system => ({ ...system, url, version }))
);
