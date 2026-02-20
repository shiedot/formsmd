#! title = Contact Demo
#! meta-description = Contact demo generated from markdown
#! page = form-slides

-> START

# Contact us

Quick contact form demo.

---

name\* = textinput(
| question = Full name
)

email\* = emailinput(
| question = Email address
)

topic = selectbox(
| question = Topic
| options = Support, Sales, Feedback
)

message\* = textinput(
| question = Message
| multiline
)

---

-> END

# Done

We will get back to you soon.
