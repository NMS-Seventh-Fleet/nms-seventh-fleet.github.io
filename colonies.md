---
layout: default
title: Colonies
description: The current base locations of the Seventh Fleet.
permalink: /colonies/
---

# Colonies

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="../nms-seventh-fleet.github.io/assets/js/charts.js"></script>
<div id="chart_div" style="width: 900px; height: 500px;"></div>

{% for category in site.categories %}
    {% if post.categories contains colonies %}
        <h3>{{ category[0] }}</h3>
        <ul>
            {% for post in categtory[1] %}
                <li><a href="{{ post.url }}">{{ post.title }}</a></li>
            {% endfor %}
        </ul>
    {% endif %}
{% endfor %}

