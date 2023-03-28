---
title: "What is abapGit?"
subtitle: 
status: published
date: '2023-03-28T12:00:00.000Z'
tags: [abap, sap, abapGit]
summary: In short, abapGit is a version control system build on the well known Git version control system. Most commonly, it enables ABAP developers to add an extra layer of granularization to their source code changes and bring the ABAP development workflow a huge step closer to most other modern development languages.
---

In short, abapGit is a version control system build on the well known Git version control system. Most commonly, it enables ABAP developers to add an extra layer of granularization to their source code changes and bring the ABAP development workflow a huge step closer to most other modern development languages.

I'll briefly explain what abapGit is to different audiences of people in hopes to provide more insight into a product misconceived to "open source your whole system" 😱, which is just not true. You have full control over that.

Audiences:
* Managers and Executives
* Functional Analysts and Business Analysts
* Developers
* Basis Admin and DevOps

# Managers and Executives

You made a decision to use SAP for a reason, maybe you chose to add in extra customizations to your system because your company has got that certain competitive advantage, that certain [_je ne sais quoi_](https://www.merriam-webster.com/dictionary/je%20ne%20sais%20quoi), one might say. How is abapGit any value to you at all?

The first question you must answer is, Do you have other development teams outside of your SAP team? If your answer is yes, they are most likely already using Git for their source code version control. Just ask them. If they are, then abapGit will allow SAP developers to add their code to the same place as those other teams, you've just made the decision.

But what can abapGit do for you?
* Agility -- It will help your teams become more agile. abapGit will enable your Functional and Technical teams to have a finer granularity of the changes made. This can help fix problems faster or try out new features faster with more control.

- Resource Reuse -- If you have teams currently using Git, then those teams might already be well versed in development operations (DevOps) and creating continuous integration/continuous deployment (CI/CD) pipelines to help stabilize their deployment processes. Leverage those resources to help your SAP team get a powerful and stable deployment process. Your SAP team knows SAP and ABAP, your other teams know Git and DevOps. Use this as an opportunity for up-skilling and cross-training.

* Costs Savings -- If you read the two bullet points above and didn't already think of how those benefits can help save costs. Then this is me telling you that the improved efficiencies and leveraging your current resources could potentially help avoid and fix costly bugs and having to learn from the ground up.


# Functional Analysts and Business Analysts

Your about solving business problems, improving processes, saving and making the company money by looking at the large picture and making changes, listening to the end users and configuring features or communicating those to the development team. You're probably thinking, "I don't code, why do I care about abapGit at all?"

Well abapGit isn't just for code. As you know there are many different kinds of objects within SAP including your beloved configuration objects. You know you have to transport those up to production, the same way that code moves up to production. [abapGit supports all sorts of SAP objects](https://docs.abapgit.org/ref-supported.html), yes including configuration 🥳.

Take advantage of abapGit by using it to try out different features of your system, managing your Business Configuration Sets, or getting that extra layer of "who changed what".

If you're feeling up to the learning curve, you could even do a sort of "change review" with your team members since most Git Hosting products allow you to see what changes happened.

# Developers

You're probably reading this because the topic is a little fuzzy and not because you already know what it is. I'll admit it took me a while to understand what Git was and how to use it in a normal development workflow. And since I personally didn't have the option to use abapGit at the time, I had to learn a whole other language just to make this happen. In hindsight, it was a bit overkill but worth the effort. There were definitely easier ways that I could have gained the understanding I needed.

To make it clear, Git and abapGit are the version control tools - they do the heavy lifting of the versioning (kind of like transports). GitHub, BitBucket, Azure DevOps, and many others are Git Repository Hosting companies - this is where the code gets stored, collaborated on, and they often provide other helpful tools. These could be public or privately hosted for your open-source or closed-source needs. 

When you make a development change, you `add` and `commit` (also called "staging") it in Git, then you can `push` those changes to the Git Repository Host (Github, BitBucket, Azure DevOps, GitLab, etc.). If you have additional changes to the same object, you can keep doing that process. When you're all done, you can "merge" those new changes with the `main branch`.

Why does this just seem like extra work for not much gain? That's because traditional SAP landscapes are set up to have one development system (per path: DEV -> QA -> PROD). Talk to other developers to understand their development process to understand why they have to use Git - probably because they don't develop directly in a fully integrated system like SAP. Their process would look something like Local -> DEV -> QA -> PROD. And "Local" is a 1:1 for each developer. SAP developers to a DEV system are n:1 relationship because they often are logged in and developing in the same shared DEV system (remember when you tried to make a code change to an object and it was locked by your co-worker? Yeah…with local environments and Git, that can be completely avoided).

One last thing, if you've ever lost development work because the system had to be refreshed to an old back up, if you have had to develop the same thing twice because of a parallel landscape due to upgrades, or just in general lost code and had to redo the development... _abapGit can save you from all of that_. If there's one great benefit, it's that your ABAP code can be stored in a repository outside of your SAP system, and you can pull those changes into that refreshed system, or into that other system after upgrades completed, or into a new SAP system entirely **without having to re-develop** saving you TONS of time and re-work.

# Basis Admin

Think Infrastructure as Code. How many times have you had to make sure different environments and new systems were set up equally and how many times have you had issues when there are differences? Have you ever wished you could spin up new environments more easily or consistently?

abapGit can help with all of that. You can save so many different kinds of SAP objects using abapGit and you can create the configuration files you need to consistently import the same settings you need for each system. You can build and maintain pipelines to improve your CI/CD for the development teams and systems you support. Honestly, I don't have much Basis know how, but I can only imagine the opportunities that would open up by leveraging abapGit.


# Conclusion

This really only scratched the surface of the many benefits there are to using abapGit. I guarantee that you still have questions and still may not even have a clear picture to exactly what abapGit is and how it's beneficial to you. But that's okay. Overall, it really doesn't have to be a scary thing. Keep digging and learning. Empower you teams and coworkers to learn and understand what it is and how deep the benefits go. One day it will click and you'll wonder why you didn't learn sooner.

___
Let's get in touch! Follow me on [Twitter](https://twitter.com/ColbyHemond) or [Send me a message](/contact)!