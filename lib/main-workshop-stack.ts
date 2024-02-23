import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { HitCounter } from './hitcounter';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { TableViewer } from 'cdk-dynamo-table-viewer';
import * as cdk from 'aws-cdk-lib';
import * as path from 'path';


export class MainWorkshopStack extends cdk.Stack {
  // constructor(scope: Construct, id: string, props?: StackProps) {
  //   super(scope, id, props);
  constructor(scope: Construct, id: string, stageName: string, props?: cdk.StackProps) {
    super(scope,stageName, props );

  const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,    // execution environment
      code: lambda.Code.fromAsset('lib/lambda'),  // code loaded from "lambda" directory
      handler: 'hello.handler'                // file is "hello", function is "handler"
    }); 
  // new apigw.LambdaRestApi(this, 'Endpoint', {
  //     handler: hello
  //   });
  const helloWithCounter = new HitCounter(this, 'HelloHitCounter', {
      downstream: hello
    });

    // defines an API Gateway REST API resource backed by our "hello" function.
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: helloWithCounter.handler
    });
    
    new TableViewer(this, 'ViewHitCounter', {
      title: 'Hello Hits',
      table: helloWithCounter.table
    });
  }
}
