---
title: Home
layout: PageLayout
sections:
  - text: ''
    children:
      - altText: null
        link: null
        width: 520px
        height: 380px
        type: Image
        image: /images/no-hd-sign_4.png
      - text: >
          # "NO, SIR, I AM ***NOT*** DRUNK"


          "I struggle with a genetic progressive neurodegenerative disease
          causing gradual deterioration of movement, cognitive function,
          emotional control, blurring of social boundaries and inherited in an
          autosomal dominant pattern…. Are we good?”
        children: []
        type: Flexbox
        styles:
          self:
            flexDirection: row
            width: wide
    type: Flexbox
    styles:
      self:
        flexDirection: row
        width: wide
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
        borderColor: border-complementary
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
        flexDirection: row
        borderWidth: 4
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
  - elementId: ''
    variant: variant-c
    colors: colors-a
    title: Store
    actions: []
    people:
      - content/data/team/desmond-eagle.json
      - content/data/team/dianne-ameter.json
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
  - text: |
      # Learn and Connect
    children: []
    type: Flexbox
    styles:
      self:
        flexDirection: row
        width: wide
  - text: ''
    children:
      - link: 'https://www.hdsa.org/'
        altText: Huntington's Disease Society of America
        type: Image
        image: /images/HDSA_Logo.png
        width: '170'
      - link: 'http://en.hdbuzz.net/003'
        altText: HD Buzz
        type: Image
        image: /images/hd-buzz.png
      - altText: HD Lighthouse Families
        width: null
        height: null
        type: Image
        image: /images/hd-lighthouse-families.png
      - altText: >-
          Make Life: Fostering Hopeful Creativity in Huntington's Disease
          Communities
        link: 'http://www.makelifehd.org/'
        width: '170'
        height: null
        type: Image
        image: /images/make-life-light.png
      - altText: Help 4 HD
        link: 'https://www.help4hd.org/'
        width: null
        height: null
        type: Image
        image: /images/help-4-hd.webp
    type: Flexbox
    styles:
      self:
        flexDirection: row
        width: wide
        justifyContent: space-around
        alignItems: center
---
