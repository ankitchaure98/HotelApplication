FROM maven:3.9.11-eclipse-temurin-17-alpine AS builder

WORKDIR /app

COPY pom.xml .

COPY src ./src

RUN mvn clean install -DskipTests

#=======================Stage2====================

FROM eclipse-temurin:17-jre-alpine

COPY --from=builder /app/target/*.jar app.jar

#RUN cp /app/target/*.jar app.jar

EXPOSE 8080

CMD ["java","-jar","app.jar"] 

