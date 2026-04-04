package com.jpa.jpa.domain.summoner

import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Propagation
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

    @Transactional
    fun create(name: String): Summoner =
        summonerRepository.save(Summoner(name = name))

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    fun createInNewTransaction(name: String): Summoner =
        summonerRepository.save(Summoner(name = name))

    fun getAllSummonerNames(): List<String> =
        summonerRepository.findAll().map { it.profile?.tier ?: "unranked" }

    fun getAllSummonerNamesWithFetch(): List<String> =
        summonerRepository.findAllWithProfile().map { it.profile?.tier ?: "unranked" }
}
