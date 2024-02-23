#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MainWorkshopStack } from '../lib/main-workshop-stack';
import { MyCodePipeline } from '../lib/main-pipeline';

const app = new cdk.App();
new MyCodePipeline(app, 'Pipeline', {
    env: {
        account: '905418167610',
        region: "ap-northeast-1"
    },
});
