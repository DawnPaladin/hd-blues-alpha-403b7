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
        height: screen
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
        flexDirection: row-reverse
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
  - type: FeaturedPostsSection
    elementId: ''
    variant: variant-a
    colors: colors-a
    title: Services & Experiences
    subtitle: 'Like we said, it''s more than just fishing'
    actions:
      - type: Button
        label: View all
        url: /
        style: primary
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
    styles:
      self:
        height: screen
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
        justifyContent: center
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: center
      subtitle:
        fontWeight: '400'
        fontStyle: normal
        textAlign: center
        margin:
          - mt-0
          - mb-12
      actions:
        justifyContent: center
  - type: ContactSection
    elementId: contact-form
    colors: colors-f
    title: Contact us
    text: We look forward to hearing from you.
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          isRequired: true
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: true
          width: 1/2
        - type: TextFormControl
          name: home-address
          label: Home address
          placeholder: Your home address
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          width: full
      submitLabel: Send Message
    feature:
      type: ImageBlock
      url: /images/trout.png
      altText: Contact form image
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
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        fontWeight: '700'
        fontStyle: normal
        textAlign: left
        margin:
          - mt-0
          - mb-4
      text:
        textAlign: left
        margin:
          - mt-0
          - mb-12
---
