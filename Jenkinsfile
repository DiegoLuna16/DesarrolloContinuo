pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    docker.build('my-app', '.') // Cambia la ruta al directorio "docker"
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Cambiar al directorio de la aplicación y ejecutar npm install
                    bat 'cd /d app && npm install'
                    // Ejecutar pruebas
                    bat 'cd /d app && npm test'
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


