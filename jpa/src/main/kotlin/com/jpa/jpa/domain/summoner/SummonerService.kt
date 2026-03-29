package com.jpa.jpa.domain.summoner

import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
@Transactional(readOnly = true)
class SummonerService(
    private val summonerRepository: SummonerRepository
) {
    fun getByName(name: String): Summoner =
        summonerRepository.findByName(name).orElseThrow()

    fun getHighLevelWithTag(minLevel: Int): List<Summoner> =
        summonerRepository.findByTagLineIsNotNullAndSummonerLevelGreaterThanEqual(minLevel)

    fun getHighLevelWithTagCustom(minLevel: Int): List<Summoner> =
        summonerRepository.findActiveHighLevel(minLevel)
}
