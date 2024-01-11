# Script para ejecutar la aplicación

# Instalación de dependencias
echo "Instalando dependencias..."
cd backend
mvn clean install
cd ..

cd frontend
npm install
cd ..

# Iniciar la aplicación
echo "Iniciando la aplicación..."
cd backend
mvn spring-boot:run &
cd ..

cd frontend
npm start
cd ..
