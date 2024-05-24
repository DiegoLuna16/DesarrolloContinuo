pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        script {
          docker.build('my-app', '.') // Construir la imagen desde la raíz del proyecto
        }
      }
    }
    stage('Test') {
      steps {
        script {
          sh 'cd app && npm install' // Instalar dependencias antes de ejecutar pruebas
          sh 'cd app && npm test'
        }
      }
    }
    stage('Deploy') {
      steps {
        script {
          docker.image('my-app').run('-p 3000:3000') // Ejecutar el contenedor Docker
        }
      }
    }
  }
}

