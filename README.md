# Harry Potter Quiz

It is a second project that I created for my sister Nikol. She is a tutor who works closely with kids and she gave me the idea to create a quiz for her students.
Harry Potter  has been chosen as it is the most popular book story in the kids' world. Therefore, I thought testing kids' knowledge of this story would be fun.


 The website is live and the link can be found here [Here](https://margaritaatr.github.io/harry-potter-quiz/)

<br>

![Alt text](/assets/readme-images/response-img.jpeg)

## `Table of Contents`

   ## [UX](#ux "UX")
  + [Site Purpose](#site-purpose "Site Purpose")
  + [Site Goal](#site-goal "Site Goal")
  + [Audience](#audience "Audience")
  + [User Goals](#current-user-goals "User Goals") 
 ## [Design](#design "Design")
  + [Sketching](#sketching "Sketching")
  + [Colour scheme](#colourscheme "Colour scheme")
  + [Typography](#typography "Typography")
  + [Imagery](#imagery "Imagery") 
 ## [Features](#features "Features")
 + [Existing Features](#existing-features "Existing Features")
 + [Future Features](#future-features "Future Features")
## [Testing](#testing "Testing")
 + [Manual Testing](#manual-testing "Manual Testing")
 + [Responsivness](#responsivness "Responsiveness")
 + [Browser compatibility](#browser-compatibility "Browser compatibility")
 + [Validator Testings](#validator-testings "Validator Testings")
 + [Fixed Bugs](#fixed-bugs "fixed Bugs")
## [Technologies Used](#technologies-used "Technologies Used")
  + [ Languages Used](#languages-used " Languages Used")
  + [Frameworks, Programs Used](#frameworks-programs-used "Frameworks, Programs Used")
## [Deployment and Local Development](#deployment-and-local-development "Deployment and Local Development")
## [Credits](#credits "Credits")
 
# `UX`

## `Site Purpose:` 

This website is designed to test users' knowledge of Harry Potter story while listening to the Harry Potter theme song.
The user will get direct feedback on whether he selected the correct or incorrect answer to each question. Once all questions are answered, a message with the score and a "Play again" button will be displayed, encouraging the user to improve his score if he wishes to do so.
 

## `Site Goal:` 

To ensure all questions and answers are relevant, and all functions of the quiz a nd website are working .


## `Audience: `
 Everyone who have read or watched Harry Potter story.



## `User goals:`

* The user should be able to test their knowledge of the story.
* The user should have good understanding of the site purpose.
* The user should be able to press a button to start a quiz.
* The user should receive a feedback on wheter the answer is correct or not.
* The user should be able to see a score and have a possibility to restart a quiz.

# `Design:`
 
    I had a few meetings with Nikol, where we discussed a design of the website, questions, images to use and the quiz layout.
    The colourful picture of the Hogward train gives a feeling that there is an adventure waiting for you, and when you press the button "GO", it brings a new image of Hogward school with a foggy effect, making you feel like there is something mysterious within this quiz.
<br>

## `Sketching`

![Alt text](/assets/readme-images/sketching.jpeg)


## `Colour scheme:`


![Alt text](/assets/readme-images/colour-pallete.jpeg)

The primary colour chosen is rich black with whitesmoke and gold elements, which gives a nice contrast.
 Green colour has been chosen to highlight a correct answer and red to highlight a wrong answer. The bright colours on a black and white background are good for eye-catching.

<br>

## `Typography:`
 Times Roman has been used for entire body.
The icons used  for social media links and projects are from [Font Awesome.](https://fontawesome.com/)
<br>

## `Imagery:`

The both images of Hogwards Express train and Hogwards school have been taken from [Unsplash.](https://unsplash.com)

<br>

# `Existing Features`

## `Welcome page with "GO!" button and instructions`

![Alt text](/assets/readme-images/welcome-img.jpeg)

The background picture of the Welcome page is the Hogwarts Express train. There is a short instruction for the quiz - to make the user aware of what to expect from this website. Also, there is a "GO!" button, which changes a background image, starts the quiz and shows an audio player.

## `Second page with quiz container`

![Alt text](/assets/readme-images/quiz-container.jpeg)

On this screen, there is an invisible container of the quiz so that the user can see a school in the background. The quiz contains ten questions and four options of the answers.

## `Quiz`

![Alt text](/assets/readme-images/quiz.jpeg)

There are four options for the answers to each question. In total, ten questions have been generated in Chat GPT. When the user clicks any answers, a function is set up to highlight the right question in green and the wrong question in red, preventing the user from selecting other options. Also, at the same time, the Next button appears, which enables the user to move to the next question.

## `Audio player`

![Alt text](/assets/readme-images/audio-player.jpeg)

The user can play the theme song while taking the quiz. He can adjust a volume, rewind a song at any time or even turn it off if he does not like it.

## `Display of the score`

![Alt text](/assets/readme-images/score-img.jpeg)

When the user answers all ten questions, it is coded that the score will be displayed with a message. There are three different messages, depending on the score.

## `Icons of social media links`

![Alt text](/assets/readme-images/social-links.jpeg)

The icons are linked to Nikol`s social media platforms, like Facebook , Telegram and Instagram.

## **`Future Features:`**

- To add more questions with various levels of  difficulty 
- The timer can be inplemented in the future.

## **`TESTING`**

## `Manual Testing`

| Test                                                                                                                                                             | Expected                                                                                                                                                                                                   | Outcome     |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| Open First page with "GO" button | The clear image of the train should be loaded on the background, along with short instructions and a "GO!" button in the middle of the screen and social media icons on the bottom.| Initially, the train image would not load on a live website. I changed the URL directory, and it works as expected.|
| Click "GO!" button| The background image changes to Hogward school image, and the first question and four options of answers are displayed. Also, the audio player is shown at the bottom of the page above the social links.| As Expected|
|Select any answer for the first question.| An incorrect answer is highlighted in red, the correct answer turns green, and the other two answers can not be selected,the next button appears.| As Expected |
| Click "Next" button| The next question displayed with four other answers.|As Expected|
| Click button on audio player| The theme songs start playing. There is a mix of Harry Potter theme songs, so music can be rewind anytime or turned off. Also, you can adjust the volume of the player.| When I first pushed the audio player into Git Hub, it did not load on a live website. So, I reduced the file size ( from 7.5 MB to 2.4 MB) through the free converter, pushed the file again, and then it was displayed as expected.
|Select  3 or less correct answers| The message comes up as: " Oh NO! It must be not your day today.. You answered (shows your score) out of 10 ! Lets try again!. Try Again button displayed.| As Expected|
|Select 4 or more correct answers| The message comes up : "You are nearly there. Keep trying..You answered ( shows your score) out of 10! ." Try Again button displayed.|As Expected |
|Select 10 correct answers| The following message comes up: "Yahoo! You answered (shows your score) out of 10! You are the star!" Play Again button displayed.| As Expected|
|Click "Try Again" or "Play Again" button| Quiz restarts from first question. Next Button is not displayed until you select any answer.| As Expected|
|Load a window| The quiz disappears, and the screen returns to the first welcome page with the train image and "GO" button again. | As Expected |
|Select one of the social link icons|  The new page opens with a selected social  platform ( Nikol`s Facebook, Telegram or Instagram) | As Expected|

## `Responsiveness`

The website is responsive for different screen sizes. I have changed a few parameters in style.css for media screens less than 520px. The website was tested by using a web developer in Google Chrome. Also, I have checked the website on other devices: different size iPhones and iPads.

## `Browser compatibility` 
The website was tested in different browsers. 

|Browser| compatibility|
|------------------------------------|-------------|
|Mozilla Firefox |no problems|
|Safari  |no problems|
|Google Chrome  | no problems|

## `Validator testings` 

- HTML file passed through W3C validator testing with no errors found.

![Alt text](/assets/readme-images/w3c-checker.jpeg)

- CSS file passed through Jigsaw validator testing with no errors found.

![Alt text](/assets/readme-images/jigsaw-validator.jpeg)

- The website page has a great accessibility rating in Lighthouse.

![Alt text](/assets/readme-images/lighthouse.jpeg)

- JS file passed through JSHINT with no issues found.

![Alt text](/assets/readme-images/jshint.jpeg)

## `Fixed bugs` 

1) The train image would not load on the live website, even though I could see it when I opened it through the live server, and it was linked to the correct folder.
I have tried reloading the picture a few times, and it did not work. I have googled the possible reasons for this issue and found a solution to change the URL directory. It was url(assets/images/train.jpg), and I changed it to url(../images/train.jpg) and finally it worked.

2) The audio player would not load into Github and, therefore, would not display on the live website. Again, I have googled and found a possible issue: the file is too big. Consequently, I converted the file from 7.5 MB to 2.3 MB using a free converter https://www.onlineconverter.com/convert , and it worked. Also later on, I have croped the music from 7.40 mins to 3.40 mins, as it seemed the music it too long

## **`Technologies used:`**

## Languages Used

- HTML5
- CSS3
- Javascript

## Libraries, frameworks and programms Used

- [Font Awesome](https://fontawesome.com/)- To create the icons for social media links.
- [Goodnotes app](https://www.goodnotes.com) - for scetching initial wireframe design.
- [Am I responsive](https://ui.dev/amiresponsive) - To see if the website looks good in all devices.
- [Coolors](https://coolors.co) - To make a colour pallete.
- [Online Converter](https://www.onlineconverter.com/convert) - To reduce the size of the audio player.
- [Favicon](https://favicon.io) - To create a favicon.
- [Unsplash](https://unsplash.com) - To get the background images.
- [Github](https://github.com/) - To save and store the files for the website.
- [Google Developer Tools](https://developers.google.com/web/tools) - To solve issues with styling and responsivness.

## **`Deployment & Local Development`**

### Deployment

The site was deployed to Github pages using the following steps to deploy:

1. In the GitHub repository, navigate to the Setting tab.
2. In the Code and Automation section, choose the Pages option.
3. Select Deploy from a branch from the Source menu.
4. Select Main from the Branch menu.
5. Select Save to confirm, the page will then be deployed.

Link to live site - [Here](https://margaritaatr.github.io/harry-potter-quiz/)

### Local Development

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Select the relevant repository.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open Visual code editor, select "clone repository" and then paste the link you copied from GitHub into  address bar. Enter.
5. Select the location where you want to save a repository and  press Enter.

## **`Credits`**

- The basic structure of the quiz code used was inspired by YouTube video [GreatStack video ](https://www.youtube.com/watch?v=PBcqGxrr9g8)
- Few tricks used for the website were inspired by the Love Math Walkthrough project from Code institute 
- The both images were taken from [Coolors](https://coolors.co)
- The questions and answers were chosen using [ChatGPT](https://chat.openai.com/auth/login)
- The information on how to implement an audio player was found on [w3shools](https://www.w3schools.com/html/html5_audio.asp)
- The audio player for Harry Potter theme song has been taken from [Televisiontunes](https://www.televisiontunes.com/Harry_Potter_-_Main_Theme.html)
- To crop Harry Potter music from 7.40 mins to 3.30 mins I have used free [audio trimmer](https://audiotrimmer.com/#google_vignette)
- The free converter has been used to reduce size of the audio player [Online Converter](https://www.onlineconverter.com/convert)
- To check grammar mistakes was used [Grammarly](https://app.grammarly.com/)
- The credits also go to my siter Nikol , who suggested to choose Harry Potter story for the quiz and helped me with design.
- A special acknowledgment to Martina Terlevic for the support and some advices.

