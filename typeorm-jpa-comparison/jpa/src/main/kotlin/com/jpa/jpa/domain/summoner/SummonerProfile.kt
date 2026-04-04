package com.jpa.jpa.domain.summoner

import com.jpa.jpa.global.common.BaseEntity
import jakarta.persistence.*

@Entity
@Table(name = "summoner_profiles")
class SummonerProfile(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "summoner_id", nullable = false)
    var summoner: Summoner,

    @Column(nullable = true, length = 20)
    var tier: String? = null,

    @Column(nullable = true, length = 10)
    var rank: String? = null,

    @Column(nullable = false)
    var leaguePoints: Int = 0
) : BaseEntity()
