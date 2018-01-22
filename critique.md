# Critique

## Overall impressions

It appears the style here is inspired by Google's Material Design. As such, I used their guidelines as a frame of reference for my critique.

The UI in general is simple and open, with clearly labeled sections and content. Despite this, it is somewhat hard to follow, as the layout lacks a "flow". This can be alleviated with tighter and more purposeful margins and paddings around text, as well as reserved use of icons in the section headers to further delineate content type, and serve as a point of reference for the eye.
An example of some of the proposed changes, discussed below, can be found [here](assets/Observation_v2.png). Design files can be found [here](assets/sally.sketch).

## Layout

A good rule of thumb for content grids and margins is to stick to multiples of 8. Reducing the left and right gutters to 16px will line up the content more succinctly. Material UI guidelines also suggest the placement of menu and header buttons (back, next, " ••• ", etc.) 16px from the margins. While not present in this example, sticking to this convention would make implementation elsewhere easier and help maintain a consistent style.
Vertical padding between major content sections is 24px, and 16px between minor rows. Example with visible guides can be seen [here](assets/Observation_v2_guides.png).

### Section Headers or Accordions

Collapsable panels are a useful feature and well suited here. By convention,  section headers should appear at the top of their corresponding section and not below. Icons are not entirely necessary but do help to break up the content nicely. The entire header acts like a button, and should therefore resemble one - it has been made slightly higher than the rest of the content using a minimal box-shadow.

## Content

As this is a user info page, and it goes so far as to indicate proper pronunciation of their name, it might also be suitable to add a personal touch with a user image. By convention or habit, most users would therefore understand they are looking at a profile page and have a clear context for all of the subsequent data, even if the image is left blank.

Looking at the page currently, it is hard to tell whether the text is clickable or not. The labels used here are great, but if this content should be editable then the main text should be underlined or have some other indication.

## Typography

Thin, sans-serif fonts are aesthetically pleasing and always a great go-to, however, legibility can become a concern at smaller fonts and lower font-weights, especially when using colored backgrounds. [WCAG 'AA'](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) accessibility guidelines require a minimum contrast of 4.5:1 for thin or regular font-weights below 24px, and 3:1 for bold text, or text larger than 25px. The main header text had a contrast of approximately 3.61:1, far short of the 4.5:1 requirement. Increasing the title to 25px and using a regular font-weight passes with 3.63:1 (3:1 is the minimum for that size/weight/color combination). The second line, "active", will only pass if the font is bold and 18px (which does not look great). A possible work-around could be to use an icon for activity in addition to text, or place the activity indicator inside the main profile content, such as a green/yellow/red circle next to their avatar.

## Naming

Finally, and this is a very serious matter... I propose the demo user name be changed to ["Driver McDriveyFace"](https://www.nytimes.com/2016/03/22/world/europe/boaty-mcboatface-what-you-get-when-you-let-the-internet-decide.html).
