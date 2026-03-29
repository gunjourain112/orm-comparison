package com.jpa.jpa.domain.summoner

interface SummonerRepositoryCustom {
    fun findActiveHighLevel(minLevel: Int): List<Summoner>
}
