#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { InfrastructureStack } from '../lib/infrastructure-stack'
import { PipelineStack } from '../lib/pipeline-stack'

const app = new cdk.App()

const appStack = new InfrastructureStack(app, 'InfrastructureStack', {})

const pipelineStack = new PipelineStack(app, 'PipelineStack', {})