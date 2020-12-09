# on-covid
 Daily Ontario COVID Stats
 
 ### Log
 6:23:39 PM: Build ready to start
6:23:42 PM: build-image version: 53b83b6bede2920f236b25b6f5a95334320dc849
6:23:42 PM: build-image tag: v3.6.0
6:23:42 PM: buildbot version: f66121aa8b7df3f09ef4ca9f2f1aa9cddabd6c71
6:23:42 PM: Fetching cached dependencies
6:23:43 PM: Starting to download cache of 148.3MB
6:23:46 PM: Finished downloading cache in 3.956843803s
6:23:46 PM: Starting to extract cache
6:23:53 PM: Finished extracting cache in 6.698956642s
6:23:53 PM: Finished fetching cache in 10.778323213s
6:23:53 PM: Starting to prepare the repo for build
6:23:54 PM: Preparing Git Reference refs/heads/main
6:24:02 PM: Different publish path detected, going to use the one specified in the Netlify configuration file: 'build' versus 'build/' in the Netlify UI
6:24:02 PM: Starting build script
6:24:02 PM: Installing dependencies
6:24:03 PM: Python version set to 2.7
6:24:04 PM: Started restoring cached node version
6:24:07 PM: Finished restoring cached node version
6:24:08 PM: v12.18.0 is already installed.
6:24:09 PM: Now using node v12.18.0 (npm v6.14.4)
6:24:09 PM: Started restoring cached build plugins
6:24:09 PM: Finished restoring cached build plugins
6:24:10 PM: Attempting ruby version 2.7.1, read from environment
6:24:12 PM: Using ruby version 2.7.1
6:24:12 PM: Using PHP version 5.6
6:24:12 PM: Started restoring cached node modules
6:24:14 PM: Finished restoring cached node modules
6:24:14 PM: Started restoring cached go cache
6:24:14 PM: Finished restoring cached go cache
6:24:14 PM: go version go1.14.4 linux/amd64
6:24:14 PM: go version go1.14.4 linux/amd64
6:24:14 PM: Installing missing commands
6:24:14 PM: Verify run directory
6:24:16 PM: ​
6:24:16 PM: ────────────────────────────────────────────────────────────────
6:24:16 PM:   Netlify Build                                                 
6:24:16 PM: ────────────────────────────────────────────────────────────────
6:24:16 PM: ​
6:24:16 PM: ❯ Version
6:24:16 PM:   @netlify/build 6.0.0
6:24:16 PM: ​
6:24:16 PM: ❯ Flags
6:24:16 PM:   deployId: 5fd15c7bbb7e070007d12e8f
6:24:16 PM:   mode: buildbot
6:24:16 PM: ​
6:24:16 PM: ❯ Current directory
6:24:16 PM:   /opt/build/repo
6:24:16 PM: ​
6:24:16 PM: ❯ Config file
6:24:16 PM:   No config file was defined: using default values.
6:24:16 PM: ​
6:24:16 PM: ❯ Context
6:24:16 PM:   production
6:24:16 PM: ​
6:24:16 PM: ────────────────────────────────────────────────────────────────
6:24:16 PM:   1. Build command from Netlify app                             
6:24:16 PM: ────────────────────────────────────────────────────────────────
6:24:16 PM: ​
6:24:16 PM: $ npm run build
6:24:17 PM: > on-covid@0.1.0 build /opt/build/repo
6:24:17 PM: > react-scripts build
6:24:19 PM: Creating an optimized production build...
6:24:29 PM: 
6:24:29 PM: Treating warnings as errors because process.env.CI = true.
6:24:29 PM: Most CI servers set it automatically.
6:24:29 PM: 
6:24:29 PM: Failed to compile.
6:24:29 PM: 
6:24:29 PM: src/components/Home/Home.js
6:24:29 PM:   Line 10:7:  'sheetURL' is assigned a value but never used  no-unused-vars
6:24:29 PM: npm ERR! code ELIFECYCLE
6:24:29 PM: npm ERR! errno 1
6:24:29 PM: npm ERR! on-covid@0.1.0 build: `react-scripts build`
6:24:29 PM: npm ERR! Exit status 1
6:24:29 PM: npm ERR!
6:24:29 PM: npm ERR! Failed at the on-covid@0.1.0 build script.
6:24:29 PM: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
6:24:29 PM: npm ERR! A complete log of this run can be found in:
6:24:29 PM: npm ERR!     /opt/buildhome/.npm/_logs/2020-12-09T23_24_29_979Z-debug.log
6:24:30 PM: ​
6:24:30 PM: ────────────────────────────────────────────────────────────────
6:24:30 PM:   "build.command" failed                                        
6:24:30 PM: ────────────────────────────────────────────────────────────────
6:24:30 PM: ​
6:24:30 PM:   Error message
6:24:30 PM:   Command failed with exit code 1: npm run build
6:24:30 PM: ​
6:24:30 PM:   Error location
6:24:30 PM:   In Build command from Netlify app:
6:24:30 PM:   npm run build
6:24:30 PM: ​
6:24:30 PM:   Resolved config
6:24:30 PM:   build:
6:24:30 PM:     command: npm run build
6:24:30 PM:     commandOrigin: ui
6:24:30 PM:     publish: /opt/build/repo/build
6:24:30 PM: Caching artifacts
6:24:30 PM: Started saving node modules
6:24:30 PM: Finished saving node modules
6:24:30 PM: Started saving build plugins
6:24:30 PM: Finished saving build plugins
6:24:30 PM: Started saving pip cache
6:24:30 PM: Finished saving pip cache
6:24:30 PM: Started saving emacs cask dependencies
6:24:30 PM: Finished saving emacs cask dependencies
6:24:30 PM: Started saving maven dependencies
6:24:30 PM: Finished saving maven dependencies
6:24:30 PM: Started saving boot dependencies
6:24:30 PM: Finished saving boot dependencies
6:24:30 PM: Started saving rust rustup cache
6:24:30 PM: Finished saving rust rustup cache
6:24:30 PM: Started saving rust cargo bin cache
6:24:30 PM: Finished saving rust cargo bin cache
6:24:30 PM: Started saving go dependencies
6:24:30 PM: Finished saving go dependencies
6:24:30 PM: Build failed due to a user error: Build script returned non-zero exit code: 2
6:24:30 PM: Failing build: Failed to build site
6:24:30 PM: Failed during stage 'building site': Build script returned non-zero exit code: 2
6:24:30 PM: Finished processing build request in 47.859616589s
