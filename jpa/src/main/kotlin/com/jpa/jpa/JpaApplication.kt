package com.jpa.jpa

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.ConfigurationPropertiesScan
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@EnableJpaAuditing
@SpringBootApplication
@ConfigurationPropertiesScan
class JpaApplication

fun main(args: Array<String>) {
	runApplication<JpaApplication>(*args)
}
