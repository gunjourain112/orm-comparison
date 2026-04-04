package com.jpa.jpa.domain.summoner

import com.jpa.jpa.domain.match.MatchParticipant
import com.jpa.jpa.global.common.BaseEntity
import jakarta.persistence.*

@Entity
@Table(name = "summoners")
class Summoner(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,

    @Column(nullable = false, unique = true, length = 100)
    var name: String,

    @Column(nullable = false)
    var summonerLevel: Int = 1,

    @Column(nullable = true)
    var profileIconId: Int? = null,

    @Column(nullable = true, length = 10)
    var tagLine: String? = null
) : BaseEntity() {

    @OneToOne(mappedBy = "summoner", cascade = [CascadeType.ALL], fetch = FetchType.LAZY)
    var profile: SummonerProfile? = null

    @OneToMany(mappedBy = "summoner")
    var matchParticipants: MutableList<MatchParticipant> = mutableListOf()
}
