import { registerMicroApps, start, runAfterFirstMounted, setDefaultMountApp } from 'qiankun';

// for angular subapp
import 'zone.js';

registerMicroApps([
  {
    name: 'dashboard',
    entry: '//localhost:7100',
    container: '#subapp-viewport',
    activeRule: '/dashboard'
  },
  {
    name: 'person',
    entry: '//localhost:7101',
    container: '#subapp-viewport',
    activeRule: '/person'
  },
  {
    name: 'reports',
    entry: '//localhost:7102',
    container: '#subapp-viewport',
    activeRule: '/reports'
  },
  {
    name: 'assets',
    entry: '//localhost:7103',
    container: '#subapp-viewport',
    activeRule: '/assets'
  },
  {
    name: 'vehicles',
    entry: '//localhost:7104',
    container: '#subapp-viewport',
    activeRule: '/vehicles'
  },
]);

setDefaultMountApp('/dashboard');

start();

runAfterFirstMounted(() => {
  console.log('main app mounted')
})