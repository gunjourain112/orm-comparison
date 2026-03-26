package com.jpa.jpa.global.config.properties

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties(prefix = "server")
data class AppProperties(
    val port: Int = 8080
)
