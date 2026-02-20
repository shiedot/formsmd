`
#! title = Forms.md Demo
#! meta-description = Local index demo generated from markdown
#! page = form-slides
#! formsmd-branding = show

-> START -> Start Demo

# Hello, World

This is my first vibe coded typeform

---

fullName\* = textinput(
| question = What is your full name?
)

email\* = emailinput(
| question = What is your email address?
)

message = textinput(
| question = Your message
| multiline
)

---

-> END

# Thanks

Your response has been captured in local state for demo purposes.

`.formsmd();