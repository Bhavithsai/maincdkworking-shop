const { handler } = require('../lib/lambda/hello');
// import * as lambda from 'aws-cdk-lib/aws-lambda';
// import { handler } from '../lib/lambda/hello';

describe('Hello describe test suite', ()=>{
    
    test('handler should return 200', async ()=>{
        const result = await handler ({}, {})
        expect(result.statusCode).toBe(200); 
    })
})