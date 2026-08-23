import { CfnOutput } from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as codecommit from 'aws-cdk-lib/aws-codecommit'
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline'
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions'

const REPOSITORY_NAME = 'cicd-workshop'

export class RepoConnection {
  public readonly repository: codecommit.IRepository

  constructor(scope: Construct) {
    this.repository = codecommit.Repository.fromRepositoryName(
      scope,
      'CICD_Workshop',
      REPOSITORY_NAME,
    )

    new CfnOutput(scope, 'SourceRepositoryName', {
      value: this.repository.repositoryName,
    })

    new CfnOutput(scope, 'SourceRepositoryCloneUrl', {
      value: this.repository.repositoryCloneUrlGrc,
    })
  }

  public sourceAction(
    output: codepipeline.Artifact,
  ): codepipeline_actions.CodeCommitSourceAction {
    return new codepipeline_actions.CodeCommitSourceAction({
      actionName: 'CodeCommit',
      repository: this.repository,
      output: output,
      branch: 'main',
    })
  }
}