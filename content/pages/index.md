---
title: Home
layout: PageLayout
sections:
  - type: HeroSection
    elementId: ''
    colors: colors-a
    title: '"No, sir, I am NOT drunk"'
    text: >
      "I struggle with a genetic progressive neurodegenerative disease causing
      gradual deterioration of movement, cognitive function, emotional control,
      blurring of social boundaries and inherited in an autosomal dominant
      pattern…. Are we good?”
    actions:
      - type: Button
        label: Listen to "HD Blues"
        url: /
        style: primary
        icon: arrowRight
        showIcon: true
    feature:
      type: ImageBlock
      url: /images/no-hd-sign_4.png
      altText: Hero section image
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: left
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: left
        margin:
          - mt-8
          - mb-8
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - elementId: ''
    colors: colors-f
    backgroundImage:
      altText: lorem-ipsum
      caption: lorem-ipsum
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    title: Join the HD Blues campaign
    text: "You may have Huntington’s Disease, know someone who has it, be part of a medical or research or pharmacological community working with HD, run an HD support group, be a Woody Guthrie fan, or simply want a new excuse for acting drunk.\_Whatever your connection, join us and stop people in their tracks for a teachable moment: *This* is HD.\_\n\nBrian Schrag, Founder\n"
    actions: []
    feature:
      type: ImageBlock
      url: /images/brian.jpg
      altText: 'Brian Schrag, Founder'
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-6
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin:
          - mt-0
          - mb-8
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
        margin:
          - mt-0
          - mb-8
      text:
        textAlign: left
        margin:
          - mt-0
          - mb-8
      actions:
        justifyContent: flex-start
    type: HeroSection
  - elementId: ''
    variant: variant-b
    colors: colors-a
    title: About Us
    subtitle: Meet the team
    actions: []
    people:
      - content/data/team/desmond-eagle.json
      - content/data/team/dianne-ameter.json
      - content/data/team/hilary-ouse.json
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: center
        margin:
          - mt-0
          - mb-2
      subtitle:
        textAlign: center
        margin:
          - mt-0
          - mb-12
    type: FeaturedPeopleSection
  - elementId: ''
    colors: colors-a
    backgroundImage:
      altText: lorem-ipsum
      caption: lorem-ipsum
      elementId: ''
      styles:
        self:
          opacity: 100
      type: ImageBlock
    title: Spread the song!
    text: "Enjoy, download, share, and send the [link to this page](http://www.hdblues.org/) to everyone you know,\_***for free***. Just tell people I wrote it, and that they should pass it forward.\n"
    actions:
      - type: Button
        label: Live performance video
        url: /about
        style: primary
      - label: Lyric video
        altText: Learn more
        url: /
        showIcon: false
        icon: arrowLeft
        iconPosition: right
        style: secondary
        elementId: ''
        type: Button
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
        margin:
          - mt-0
          - mb-4
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: CtaSection
---
