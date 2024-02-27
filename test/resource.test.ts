import { Template, Capture } from 'aws-cdk-lib/assertions';
import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { HitCounter }  from '../lib/hitcounter';

test('API Gateway Created', () => {
  const stack = new cdk.Stack();
  // WHEN
  const fn = new lambda.Function(stack, 'TestFunction', {
    runtime: lambda.Runtime.NODEJS_14_X,
    handler: 'hello.handler',
    code: lambda.Code.fromAsset('lib/lambda')
  });
  new HitCounter(stack, 'MyTestConstruct', { downstream: fn });
  new apigw.LambdaRestApi(stack, 'MyTestApi', { handler: fn });
  // THEN
  const template = Template.fromStack(stack);
  template.hasResourceProperties("AWS::ApiGateway::RestApi", {
    Name: 'MyTestApi',
  });
});
