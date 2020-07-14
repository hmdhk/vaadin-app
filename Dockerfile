FROM maven

COPY . /usr/local/vaadin

WORKDIR /usr/local/vaadin/vaadin-app

RUN mvn clean install