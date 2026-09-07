import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

//const environment = process.env.TEST_ENV || 'qa';    //Declare the variable
const environment = process.env.TEST_ENV || 'staging';    //Declare the variable

dotenv.config({ path: path.resolve(__dirname, `.env.${environment}`) });  //Pass it into the configuration resolver

export default defineConfig({
  testDir: './tests',

  //grep:/@sanity/,   //specified tag by Shruti
  // grep:/(?=.*@sanity)(?=.*@regression)/,   //specified tag by Shruti
  //grepInvert:/@regression/,     //specified tag by Shruti

  //To change the Timeout Globally for all Tests(default is 30000ms/30seconds) -By Shruti
  //timeout:60000;

  //To apply a longer wait for all expect conditions(defalut is 500ms/5seconds) -By Shruti
  //expect: {timeout: 6000};
  
  //To apply timeout for actions         //By shruti 
  //actionTimeout : 10000;               

  fullyParallel: false,
  forbidOnly: !!process.env.CI,

  //retries: process.env.CI ? 2 : 0,
  //Retry Locally
  //retries : 3,     //Locally Retry by Shruti

  workers: process.env.CI ? 1 : undefined,
  //workers:2,   //make 1 worker for for serial execution

 reporter: [['html',{open:'always'}],
            ['list'],
          //['json',{outputFile:'testreport/results.json'}]    //json by Shruti
            ['allure-playwright']
        ],                                                    //html report for always

  use: {
    //baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
    // Read variable from CLI argument or fall back to 'qa' as default
    baseURL: process.env.BASE_URL,

    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    //ignoreHTTPSErrors:true,      //by Shruti, to handle SSL certificates by defalut
    //testIdAttribute:'data-pw',  //configured by Shruti, you can put any value for testId 

  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      //fullyParallel: true,     //To do parallel test only for chromium,from true by Shruti

    },
  ],
});