package com.jpa.jpa.domain.summoner

import com.jpa.jpa.domain.summoner.QSummoner.summoner
import com.querydsl.jpa.impl.JPAQueryFactory
import jakarta.persistence.EntityManager

class SummonerRepositoryImpl(
    private val em: EntityManager,
    private val queryFactory: JPAQueryFactory
) : SummonerRepositoryCustom {

    // JPQL
    override fun findActiveHighLevel(minLevel: Int): List<Summoner> {
        return em.createQuery(
            "SELECT s FROM Summoner s WHERE s.tagLine IS NOT NULL AND s.summonerLevel >= :minLevel",
            Summoner::class.java
        )
            .setParameter("minLevel", minLevel)
            .resultList
    }

    // QueryDSL
    override fun findActiveHighLevelDsl(minLevel: Int): List<Summoner> {
        return queryFactory
            .selectFrom(summoner)
            .where(
                summoner.tagLine.isNotNull,
                summoner.summonerLevel.goe(minLevel)
            )
            .fetch()
    }

    // Native Query
    override fun findByNameContainingNative(keyword: String): List<Summoner> {
        @Suppress("UNCHECKED_CAST")
        return em.createNativeQuery(
            "SELECT * FROM summoners WHERE name LIKE :keyword",
            Summoner::class.java
        )
            .setParameter("keyword", "%$keyword%")
            .resultList as List<Summoner>
    }
}
