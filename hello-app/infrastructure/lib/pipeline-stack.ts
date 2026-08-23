import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline'
import * as codebuild from 'aws-cdk-lib/aws-codebuild'
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions'
import { RepoConnection } from './repo-connection'

export class PipelineStack extends Stack {
  public readonly source: RepoConnection

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props)

    this.source = new RepoConnection(this)
  }
}