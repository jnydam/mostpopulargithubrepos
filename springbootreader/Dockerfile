# FROM --platform=amd64 eclipse-temurin:21.0.2_13-jdk

FROM eclipse-temurin:21.0.2_13-jdk
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]