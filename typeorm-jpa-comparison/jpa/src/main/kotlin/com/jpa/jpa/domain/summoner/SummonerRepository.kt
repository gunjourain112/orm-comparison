package com.jpa.jpa.domain.summoner

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import java.util.Optional

interface SummonerRepository : JpaRepository<Summoner, Long>, SummonerRepositoryCustom {
    fun findByName(name: String): Optional<Summoner>
    fun findByTagLineIsNotNullAndSummonerLevelGreaterThanEqual(minLevel: Int): List<Summoner>

    @Query("SELECT s FROM Summoner s JOIN FETCH s.profile")
    fun findAllWithProfile(): List<Summoner>
}
