pipeline {
  agent any
  environment {
    GIT_BRANCH = "${BRANCH_NAME}"
  }
  stages {
    stage('initial') {
      steps {
        sh 'yarn install'
      }
    }
    stage('test') {
      steps {
        sh 'echo no test now test trigger'
      }
    }
    stage('build') {
      when {
        expression {
          branch = sh(returnStdout: true, script: 'echo $GIT_BRANCH').trim()
          return branch == 'develop' || branch == 'master'
        }
      }
      steps {
        sh 'sudo docker build . -t 10-frontend'
        sh 'sudo docker tag 10-frontend registry.wip.camp/10-frontend:$GIT_BRANCH-$BUILD_NUMBER'
        sh 'sudo docker tag 10-frontend registry.wip.camp/10-frontend:$GIT_BRANCH'
        sh 'sudo docker tag 10-frontend registry.wip.camp/10-frontend'
      }
    }
    stage('push') {
      when {
        expression {
          branch = sh(returnStdout: true, script: 'echo $GIT_BRANCH').trim()
          return branch == 'develop' || branch == 'master'
        }
      }
      steps {
        sh 'sudo docker push registry.wip.camp/10-frontend:$GIT_BRANCH-$BUILD_NUMBER'
        sh 'sudo docker push registry.wip.camp/10-frontend:$GIT_BRANCH'
        sh 'sudo docker push registry.wip.camp/10-frontend'
      }
    }
    stage('clean') {
      when {
        expression {
          branch = sh(returnStdout: true, script: 'echo $GIT_BRANCH').trim()
          return branch == 'develop' || branch == 'master'
        }
      }
      steps {
        sh 'sudo docker image rm registry.wip.camp/10-frontend:$GIT_BRANCH-$BUILD_NUMBER'
        sh 'sudo docker image rm registry.wip.camp/10-frontend:$GIT_BRANCH'
        sh 'sudo docker image rm registry.wip.camp/10-frontend'
      }
    }
    stage('deploy-development') {
      when {
        expression {
          branch = sh(returnStdout: true, script: 'echo $GIT_BRANCH').trim()
          return branch == 'develop'
        }
      }
      steps {
        sh 'sudo kubectl rolling-update 10-frontend -n development --image registry.wip.camp/10-frontend:$GIT_BRANCH --image-pull-policy Always'
      }
    }
  }
  post {
    success {
      sh 'echo success'
    }
    failure {
      sh 'echo failure'
    }
  }
}
