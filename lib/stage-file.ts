import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { MainWorkshopStack } from './main-workshop-stack';
import { MyCodePipeline } from '../lib/main-pipeline';
export class StageFile extends cdk.Stage {
      constructor(scope: Construct, stageName: string, props?: cdk.StageProps) {
          super(scope,stageName, props );

        const pipelinestack = new MainWorkshopStack(this, 'MainWorkshopStack',  stageName);
        // env: {
        // account: '905418167610',
        // region:"ap-south-1"
    // );
        
    }
}
