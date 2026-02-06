---
title: On the Security and Privacy of Visual Impairments and Assistive Technologies
description: An overview of the paper Invisible, Unreadable, and Inaudible Cookie Notices; An Evaluation of Cookie Notices for Users with Visual Impairments.
pubDate: 2024-01-22
tags:
  - visual-impairment
  - assistive-technologies
  - cookie-notices
---

Read the full paper on ACM Transactions for Accessible Computing: [Invisible, Unreadable, and Inaudible Cookie Notices: An Evaluation of Cookie Notices for Users with Visual Impairments](https://dl.acm.org/doi/abs/10.1145/3641281)

According to the Office of National Statistics in 2020, almost 11 million adults with disabilities recently used the Internet in the UK [1]. Visual impairment is a term used to describe any type of vision loss, this can range from partial vision loss to someone who cannot see at all [2], [3]. A 2016 GOV.UK survey of assistive technology users found that 29% used a screen reader to browse the Internet, while others used screen magnifiers, speech recognition or readability software [4].

To ensure that websites work correctly with assistive technologies there are various accessibility standards, such as the Web Content Accessibility Guidelines (WCAG) [5]. These set out a number of criteria which aim to provide a shared standard for web content accessibility.

## What are cookie notices?

With the implementation of the General Data Protection Regulation (GDPR) in 2018, companies operating in the EU and the UK, and/or handling citizens' data, need to choose a legal basis to collect and process user data. This is where cookie notices come in, they give websites an easy way to gain consent from users, allowing websites to use cookies for means other than for those which are essential. Previous research on cookie notices has found that cookie notices do not always adhere to the GDPR and that their function and appearance can vary massively.

## What did we do?

To assess the accessibility of cookie notices, we completed a number of assessments on the 50 most popular UK websites. We started by testing these websites manually and then used automated testing tools which are made for developers to test their websites for accessibility. After this, we used the same assistive technologies that users with visual impairments would use on a daily basis i.e., WebbIE, JAWS and NVDA.

We also conducted an online user study of 100 UK participants who have a visual impairment, asking them about their Internet and assistive technology usage, their privacy-enhancing technology usage, how they feel about and respond to cookie notices, and our suggestions.

## Our findings

During our testing, we found that the majority of websites contained at least one accessibility error. These ranged from contrast issues to keyboard traps, and as far as some websites not being readable at all. We also observed websites which did not have issues with their cookie notices when using assistive technologies but did include issues such as low contrast when viewing them graphically. These practices often created accessibility issues when trying to read and respond to cookie notices. We also found that people with visual impairments generally have a negative view towards cookie notices, as well as encountering various issues they had encountered.

![Sunburst chart showing results for manual WebbIE testing, with the inner circle representing the whole webpage and the outer representing the cookie notice.](../../assets/sunburst_2.png)

## Our recommendations

To help alleviate these issues we provide the following recommendations:

- **Website developers:** we advise accessibility-by-design in websites, such as including the cookie notice at the top of the website's code, as well as the inclusion of more headings, allowing for easier navigation. We also advise more accessibility testing, for example, it is common to test using automated tools however developers should use multiple tools, including those used by people with visual impairments.
- **Policymakers:** we recommend improving the related laws, such as adding accessibility-specific tools to the GDPR. As well as adding additional information to specifications, for example, the information developers need to comply with the GDPR while being accessible.
- **Designers of accessibility evaluation tools:** we recommend the development of tools which can test for more specific criteria. As well as the ability to test different sections of web pages, rather than just web pages as a whole.
- **End users:** we believe that the onus should not be placed on end users, however, there are a few steps they can take to improve their experience. Firstly, they can directly engage with cookie notices. Secondly, they can use specific privacy-enhancing technologies, such as Brave, however further work is needed to ensure they are accessible.

During our user study, we asked participants about these recommendations. Our participants believed that at least one of these recommendations would improve their online experience and privacy.

Read the full paper on Arxiv: [Invisible, Unreadable, and Inaudible Cookie Notices: An Evaluation of Cookie Notices for Users with Visual Impairments](https://arxiv.org/abs/2308.11643)

## References

1. Office for National Statistics, 'Internet users, UK'. [https://www.ons.gov.uk/businessindustryandtrade/itandinternetindustry/bulletins/internetusers/2020](https://www.ons.gov.uk/businessindustryandtrade/itandinternetindustry/bulletins/internetusers/2020)
2. Isabel Adeyemi et al. 2022. Challenges and Adaptations to Public Involvement with Marginalised Groups during the COVID-19 Pandemic. Research Involvement and Engagement 8, 1. [https://doi.org/10.1186/s40900-022-00345-x](https://doi.org/10.1186/s40900-022-00345-x)
3. Tousif Ahmed et al. 2015. Privacy Concerns and Behaviors of People with Visual Impairments. In Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems. [https://doi.org/10.1145/2702123.2702334](https://doi.org/10.1145/2702123.2702334)
4. GOV.UK, 'Results of the 2016 GOV.UK assistive technology survey'. [https://accessibility.blog.gov.uk/2016/11/01/results-of-the-2016-gov-uk-assistive-technology-survey/](https://accessibility.blog.gov.uk/2016/11/01/results-of-the-2016-gov-uk-assistive-technology-survey/)
5. W3, 'WCAG 2 Overview'. [https://www.w3.org/WAI/standards-guidelines/wcag/](https://www.w3.org/WAI/standards-guidelines/wcag/)
