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

    // 6-1: 기본 쓰기 트랜잭션
    @Transactional
    fun create(name: String): Summoner =
        summonerRepository.save(Summoner(name = name))

    // 6-3: 전파 옵션 — 항상 새 트랜잭션으로 실행
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    fun createInNewTransaction(name: String): Summoner =
        summonerRepository.save(Summoner(name = name))
}
