// Global entrypoint for Jest setup

import 'zone.js/fesm2015/zone-testing-bundle.js';
import 'jest-preset-angular';
import './jestGlobalMocks';

import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { jest } from '@jest/globals';

getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

// Set global jest object - spectator mocking/spys require it
Object.defineProperty(window, 'jest', {
  value: jest,
  writable: false
});
