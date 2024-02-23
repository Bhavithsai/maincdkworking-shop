#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MainWorkshopStack } from '../lib/main-workshop-stack';

const app = new cdk.App();
new MainWorkshopStack(app, 'MainWorkshopStack');
