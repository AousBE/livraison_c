pipeline {
  agent any
  
  stages {
        stage('Pull GIT') {
            steps {
                echo 'Pulling...';
                  git branch: 'main',
                  url : 'https://github.com/AousBE/livraison_c.git',
                  credentialsId: 'token';
            }
        }
          
  
	  stage('Build new image') {
		    steps{
			    withDockerRegistry([credentialsId: "docker-credentials", url: ""]) {
			    sh "docker build -t aous1/aous_cicd_front:$BUILD_NUMBER ."
			    
		    }
		    }
    }
	  stage('Push new image') {
			steps{
		withDockerRegistry([credentialsId: "docker-credentials", url: ""]) {
  		sh "docker push aous1/aous_cicd_front:$BUILD_NUMBER"
	}
			}
		}
    stage('ansible playbook') {
			steps{
        scripts{
          sh "ansible-playbook /home/vagrant/Myapp/ansible/build.yml -i /home/vagrant/Myapp/ansible/inventory/host.yml "
        }
			}
      }
    }
}
