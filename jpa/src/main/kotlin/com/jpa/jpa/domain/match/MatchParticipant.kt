package com.jpa.jpa.domain.match

import com.jpa.jpa.domain.champion.Champion
import com.jpa.jpa.domain.summoner.Summoner
import com.jpa.jpa.global.common.BaseEntity
import jakarta.persistence.*

@Entity
@Table(name = "match_participants")
class MatchParticipant(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "match_id", nullable = false)
    var match: Match,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "summoner_id", nullable = false)
    var summoner: Summoner,

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "champion_id", nullable = false)
    var champion: Champion,

    @Column(nullable = false)
    var kills: Int = 0,

    @Column(nullable = false)
    var deaths: Int = 0,

    @Column(nullable = false)
    var assists: Int = 0,

    @Column(nullable = false)
    var won: Boolean = false,

    @Column(nullable = true, length = 20)
    var position: String? = null
) : BaseEntity()
