pipeline {
  agent any
  environment {
    GIT_BRANCH = "${BRANCH_NAME}"
  }
  stages {
    stage('install-dependencies') {
      steps {
        sh 'sudo docker container run --rm -v $(pwd):/app node:8 sh -c "cd /app && yarn install"'
      }
    }
    stage('build-application') {
      steps {
        sh 'sudo rm -rf .next'
        sh 'sudo docker container run --rm -v $(pwd):/app node:8 sh -c "cd /app && yarn build"'
      }
    }
    stage('build-image') {
      steps {
        sh 'sudo docker build . -t 10-frontend'
        sh 'sudo docker tag 10-frontend registry.wip.camp/10-frontend:$GIT_BRANCH'
        sh 'sudo docker tag 10-frontend registry.wip.camp/10-frontend'
      }
    }
    stage('push-image') {
      steps {
        sh 'sudo docker push registry.wip.camp/10-frontend:$GIT_BRANCH'
        sh 'sudo docker push registry.wip.camp/10-frontend'
      }
    }
    stage('versioning') {
      when {
        expression {
          return GIT_BRANCH == 'master'
        }
      }
      steps {
        sh 'sudo docker tag 10-frontend registry.wip.camp/10-frontend:$GIT_BRANCH-$BUILD_NUMBER'
        sh 'sudo docker push registry.wip.camp/10-frontend:$GIT_BRANCH-$BUILD_NUMBER'        
        sh 'sudo docker image rm registry.wip.camp/10-frontend:$GIT_BRANCH-$BUILD_NUMBER'        
      }
    }
    stage('clean') {
      steps {
        sh 'sudo docker image rm registry.wip.camp/10-frontend:$GIT_BRANCH'
        sh 'sudo docker image rm registry.wip.camp/10-frontend'
        sh 'sudo docker image rm 10-frontend'
      }
    }
    stage('deploy-development') {
      when {
        expression {
          return GIT_BRANCH == 'develop'
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