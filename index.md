---
layout: default
---
{% include navigation.html %}

# Captain's Log
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <br>
      <br>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>