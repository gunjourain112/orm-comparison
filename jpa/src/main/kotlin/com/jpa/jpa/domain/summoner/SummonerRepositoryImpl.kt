package com.jpa.jpa.domain.summoner

import jakarta.persistence.EntityManager

class SummonerRepositoryImpl(
    private val em: EntityManager
) : SummonerRepositoryCustom {

    override fun findActiveHighLevel(minLevel: Int): List<Summoner> {
        return em.createQuery(
            "SELECT s FROM Summoner s WHERE s.tagLine IS NOT NULL AND s.summonerLevel >= :minLevel",
            Summoner::class.java
        )
            .setParameter("minLevel", minLevel)
            .resultList
    }
}
