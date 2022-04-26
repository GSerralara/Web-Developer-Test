# Web Developer Test @Primavera Sound

The purpose of this exercise is for you to show your ability to create a functional, modern and user friendly component. The application should be written in HTML5 that passes W3C validation, use CSS3 and support modern browsers.
  
## The test

You have been asked to create a multilanguage component.

It must accept 4 languages, english, spanish, catalan and portuguese.

All languages should be displayed in tabs.

Caveats: have in mind that `eventName` and `capacity` are not multilang, capacity is a number.

The component must submit a payload with the following schema:

```javascript
const payload: {
  eventName: '',
  title: {
    en: '', 
    es: '',
    ca: '',
    pt: '',
  },
  subtitle: {
    en: '', 
    es: '',
    ca: '',
    pt: '',
  },
  description: {
    en: '', 
    es: '',
    ca: '',
    pt: '',
  },
  capacity: 0
}
```

Designs at https://s3.eu-west-1.amazonaws.com/assets.primaverasound.com/test-2ewd.png

## Acceptance criteria

GIVEN that I'm a user
WHEN I render the component
THEN the english language is showed by default

GIVEN that I'm a user
WHEN I click on the ES or any other language tab
THEN I see the content of the form in that language

GIVEN that I'm a user
WHEN I fill the data
AND click on the create button
THEN I see console.log with the payload

## Technology stack requirements

The goal of this technical test is to check how would you handle with our current technology stack. That’s why you must use the following:

- JavaScript
- React.js/TypeScript
- CSS3: You can use preprocessors (SASS or LESS), Styled Components. Using Tailwinds would be a plus
- HTML5

## Non-functional requirements

- Pay attention to **code clarity, structure and legibility**.
- We expect you to include some kind of **test automation**.
- It should work nicely in **modern browsers** in their stable versions (current -1).
- The solution should be **bug-free**.
- We will value positively if you include a `README.md` file in your solution with your comments about your approach to the implementation or any relevant information you’d like to include.

## What we look at

- Code quality
- State management
- Design
- Code structure
- Tests

## Delivery

Source code must be hosted on git (You can create a free repository in Github, Gitlab or Bitbucket). Once you are done, send us an email with the link to the repository.

Good luck!
