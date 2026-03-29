package com.jpa.jpa.domain.summoner

import org.springframework.data.jpa.repository.JpaRepository
import java.util.Optional

interface SummonerRepository : JpaRepository<Summoner, Long>, SummonerRepositoryCustom {
    fun findByName(name: String): Optional<Summoner>
    fun findByTagLineIsNotNullAndSummonerLevelGreaterThanEqual(minLevel: Int): List<Summoner>
}
