

<!-- omit in toc -->
# COOKING CAT

 Visit Cooking Cat at [ranu.fun](https://ranu.fun) or [revou-fsse-3.github.io/module-2-IryIndriyanto](https://revou-fsse-3.github.io/module-2-IryIndriyanto/) 

---
>#### ***"From Kitchen to Heart: Where Recipes Become Memories"***
---
- [About Cooking Cat](#about-cooking-cat)
- [Key Features](#key-features)
- [About Author](#about-author)
- [Module-2 Assignment Checklist](#module-2-assignment-checklist)
- [Module-2 Advanced Assignment](#module-2-advanced-assignment)
- [Deployment Process](#deployment-process)
  - [Sign up on Netlify](#sign-up-on-netlify)
  - [Deploy Website from Github to Netlify](#deploy-website-from-github-to-netlify)
  - [Buy Domain on Niagahoster](#buy-domain-on-niagahoster)
  - [Connect Niagahoster with Cloudflare](#connect-niagahoster-with-cloudflare)
  - [Add Custom Domain to Netlify and Connect it with Cloudflare](#add-custom-domain-to-netlify-and-connect-it-with-cloudflare)

---
## About Cooking Cat

Welcome to Cooking Cat, your ultimate destination for culinary inspiration and delectable delights. i am passionate about the art of cooking and are delighted to share my love for food with you.

At Cooking Cat, i believe that cooking is not just about sustenance; it's a creative and satisfying journey that brings people together. Whether you're an experienced home chef or a kitchen novice, i have something special for you.

---
## Key Features

- **Explore Diverse Recipes:** Dive into a world of flavors with our extensive collection of recipes. From mouthwatering main courses to tantalizing desserts and everything in between, we've got your cravings covered.

- **Search and Discover:** Easily find the perfect recipe for any occasion. Search by ingredient, dietary preference, or cooking time. Explore regional cuisines and discover new cooking techniques.

- **Cooking Made Easy:** step-by-step instructions, accompanied by beautiful photos , make even the most complex dishes accessible to all. No matter your skill level, you'll master every recipe with confidence.

---
## About Author
<!-- omit in toc -->
### Hi I am Iry!
![IryIndriyanto](assets/author.jpg)

Hello, I'm Iry Indriyanto. I'm an electrical engineer with a strong interest in the world of technology. In addition to my main job as an electrical engineer, I'm currently on a learning journey as a software engineer at RevoU. I made this decision because I want to develop my skills in software development and seek better career opportunities in the tech industry. I believe that the combination of expertise in electrical engineering and software will open doors to exciting opportunities and allow me to contribute more to this industry. I'm very enthusiastic about continuous learning and growth.

Let's connect on [linkedIn](https://www.linkedin.com/in/iry-indriyanto-357167111)

---
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/DUj7T_Sj)

## Module-2 Assignment Checklist

- [x] Responsive Image
  - [x] implement contain or cover
  - [x] implement image srcset

- [x] Responsive asymmetrical layout
- [x] Implement date input
- [x] Font customization

  - [x] using @font-face
  - [x] using text-shadow
  - [x] using list-style

- [x] Responsive animation and transition

  - [x] using @keyframes
  - [x] using transition
  - [x] responsive

- [x] Documenting deployment
- [x] Connect Netlify to Github (Github Pages)
- [x] Using custom domain
---
## Module-2 Advanced Assignment

- [x] Improve Accessibility and SEO 
- [x] Dark mode with local storage
- [x] Image carousel without js

---
## Deployment Process

### Sign up on Netlify
1. First visit https://app.netlify.com/
2. Click Sign Up with GitHub
![](assets/Documentation/Screenshot%20(123).png)
3. Fill your GitHub username and password then click sign in, you will get redirect to netlify account dashboard.
![](assets/Documentation/Screenshot%20(124).png)

### Deploy Website from Github to Netlify
1. On Netlify Dashboard Click add new site choose import an existing project
![](assets/Documentation/Screenshot%20(61).png)
2. click deploy with GitHub
![](assets/Documentation/Screenshot%20(62).png)
3. Choose Repository you want to deploy
![](assets/Documentation/Screenshot%20(89).png)
![](assets/Documentation/Screenshot%20(90).png)
4. Then Click Deploy 
![](assets/Documentation/Screenshot%20(91).png)

### Buy Domain on Niagahoster
1. visit niagahoster.com then create account
2. Search your prefered domain name 
![](assets/Documentation/Screenshot%20(125).png)
3. Choose domain name that you want to buy
![](assets/Documentation/Screenshot%20(126).png)
4. Choose your payment option to buy your domain and finish the transaction
![](assets/Documentation/Screenshot%20(82).png)
5. Congrats you are now have your own domain name
![](assets/Documentation/Screenshot%20(84).png)

### Connect Niagahoster with Cloudflare
1. visit cloudflare.com and create account
2. register your domain that you buy on niagahoter
![](assets/Documentation/Screenshot%20(85).png)
3. Click continue, if there is warning ignore it. we will add the DNS record after niagahoster and cloudflare succed to connect
![](assets/Documentation/Screenshot%20(87).png)
4. Go to niagahoster then change the nameserver on niagahoster with nameserver that cloudflare provided. it take times to connect niagahoster and cloudflare aproximatly 1-24 hours
![](assets/Documentation/Screenshot%20(97).png)
![](assets/Documentation/Screenshot%20(98).png)
![](assets/Documentation/Screenshot%20(99).png)
5. Back to cloudflare check if DNS record updated 
![](assets/Documentation/Screenshot%20(100).png)

### Add Custom Domain to Netlify and Connect it with Cloudflare
1. Go to your netlify dashboar, click domain management and click add domain
![](assets/Documentation/Screenshot%20(107).png)
2. input your domain name from niagahoster that you buy and click verify
![](assets/Documentation/Screenshot%20(113).png)
3. Go to cloudflare, on DNS record change niagahoster ip address to your netlify website address. !important dont forget to change "A" to "CNAMA".
![](assets/Documentation/Screenshot%20(119).png)
![](assets/Documentation/Screenshot%20(122).png)
4. Check on your netlify dashboard to ensure your domain is properly cofigurated and connected to your netlify website
![](assets/Documentation/Screenshot%20(127).png)


<!-- omit in toc -->
##### Congaratulation!! Now you can access your website with your custom domain